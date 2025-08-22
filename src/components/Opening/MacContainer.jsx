import { useGLTF, useScroll, useTexture } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import React, { useRef, useEffect, useState } from 'react';
import * as THREE from "three";

const MacContainer = ({ onMacFullyOpened }) => {
    const { viewport } = useThree(); // 뷰포트 정보 가져오기
    const groupRef = useRef();
    const [isLoaded, setIsLoaded] = useState(false);
    const [isMacFullyOpened, setIsMacFullyOpened] = useState(false);
    const [isFadeComplete, setIsFadeComplete] = useState(false);
    const [hasHiddenText, setHasHiddenText] = useState(false); // 텍스트 숨김 신호를 한 번만 보내기 위함
    
    let model = useGLTF("./mac.glb");
    let meshes = {};
    let tex = useTexture("./mac-background.jpg");
    
    // 애니메이션을 위한 상태값
    const fadeProgress = useRef(0);
    
    // 반응형 스케일 계산 (브라우저 창 크기 기준) - 페이드인 애니메이션용
    const getResponsiveScale = () => {
        // 실제 브라우저 창 크기 확인
        const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 1024;
        const windowHeight = typeof window !== 'undefined' ? window.innerHeight : 768;
        
        const isMobile = windowWidth < 768;
        const isTablet = windowWidth >= 768 && windowWidth < 1024;
        
        if (isMobile) {
            return 0.5; // 모바일에서 50% 크기
        } else if (isTablet) {
            return 0.85; // 태블릿에서 85% 크기
        }
        
        return 1.2; // 데스크톱에서 120% 크기
    };
    
    // Traverse all children
    model.scene.traverse((e) => {
        meshes[e.name] = e;
    });

    // Ensure screen exists and has a rotation property
    if (meshes.screen && meshes.screen.rotation) {
        meshes.screen.rotation.x = THREE.MathUtils.degToRad(180);
        meshes.matte.material.map = tex;
        meshes.matte.material.emissiveIntensity = 0;
        meshes.matte.material.metalness = 0;
        meshes.matte.material.roughness = 1;
    } else {
        console.warn("Screen mesh not found or missing rotation property");
    }

    // 로딩 완료 후 애니메이션 시작
    useEffect(() => {
        // 초기 상태를 애니메이션 시작 상태로 설정
        if (groupRef.current) {
            const baseScale = getResponsiveScale();
            
            // 초기에는 투명하고 작은 상태로 설정
            groupRef.current.traverse((child) => {
                if (child.material) {
                    child.material.transparent = true;
                    child.material.opacity = 0; // 투명한 상태로 시작
                }
            });
            groupRef.current.scale.setScalar(baseScale * 0.9); // 반응형 크기의 90%로 시작
            
            // 초기 회전 설정 - 좌측 45도, 아래면 10도
            groupRef.current.rotation.y = THREE.MathUtils.degToRad(-45); // 좌측으로 45도 회전
            groupRef.current.rotation.x = THREE.MathUtils.degToRad(-10); // 아래면이 보이도록 10도 회전
        }
        
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 100); // 약간의 지연 후 애니메이션 시작
        
        return () => clearTimeout(timer);
    }, []); // window resize 이벤트는 별도로 처리

    let data = useScroll();
    useFrame((state, delta) => {
        // 스크롤 진행률 (0 = 맨 위, 1 = 맨 아래)
        const scrollProgress = data.offset;
        
        // 맥북이 조금이라도 펴지기 시작하는 순간 감지 (한 번만 실행)
        if (scrollProgress > 0 && !hasHiddenText && onMacFullyOpened && typeof onMacFullyOpened === 'function') {
            // 텍스트 숨기기 전용 신호를 부모에게 전달
            onMacFullyOpened('hideText', scrollProgress);
            setHasHiddenText(true); // 한 번만 실행되도록 플래그 설정
        }
        
        // 맥북 열기/닫기 애니메이션 (스크롤 0~0.5 구간에서 진행)
        const macOpenProgress = Math.min(scrollProgress * 2, 1); // 0~0.5 스크롤을 0~1로 매핑
        
        // 맥북이 완전히 열렸는지 체크 (90% 이상 열렸을 때)
        const fullyOpened = macOpenProgress >= 0.9;
        if (fullyOpened !== isMacFullyOpened) {
            setIsMacFullyOpened(fullyOpened);
            // 부모 컴포넌트에 상태 전달
            if (onMacFullyOpened && typeof onMacFullyOpened === 'function') {
                onMacFullyOpened(fullyOpened, scrollProgress);
            }
        }
        
        // 화면 회전 애니메이션 (맥북이 열리는 효과)
        if (meshes.screen && meshes.screen.rotation) {
            // 180도(완전히 접힌 상태)에서 90도(완전히 열린 상태)로 변화
            const rotationAngle = 180 - (macOpenProgress * 90);
            meshes.screen.rotation.x = THREE.MathUtils.degToRad(rotationAngle);
        }

        // 맥북 전체 회전 애니메이션 (좌측+아래면 -> 정면)
        if (groupRef.current) {
            // Y축: 초기 -45도에서 0도로 점진적 변화 (좌측 -> 정면)
            const yRotationAngle = -45 + (macOpenProgress * 45);
            groupRef.current.rotation.y = THREE.MathUtils.degToRad(yRotationAngle);
            
            // X축: 초기 -10도에서 0도로 점진적 변화 (아래면 -> 정면)
            const xRotationAngle = -10 + (macOpenProgress * 10);
            groupRef.current.rotation.x = THREE.MathUtils.degToRad(xRotationAngle);
        }
        
        // Fade-in 애니메이션 (완료되지 않았을 때만 실행)
        if (isLoaded && fadeProgress.current < 1) {
            fadeProgress.current += delta * 1.5; // 1.5초에 걸쳐 페이드인
            fadeProgress.current = Math.min(fadeProgress.current, 1);
            
            if (groupRef.current) {
                const baseScale = getResponsiveScale();
                
                // 투명도 애니메이션
                groupRef.current.traverse((child) => {
                    if (child.material) {
                        child.material.transparent = true;
                        child.material.opacity = fadeProgress.current;
                    }
                });
                
                // 페이드인 스케일 애니메이션 (작은 크기에서 정상 크기로)
                const scale = THREE.MathUtils.lerp(baseScale * 0.9, baseScale, 
                    THREE.MathUtils.smoothstep(fadeProgress.current, 0, 1));
                groupRef.current.scale.setScalar(scale);
                
                // 애니메이션 완료시 투명도 설정을 정리
                if (fadeProgress.current >= 1) {
                    groupRef.current.traverse((child) => {
                        if (child.material) {
                            child.material.opacity = 1;
                            // 성능을 위해 투명도를 false로 되돌림 (완전 불투명일 때)
                            child.material.transparent = false;
                        }
                    });
                    
                    // 페이드인 애니메이션 완료를 부모에게 알림 (한 번만)
                    if (!isFadeComplete) {
                        setIsFadeComplete(true);
                        if (onMacFullyOpened) {
                            // 페이드인 완료를 알리기 위해 특별한 시그널 전송
                            onMacFullyOpened(false, -1); // -1은 애니메이션 완료 시그널
                        }
                    }
                }
            }
        }
    });

    // 반응형 위치 계산 (브라우저 창 크기 기준)
    const getResponsivePosition = () => {
        const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 1024;
        const isMobile = windowWidth < 768;
        
        if (isMobile) {
            console.log('Mobile position applied');
            return [0, -7, 10]; // 모바일에서 조금 아래로 (-5에서 -7로)
        }
        return [0, -12, 20]; // 데스크톱에서도 조금 아래로 (-10에서 -12로)
    };

    return (
        <group ref={groupRef} position={getResponsivePosition()}>
            <primitive object={model.scene} />
        </group>
    );
};

export default MacContainer;

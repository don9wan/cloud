import { useGLTF, useScroll, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useRef, useEffect, useState } from 'react';
import * as THREE from "three";

const MacContainer = () => {
    const groupRef = useRef();
    const [isLoaded, setIsLoaded] = useState(false);
    
    let model = useGLTF("./mac.glb");
    let meshes = {};
    let tex = useTexture("./red.jpg");
    
    // 애니메이션을 위한 상태값
    const fadeProgress = useRef(0);
    
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
            // 초기에는 투명하고 작은 상태로 설정
            groupRef.current.traverse((child) => {
                if (child.material) {
                    child.material.transparent = true;
                    child.material.opacity = 0; // 투명한 상태로 시작
                }
            });
            groupRef.current.scale.setScalar(0.9); // 작은 크기로 시작
        }
        
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 100); // 약간의 지연 후 애니메이션 시작
        
        return () => clearTimeout(timer);
    }, []);

    let data = useScroll();
    useFrame((state, delta) => {
        // 화면 회전 애니메이션
        if (meshes.screen && meshes.screen.rotation) {
            meshes.screen.rotation.x = THREE.MathUtils.degToRad(180 - (data.offset * 90));
        }
        
        // Fade-in 애니메이션 (완료되지 않았을 때만 실행)
        if (isLoaded && fadeProgress.current < 1) {
            fadeProgress.current += delta * 1.5; // 1.5초에 걸쳐 페이드인
            fadeProgress.current = Math.min(fadeProgress.current, 1);
            
            if (groupRef.current) {
                // 투명도 애니메이션
                groupRef.current.traverse((child) => {
                    if (child.material) {
                        child.material.transparent = true;
                        child.material.opacity = fadeProgress.current;
                    }
                });
                
                // 스케일 애니메이션
                const scale = THREE.MathUtils.lerp(0.9, 1, 
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
                }
            }
        }
    });

    return (
        <group ref={groupRef} position={[0, -10, 20]}>
            <primitive object={model.scene} />
        </group>
    );
};

export default MacContainer;

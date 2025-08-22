import { Canvas } from '@react-three/fiber'
import React, { useRef, useEffect, useState } from 'react'
import './style.css'
import './Opening.css'
import { Environment, OrbitControls, ScrollControls } from '@react-three/drei'
import MacContainer from './MacContainer'

const Opening = () => {
  const containerRef = useRef();
  const [isMacFullyOpened, setIsMacFullyOpened] = useState(false);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const [isTextFadingOut, setIsTextFadingOut] = useState(false); // 텍스트 페이드아웃 중인지
  const [showText, setShowText] = useState(true); // 텍스트를 보여줄지 여부
  
  const handleMacFullyOpened = (isOpened, scrollProgress) => {
    // 페이드인 애니메이션 완료 시그널 처리
    if (scrollProgress === -1) {
      setIsAnimationComplete(true);
      return;
    }
    
    // 텍스트 숨기기 전용 신호 처리 (다른 로직에는 영향 없음)
    if (isOpened === 'hideText' && showText && !isTextFadingOut) {
      console.log('Mac is starting to open, hiding text');
      setIsTextFadingOut(true);
      setTimeout(() => {
        setShowText(false);
        setIsTextFadingOut(false);
      }, 1000);
      return; // 여기서 리턴하여 다른 로직 실행 방지
    }
    
    setIsMacFullyOpened(isOpened);
    
    // 맥북이 완전히 열렸을 때 애니메이션 완료로 표시
    if (isOpened) {
      setIsAnimationComplete(true);
    }
    
    // 맥북이 완전히 열렸고 스크롤이 끝에 도달했을 때 전체 페이지로 스크롤 전환
    if (isOpened && scrollProgress >= 0.8) {
      // 부드럽게 다음 섹션으로 스크롤
      const nextSection = document.querySelector('.hero-section') || 
                          document.querySelector('#intro');
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  
  // 맥북 애니메이션 중에는 전체 페이지 스크롤 차단
  useEffect(() => {
    const preventScroll = (e) => {
      if (!isAnimationComplete) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    };
    
    if (!isAnimationComplete) {
      // 모든 스크롤 이벤트 차단
      document.body.style.overflow = 'hidden';
      window.addEventListener('wheel', preventScroll, { passive: false });
      window.addEventListener('scroll', preventScroll, { passive: false });
      window.addEventListener('touchmove', preventScroll, { passive: false });
      document.addEventListener('keydown', (e) => {
        // 방향키, 페이지업/다운, 홈/엔드 키 차단
        const blockedKeys = [32, 33, 34, 35, 36, 37, 38, 39, 40];
        if (blockedKeys.includes(e.keyCode)) {
          e.preventDefault();
        }
      });
    } else {
      // 애니메이션 완료 후 스크롤 복원
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('wheel', preventScroll);
      window.removeEventListener('scroll', preventScroll);
      window.removeEventListener('touchmove', preventScroll);
    };
  }, [isAnimationComplete]);
  
  useEffect(() => {
    const handleWheel = (e) => {
      // 맥북이 완전히 열렸을 때만 전체 페이지 스크롤 허용
      if (isMacFullyOpened) {
        // 아래로 스크롤할 때 전체 페이지로 이동
        if (e.deltaY > 0) {
          e.stopPropagation();
          const nextSection = document.querySelector('.hero-section') || 
                            document.querySelector('#intro');
          if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
          }
        }
        // 위로 스크롤할 때는 맥북 닫기 동작을 위해 기본 동작 유지
      }
    };
    
    if (containerRef.current) {
      containerRef.current.addEventListener('wheel', handleWheel, { passive: false });
    }
    
    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener('wheel', handleWheel);
      }
    };
  }, [isMacFullyOpened]);

  return (
    <div ref={containerRef} className="opening-container">
      {/* 가이드 텍스트 - 스크롤 시작하면 페이드아웃 애니메이션 */}
      {showText && (
        <div className={`guide-text-container ${isTextFadingOut ? 'fade-out' : ''}`}>
          <h1 className="guide-text">
            환영합니다.<br />
            스크롤을 내려 탐색해보세요!
          </h1>
        </div>
      )}
      
      <Canvas 
        camera={{ fov: 12, position: [1, -10, 220] }}
        style={{ pointerEvents: isMacFullyOpened ? 'none' : 'auto' }}
      >
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
        {/* 2K HDRI로 화질과 성능의 균형점 */}
        <Environment files={"https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/2k/studio_small_09_2k.exr"} />
        <ScrollControls 
          pages={isAnimationComplete ? 2 : 1.5} 
          damping={isAnimationComplete ? 0.1 : 0.05}
        >
          <MacContainer onMacFullyOpened={handleMacFullyOpened} />
        </ScrollControls>
      </Canvas>
    </div>
  )
}

export default Opening
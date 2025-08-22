import { Canvas } from '@react-three/fiber'
import React, { useRef, useEffect, useState } from 'react'
import './style.css'
import './Opening.css'
import { Environment, OrbitControls, ScrollControls } from '@react-three/drei'
import MacContainer from './MacContainer'

const Opening = () => {
  const containerRef = useRef();
  const [isMacFullyOpened, setIsMacFullyOpened] = useState(false);
  
  const handleMacFullyOpened = (isOpened, scrollProgress) => {
    setIsMacFullyOpened(isOpened);
    
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
      <Canvas camera={{ fov: 12, position: [1, -10, 220] }}>
        <OrbitControls enableZoom={false} enablePan={false} />
        {/* 2K HDRI로 화질과 성능의 균형점 */}
        <Environment files={"https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/2k/studio_small_09_2k.exr"} />
        <ScrollControls pages={2} damping={0.1}>
          <MacContainer onMacFullyOpened={handleMacFullyOpened} />
        </ScrollControls>
      </Canvas>
    </div>
  )
}

export default Opening
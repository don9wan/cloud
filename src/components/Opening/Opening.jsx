import { Canvas } from '@react-three/fiber'
import React from 'react'
import './style.css'
import './Opening.css'
import { Environment, OrbitControls, ScrollControls } from '@react-three/drei'
import MacContainer from './MacContainer'

const Opening = () => {
  return (
    <div className="opening-container">
      <Canvas camera={{ fov: 12, position: [1, -10, 220] }}>
        <OrbitControls />
        {/* 2K HDRI로 화질과 성능의 균형점 */}
        <Environment files={"https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/2k/studio_small_09_2k.exr"} />
        <ScrollControls pages={3} >
          <MacContainer />
        </ScrollControls>
      </Canvas>
    </div>
  )
}

export default Opening
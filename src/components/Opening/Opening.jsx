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
        <Environment files={"https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr"} />
        <ScrollControls pages={3} >
          <MacContainer />
        </ScrollControls>
      </Canvas>
    </div>
  )
}

export default Opening
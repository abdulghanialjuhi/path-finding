import React from 'react'
import DrowWall from './DrawWall'
import StartAlgorithm from './StartAlgorithm'
import './toolbar-style.scss'

export default function ControlBar( { setMouseDown, mouseDown }) {
  return (
    <div className='control-bar-continer'>
        <DrowWall setMouseDown={setMouseDown} mouseDown={mouseDown} />
        <StartAlgorithm/>
    </div>
  )
}

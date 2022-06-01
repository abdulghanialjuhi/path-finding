import React from 'react'

export default function DrowWall({ mouseDown, setMouseDown }) {

  const handleOnClick = () => {
    setMouseDown(!mouseDown)
  }

  return (
    <button onClick={handleOnClick} 
    className={mouseDown ? 'draw-container draw-container--active' : 'draw-container'}>
        Draw Walls
    </button>
  )
}

import React from 'react'
import Button from '../../Button'

export default function DrowWall({ mouseDown, setMouseDown }) {

  const handleOnClick = () => {
    setMouseDown(!mouseDown)
  }

  return (
    <Button name='Draw Walls' handleOnClick={handleOnClick}
    classNames={`draw-container${mouseDown ? ' draw-container--active' : ''}`} />
  )
}

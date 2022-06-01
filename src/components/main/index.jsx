import React, { useState } from 'react'
import './main-style.scss'

import Grid from './grid/Grid'
import ControlBar from './control-bar'

export default function Main() {

  const [mouseDown, setMouseDown] = useState(false)

  return (
    <main>
      <ControlBar mouseDown={mouseDown} setMouseDown={setMouseDown} />
      <Grid setMouseDown={setMouseDown} mouseDown={mouseDown} />
    </main>
  )
}

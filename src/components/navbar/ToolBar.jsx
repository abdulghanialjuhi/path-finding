import React, { useContext } from 'react'

import Algorithms from './Algorithms'
import ClearBoard from './ClearBoard'
import Context from '../../use-context/Context'

export default function ToolBar() {

  const { actions, isAnimation } = useContext(Context)

  const handleIsAnimation = () => {
    actions({type: 'SET_IS_ANIMATION', payload: !isAnimation})
  }

  return (
    <>
      <div className='tool-bar-container'>
        <Algorithms />
        <div className='tool-control'>
        <div className={isAnimation ? 'visualize-container visualize-container--active' : 'visualize-container'} onClick={handleIsAnimation}>
          <h5>  Visualize </h5>
        </div>
          <ClearBoard />
        </div>
      </div>
    </>
  )
}

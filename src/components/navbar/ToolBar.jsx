import React, { useContext } from 'react'

import Algorithms from './Algorithms'
import ClearBoard from './ClearBoard'
import Context from '../../use-context/Context'
import Button from '../Button'

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
          <Button 
          classNames={isAnimation ? 'visualize-button visualize-button--active' : 'visualize-button'} name='Visualize' handleOnClick={handleIsAnimation} 
          />
          <ClearBoard />
        </div>
      </div>
    </>
  )
}

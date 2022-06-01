import React, { useContext } from 'react'
import Context from '../../use-context/Context'
import Button from '../Button';

export default function ClearBoard() {

    const { grid, actions, isRunning } = useContext(Context)

    const handleClearBoard = () => {

        if (isRunning) return;
        
        let newGrid = [...grid]

        for (const row of newGrid) {
          for (const node of row) {
  
            const spot = newGrid[node.row][node.col]
  
            spot.isVisited = false
            spot.previousNode = null
            spot.distance = Infinity
            spot.isStart = false
            spot.isFinish = false
            spot.isWall = false
            spot.neighbors = []
            spot.fScore = Infinity
  
            document.getElementById(`node-${spot.row}-${spot.col}`).className = 'node';
          }
        }

        actions({type: 'SET_GRID', payload: newGrid})
        actions({type: 'SET_START-NODE', payload: null})
        actions({type: 'SET-FINISH-NODE', payload: null})
    }

  return (
    <Button name='Clear Board' handleOnClick={handleClearBoard} classNames='clear-board-container'/>
  )
}

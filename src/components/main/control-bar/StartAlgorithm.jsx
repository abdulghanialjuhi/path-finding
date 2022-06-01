import React, { useContext } from 'react'
import { dijkstra } from '../../../algorithms/dijkstra'
import { aStar } from '../../../algorithms/aStart'
import Context from '../../../use-context/Context'
import { updateNeighbor, animateDijkstra, getNodesInShortestPathOrder } from '../../../algorithms/helperFunctions'
import Button from '../../Button'

export default function StartAlgorithm() {

  const {actions, grid, startNode, finishNode, isRunning, activeAlgorithm, isAnimation } = useContext(Context)

  const buttonDisabled = !startNode ? true : !finishNode ? true : false

    const hanleRunAlgorith = () => {

      let newGrid = [...grid]

      for (const row of newGrid) {
        for (const node of row) {

          updateNeighbor(grid, node.row, node.col)

          const spot = newGrid[node.row][node.col]

          spot.isVisited = false
          spot.previousNode = null
          spot.distance = Infinity

          if (spot.isStart || spot.isFinish || spot.isWall) continue;
          document.getElementById(`node-${spot.row}-${spot.col}`).className = 'node';
        }
      }

      actions({type: 'SET_GRID', payload: newGrid})
  
      actions({type: 'SET_IS_RUNNING', payload: true})

      let vistedNopdeInOrder;

      if (activeAlgorithm) {
         vistedNopdeInOrder = dijkstra(grid, startNode, finishNode)
      } else {
         vistedNopdeInOrder = aStar(startNode, finishNode)
      }
        
      const getShortestPath = getNodesInShortestPathOrder(finishNode)
      animateDijkstra(vistedNopdeInOrder, getShortestPath, isAnimation, setIsRunning)
    }

    const setIsRunning = () => {
      actions({type: 'SET_IS_RUNNING', payload: false})
    }

  return (
    <Button classNames='run-algorithm-button'  handleOnClick={hanleRunAlgorith} disabled={buttonDisabled || isRunning} name='Start Algorithm' />
  )
}

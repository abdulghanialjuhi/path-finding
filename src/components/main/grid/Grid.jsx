import React, { useContext, useEffect } from 'react'
import Context from '../../../use-context/Context'
import Node from '../node/Node'
import './grid-style.scss'

export default function Grid({ mouseDown, setMouseDown }) {

  const { actions, grid, isRunning, startNode, finishNode } = useContext(Context)

  useEffect(() => {
      actions({type: 'SET_GRID', payload: getInitialGrid()})
     // eslint-disable-next-line
  }, []);

  const handleNodeClick = (rowInx, colInx) => {
    
    if (isRunning) return

    if (startNode) {

      if (checkNode(grid, rowInx, colInx, 'isStart')) {
        const newGrid = getNewGrid(grid, rowInx, colInx, 'isStart')
        actions({type: 'SET_GRID', payload: newGrid})
        actions({type: 'SET_START-NODE', payload: null})
      } else if (!finishNode) {
        const newGrid = getNewGrid(grid, rowInx, colInx, 'isFinish')
        actions({type: 'SET_GRID', payload: newGrid})
        actions({type: 'SET-FINISH-NODE', payload: grid[rowInx][colInx]})
      } else if (finishNode) {
        if (checkNode(grid, rowInx, colInx, 'isFinish')) {
          const newGrid = getNewGrid(grid, rowInx, colInx, 'isFinish')
          actions({type: 'SET_GRID', payload: newGrid})
          actions({type: 'SET-FINISH-NODE', payload: null})
        }
      }  

    } else {
      if (checkNode(grid, rowInx, colInx, 'isFinish')) return

      const newGrid = getNewGrid(grid, rowInx, colInx, 'isStart')
      actions({type: 'SET_GRID', payload: newGrid})
      actions({type: 'SET_START-NODE', payload: grid[rowInx][colInx]})
    }
  }

  const handleMouseDown = (rowInx, colInx) => {
    if (isRunning) return
    
    setMouseDown(true)

    if (!startNode || !finishNode) return
    if (checkNode(grid, rowInx, colInx, 'isFinish') || checkNode(grid, rowInx, colInx, 'isStart')) return
    
    const newGrid = setWall(grid, rowInx, colInx, 'isWall')
    actions({type: 'SET_GRID', payload: newGrid})

  }

  const onTouchMove = (e) => {

    const el = document.elementFromPoint(e.touches[0].clientX, e.touches[0].clientY);
      if (!el) return;
      
      const rowInx = el.id.slice(5).split('-')[0]
      const colInx = el.id.slice(5).split('-')[1]
      
      if (!mouseDown || el.classList.contains('start') || el.classList.contains('finish') || !rowInx) return
      
      const newGrid = setWall(grid, rowInx, colInx, 'isWall')
      actions({type: 'SET_GRID', payload: newGrid})
    };

  const handleMouseEnter = (rowInx, colInx) => {

    if (!mouseDown || checkNode(grid, rowInx, colInx, 'isFinish') || checkNode(grid, rowInx, colInx, 'isStart')) return

    const newGrid = setWall(grid, rowInx, colInx, 'isWall')
    actions({type: 'SET_GRID', payload: newGrid})
  }

  const handleMouseUp = () => {
    setMouseDown(false)
  }

  return (
    <div onTouchMove={onTouchMove} className='nodes-container'>
    {grid?.map((row, rowInx) => (
      <div key={rowInx}>
        {row.map((node, colInx) => (
          <Node 
          startNode={startNode}
          finishNode={finishNode}
          mouseDown={mouseDown}
          key={colInx} 
          node={node} 
          handleMouseDown={handleMouseDown}
          handleMouseEnter={handleMouseEnter}
          handleMouseUp={handleMouseUp}
          onClick={handleNodeClick} />
        ))}
      </div>
    ))}
</div>
  )
}

const getInitialGrid = () => {

  const grid = []
  for (let row = 0; row < 20; row++) {
    const currentRow = []
    for (let col = 0; col < getColumn(); col++) {
      currentRow.push(creatteNode(col, row))
    }
    grid.push(currentRow)
  }

  return grid
}

const getColumn = () => {
  const max = 50;
  const { innerWidth } = window;
  const width =  innerWidth - 50
  const totalColumn = Math.round(width / 23)

  return totalColumn < max ? totalColumn : max
}

const creatteNode = (col, row) => {
  return {
    col,
    row,
    isStart: false,
    isFinish: false,
    distance: Infinity,
    isVisited: false,
    isWall: false,
    previousNode: null,
    neighbors: [],
    fScore: Infinity,
  }
}

const setWall = (grid, row, col, value) => {
  const newGrid = grid.slice()
  const node = newGrid[row][col]
  const newNode = {
    ...node,
    [value]: !node[value],
  }

  newGrid[row][col] = newNode
  return newGrid
}

const checkNode = (grid, row, col, value) => {
  return grid[row][col][value]
}


const getNewGrid = (grid, row, col, value) => {
  const newGrid = grid.slice()
  const node = newGrid[row][col]
  const newNode = {
    ...node,
    isWall: false,
    [value]: !node[value],
  }

  newGrid[row][col] = newNode
  return newGrid
}

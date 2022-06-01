import React, { memo } from 'react'
import './node-style.scss'
import { MdPinDrop, MdPushPin } from 'react-icons/md';

const Node = memo(({ node, onClick, handleMouseDown, handleMouseEnter, handleMouseUp }) => {

    const classname = node.isStart ? ' start' : node.isFinish ? ' finish' : node.isWall ? ' wall' : ''

    return (
        <div 
        id={`node-${node.row}-${node.col}`}
        className={`node${classname}`} 
        onClick={() => onClick(node.row, node.col)} 
        onMouseDown={() => handleMouseDown(node.row, node.col)}
        onMouseUp={handleMouseUp}
        onMouseEnter={() => handleMouseEnter(node.row, node.col)}
        >
            {node.isStart ? <MdPushPin /> : node.isFinish ? <MdPinDrop /> : null}
        </div>
    )
}, (prev, next) => {

    if (prev.startNode !== next.startNode || next.finishNode !== prev.finishNode) {
        return false
    }

    // console.log(prev.mouseDown);

    if (prev.mouseDown !== next.mouseDown) {
        return false
    }
  
    if (prev.node.isWall !== next.node.isWall) {
        return false
    } 
    
    return true
})

export default Node;
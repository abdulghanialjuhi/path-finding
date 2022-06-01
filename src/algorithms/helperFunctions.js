
export const updateNeighbor = (grid, row, spot) => {
    grid[row][spot].neighbors = []

    if(row < grid.length - 1 && !grid[row + 1][spot]?.isWall) {
        grid[row][spot].neighbors.push(grid[row + 1][spot])

    } // DOWN

    if (row > 0 && !grid[row - 1][spot]?.isWall) {
        grid[row][spot].neighbors.push(grid[row - 1][spot])
    } // UP

    if (spot < grid[0].length - 1 && !grid[row][spot + 1]?.isWall) {
        grid[row][spot].neighbors.push(grid[row][spot + 1])
    } // RIGHT

    if (spot > 0 && !grid[row][spot - 1]?.isWall) {
        grid[row][spot].neighbors.push(grid[row][spot - 1])
    } // LEFT

}

export const animateDijkstra = (visitedNodesInOrder, nodesInShortestPathOrder, isAnimation, setIsRunning) => {
    for (let i = 0; i <= visitedNodesInOrder.length; i++) {
      if (i === visitedNodesInOrder.length) {
        if (!isAnimation) {
          animateShortestPath(nodesInShortestPathOrder);
          setIsRunning()
        } else {
          setTimeout(() => {
            animateShortestPath(nodesInShortestPathOrder);
            setIsRunning()
          }, 10 * i);
        }

        return;
      }
      if (isAnimation) {
        setTimeout(() => {
          const node = visitedNodesInOrder[i];
          if (node.isStart || node.isFinish) return
          document.getElementById(`node-${node.row}-${node.col}`).className = 'node node-visited';
        }, 10 * i);
      };

    }
  }

export const animateShortestPath = (nodesInShortestPathOrder) => {

    for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
      setTimeout(() => {
        const node = nodesInShortestPathOrder[i];
        if (node.isStart || node.isFinish) return
        document.getElementById(`node-${node.row}-${node.col}`).className = 'node node-shortest-path';
      }, 30 * i);
    }
}

export const getNodesInShortestPathOrder = (finishNode) => {
    const nodesInShortestPathOrder = [];
    let currentNode = finishNode;
    while (currentNode !== null) {
      nodesInShortestPathOrder.unshift(currentNode);
      currentNode = currentNode.previousNode;
    }
    return nodesInShortestPathOrder;
}


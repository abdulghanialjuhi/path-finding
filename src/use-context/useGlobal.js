import { useState } from "react";

const useGlobalstate = () => {

  const [grid, setGrid] = useState([])
  const [isRunning, setIsRunning] = useState(false)
  const [startNode, setStartNode] = useState(null)
  const [finishNode, setFinishNode] = useState(null)
  const [activeAlgorithm, setActiveAlgorithm] = useState(true)
  const [isAnimation, setIsAnimation] = useState(true)

  const actions = (action) => {
    const { type, payload } = action;

    switch (type) {
      case "SET_GRID":
        return setGrid(payload);
      case 'SET_START-NODE':
        return setStartNode(payload);
      case 'SET-FINISH-NODE':
        return setFinishNode(payload);
      case 'SET_IS_RUNNING':
        return setIsRunning(payload);
      case 'SET_ACTIVE_ALGORITM':
        return setActiveAlgorithm(payload);
      case 'SET_IS_ANIMATION':
        return setIsAnimation(payload);
      default:
        return grid;
    }
  };

  return { actions, grid, startNode, finishNode, isRunning, activeAlgorithm, isAnimation };
};

export default useGlobalstate;

import React, { useContext } from 'react'
import Context from '../../use-context/Context'

export default function Algorithms() {

  const { actions, activeAlgorithm } = useContext(Context)

  const dijkstraAlgorithm = () => {
    actions({type: "SET_ACTIVE_ALGORITM", payload: true})
  }

  const aStarAlgorithm = () => {
    actions({type: "SET_ACTIVE_ALGORITM", payload: false})
  }

  return (
    <div className='drop-down-algorithm'>
        <h5> Algorithm </h5>
        <div className='drop-down-menu'>

            <h4 onClick={dijkstraAlgorithm} className={activeAlgorithm ? 'avtive-algorithm': ''}> Dijkstra </h4>

            <h4 onClick={aStarAlgorithm} className={activeAlgorithm ? '' : 'avtive-algorithm'}> A * </h4>
        </div>
    </div>
  )
}

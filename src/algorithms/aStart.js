import { PriorityQueue } from '@datastructures-js/priority-queue';

const absluteDistance = (p1, p2) => {
    return Math.abs(p1[0] - p2[0]) + Math.abs(p1[1] - p2[1])
}

export const aStar = (start, finish) => {

    const startName = start.col +"-"+start.row
    const finishName = finish.col +"-"+finish.row
    
    let count = 0
    const openSet = new PriorityQueue((a, b) => {
        if (a.fScore > b.fScore) {
            return 1
        }
        if (a.fScore < b.fScore) {
            return -1
        }

        return a.count < b.count ? 1 : -1;
    })

	openSet.enqueue({fScore: 0, count: count, value: start})

    start.distance = 0

    start.fScore = absluteDistance([start.row, start.col], [finish.row, finish.col])

    const openSetHash = {[startName]: start}

    const visitedNeighbors = []

    while (!openSet.isEmpty()) {

        let current = openSet.dequeue().value

        const currentName = current.col +"-"+current.row

        delete openSetHash[currentName]

        // if currentName === finishName means we found the end node
        if (currentName === finishName) return visitedNeighbors

        for (const neighbor of current.neighbors) {
            let tempGScore = current.distance + 1;

            const neighborName = neighbor.col +"-"+neighbor.row

            if (tempGScore < neighbor.distance) {
                neighbor.previousNode = current
                neighbor.distance = tempGScore

                neighbor.fScore = tempGScore + absluteDistance([neighbor.row, neighbor.col], [finish.row, finish.col])

                if (!(neighbor in openSetHash)) {
                    count += 1
                    openSet.enqueue({fScore: neighbor.fScore, count: count, value: neighbor})
                    openSetHash[neighborName] = neighbor
                    visitedNeighbors.push(neighbor)                 
                }
            }
        }
    }
    // if we got outside the while loop means we didn't find the end node 
    return visitedNeighbors
}


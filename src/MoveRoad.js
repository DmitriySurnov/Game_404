function MoveRoad(roadConten){
    roadConten.push(roadConten.shift())
    return roadConten.slice(0, roadConten.length)
}
export default MoveRoad
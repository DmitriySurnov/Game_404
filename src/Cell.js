import Bird from "./Bird";
import PlayerDragon from "./PlayerDragon";
import Tree from "./Tree";
import NullCell from "./NullCell";
function Cell({roadConten}){
    let firstLine =[<NullCell key = "NullCell_1_0"></NullCell>]
    let secondLine=[<PlayerDragon key = "PlayerDragon_2_0"></PlayerDragon>]
    let thirdLine =[<NullCell key = "NullCell_3_0"></NullCell>]
    roadConten.forEach((elementRoad, index) =>{
        firstLine.push(elementRoad ===1
            ?<Bird key = {index} ></Bird>
            :<NullCell key = {index}></NullCell> )
        secondLine.push(<NullCell key = {index}></NullCell>)
        thirdLine.push(elementRoad ===2
            ?<Tree key = {index}></Tree>
            :<NullCell key = {index}></NullCell> )
    })
    return  (
        <tbody>
            <tr>{firstLine}</tr>
            <tr>{secondLine}</tr>
            <tr>{thirdLine}</tr>
        </tbody>
    )
}
export default Cell
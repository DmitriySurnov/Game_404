import Bird from "./Bird";
import PlayerDragon from "./PlayerDragon";
import Tree from "./Tree";
import NullCell from "./NullCell";
function Cell({roadConten}){
    let  result =[<PlayerDragon key = "PlayerDragon_0"></PlayerDragon>]
    roadConten.forEach((elementRoad, index) =>{
        switch (elementRoad){
            case 1: {
                result.push(<Bird key = {index} ></Bird>)
                break
            }
            case 2:{
                result.push(<Tree key = {index}></Tree>)
                break
            }
            default:{
                result.push(<NullCell key = {index}></NullCell>)
                break
            }

        }})
    return  result
}
export default Cell
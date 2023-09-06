import Bird from "./Bird";
import PlayerDragon from "./PlayerDragon";
import Tree from "./Tree";
import NullCell from "./NullCell";
function Cell({roadConten}){
    let  result =[]
    roadConten.forEach((elementRoad) =>{
        switch (elementRoad){
            case 1: {
                result.push(<PlayerDragon></PlayerDragon>)
                break
            }
            case 2: {
                result.push(<Bird></Bird>)
                break
            }
            case 3:{
                result.push(<Tree></Tree>)
                break
            }
            default:{
                result.push(<NullCell></NullCell>)
                break
            }

        }})
    return  result
}
export default Cell
import Bird from "./Bird";
import PlayerDragon from "./PlayerDragon";
import Tree from "./Tree";
import NullCell from "./NullCell";
function Cell({code}){
    switch (code){
        case 1:
            return (<PlayerDragon></PlayerDragon>)
        case 2:
            return (<Bird></Bird>)
        case 3:
            return (<Tree></Tree>)
        default:
            return (<NullCell></NullCell>)
    }
}
export default Cell
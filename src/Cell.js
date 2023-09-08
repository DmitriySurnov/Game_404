import Bird from "./Bird";
import PlayerDragon from "./PlayerDragon";
import Tree from "./Tree";
import NullCell from "./NullCell";
function Cell({elementCell, GetTdSizeAction, timeOut}){
    switch (elementCell){
        case 1:
            return <Bird></Bird>
        case 2:
            return <Tree></Tree>
        case 3:
            return <PlayerDragon></PlayerDragon>
        default:
            return <NullCell getTdSizeAction={GetTdSizeAction} timeOut={timeOut}></NullCell>
    }
}
export default Cell
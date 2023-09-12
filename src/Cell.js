import Bird from "./Bird";
import PlayerDragon from "./PlayerDragon";
import Tree from "./Tree";
import NullCell from "./NullCell";
function Cell({elementCell, GetTdAction}){
    switch (elementCell){
        case 1:
            return <Bird></Bird>
        case 2:
            return <Tree></Tree>
        case 3:
            return <PlayerDragon getTdAction={GetTdAction}></PlayerDragon>
        default:
            return <NullCell getTdSizeAction={GetTdAction}></NullCell>
    }
}
export default Cell
import {useRef} from "react";

function NullCell({getTdSizeAction, timeOut}){
    const td = useRef(null)

    function GetTdSizeAction(){
        return td.current == null ? null: td.current.offsetWidth
    }

    if (getTdSizeAction !== undefined){
        setTimeout(() => getTdSizeAction(GetTdSizeAction),timeOut)
        return (<td ref={td}><span></span></td>)
    }
    return (<td><span></span></td>)
}
export default NullCell
import {useRef, useEffect} from "react";

function NullCell({getTdSizeAction, timeOut}){
    const td = useRef(null)

    function GetTdSizeAction(){
        return td.current == null ? null: td.current.offsetWidth
    }

    useEffect(() => {
        if (getTdSizeAction !== undefined){
            getTdSizeAction(GetTdSizeAction);
        }
    })

    return (<td ref={td}><span></span></td>)
}
export default NullCell
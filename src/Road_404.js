import  "./Styles/Road_404.css"
import Table from "./Table";
import {useRef} from "react";
import Jump from "./Jump";

function Road_404(){

    let td = useRef(null)
    let isSpace=useRef(false)
    function GetTdRef(TdRef){
        td = TdRef()
    }

    function onKeyDown(event){
        if(event.code === "Space"){
            Jump(td,isSpace)
        }
    }

    return(
        <table onKeyDown={onKeyDown} tabIndex={0}>
            <Table GetTdRefAction={GetTdRef}></Table>
        </table>
    )
}
export default Road_404
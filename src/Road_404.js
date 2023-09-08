import {useState} from "react"
import  "./Styles/Road_404.css"
import Table from "./Table";
import RoadContent from "./RoadContent";
function Road_404(){
    const [road, setRoad] = useState(RoadContent.content());
    setTimeout(args => {
        RoadContent.MoveRoad()
        setRoad(RoadContent.content())
    }, 1000)

    function GetTdSize(getTdSize){
        console.log("size",getTdSize())
    }
    return(
        <table>
            <Table roadConten={RoadContent.content()} GetTdSizeAction={GetTdSize} imeOut={100} ></Table>
        </table>
    )
}
export default Road_404
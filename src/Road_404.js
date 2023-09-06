import {useState} from "react"
import  "./Styles/Road_404.css"
import Cell from "./Cell";
import RoadContent from "./RoadContent";
function Road_404(){
    const [road, setRoad] = useState(RoadContent.content());
    setTimeout(args => {
        RoadContent.MoveRoad()
        setRoad(RoadContent.content())
    }, 1000)
    return(
        <table>
                <Cell roadConten={road}></Cell>
        </table>
    )
}
export default Road_404
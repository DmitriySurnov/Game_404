import {useState} from "react"
import  "./Styles/Road_404.css"
import Cell from "./Cell";
import RoadContent from "./RoadContent";
function Road_404(){
    const [road, setRoad] = useState(RoadContent.content());
    setTimeout(args => {
        RoadContent.ShiftRoad()
        setRoad(RoadContent.content())
    }, 1000)
    return(
        <table>
            <tbody>
            <tr>
                <Cell roadConten={road}></Cell>
            </tr>
            </tbody>
        </table>
    )
}
export default Road_404
import "./Styles/Table.css"
import Row from "./Row";
import {useRef} from "react";
import ParametersRightAction from "./ParametersRightAction";
import setRightAction from "./SetRightAction";
import RoadContent from "./RoadContent";


function Table({GetTdRefAction}){
    let firstRow =[0]
    let secondRow=[3]
    let thirdRow =[0]

    RoadContent.content().forEach((elementRoad) =>{
        firstRow.push(elementRoad ===1 ? elementRoad :0 )
        secondRow.push(0)
        thirdRow.push(elementRoad ===2 ? elementRoad : 0 )
    })
    const trTop = useRef(null)
    const trBottom = useRef(null)

    let tdSize = useRef(0)
    function GetTdSize(getTdSize){
        tdSize.current = getTdSize()
        console.log("size",tdSize.current)
    }

    let topLineTable = new ParametersRightAction()
    topLineTable.count=tdSize
    topLineTable.tableLine = trTop
    topLineTable.shiftFinished=useRef(false)
    topLineTable.timeOut = 20
    topLineTable.rightShift = useRef(0)
    topLineTable.step = 1

    let bottomLineTable = new ParametersRightAction()
    bottomLineTable.count=tdSize
    bottomLineTable.tableLine = trBottom
    bottomLineTable.shiftFinished=useRef(false)
    bottomLineTable.timeOut = 20
    bottomLineTable.rightShift = useRef(0)
    bottomLineTable.step = 1

    setTimeout(() => setRightAction(topLineTable),100)
    setTimeout(() => setRightAction(bottomLineTable),100)

    return  (
        <tbody>
        <tr ref={trTop}>
            <Row
                trRef={trTop}
                rowRoadConten={firstRow}
                GetTdAction={GetTdSize}
                shiftFinished={topLineTable.shiftFinished}>
            </Row>
        </tr>
        <tr>
            <Row rowRoadConten={secondRow} GetTdAction={GetTdRefAction}></Row>
        </tr>
        <tr ref={trBottom}>
            <Row
                trRef={trBottom}
                rowRoadConten={thirdRow}
                shiftFinished={bottomLineTable.shiftFinished}>
            </Row>
        </tr>
        </tbody>
    )
}

export default Table
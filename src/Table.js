import Row from "./Row";


function Table({roadConten, GetTdSizeAction, timeOut}){
    let firstRow =[0]
    let secondRow=[3]
    let thirdRow =[0]

    roadConten.forEach((elementRoad) =>{
        firstRow.push(elementRoad ===1 ? elementRoad :0 )
        secondRow.push(0)
        thirdRow.push(elementRoad ===2 ? elementRoad : 0 )
    })

    return  (
        <tbody>
        <tr>
            <Row rowRoadConten={firstRow} GetTdSizeAction={GetTdSizeAction} timeOut={timeOut}></Row>
        </tr>
        <tr>
            <Row rowRoadConten={secondRow}></Row>
        </tr>
        <tr>
            <Row rowRoadConten={thirdRow}></Row>
        </tr>
        </tbody>
    )
}

export default Table
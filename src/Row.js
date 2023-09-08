import Cell from "./Cell";


function Row({rowRoadConten, GetTdSizeAction, timeOut}){
    let result =[]

    rowRoadConten.forEach((elementRow,index) =>{
        if (index === 0){
            result.push(<Cell key={index} elementCell={elementRow} GetTdSizeAction={GetTdSizeAction} timeOut={timeOut}></Cell>)
        }
        else {
            result.push(<Cell key={index} elementCell={elementRow}></Cell>)
        }
    })

    return result
}

export default Row
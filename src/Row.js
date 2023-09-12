import Cell from "./Cell";
import {useEffect, useState} from "react";
import MoveRoad from "./MoveRoad";


function Row({rowRoadConten, GetTdAction, shiftFinished, trRef}){
    const [rowConten, setRowConten] = useState(rowRoadConten);
    let result =[]

    rowConten.forEach((elementRow,index) =>{
        if (index === 0){
            result.push(
                <Cell
                    key={index}
                    elementCell={elementRow}
                    GetTdAction={GetTdAction}>
                </Cell>)
        }
        else {
            result.push(
                <Cell
                    key={index}
                    elementCell={elementRow}>
                </Cell>)
        }
    })

    useEffect(() => {
        return () => {
            trRef.current.style.right = "0px";
        }
    })


    if (shiftFinished !== undefined){
        const interval = setInterval(() => {
            if (shiftFinished.current){
                clearInterval(interval);
                shiftFinished.current = false
                setRowConten(MoveRoad(rowConten))
            }
        }, 20);
    }

    return result
}

export default Row
import {useEffect, useRef, useState} from "react"
import  "./Styles/Dragon.css"
function PlayerDragon({getTdAction}){
    const animation = [
        "Image/Game/dragon.png",
        "Image/Game/dragon1.png",
        "Image/Game/dragon.png",
        "Image/Game/dragon2.png"]
    const [currentSourceImage, setCurrentSourceImage] = useState(0);
    const [url, setUrl] = useState(animation[currentSourceImage])

    setTimeout(args => {
        let animationIndex = currentSourceImage + 1;
        if (animationIndex === animation.length){
            animationIndex = 0;
        }
        setCurrentSourceImage(animationIndex)
        setUrl(animation[currentSourceImage])
    }, 125)

    const td = useRef(null)

    function GetImgAction(){
        return td.current == null ? null: td
    }

    useEffect(() => {
        if (getTdAction !== undefined){
            getTdAction(GetImgAction);
        }
    })

    return (
        <td ref={td} className="Dragon">
            <img src={url}/>
        </td>
    )

}
export default PlayerDragon
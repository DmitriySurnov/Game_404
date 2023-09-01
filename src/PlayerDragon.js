import {useState} from "react"
function PlayerDragon(){
    const animation = [
        "Image/Game/dragon.png",
        "Image/Game/dragon1.png",
        "Image/Game/dragon.png",
        "Image/Game/dragon2.png"]
    const [currentSourceImage, setCurrentSourceImage] = useState(0);
    const [url, setUrl] = useState(animation[currentSourceImage])

    setTimeout(args => {
        let animationIndex = currentSourceImage + 1;
        if (animationIndex == animation.length){
            animationIndex = 0;
        }
        setCurrentSourceImage(animationIndex)
        setUrl(animation[currentSourceImage])
    }, 125)

    return (
        <td>
            <img src={url}/>
        </td>
    )

}
export default PlayerDragon
function Jump(td,isSpace){
    if (!isSpace.current){
        isSpace.current=true
        let shift = 45;
        const interval = setInterval(() => {
            shift--;
            td.current.style.top = shift+"px"
            if (shift === -27){
                shift++;
                clearInterval(interval)
                setTimeout(()=>{
                    const interval = setInterval(() => {
                        shift++;
                        td.current.style.top = shift+"px"
                        if (shift === 46){
                            clearInterval(interval)
                            isSpace.current=false
                        }
                    },10)
                },500)
            }
        }, 10);
    }
}
export default Jump
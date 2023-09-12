function SetRightAction (Parameters) {
    setInterval(() => {
        if (Parameters.count.current > 0 && !Parameters.shiftFinished.current){
            Parameters.tableLine.current.style.right =Parameters.rightShift.current + 'px'
            console.log("rightShift.current__",Parameters.tableLine.current.style.right)
            Parameters.rightShift.current = Parameters.rightShift.current + Parameters.step;
            if (Parameters.count.current <= Parameters.rightShift.current){
                Parameters.rightShift.current = 0
                Parameters.shiftFinished.current = true
            }
        }
    }, Parameters.timeOut);
}
export default SetRightAction


// ParametersSetRightAction
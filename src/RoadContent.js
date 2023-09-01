class RoadContent {
    constructor() {
        this.array = []
        this.array[0] = 1;
    }
    #fill(levelNumber){
        for (let i = 1;i<20;i++){
            if (i === 1){
                this.array[i] = Math.floor(Math.random() * 2 + 2)
            }
            else if(this.#IsNull(levelNumber,i)) {
                this.array[i] = Math.floor(Math.random() * 2 + 2)
            }else {
                this.array[i] = 0;
            }
        }
    }

    #IsNull(levelNumber,index){
        let isNull = true
        for (let i=1;i<=levelNumber;i++){
            isNull = this.array[index - i] === 0;
        }
        return isNull
    }

    content(levelNumber)  {
        this.#fill(levelNumber)
        return this.array
    }
}
export default new RoadContent()
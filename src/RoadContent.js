class RoadContent {
    #size
    #array
    constructor(size) {
        this.#size = size
        this.#array = []
        this.#fill(1)
    }
    #fill(levelNumber){
        for (let i = 0;i<this.#size;i++){
            this.#array.push(this.#addElement(levelNumber,i))
        }
    }

    #addElement(levelNumber, index){
        if (index === 0 || this.#IsNull(levelNumber,index)){
            return Math.floor(Math.random() * 2 + 1)
        }
        else{
            return 0
        }
    }

    #IsNull(levelNumber,index){
        let isNull = true
        for (let i=1;i<=levelNumber;i++){
            isNull = this.#array[index - i] === 0;
        }
        return isNull
    }

    content()  {
        return this.#array.slice(0, this.#size)
    }
}
export default new RoadContent(30)
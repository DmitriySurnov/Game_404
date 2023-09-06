class RoadContent {
    #size
    #array
    constructor(size) {
        this.#size = size
        this.#array = []
        this.#fill(1)
    }
    #fill(levelNumber){
        for (let i = 0;i<this.#size-1;i++){
            if (i === 0){
                this.#array.push(Math.floor(Math.random() * 2 + 1))
            }
            else if(this.#IsNull(levelNumber,i)) {
                this.#array.push(Math.floor(Math.random() * 2 + 1))
            }else {
                this.#array.push(0);
            }
        }
    }
    /*  0 - пустая клетка
        1 - птица
        2 - дерево
*/

    #IsNull(levelNumber,index){
        let isNull = true
        for (let i=1;i<=levelNumber;i++){
            isNull = this.#array[index - i] === 0;
        }
        return isNull
    }
    MoveRoad(){
        this.#array.push(this.#array.shift())
    }

    content()  {
        return this.#array.slice(0, this.#size)
    }
}
export default new RoadContent(20)
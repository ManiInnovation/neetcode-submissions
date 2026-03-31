class MinStack {
    constructor() {}

    arr = []
    minstack = []

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.arr.push(val)
        if(this.minstack.length === 0 || val <= this.getMin()){
            this.minstack.push(val)
        }
    }

    /**
     * @return {void}
     */
    pop() {
        if(this.arr.length === 0) return null;
        const top = this.arr[this.arr.length-1]
        if(top === this.getMin()){
            this.minstack.pop()
        }
        this.arr.pop()
    }

    /**
     * @return {number}
     */
    top() {
        if(this.arr.length === 0) return null;
         return this.arr[this.arr.length-1]
    }

    /**
     * @return {number}
     */
    getMin() {
         if(this.minstack.length === 0) return null;
         return this.minstack[this.minstack.length-1]
    }
}

class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */

    heap = []

    lastStoneWeight(stones) {
        for(let stone of stones){
            this.add(stone);
        }
        while(this.heap.length > 1){
            let a = this.extractMax()
            let b = this.extractMax()
            if(a === b){
               continue
            }else{
                this.add(Math.max(a,b)-Math.min(a,b));
            }
        }
       
        return (this.heap.length) ?this.extractMax(): 0

    }

    add(val){
        this.heap.push(val);
        this.bubbleUp()
    }

    bubbleUp(){
        let i = this.heap.length-1;
        while(i> 0){
            const parentIdx = Math.trunc(i/2);
            if(this.heap[parentIdx] < this.heap[i]){
                this.swap(parentIdx,i);
                i = parentIdx;
            }else{
                break;
            }
        }
    }

    extractMax(){
        let max = -1;
        const arr =this.heap
        if(!arr.length){
           return max;
        }
        max = arr[0]
        if(arr.length>1){
            arr[0] = arr[arr.length-1];
            this.bubbleDown()
        }
        arr.length = arr.length -1;
        return max;
    }
    bubbleDown(){
        let i = 0;
        const arr = this.heap
        let n = arr.length
        while(i < n){
            let left = (2*i) + 1
            let right = (2*i) + 2
            let small = i;
            if(left < n && this.heap[left]>this.heap[small]){
                small = left;
            }
            if(right < n && this.heap[right] > this.heap[small]){
                small = right
            }
            if(small === i) break;
            this.swap(small, i);
            i = small;
        }
    }

    swap(src, tgt){
        [this.heap[src],this.heap[tgt]] = [this.heap[tgt], this.heap[src]]
    }

}

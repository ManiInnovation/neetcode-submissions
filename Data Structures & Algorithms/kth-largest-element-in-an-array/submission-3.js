class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */

    heap = []
    findKthLargest(nums, k) {
        for(let num of nums){
        if(this.heap.length <= (k-1)){
            this.add(num)
        }else{
            
           if(this.heap[0] < num){
            this.heap[0] = num;
            this.bubbleDown()
           }

        }
        }
        return this.heap[0]
    }

     add(val){
        this.heap.push(val);
        this.bubbleUp()
    }

    bubbleUp(){
        let i = this.heap.length-1;
        while(i> 0){
            const parentIdx = Math.ceil((i-1)/2);
            if(this.heap[parentIdx] > this.heap[i]){
                this.swap(parentIdx,i);
                i = parentIdx;
            }else{
                break;
            }
        }
    }

    extractMin(){
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
            if(left < n && this.heap[left]<this.heap[small]){
                small = left;
            }
            if(right < n && this.heap[right] < this.heap[small]){
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

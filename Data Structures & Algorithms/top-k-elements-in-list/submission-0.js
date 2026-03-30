class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = {}
        const arr = []
        for(let i of nums){
            if(map[i]){
                map[i][0]+=1
            }else{
                map[i] = [1,i];
                arr.push(map[i]);
            }
        }

        arr.sort((a,b)=> b[0]-a[0]);
        return arr.slice(0,k).map(([_,i])=>i)

    }
}

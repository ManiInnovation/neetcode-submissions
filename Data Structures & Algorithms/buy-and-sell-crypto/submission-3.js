class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(arr) {
        let i = 0;
        let j = i+1;
        let maxProfit = 0;
        while(i<j && j<arr.length){
            if(arr[i]>= arr[j]){
                if(maxProfit !== 0){
                    i = j;
                    j++
                }else{
                i++
                j++
                }
            }else if(arr[i]< arr[j]){
                maxProfit = Math.max(maxProfit,arr[j]-arr[i])
                j++
            }
        }
        return maxProfit
    }
}

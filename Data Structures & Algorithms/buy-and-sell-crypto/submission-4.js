class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(arr) {
        let minPrice = Infinity
        let maxProfit = 0;
        for(let i=0;i<arr.length;i++){
            minPrice = Math.min(minPrice,arr[i])
            const todayProfit = arr[i] - minPrice;
            maxProfit = Math.max(maxProfit,todayProfit);
        }
        return maxProfit
    }

     maxProfit_two_pointer(arr) {
        let i = 0;
        let j = i+1;
        let minPrice = Infinity
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

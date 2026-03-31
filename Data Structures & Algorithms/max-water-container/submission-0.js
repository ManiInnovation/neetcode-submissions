class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let i = 0;
        let j = heights.length-1;
        let maxWater = 0;
        while(i<=j){
            let width = j-i
            let high = Math.min(heights[i],heights[j])
            maxWater = Math.max(maxWater,width*high)
            if(heights[i]>= heights[j]){
                j--
            }else if(heights[i]<=heights[j]){
                i++;
            }
        }
        return maxWater
    }
}

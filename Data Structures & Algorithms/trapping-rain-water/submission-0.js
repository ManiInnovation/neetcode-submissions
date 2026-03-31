class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let leftMax = Array(height.length).fill(0);
        let rightMax = Array(height.length).fill(0);

        let prefix = 0
        let suffix = 0
        let trapWater = 0;
        for(let i = 0; i< height.length;i++){
            prefix = Math.max(prefix, height[i]);
            leftMax[i] = prefix
        }
        for(let i= height.length-1;i>= 0;i--){
            suffix = Math.max(suffix,height[i])
            rightMax[i] = suffix;
        }
         for(let i = 0; i< height.length;i++){
            const currTrapWater = Math.min(leftMax[i],rightMax[i])-height[i]
            if(currTrapWater > 0){
                trapWater+=currTrapWater;
            }
         }
return trapWater;
    }
}

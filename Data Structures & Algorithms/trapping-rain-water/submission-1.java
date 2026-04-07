class Solution {
    public int trap(int[] height) {
        int n = height.length;
        int[] leftMax = new int[n];
        int[] rightMax = new int[n];
        int prefix = 0;
        int suffix = 0;
        for(int i=0;i<n;i++){
            prefix = Math.max(prefix, height[i]);
            leftMax[i] = prefix;
        }

         for(int i=n-1;i>=0;i--){
            suffix = Math.max(suffix, height[i]);
            rightMax[i] = suffix;
        }
        int trapWater = 0;
        for(int i=0;i<n;i++){
            int trapped = Math.min(leftMax[i],rightMax[i]) - height[i];
            if(trapped > 0){
                trapWater += trapped;
            }
        }
        return trapWater;
    }
}

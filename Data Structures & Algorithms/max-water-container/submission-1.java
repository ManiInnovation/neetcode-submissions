class Solution {
    public int maxArea(int[] heights) {
        int max = 0;
        int i = 0;
        int j = heights.length-1;
        while(i<j){
            int left = heights[i];
            int right = heights[j];
            int distance = j - i;
            int depth = Math.min(left,right);
            max = Math.max(max, distance*depth);
            if(left>right){
                j--;
            }else{
                i++;
            }
        }
        return max;
    }
}

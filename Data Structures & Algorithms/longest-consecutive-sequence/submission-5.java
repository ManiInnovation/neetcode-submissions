class Solution {
    public int longestConsecutive(int[] nums) {
        Arrays.sort(nums);
        if(nums.length == 0) return 0;
        int len = 1;
        int max = 1;
        int prev = nums[0];
        for(int i=1;i<nums.length;i++){
            System.out.println(nums[i]);
            System.out.println("prev "+String.valueOf(prev)+" len "+String.valueOf(len));
            if(nums[i] == (prev+1)){
                len++;
                prev = nums[i];
            }else if(nums[i] == prev){
                continue;
            }else{
                max = Math.max(max,len);
                len = 1;
                prev = nums[i];
            }
        }
    return Math.max(max,len);
    }
}

class Solution {
    public int[] productExceptSelf(int[] nums) {
        int[] prefix = new int[nums.length];
        int[] suffix = new int[nums.length];
        Arrays.fill(suffix,1);
        Arrays.fill(prefix,1);
        int p = 1;
        int s = 1;
        for(int i=0;i<nums.length;i++){
            prefix[i] = p;
            p *= nums[i];
        }
        for(int i=nums.length-1;i>=0;i--){
            suffix[i] *= s;
            s *= nums[i];
        }
        for(int i=0;i<nums.length;i++){
            prefix[i] *= suffix[i];
        }
        return prefix;

    }
}  

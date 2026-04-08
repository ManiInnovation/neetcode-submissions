class Solution {
    public int rob(int[] nums) {
        if(nums.length == 0)  return 0;
        if(nums.length == 1) return nums[0];
        if(nums.length == 2) return Math.max(nums[0],nums[1]);
        return Math.max(
    robLinear(nums, 0, nums.length - 2), // exclude last
    robLinear(nums, 1, nums.length - 1)  // exclude first
);
}
      public int robLinear(int[] nums, int start, int end) {

        int n = end - start + 1;

        if(n == 1) return nums[start];

        int[] dp = new int[n];

        dp[0] = nums[start];
        dp[1] = Math.max(nums[start], nums[start + 1]);

        for(int i = 2; i < n; i++) {
            dp[i] = Math.max(
                dp[i - 1],
                dp[i - 2] + nums[start + i]
            );
        }

        return dp[n - 1];
    }


}

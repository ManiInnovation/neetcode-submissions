class Solution {
    public int longestConsecutive(int[] nums) {
        if(nums.length == 0) return 0;
        Set<Integer> set = Arrays.stream(nums).boxed().collect(Collectors.toSet());
        int longest = 1;
        for(int i=0;i<nums.length;i++){
            int curr = nums[i];
            if(set.contains(curr-1)) continue;
            int length = 1;
            while(set.contains(curr+length)){
                length++;
            }
            longest = Math.max(longest, length);
        }
        return longest;
    }
}

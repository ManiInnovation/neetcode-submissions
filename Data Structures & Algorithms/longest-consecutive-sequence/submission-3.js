class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) return 0
        const uniqueNum = new Set(nums);
        let longest = 1;
        for(let i of nums){
            if(uniqueNum.has(i-1)){
                continue;
            }else{
                let length = 1;
                while(uniqueNum.has(i+length)){
                    length++;
                }
                longest = Math.max(longest,length);
            }
        }
        return longest;
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length === 0) return 0
        const uniqueNums = new Set(nums);
        let longest = 1;
        for(let i of nums){
            if(!uniqueNums.has(i-1)){
                let length = 1;
                while(uniqueNums.has(i+length)){
                    length++;
                }
                longest = Math.max(longest,length);
            }
        }
    return longest
    }

}

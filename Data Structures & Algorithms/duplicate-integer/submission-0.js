class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const visited = {}
        for(let i of nums){
            if(visited[i]){
                return true;
            }
            visited[i] = true
        }
        return false
    }
}

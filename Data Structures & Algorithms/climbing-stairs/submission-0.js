class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        let arr = [1,2]
        for(let i=2;i<n;i++){
            arr[i] = arr[i-2]+arr[i-1];
        }
        return arr[n-1]
    }
}

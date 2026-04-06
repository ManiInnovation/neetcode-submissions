class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        // let arr = [1,2]
        // for(let i=2;i<n;i++){
        //     arr[i] = arr[i-2]+arr[i-1];
        // }
        // return arr[n-1]
        let a = 1,b=1;
        for(let i=0;i<n-1;i++){
            let tmp = a;
            a = a + b;
            b = tmp;
        }
        return a;
    }
}

class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
        if(s === "") return true
        let i = 0;
        let j = s.length -1;
        if(i === j) return true
        if(s.length === 0) return false;
        
        while(i < j){
            if(s[i++] !== s[j--]){
                return false
            }
        }
        return true;
    }
}

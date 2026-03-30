class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const map = {}
        if(s.length !== t.length) return false
        for(let c of s){
            if(!map[c]){
                map[c] = 0
            }
            map[c] +=1
        }
        for(let c of t){
            if(!map[c] || map[c] <= 0){
                return false
            }
            map[c] -= 1
        }
        return true
    }
}

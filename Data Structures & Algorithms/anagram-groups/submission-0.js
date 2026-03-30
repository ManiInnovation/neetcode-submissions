class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const arr = []
        const map = {}
        for(let s of strs){
            let t = [...s].sort().join('')
            if(!map[t]){
                map[t] = [s]
                arr.push(map[t])
            }else{
            map[t].push(s);
            }
        }
        return arr;
    }
}

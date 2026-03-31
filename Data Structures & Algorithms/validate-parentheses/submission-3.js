class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const map = {
            ')': '(', '}':'{',']':'['
        }
        const stack = []
        for(let i =0;i<s.length;i++){
            const curr = s[i];
            const prev = stack[stack.length-1]||''
            if(!map[curr]){
                stack.push(curr);
            }else{
                if(prev === map[curr]){
                    stack.pop();
                }else {
                    return false;
                }
            }
        }
        if(stack.length>0) return false
        return true
    }
}

class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = []
        for(let i =0;i<s.length;i++){
            const curr = s[i];
            const prev = stack[stack.length-1]||''
            if(curr === ')'){
                if(prev === '(') stack.pop() 
                else return false
            }else if(curr === '}'){
                 if(prev === '{') stack.pop()
                 else return false
            }else if(curr === ']'){
                 if(prev === '[') stack.pop()
                 else return false
            }else{
                stack.push(curr)
            }
        
        }
        if(stack.length>0) return false
        return true
    }
}

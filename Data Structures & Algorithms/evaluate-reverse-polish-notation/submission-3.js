class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = []
        for(let token of tokens){
            if(!isNaN(token)){
                stack.push(+token);
            }else{
                let result = 0
                const b = stack.pop()
                const a = stack.pop()
                if(token === '+') result = a+b
                if(token === '-') result = a-b
                if(token === '*') result = a*b
                if(token === '/') result = Math.trunc(a/b)
                stack.push(result)
            }
        }
        return stack.pop()
    }
}

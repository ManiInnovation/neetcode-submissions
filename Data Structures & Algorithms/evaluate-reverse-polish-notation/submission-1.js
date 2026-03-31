class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const operators = new Set(['+','-','*','/'])
        const stack = []
        for(let token of tokens){
            if(!operators.has(token)){
                stack.push(+token);
            }else{
                let result = 0;
                let b = stack.pop()
                let a = stack.pop()
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

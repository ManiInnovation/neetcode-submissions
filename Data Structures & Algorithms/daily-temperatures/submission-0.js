class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const stack = []
        const result = Array(temperatures.length).fill(0)
        for(let i = 0; i < temperatures.length;i++){
                while(stack.length> 0 && temperatures[stack[stack.length-1]]<temperatures[i]){
                    const lowIndex = stack.pop()
                    result[lowIndex] = i-lowIndex
                }
                stack.push(i);
        }
        return result;
    }
}

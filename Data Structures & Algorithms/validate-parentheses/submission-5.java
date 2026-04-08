class Solution {
    public boolean isValid(String s) {
        Stack<Character> stack = new Stack();
        Map<Character,Character> map = new HashMap<>();
        map.put(']','[');
        map.put(')','(');
        map.put('}','{');

        char[] arr = s.toCharArray();
        for(char c: arr){
            if(map.containsKey(c) && !stack.isEmpty() && map.get(c) == stack.peek()){
                stack.pop();
            }else{
                stack.push(c);
            }

        }
        return stack.isEmpty();
    }
}

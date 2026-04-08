class MinStack {

    Stack<Integer> arr = new Stack();
    Stack<Integer> minArr = new Stack();
    public MinStack() {
        
    }
    
    public void push(int val) {
        arr.push(val);
        if(minArr.isEmpty()|| val <= this.getMin()){
            minArr.push(val);
        }
    }
    
    public void pop() {
        Integer top = arr.peek();
        if(top == null) return;
        if(top == this.getMin()){
            minArr.pop();
        }
        arr.pop();
    }
    
    public int top() {
        return arr.peek();
        
    }
    
    public int getMin() {
        return minArr.peek();
    }
}

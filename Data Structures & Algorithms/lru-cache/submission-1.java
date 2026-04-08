class LRUCache {

    class Node{
        int key;
        int val;
        Node next, prev;
        Node(int key,int val){
            this.key = key;
            this.val = val;
        }
    }

    Node head;
    Node tail;
    int capacity = 0;
    int size = 0;
    Map<Integer, Node> map = new HashMap<>();

    public LRUCache(int capacity) {
        this.capacity = capacity;
    }
    
    public int get(int key) {
        if(!map.containsKey(key)) return -1;
        //System.out.println(map);
        Node node = map.get(key);
        remove(node);
        add(node);
        return node.val;
    }

    public void add(Node newNode){
        if(head == null){
            this.head = this.tail = newNode;
        }else{
            this.tail.next = newNode;
            newNode.prev = tail;
            this.tail = newNode;
        }
        this.size++;
    }

    public void remove(Node node){
        System.out.println("remove"+ String.valueOf(node.key));
        if(node == this.head){
            this.head = this.head.next;
            if(this.head != null)
            this.head.prev = null;
        }else if(node == tail){
            this.tail = this.tail.prev;
            if(this.tail != null)
            this.tail.next = null;
        }else{
            Node prev = node.prev;
            Node next = node.next;
            prev.next = next;
            next.prev = prev;
        }
        node.next = node.prev = null;
        this.size --;
    }
    
    public void put(int key, int value) {
        if(map.containsKey(key)){
        Node existing = map.get(key);
        remove(existing);
    }

        Node newNode = new Node(key,value);
        System.out.println(size);
        if(size == capacity){
            map.remove(head.key);
            remove(head);
            System.out.println(map);

        }
        add(newNode);
        map.put(key,newNode);
    }
}

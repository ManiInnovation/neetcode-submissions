/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */

class Solution {
    public ListNode mergeKLists(ListNode[] lists) {
        PriorityQueue<ListNode> q = new PriorityQueue<>((a, b) -> a.val - b.val);
        for(ListNode l: lists){
            q.offer(l);
        }
        ListNode dummy = new ListNode(0);
        ListNode curr = dummy;
        while(!q.isEmpty()){
            ListNode minNode = q.poll();
            curr.next =minNode;
            curr = curr.next;

            if(minNode.next != null){
                q.offer(minNode.next);
            }
        }
        return dummy.next;
    }
}

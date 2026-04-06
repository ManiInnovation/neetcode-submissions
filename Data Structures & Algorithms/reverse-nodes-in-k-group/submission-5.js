/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        let curr = head;
        let i = 0;
        let dummyHead = new ListNode(0)
        let origin = head;
        let lastNode = null;
        while(curr != null){
            if(i === k-1){
                let tmp = curr.next;
                curr.next = null;
                let prev = null;
                let c = origin;
                while(c !== null){
                    let tmp = c.next;
                    c.next = prev;
                    prev = c;
                    c = tmp;
                }

                if(lastNode == null){
                dummyHead.next = prev;
                }else{
                lastNode.next = prev;
                }

                lastNode = origin;
                lastNode.next = tmp;
                i=0
                curr = tmp;
                origin = tmp;
            }else{
            curr = curr.next;
            i++
            }
        }
        return dummyHead.next;
    }
}

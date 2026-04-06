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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let dummyHead = new ListNode(0);
        const dummy = {val:0,next:null}
        let curr = dummyHead
        let q = 0
        while(l1 !== null || l2 !== null || q >0 ){
            l1 = l1||dummy
            l2 = l2||dummy
            let sum = l1.val + l2.val + q;
            q = Math.trunc(sum/10)
            curr.next = new ListNode(sum%10);
            curr = curr.next;
            l1 = l1.next;
            l2 = l2.next;
        }
        return dummyHead.next;
    }
}

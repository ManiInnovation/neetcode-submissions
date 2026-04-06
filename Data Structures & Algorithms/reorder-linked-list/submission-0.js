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
     * @return {void}
     */
    reorderList(head) {
        let slow = head;
        let fast = head;
        while(fast !== null && fast.next !== null){
            fast = fast.next.next;
            slow = slow.next;
        }
        let secondHalf = slow.next;
        slow.next = null;

        let prev = null;
        let curr = secondHalf;
        while(curr != null){
            const tmp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = tmp;
        }
        secondHalf = prev;
        curr = head;
        let curr2 = secondHalf;
        while(curr !=null && curr2 !== null){
            const tmp = curr.next;
            const temp2 = curr2.next;
            curr.next = curr2;
            curr2.next = tmp;
            curr2 = temp2;
            curr = tmp;
        }
        return head

    }
}

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
     * @return {ListNode}
     */
    reverseList(head) {
        const arr = []
        let curr = head;
        while(curr !== null){
            arr.push(curr);
            curr = curr.next
        }
        for(let i = arr.length-1;i>=0;i--){
            if(i === 0){
                arr[i].next = null;
                continue;
            }
            arr[i].next = arr[i-1];
        }
        if(arr.length > 0)
        head = arr[arr.length-1]
        return head
    }
}

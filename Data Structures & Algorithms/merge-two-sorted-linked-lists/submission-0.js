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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let curr1 = list1;
        let curr2 = list2;
        let sortedHead = null;
        let sortedTail = null
        while(curr1 !== null && curr2 !== null){
            if(curr1.val < curr2.val){
                if(sortedTail === null){
                    sortedTail = new ListNode(curr1.val,null);
                    sortedHead = sortedTail
                    curr1 = curr1.next;
                }else{
                     sortedTail.next = new ListNode(curr1.val,null);
                     sortedTail = sortedTail.next;
                    curr1 = curr1.next;
                }
            }else{
                if(sortedTail === null){
                    sortedTail = new ListNode(curr2.val,null);
                    sortedHead = sortedTail
                    curr2 = curr2.next;
                }else{
                     sortedTail.next = new ListNode(curr2.val,null);
                     sortedTail = sortedTail.next;
                    curr2 = curr2.next;
                }
            }
        }
        while(curr1 !== null){
             if(sortedTail === null){
                    sortedTail = new ListNode(curr1.val,null);
                    sortedHead = sortedTail
                    curr1 = curr1.next;
                }else{
                     sortedTail.next = new ListNode(curr1.val,null);
                     sortedTail = sortedTail.next;
                    curr1 = curr1.next;
                }
        }
         while(curr2 !== null){
             if(sortedTail === null){
                    sortedTail = new ListNode(curr2.val,null);
                    sortedHead = sortedTail
                    curr2 = curr2.next;
                }else{
                     sortedTail.next = new ListNode(curr2.val,null);
                     sortedTail = sortedTail.next;
                    curr2 = curr2.next;
                }
         }
         return sortedHead
    }
}

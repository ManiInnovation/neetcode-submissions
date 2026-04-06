class Solution {
    reverseKGroup(head, k) {
        let curr = head;
        let i = 0;
        let dummyHead = new ListNode(0);
        let origin = head;
        let lastNode = null;

        while (curr != null) {
            if (i === k - 1) {
                let nextGroupHead = curr.next;

                // cut the group
                curr.next = null;

                // reverse current group
                let prev = null;
                let c = origin;
                while (c !== null) {
                    let tmp = c.next;
                    c.next = prev;
                    prev = c;
                    c = tmp;
                }

                // connect previous part
                if (lastNode == null) {
                    dummyHead.next = prev;
                } else {
                    lastNode.next = prev;
                }

                // IMPORTANT FIX: connect tail to next group
                origin.next = nextGroupHead;

                // move lastNode to tail of reversed group
                lastNode = origin;

                // move to next group
                origin = nextGroupHead;
                curr = nextGroupHead;
                i = 0;
            } else {
                curr = curr.next;
                i++;
            }
        }

        return dummyHead.next;
    }
}
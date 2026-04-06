/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {TreeNode}
     */
    invertTree(root) {
        
        let arr = []
        let i = 0;
        arr.push(root)
        while(arr.length !== i){
            if(arr[i] !== null){
            let curr = arr[i]
            arr.push(curr.right);
            arr.push(curr.left);
            curr.left = curr.right;
            curr.right = arr[arr.length-1];
            }
            i++
        }
        return root;
    }
}

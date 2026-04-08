class Solution {
    public boolean isPalindrome(String s) {
         s = s.replaceAll("[^A-Za-z0-9]", "").toLowerCase();
         char[] arr = s.toCharArray();
        int i = 0; int j = arr.length-1;
        while(i<j){
            if(arr[i++] != arr[j--]){
                return false;
            }
        }
         return true;
    }
}

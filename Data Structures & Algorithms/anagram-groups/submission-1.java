class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        List<List<String>> result = new ArrayList<>();
        Map<String, List<String>> map = new HashMap<>();
        for(String s: strs){
            char[] charArr = s.toCharArray();
            Arrays.sort(charArr);
            String key = new String(charArr);
            if(!map.containsKey(key)){
                List<String> group = new ArrayList<>();
                map.put(key, group);
                result.add(group);
            }
            map.get(key).add(s);
        }
        return result;
    }
}

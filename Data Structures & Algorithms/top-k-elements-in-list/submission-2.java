class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        Map<Integer, Integer> map = new HashMap<>();
        Set<Integer> uniq = new HashSet<>();

        for(int num: nums){
            map.put(num, map.getOrDefault(num, 0)+1);
        }

         // Convert keys to list
        List<Integer> list = new ArrayList<>(map.keySet());

        // Sort based on frequency (descending)
        Collections.sort(list, (a, b) -> map.get(b) - map.get(a));

        // Take first k elements
        int[] res = new int[k];
        for (int i = 0; i < k; i++) {
            res[i] = list.get(i);
        }

        return res;
    }
}

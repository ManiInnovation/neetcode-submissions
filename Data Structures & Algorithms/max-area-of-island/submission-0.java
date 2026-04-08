class Solution {
    public int maxAreaOfIsland(int[][] grid) {
         if(grid == null) return 0;
    int m = grid.length;
    int n = grid[0].length;
    int area = 0;
    for(int i=0;i<m;i++){
        for(int j=0;j<n;j++){
            
            if(grid[i][j] == 1){
                int currentArea =  dfs(grid, i,j);
                area = Math.max(area,currentArea);
            }
        }
    }
    return area;
        
    }

     private int dfs(int[][] grid, int i, int j) {
        int m = grid.length;
        int n = grid[0].length;

        // base case
        if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] == 0) {
            return 0;
        }

        // mark visited
        grid[i][j] = 0;

        // 1 (current cell) + all 4 directions
        return 1
            + dfs(grid, i - 1, j)
            + dfs(grid, i + 1, j)
            + dfs(grid, i, j - 1)
            + dfs(grid, i, j + 1);
    }
}

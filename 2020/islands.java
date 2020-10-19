import java.util.Queue; 

class Solution {
    public int numIslands(char[][] grid) {
        
        int islandCount = 0;
        
        for (int i = 0; i < grid.length; i++) {
            for (int j = 0; j < grid[i].length; j++) {
                if (grid[i][j] != '0') {
                    grid = dfs(i, j, grid);
                    islandCount++;
                }
            }
        }
        return islandCount;
    }
    
    public char[][] dfs (int i, int j, char[][] grid) {
        
        Deque<Integer> xStack = new ArrayDeque<Integer>();
        Deque<Integer> yStack = new ArrayDeque<Integer>();
        grid[i][j] = '0';
        
        xStack.push(i);
        yStack.push(j);
        
        while (!xStack.isEmpty()) {
            
            int xCoor = xStack.pop();
            int yCoor = yStack.pop();
            
            grid[xCoor][yCoor] = '0'; 
                        
            if (xCoor < grid.length - 1) {
                if (grid[xCoor+1][yCoor] == '1') {
                    xStack.push(xCoor + 1);
                    yStack.push(yCoor);
                }
            }
            
            if (xCoor > 0) {
                if (grid[xCoor-1][yCoor] == '1') {
                    xStack.push(xCoor - 1);
                    yStack.push(yCoor);                    
                } 
            }
            
            if (yCoor < grid[xCoor].length - 1) {
                if (grid[xCoor][yCoor + 1] == '1') {
                    xStack.push(xCoor);
                    yStack.push(yCoor + 1);                    
                }         
            }
            
            
            if (yCoor > 0) {
               if (grid[xCoor][yCoor - 1] == '1') {
                    xStack.push(xCoor);
                    yStack.push(yCoor - 1);                    
                }      
            }
        }
        return grid;
    }
}
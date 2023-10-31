public class ReverseAlgorithms {

    private String[] words1D;
    private String[][] words2D;

    public ReverseAlgorithms(String[] first, String[][] second) {
        this.words1D = first;
        this.words2D = second;
    }
    // Printing out Values in 1D Array
    public void printWords1D() {
        for(String index : words1D) {
            System.out.print(index + " ");
        }
    }
    
    // Printing out Values in 2D Array
    public void printWords2D() {
        for(String[] row : words2D) {
            for(String word : row) {
                System.out.print(word + " ");
            }
            System.out.println();
        }
    }

    // Reversing Elements in 1D Array
    public void reverse1D() {
        int end = words1D.length - 1;

        for(int start = 0; start < words1D.length / 2; start++) {
            String temp = words1D[start];
            words1D[start] = words1D[end];
            words1D[end] = temp;
            end--;
        }
    }

    // Reversing Elements in 2D Array from left to right aka by row
    public void reverse2DbyRow() {
        for(int row = 0; row < words2D.length; row++) {

            int startCol = 0;
            int endCol = words2D[0].length - 1;

            while(startCol < endCol) {
                String temp = words2D[row][startCol];
                words2D[row][startCol] = words2D[row][endCol];
                words2D[row][endCol] = temp;
                startCol++;
                endCol--;
            }
        }
    }

    // Reversing Elements in 2D Array from top to bottom aka by col
    public void reverse2DbyColumn() {
        for(int col = 0; col < words2D[0].length; col++) {

            int top = 0;
            int bottom = words2D.length - 1;

            while(top < bottom) {
                String temp = words2D[top][col];
                words2D[top][col] = words2D[bottom][col];
                words2D[bottom][col] = temp;
                top++;
                bottom--;
            }
        }
    }
}
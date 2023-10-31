// Importing Classes
import java.util.Stack;
import java.util.ArrayList;

public class Stacks {
    public static void main(String[] args) {

        // Using Stack Class
        Stack<String> stack = new Stack<String>();
        stack.push("GTA");
        stack.push("Batman");
        stack.push("Spiderman");
        stack.push("Residence Evil");
        stack.push("Far Cry 3");
        stack.push("Far Cry 5");
        stack.push("Far Cry 6");
        stack.pop();
        System.out.println(stack.peek());

        // Using my Custom Stack
        MyStack customStack = new MyStack();
        customStack.push("Test");
        customStack.push("Nazir");
        customStack.pop();
        System.out.println(customStack.peek());
    }

    // Custom Stack Algorithm
    public static class MyStack {

        // Declaring Attributes
        private ArrayList<String> items;
        
        // Constructor
        public MyStack() {
            this.items = new ArrayList<String>();
        }

        // Adds Items to Stack
        public void push(String value) {
            this.items.add(value);
        }

        // Removes Items to Stack
        public String pop() {
            if(isEmpty()) return "No items in stack";
            return this.items.remove(this.items.size() - 1);
        }
        
        // Returns the Item thats on top of the Stack
        public String peek() {
            return this.items.get(this.items.size() - 1);
        }

        // Returns if the Stack is Empty or not
        public boolean isEmpty() {
            return this.items.size() == 0;
        }

        // Returns the Stack size
        public int size() {
            return this.items.size();
        }
    }
}
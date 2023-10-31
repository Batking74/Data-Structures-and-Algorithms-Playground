import java.util.ArrayList;

public class Queues {
    public static void main(String[] args) {
        MyQueue queue = new MyQueue();
        queue.enQueue("Nazir");
        queue.enQueue("Femi");
        queue.enQueue("Doyin");
        queue.enQueue("Kj");
        queue.enQueue("Daniel");
        queue.deQueue();
        System.out.println(queue.front());
        System.out.println(queue.isEmpty());
        queue.print();
    }

    // Custom Queue Algorithm
    public static class MyQueue {

        // Declaring Attributes
        ArrayList<String> items;

        // Contructor
        public MyQueue() {
            this.items = new ArrayList<String>();
        }

        // Adding items to the front of the Queue/Enueuing Items to the Queue
        public void enQueue(String value) {
            this.items.add(value);
        }
        
        // Deleting items from the front of the Queue/Dequeuing Items from the Queue
        public String deQueue() {
            if(isEmpty()) return "Queue is Empty";
            return this.items.remove(0);
        }
        
        // Return the front element without removing it
        public String front() {
            return this.items.get(0);
        }

        // Returns if the queue list is empty or not
        public boolean isEmpty() {
            return this.items.size() == 0;
        }

        // Returns the size of the queue
        public int size() {
            return this.items.size();
        }

        // Prints all of the items in the queue
        public void print() {
            System.out.println(this.items);
        }
    }
}
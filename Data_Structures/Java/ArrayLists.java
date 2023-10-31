import java.util.ArrayList;
import java.util.Arrays;

public class ArrayLists {
    public static void main(String[] args) {
        ArrayList<String> myStrings = new ArrayList<>(Arrays.asList("Nazir", "Knuckles", "TJ"));

        ArrayList<Integer> myInts = new ArrayList<>();

        // Getting indexes from the ArrayList
        myStrings.get(0);
        myStrings.get(1);

        // Appending new Elements to the end of the ArrayList
        myStrings.add("Hello");
        myStrings.add("World");

        // Add elements to any specified index in ArrayList. Indexes can be overwritten
        myStrings.set(0, "red");
        myStrings.set(1, "black");

        // Getting the length of the ArrayList
        myStrings.size();

        // Removing Elements from the ArrayList by Index and by Value
        System.out.println(myStrings.get(2));
        myStrings.remove("TJ");
        myStrings.remove(2);
        System.out.println(myStrings.get(2));

        // ArrayList makes printing easy
        System.out.println(myStrings);
    }
}
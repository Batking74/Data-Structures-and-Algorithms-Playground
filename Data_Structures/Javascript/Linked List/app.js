const LinkedList = require('./LinkedList');

const link = new LinkedList();
const img = new LinkedList();
const pro = new LinkedList();
const rat = new LinkedList();
const etc = new LinkedList();
const m = new LinkedList();
const range = 201;
const min = 50;
img.insertAtHead( (Math.round( Math.random() * range) + min));
link.insertAtHead( (Math.round( Math.random() * range) + min));
pro.insertAtHead( (Math.round( Math.random() * range) + min));
rat.insertAtHead( (Math.round( Math.random() * range) + min));
etc.insertAtHead( (Math.round( Math.random() * range) + min));
m.insertAtHead('First Node: ');

for(let i = 0; i < img.length; i++) {
    console.log(m.getIndex(i).value + (img.getIndex(i).value * 2));
    console.log(m.getIndex(i).value + (link.getIndex(i).value / 2));
    console.log(m.getIndex(i).value + (pro.getIndex(i).value + 10));
    console.log(m.getIndex(i).value + (rat.getIndex(i).value - 20));
    console.log(m.getIndex(i).value + (etc.getIndex(i).value % 20));
    console.log("Booty");
    console.log('------------------------');
}

console.log(img.length)
const SetClass = require('./SetClass');

const set1 = new SetClass();
set1.add(1);
set1.add(3);
set1.add(5);
set1.add(3);
set1.add(7);

const set2 = new SetClass();
set2.add(11);
set2.add(3);
set2.add(7);
set2.add(3);
set2.add(5);
set2.add(1);
set2.add(31);

const res = set1.subset(set2);
console.log(res);

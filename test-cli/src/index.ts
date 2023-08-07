// const { hello } = require('@crispy/test');
import { hello, testAlpha, alpha } from '@crispy/test';

// import {alpha} from '@crispy/test/alpha';
import { items } from '@crispy/test/alpha';
import { item1, item2, item3 } from '@crispy/test/alpha/items';


console.log(hello('crispy'), '\n\n');


testAlpha()
console.log('\n\n');

console.log(alpha.items.item1());
console.log(alpha.items.item2());
console.log(alpha.items.item3());
console.log('\n\n')


console.log(items.item1());
console.log(items.item2());
console.log(items.item3());
console.log('\n\n')

console.log(items);
console.log('\n\n')


console.log(item1());
console.log(item2());
console.log(item3());
console.log('\n\n')
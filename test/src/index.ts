// module.exports = {
//     hello : (name) => `Hello, ${name}!`
// }

// import { items } from './alpha';

import * as alpha from './alpha';

export const hello = (name: string) => `Hello, ${name}`;

export const testAlpha = () => {
    console.log('testAlpha');
    console.log(alpha.items.item1());
    console.log(alpha.items.item2());
    console.log(alpha.items.item3());
}

export { alpha }
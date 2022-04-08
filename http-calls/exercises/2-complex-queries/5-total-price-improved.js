/**
 * Fill in the blanks to create a script
 * that prints the total cost if someone would buy one of every item
 * without applying any discount, but only count items that are currently in stock
 */

import './qs.js';

/* way 3: use filters and sort. 4116.99*/ //best way
async function ex4() {
  const query = qs.stringify(
    {
      /** here we can include all query parameter fields that we want to pass and their values */
      // we provide which fields we want to select
      fields: ['outOfStock', 'price'],
      // we add filters
      filters: { outOfStock: { $eq: false } },
      // we define the ordering
      // sort: ['price:asc'],
      sort: ['price:desc'],
    },
    {
      encodeValuesOnly: true,
    },
  );
  console.log('The query string', query);

  // call the matching endpoint and include the querystring after the ?
  const baseUrl = `http://localhost:1337/api/products`;
  const response = await fetch(`${baseUrl}?${query}`);
  const result = await response.json();
  // console.log('result:', result);
  const totalPrice = result.data
    .map((ite) => ite.attributes.price)
    .reduce((pre, nex) => pre + nex);
  console.log('total:', totalPrice);
  return totalPrice;
}

ex4();

/*  way 1: 4116.99. not including id=4, outOfStock= null, price 25 */
// async function ex4() {
//   const query = qs.stringify(
//     {
//       fields: ['outOfStock', 'price'],
//     },
//     {
//       encodeValuesOnly: true,
//     },
//   );
//   console.log('The query string', query);

//   // call the matching endpoint and include the querystring after the ?
//   const baseUrl = `http://localhost:1337/api/products`;
//   const response = await fetch(`${baseUrl}?${query}`);
//   const result = await response.json();
//   console.log('result:', result);
//   const total = result.data
//     .filter((ele) => ele.attributes.outOfStock === false)
//     .map((ite) => ite.attributes.price)
//     .reduce((pre, nex) => pre + nex);
//   console.log('total:', total);
//   return total;
// }

// ex4();

/* way 2: from aviv 4116.99. not including id=4, outOfStock= null, price 25 */
// async function ex4() {
//   const query = qs.stringify(
//     {
//       fields: ['price', 'outOfStock'],
//     },
//     {
//       encodeValuesOnly: true,
//     },
//   );
//   console.log('The query string', query);

//   // call the matching endpoint and include the querystring after the ?
//   const baseUrl = 'http://localhost:1337/api/products';
//   const response = await fetch(`${baseUrl}?${query}`);
//   const result = await response.json();
//   console.log(result);
//   let sum = 0;
//   for (let i = 0; i < result.data.length; i++) {
//     if (result.data[i].attributes.outOfStock === false) {
//       sum = sum + result.data[i].attributes.price;
//     }
//   }
//   console.log(sum);
//   return sum;
// }
//  ex4();




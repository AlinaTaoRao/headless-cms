/**
 * Fill in the blanks to create a script
 * that prints the name of the most expensive item that someone can buy (after applying any discounts,
 * and not including any items that are out of stock)
 */

import './qs.js';

/* way 1: use filters and sort */
async function searchProductByName(nameStr) {
  const query = qs.stringify(
    {
      populate: ['discount'],
      fields: ['outOfStock', 'price', 'name'],
      filters: {
        outOfStock: { $eq: false },
        name: {
          $containsi: nameStr,
        },
      },
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
  console.log('result:', result);
  let theMostExepensiveItem = '';
  theMostExepensiveItem =
    result.data.length > 0
      ? result.data[0].attributes.name
      : `no such item with name "${nameStr}"!`;
  return theMostExepensiveItem;
}

async function test() {
  console.log(
    'the most expensive product containing name: ',
    await searchProductByName('name'),
  );
  console.log(
    ' the most expensive product containing prog: ',
    await searchProductByName('prog'),
  );
  console.log(
    'the most expensive product containing pro: ',
    await searchProductByName('pro'),
  );
}

test();

/* way 2: return the most expensive item. from Aviv, works */
// async function ex6() {
//   const query = qs.stringify(
//     {
//       populate: ['discount'],
//       fields: ['name', 'price', 'outOfStock'],
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
//   let prices = [];
//   for (let i = 0; i < result.data.length; i++) {
//     if (result.data[i].attributes.outOfStock === false) {
//       let price = result.data[i].attributes.price;
//       if (result.data[i].attributes.discount.data !== null) {
//         const discount =
//           result.data[i].attributes.discount.data.attributes.percentage;
//         price = Math.floor(price * ((100 - discount) / 100));
//       }
//       prices.push(price);
//     } else {
//       prices.push(0);
//     }
//   }
//   const mostExpensive = Math.max(...prices);
//   const item = prices.indexOf(mostExpensive);
//   const name = result.data[item].attributes.name;
//   console.log(name);
//   return name;
// }
// ex6(); //MacBook Pro 

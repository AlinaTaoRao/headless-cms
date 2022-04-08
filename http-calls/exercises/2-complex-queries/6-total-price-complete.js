/**
 * Fill in the blanks to create a script
 * that prints the total cost if someone would buy one of every item
 * taking into consideration that it's impossible to buy items that are out of stuck,
 * and taking the discount rates into account
 */

import './qs.js';
/* way 3: use filters and sort. 4025.491*/ // best way
async function ex6() {
  const query = qs.stringify(
    {
      populate: ['discount'],
      fields: ['outOfStock', 'price'],
      filters: { outOfStock: { $eq: false } },
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
  const discountedPrice = result.data
    .map((ite) => {
      // way 1: if statement, works
      // let price = ite.attributes.price;
      // if (ite.attributes.discount.data !== null) {
      //   const discount =
      //     price * (ite.attributes.discount.data.attributes.percentage / 100);
      //   price -= discount;
      // }
      // return price;

      // way 2: ternary, works
      let price = ite.attributes.price;
      price =
        ite.attributes.discount.data !== null
          ? price -
            price * (ite.attributes.discount.data.attributes.percentage / 100)
          : price;
      return price;
    })
    .reduce((pre, nex) => pre + nex);
  console.log('discountedPrice:', discountedPrice);
  return discountedPrice;
}
ex6();

/* way 1 : 4025.491. not including id=4, outOfStock= null, price 25 discount.data=null */
// async function ex6() {
//   const query = qs.stringify(
//     {
//       populate: ['discount'],
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
//   //  const pathOfDisscount = result.data[index].attributes.discount.data.attributes.percentage;
//   const priceWDiscount = result.data
//     .filter((ele) => ele.attributes.outOfStock === false)
//     .map((ite) => {
//       let price = ite.attributes.price;
//       if (ite.attributes.discount.data !== null) {
//         const discountPercentage =
//           ite.attributes.discount.data.attributes.percentage;
//         // price = Math.floor(price * ((100 - discountPercentage) / 100));
//         price = price * ((100 - discountPercentage) / 100);
//         console.log('price:', price);
//       } else {
//         price = price;
//       }
//       return price;
//     })
//     .reduce((pre, nex) => pre + nex);
//   console.log('priceWDiscount:', priceWDiscount);

//   return priceWDiscount;
// }
// ex6();

// /* way 2: from Aviv  //4025. not including id=4, outOfStock= null, price 25 discount.data=null */
// async function ex6() {
//   const query = qs.stringify(
//     {
//       populate: ['discount'],
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
//       let price = result.data[i].attributes.price; // 34
//       if (result.data[i].attributes.discount.data !== null) {
//         const discount =
//           result.data[i].attributes.discount.data.attributes.percentage;
//         price = Math.floor(price * ((100 - discount) / 100));
//       }
//       sum = sum + price;
//     }
//   }
//   console.log(sum);
//   return sum;
// }
// ex6();



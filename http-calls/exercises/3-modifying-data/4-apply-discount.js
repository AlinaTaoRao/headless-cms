/**
 * Complete the following function that applies a discount
 * to a product
 */
async function applyDiscount(productId, discountId) {
  const path = `products/${productId}?populate= discount`;
  const body = {
    data: {
      discount: {
        id: discountId,
      },
    },
  };
  const url = `http://localhost:1337/api/${path}`;
  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  return response.json();
}

applyDiscount(5, 2);

/* way 2: from aviv */
// async function applyDiscount(productId, discountId) {
//   const path = products/${productId}/?populate=discount;
//   const body = {
//     data: {
//       discount: {
//         id: discountId,
//       },
//     },
//   };
//   const url = http://localhost:1337/api/${path};
//   const response = await fetch(url, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(body),
//   });
//   return response.json();
// }
// applyDiscount(5, 2);


/* way 3: use GET method, from coach Bart, works*/
// async function applyDiscount(productId, discountId) {
//   const path = `products/${productId}?populate= discount`;
//   const url = `http://localhost:1337/api/${path}`;
//   const response = await fetch(url, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
//   return response.json();
// }

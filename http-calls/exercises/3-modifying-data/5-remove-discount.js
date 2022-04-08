/**
 * Complete the following function that removes the discount applied to a product
 */

/* way 2: discount:null. works no error, best way*/
async function removeDiscounts(productId) {
  // const path = `products/${productId}?populate=discount`;
  const path = `products/${productId}`;
  const body = {
    data: {
      discount: null
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
  console.log("discount removed.")
  return response.json();
}

removeDiscounts(37);
// applyDiscount(37, 3);

/* way 1: id: null, works, but have error  */
/* about:blank:15          PUT http://localhost:1337/api/products/5?populate=%20discount 500 (Internal Server Error) */
// async function removeDiscounts(productId) {
//   // const path = `products/${productId}?populate=discount`;
//   const path = `products/${productId}`;
//   // what is body refer to?
//   const bo = {
//     data: {
//       discount: {
//         id: null
//         // firstKey: null, // try 1: firstKey, works
//         // data: null, // try 2: data, works
//         // nonsense: null, // try 3: nonsense, works
//       },
//     },
//   };

//   const url = `http://localhost:1337/api/${path}`;
//   const response = await fetch(url, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(bo),
//   });
//   console.log("discount removed.")
//   return response.json();
// }

// // removeDiscounts(5);
// removeDiscounts(37);




/* -- opposite of remove : apply a discount to demo -- */
/**
 * applies a discount to a product
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
  console.log("discount added.")
  return response.json();
}

// applyDiscount(14, 3);

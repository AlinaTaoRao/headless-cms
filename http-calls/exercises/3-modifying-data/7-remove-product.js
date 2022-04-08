/**
 * Complete the following function that
 * removes the product with the given id
 */
/* way 1: set data:null. works */
// async function removeProduct(productId) {
//   const path = `products/${productId}`;
//   const body = {
//     data: null,
//   };
//   const url = `http://localhost:1337/api/${path}`;
//   const response = await fetch(url, {
//     method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(body),
//   });
//   console.log('run');
//   return response.json();
// }

// removeProduct(15);

/* way 2: not set body from Aviv */
async function removeProduct(productId) {
  const path = `products/${productId}`;
  const url = `http://localhost:1337/api/${path}`;
  const response = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const returned = await response.json();
  console.log(returned);
  return returned;
}

removeProduct(36);

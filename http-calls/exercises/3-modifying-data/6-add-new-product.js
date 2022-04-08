/**
 * Complete the following function that creates a new product
 */

/* way 2: short path, works, best way */
async function createNewProduct(
  name,
  description,
  price,
  discountId,
  categoryId,
  outOfStock,
) {
  const path = `products/`; 
  const body = {
    data: {
      name: name,
      description: description,
      price: price,
      category: {id:categoryId},
      outOfStock: outOfStock,
      discount: {id:discountId}
    },
  };
  const url = `http://localhost:1337/api/${path}`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  console.log("my product created")
  return response.json();
}
const description = 'this is a cool description created by Alina.'
// createNewProduct(name, description, price, discountId, categoryId, outOfStock);
createNewProduct('new name', description, 250, 2, 1, false);

/* way 1: works */
// async function createNewProduct(
//   name,
//   description,
//   price,
//   discount,
//   category,
//   outOfStock,
// ) {
//   const path = `products/`;
//   const body = {
//     data: {
//       name: name,
//       description: description,
//       price: price,
//       category: category,
//       outOfStock: outOfStock,
//       discount: { id: discount },
//     },
//   };
//   const url = `http://localhost:1337/api/${path}`;
//   const response = await fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(body),
//   });
//   return response.json();
// }

// // createNewProduct(name, description, price, discount, category, outOfStock);
// createNewProduct('new name', 'new description', 250, 1, 'Books', false);



/* way 3: from aviv, works */
// async function createNewProduct(
//   name,
//   description,
//   price,
//   discountId,
//   categoryId,
//   outOfStock,
// ) {
//   const path = 'products/?populate=category&populate=discount';
//   const body = {
//     data: {
//       name: name,
//       description: description,
//       price: price,
//       outOfStock: outOfStock,
//       discount: {
//         id: discountId,
//       },
//       category: {
//         id: categoryId,
//       },
//     },
//   };
//   const url = `http://localhost:1337/api/${path}`;
//   const response = await fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(body),
//   });
//   return response.json();
// }

// const description =
//   'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nisl enim, porttitor non arcu vel, auctor aliquet turpis. Ut nibh ex, gravida eget nisl eu, ornare molestie quam.';
// createNewProduct('clue', description, 20, 3, 3, false);
/**
 * Fill in the blanks to create a script 
 * that prints the total cost if someone would buy one of every item 
 * (ignoring whether it is in stock or not and not applying any discount)
 */

 import "./qs.js";
 async function ex4() {
   const query = qs.stringify(
   {
       fields: ['price'],
   }, 
   {
     encodeValuesOnly: true,
   });
   console.log("The query string", query);
 
   // call the matching endpoint and include the querystring after the ?
   const baseUrl = 'http://localhost:1337/api/products';
   const response = await fetch(`${baseUrl}?${query}`);
   const result = await response.json();
   console.log("result:", result);
   const totall = result.data.map(ele=>ele.attributes.price).reduce((pre, cur) =>{return pre+cur}, 0)
  //  return totall;
   console.log('totall:', totall);
 }
 ex4();
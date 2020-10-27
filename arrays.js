"use strict";


// 1. printIndices
function printIndices(items) {
  for (const i in items){
    console.log(`${items[i]} ${i}`);
  }
}


// 2. everyOtherItem
function everyOtherItem(items) {
  const results = [];

  for (const i in items){
    if (i % 2 === 0) {
      results.push(items[i]);
    }   
  } 
  console.log(results);
}


// 3. smallestNItems
function smallestNItems(items, n) {
  // Replace this with your code
}

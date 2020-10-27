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
  const sortedItems = items.sort((a,b) => a - b);
  const sortedNItems = sortedItems.slice(0,n);
  const reversedItems = sortedNItems.reverse();

  console.log(reversedItems);
}

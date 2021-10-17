---
template: post
title: Vanilla Binary Search
slug: vanilla-binary-search
draft: true
date: 2021-10-17T22:30:47.257Z
description: Implementing binary search in JavaScript
category: Binary Search, Interview Prep
---
Binary search is an algorithm that is used to search a sorted array. Each time when we search we divide the range by half.

Let's say we pick a random element in a sorted array

* If we pick the right element at the center, then we don't need to do anything
* If we pick an element that is smaller than target. Then we know we can find the element is in the right side.
* If we pick an element that is larger than target. Then we know we can find the element is in the left side.

Instead of picking a random element, we always pick the **middle** element in the current search range. This gives us `O(log(N))` runtime.

### Calculating `mid`

Note that when calculating `mid`, if the number of elements is even, there are two elements in the middle. We normally follow the convention of picking the first one, which is equivalent to doing integer division `(left + right) / 2`.

### Code

https://jsfiddle.net/sukruthmk/s13fk05u/15/

```js
const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    const num = arr[mid]
    if (num === target) {
      return mid
    }
    if (num > target) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }

  return -1
}
```


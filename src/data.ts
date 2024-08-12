// This file simulates the data that would be fetched from a database or API

export const threadId = Math.random().toString().slice(0, 5);
console.log('threadId:', threadId);

// "100", "101", "102", ...
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from#using_arrow_functions_and_array.from
export const pagesSlugs = Array.from({ length: 100 }, (_, i) => i + 100).map(
  (number) => number.toString(),
);

export const pagesContent = pagesSlugs.map((slug) => {
  return { slug, text: `Slug: ${slug} Thread ID: ${threadId}` };
});

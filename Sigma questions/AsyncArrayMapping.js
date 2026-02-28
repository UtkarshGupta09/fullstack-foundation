let arr = [1, 2, 3, 4, 5];

async function arrayMapping(arr) {
  const promise = arr.map(
    (x) => 
        new Promise((resolve) => {
        setTimeout(() => {
          resolve(x * 2);
        }, 500);
      }),
  );
  return  Promise.all(promise);
}
arrayMapping(arr).then((result) => {
  console.log(result);
});

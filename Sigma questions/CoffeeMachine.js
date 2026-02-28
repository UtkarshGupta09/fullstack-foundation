function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function brewCoffee(type) {
  const randomDelay = (Math.floor(Math.random() * 7) + 1) * 1000;
  await delay(randomDelay);
  return `✅ Your ${type} is ready! Enjoy your drink.`;
}
brewCoffee("Black Coffee").then((res) => {
  console.log(res);
});

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    //resolve(1);
    reject(new Error("message"));
  }, 2000);
});

p.then((res) => console.log("res", res)).catch((err) => console.log("asd"));

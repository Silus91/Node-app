console.log("before");
getUser(1, (user) => {
  console.log("user", user);

  getRepositories(user.huj, (repos) => {
    console.log(`repo ${repos}`);
  });
});

console.log("after");

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("getUser");
      resolve({ id: id, huj: "user" });
    }, 2000);
  });
}

function getRepositories(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("getRepo...");
      resolve([`${username}`, "remo3", "i huj wie co jeszcze"]);
    }, 2000);
  });
}

import getData from "./lib/service.js";

getData(1)
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

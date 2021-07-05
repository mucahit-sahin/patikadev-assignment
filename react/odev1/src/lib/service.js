import axios from "axios";
const getData = (userId) => {
  return new Promise(async (resolve, reject) => {
    const { data: user } = await axios(
      "https://jsonplaceholder.typicode.com/users/" + userId
    );
    const { data: posts } = await axios(
      "https://jsonplaceholder.typicode.com/posts?userId=" + userId
    );
    resolve({ ...user, posts });
  });
};
export default getData;

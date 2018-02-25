import axios from "axios";

const fetchData = () => {
  return axios("https://jsonplaceholder.typicode.com/posts").then(
    res => res.data
  );
};

export default fetchData;

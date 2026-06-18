//  імпорт бібліотек
import axios from 'axios';

export async function getImagesByQuery(query) {
  // return axios
  try {
    const response = await axios.get('https://pixabay.com/api/', {
      params: {
        key: '56293122-e27c6b73e2974564ba58f2b50',
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    });
    // .then(response => response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
  // return console.log('GET searchImage:', query, axiosGet);
}

// Get request
// axios
//   .get("https://jsonplaceholder.typicode.com/posts", {
//     params: {
//       postId: 5,
//     },
//   })
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((error) => {
//     console.error(error);
//   })
//   .finally(() => {
//     console.log("Request completed");
//   });

// Post request
// axios
//   .post("https://jsonplaceholder.typicode.com/posts", {
//     title: "foo",
//     body: "bar",
//     userId: 1,
//   })
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((error) => {
//     console.error(error);
//   })
//   .finally(() => {
//     console.log("Request completed");
//   });

// Put request
// axios
//   .put("https://jsonplaceholder.typicode.com/posts/1", {
//     title: "foo",
//     body: "bar",
//     userId: 1,
//   })
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((error) => {
//     console.error(error);
//   })
//   .finally(() => {
//     console.log("Request completed");
//   });

// Patch request
// axios
//   .patch("https://jsonplaceholder.typicode.com/posts/1", {
//     title: "foo",
//   })
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((error) => {
//     console.error(error);
//   })
//   .finally(() => {
//     console.log("Request completed");
//   });

// Delete request
// axios
//   .delete("https://jsonplaceholder.typicode.com/posts/1")
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((error) => {
//     console.error(error);
//   })
//   .finally(() => {
//     console.log("Request completed");
//   });

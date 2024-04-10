import axios from "axios";

const URL_SERVER = "http://localhost:3004";

export const getPosts = async (
  oldPostItems,
  page = 1,
  order = "asc",
  limit = 10,
  sort = "id"
) => {
  try {
    // const headers = {
    //   "Access-Control-Allow-Origin": "*",
    // };

    const response = await axios.get(
      `${URL_SERVER}/posts?_page=${page}&_order=${order}&_limit=${limit}&_sort=${sort}`,
      {}
    );
    // const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
    // const response = await axios.get(
    //   `https://newsapi.org/v2/top-headlines?india=us&category=technology&from=2022-09-21&to=2022-09-21&sortBy=popularity&apiKey=961e6ad1f5924b6faa6016ffca2c5c78`,
    //   {}
    // );

    return {
      posts: oldPostItems.posts
        ? [...oldPostItems.posts, ...response.data]
        : response.data,
      page: page,
      end: response.data.length === 0 ? true : false,
    };
  } catch (error) {
    throw error;
  }
};

export const addNewsletter = async (data) => {
  try {
    // const headers = {
    //   "Access-Control-Allow-Origin": "*",
    // };
    const findUser = await axios.get(
      `${URL_SERVER}/newsletter?email=${data.email}`,
      {}
    );
    if (!Array.isArray(findUser.data) || !findUser.data.length) {
      const response = await axios({
        method: "POST",
        url: `${URL_SERVER}/newsletter`,
        data: {
          email: data.email,
        },
      });
      return {
        newletter: "added",
        email: response.data,
      };
    } else {
      return {
        newletter: "exist",
      };
    }
  } catch (error) {
    throw error;
  }
};

export const getPost = async (id) => {
  try {
    const response = await axios.get(`${URL_SERVER}/posts/${id}`);
    return response.data;
  } catch (error) {
    return '404';
  }
};

import api from "../../api/api";

const getBook = async (id) => {
  try {
    const res = await api.get(`/books/book/${id}`);
    return res.data.data;
  } catch (error) {
    return false;
  }
};

export default getBook;

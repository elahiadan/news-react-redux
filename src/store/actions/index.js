import * as api from "../../api";
import {
  GET_POST,
  ADD_NEWS_LETTER,
  REMOVE_NEWS_LETTER,
  VIEW_POST,
  REMOVE_VIEW_POST
} from "../type";

export const getPosts = (pageItem, page, order, limit) => ({
  type: GET_POST,
  payload: api.getPosts(pageItem, page, order, limit),
});

export const addNewsletter = (data) => ({
  type: ADD_NEWS_LETTER,
  payload: api.addNewsletter(data),
});

export const removeNewsletter = (data) => ({
  type: REMOVE_NEWS_LETTER,
  payload: {
    newsletter: false,
    email: [],
  },
});

export const getPost = (id) => ({
  type: VIEW_POST,
  payload: api.getPost(id),
});

export const clearPostItem = () => ({
  type: REMOVE_VIEW_POST,
  payload: {},
});

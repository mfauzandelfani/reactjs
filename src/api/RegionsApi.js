import axios from "axios";
import config from "../config/config";

const list = async () => {
  try {
    const result = await axios.get(`${config.domain}/region/`);
    return result.data;
  } catch (error) {
    return await error.message;
  }
};

const deleted = async (id) => {
  try {
    const result = await axios.delete(`${config.domain}/region/${id}`);
    return result;
  } catch (error) {
    return await error.message;
  }
};

const create = async (payload) => {
  try {
    const result = await axios.post(`${config.domain}/region/`, payload);
    return result;
  } catch (error) {
    return await error.message;
  }
};
const upload = async (payload) => {
  try {
    const result = await axios.post(`${config.domain}/region/upload`, payload)
    return result
  } catch (error) {
    return await error.message
  }
};
const update = async (data) => {
  try {
    const result = await axios.put(`${config.domain}/region/${data.id}`, data);
    return result;
  } catch (error) {
    return await error.message;
  }
};

const updatePhoto = async (data) => {
  const id = parseInt(data.get('id'))
  try {
    const result = await axios.put(`${config.domain}/region/upload/${id}`, data);
    return result;
  } catch (error) {
    return await error.message;
  }
};

const findOne = async (id) => {
  try {
    const result = await axios.get(`${config.domain}/region/${id}`);
    return result.data;
  } catch (error) {
    return await error.message;
  }
};

export default { list, deleted, create, update, findOne, upload, updatePhoto };

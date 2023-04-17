import axiosClient from '../config/axios';
import { get } from './LocalStorageService'

export const login = async ({
  email,
  password
}) => {
  try {
    const response = await axiosClient({
      method: 'post',
      url: '/login',
      data: {
        email,
        password
      },
      baseURL: 'http://127.0.0.1:8000/api'
    });
    if (response.data.succes) {

      return response;
    }
    return {
      hasError: true, error: response.data.message
    }
  } catch (error) {
    return {
      hasError: true
    };
  }
};

export const signUp = async (dataUser) => {
  try {
    const response = await axiosClient({
      method: 'post',
      url: '/users',
      data: { ...dataUser },
      baseURL: 'http://127.0.0.1:8000/api'
    });
    return response;
  } catch (error) {
    return {
      hasError: true
    };
  }
};

export const getFavorites = async () => {
  try {
    const id = get('userId')
    const response = await axiosClient({
      method: 'get',
      url: `/favorites/${id}`,
      baseURL: 'http://127.0.0.1:8000/api'
    });
    return response;
  } catch (error) {
    return {
      hasError: true
    };
  }
};

export const addFavorites = async (idFavorite) => {
  try {
    const id = get('userId')
    const response = await axiosClient({
      method: 'post',
      data: { "id_usuario": id,
      "ref_api": idFavorite},
      url: '/favorites',
      baseURL: 'http://127.0.0.1:8000/api'
    });
    return response;
  } catch (error) {
    return {
      hasError: true
    };
  }
};

export const deleteFavorite = async (id) => {
  try {
    const response = await axiosClient({
      method: 'delete',
      url: `/favorites/${id}`,
      baseURL: 'http://127.0.0.1:8000/api'
    });
    return response;
  } catch (error) {
    return {
      hasError: true
    };
  }
};

export const getUserData = async () => {
  try {
    const id = get('userId')
    const response = await axiosClient({
      method: 'get',
      url: `/users/${id}`,
      baseURL: 'http://127.0.0.1:8000/api'
    });
    return response;
  } catch (error) {
    return {
      hasError: true
    };
  }
};

export const UpdateUserData = async (dataUser) => {
  try {
    const id = get('userId')
    const response = await axiosClient({
      method: 'put',
      data: { ...dataUser },
      url: `/users/${id}`,
      baseURL: 'http://127.0.0.1:8000/api'
    });
    return response;
  } catch (error) {
    return {
      hasError: true
    };
  }
};
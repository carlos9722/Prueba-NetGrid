import axiosClient from '../config/axios';

export const getCharacters = async () => {
  try {
    const response = await axiosClient.get('/character');
    return response;
  } catch (error) {
    return { hasError: true };
  }
};

export const getCharacter = async (id) => {
  try {
    const response = await axiosClient.get(`/character/${id}`);
    return response;
  } catch (error) {
    return { hasError: true };
  }
};

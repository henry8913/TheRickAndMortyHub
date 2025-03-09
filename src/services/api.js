
const API_URL = 'https://rickandmortyapi.com/api';

export const fetchCharacters = async (page = 1) => {
  try {
    const response = await fetch(`${API_URL}/character/?page=${page}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching characters:', error);
    throw error;
  }
};

export const fetchCharacterById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/character/${id}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching character ${id}:`, error);
    throw error;
  }
};

export const fetchCharacters = async () => {
    try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error("Failed to fetch characters:", error);
    }
};

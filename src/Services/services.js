import axios from "axios";

const searchImages = async (term) => {
    const resp = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID 7VvXbHXJhlxqRvic1ZIP9TE3SKy7piDmE7IhvhAkh34'
        },
        params: {
            query: term
        }
    });

    return resp.data?.results;
};

export default searchImages;
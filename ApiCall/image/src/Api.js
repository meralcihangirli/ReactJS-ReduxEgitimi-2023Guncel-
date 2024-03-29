import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID DeDpq3_jgDBWQhnDJSYk6H73FOtMwhRpetYS6cPZQik'
        }, params: {
            query: term
        }
    })
    debugger;
    return response.data.results;
};
export default searchImages
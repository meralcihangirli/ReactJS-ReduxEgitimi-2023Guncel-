import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/photos/?client_id=_QtL_48iATBTT0647xoU_XvS_LTHKnSAcqIzmTI4e4U', {
        headers: {
            Authorization: 'Client-ID _QtL_48iATBTT0647xoU_XvS_LTHKnSAcqIzmTI4e4U'
        }, params: {
            query: term,
        },
    })
    debugger;
    return response.data.results;
};
export default searchImages
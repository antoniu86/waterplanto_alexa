const axios = require('axios');
const url = 'https://waterplanto.herokuapp.com/alexa_api';

module.exports = {
    getApiCall(accessToken, endpoint, language, slots) {
        const url_call = url + endpoint;
        
        var config = {
            timeout: 6500, // timeout api call before we reach Alexa's 8 sec timeout, or set globally via axios.defaults.timeout
            data: {
                language: language,
                slots: slots
            },
            headers: {
                'Accept': 'application/sparql-results+json',
                'Authorization': `Bearer ${accessToken}`
            }
        };
        
        async function getJsonResponse(url, config){
            const res = await axios.get(url, config);
            return res;
        }
        
        return getJsonResponse(url_call, config).then((result) => {
            console.log(result);
            return result;
        }).catch((error) => {
            console.log(error);
        });
    }
}
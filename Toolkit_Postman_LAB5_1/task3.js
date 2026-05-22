const axios = require('axios');

axios.get('https://json.geoiplookup.io/')
    .then(response => console.log('Ответ API:', response.data))
    .catch(error => console.error('Ошибка:', error.message));
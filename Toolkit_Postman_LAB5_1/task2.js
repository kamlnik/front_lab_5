const axios = require('axios');

axios.get('https://vk.com')
    .then(response => {
        console.log('Статус:', response.status);
    })
    .catch(error => {
        console.error('Ошибка:', error.message);
    });
const { default: axios } = require('axios');

module.exports = async () => {
    try {
        const res = await axios.get('localhost:1337/api/movies?populate=*');
        return res.data;
    } catch (error) {
        console.error(error);
    }
}
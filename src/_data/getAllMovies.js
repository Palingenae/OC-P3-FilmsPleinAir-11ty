'use strict';

/**
 * A movie
 * @typedef {Object} Movie
 * @property {string} title - The title
 * @property {string} slug - The slug
 * @property {Date} session - The session
 * @property {string} duration - How long the movie is
 */

const env = require('dotenv').config();
const axios = require('axios');

/**
 * @returns Promise<any[]>
 */
async function getAllMovies() {

    const url = "http://127.0.0.1:1337/api/movies";

    const headers = {
        headers: {
            Authorization: `Bearer ${process.env.STRAPI_TOKEN}`
        }
    };

    try {
        const response = await axios.get(url, headers)
        const movies = response.data.data;

        /**
         *
         * @type {Map<string, Movie[]>}
         */
        const moviesSessions = new Map();
        const optionFormatDate = {
            day: 'numeric',
            weekday: 'long',
            // month: 'long'
        };

        for (const movie of movies) {
            const schedule = mapMovies(movie);
            const key = schedule.time.toLocaleDateString(
                undefined,
                optionFormatDate
            )
            if (!moviesSessions.has(key)) {
                moviesSessions.set(key, []);
            }
            moviesSessions.get(key).push(schedule);
        }

        return Array.from(moviesSessions.entries());
    } catch (error) {
        console.log(error)
    }
    
}
/**
 * 
 * @param {any} movie 
 * @returns {Movie}
 */
function mapMovies(movie) {
    return {
        id: movie.id,
        slug: movie.attributes.slug,
        title: movie.attributes.title,
        time: new Date(`${movie.attributes.date} ${movie.attributes.time}`),
        duration: movie.attributes.length,
        emotion: movie.attributes.emotion,
        category: movie.attributes.category,
        trailer: movie.attributes.trailer,
        synopsis: movie.attributes.synopsis,
        interest: movie.attributes.interest
    };
}

module.exports = getAllMovies();
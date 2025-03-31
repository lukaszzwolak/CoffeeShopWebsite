import { API_URL } from './settings.js';

export const getData = async (callback) => {
    try {
        const res = await fetch(`${API_URL}/app`);
        const json = await res.json();
        callback(json);
    } catch (err) {
        console.error('Fetch error:', err);
    }
};

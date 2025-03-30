import { API_URL } from "./settings.js";

export const postContact = (data, callback) => {
    fetch(API_URL + '/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then((res) => res.json())
        .then(() => {
            callback();
        })
        .catch((err) => console.error('Error posting product:', err));
};
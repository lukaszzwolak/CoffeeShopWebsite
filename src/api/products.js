import { API_URL } from "./settings.js";

export const getProducts = (callback) => {
    fetch(API_URL + '/products')
        .then((res) => res.json())
        .then((products) => callback(products))
        .catch((err) => console.error('Error fetching products:', err));
};

export const postProduct = (data) => {
    fetch(API_URL + '/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then((res) => res.json())
        .then((newProduct) => {
            console.log('Product added:', newProduct);
        })
        .catch((err) => console.error('Error posting product:', err));
};

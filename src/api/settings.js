// export const API_URL = 'http://localhost:3131';

const API_URL = window.location.origin.includes('replit.app')
    ? window.location.origin + '/api'
    : 'http://localhost:3131/api';

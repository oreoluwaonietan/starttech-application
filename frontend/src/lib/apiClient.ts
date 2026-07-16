import axios from 'axios';

// Defaults to a relative path so requests go through the same CloudFront
// domain that serves the frontend (avoids mixed-content / CORS issues in prod).
// Override with VITE_API_BASE_URL for local development against a standalone backend.
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api/v1';

export const apiClient = axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true, // Crucial for httpOnly cookies
});

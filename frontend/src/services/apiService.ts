// Base URL for our backend
const API_BASE_URL = "http://localhost:8081";

// This is where we'll store the JWT "key card"
let authToken: string | null = null;

/**
 * Saves the token in our service after login.
 */
export const setAuthToken = (token: string) => {
    authToken = token;
};

/**
 * A helper function to make authenticated requests to our API.
 */
const fetchWithAuth = async (url: string, options: RequestInit = {}) => {
    // Create default headers
    const headers = new Headers({
        'Content-Type': 'application/json',
        ...options.headers,
    });

    // If we have a token, add it to the Authorization header
    if (authToken) {
        headers.append('Authorization', `Bearer ${authToken}`);
    }

    const response = await fetch(`${API_BASE_URL}${url}`, {
        ...options,
        headers: headers,
    });

    if (!response.ok) {
        throw new Error(`API request failed: ${response.statusText}`);
    }

    // Check if the response is JSON before trying to parse it
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.indexOf("application/json") !== -1) {
        return response.json();
    } else {
        return response.text(); // Return as text if not JSON
    }
};

// --- Our API Functions ---

/**
 * Logs in a user and saves the token.
 */
export const login = async (email: string, password: string) => {
    const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    });

    if (!response.ok) {
        throw new Error("Login failed");
    }

    const data = await response.json();
    
    // Save the token!
    if (data.token) {
        setAuthToken(data.token);
    }
    
    return data;
};

/**
 * Fetches all hotspots from the backend.
 */
export const getHotspots = async () => {
    // This will return a Promise<Hotspot[]>
    return fetchWithAuth("/api/hotspots", {
        method: 'GET',
    });
};

/**
 * Fetches all drives from the backend.
 */
export const getDrives = async () => {
    // This will return a Promise<Drive[]>
    return fetchWithAuth("/api/drives", {
        method: 'GET',
    });
};
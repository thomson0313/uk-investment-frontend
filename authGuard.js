async function validateToken() {
    const token = localStorage.getItem('jwt');

    if (!token) {
        redirectToLogin();
        return false;
    }

    try {
        const response = await fetch(
            'https://uk-investment-backend.onrender.com/api/auth/verify',
            {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        if (response.ok) {
            return true; // ✅ Token is valid
        } else {
            redirectToLogin();
            return false;
        }
    } catch (error) {
        redirectToLogin();
        return false;
    }
}

function redirectToLogin() {
    localStorage.removeItem('jwt'); // Clear invalid/expired token
    window.location.href = 'login.html';
}

export { validateToken };

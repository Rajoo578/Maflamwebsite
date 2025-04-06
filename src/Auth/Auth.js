const auth = {
  login: (data) => {
    try {
      localStorage.setItem("authData", JSON.stringify(data));
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  },
  logout: () => {
    localStorage.removeItem("authData");
  },
  isAuthenticated: () => {
    return localStorage.getItem("authData") !== null;
  },
  getAuthData: () => {
    const authData = localStorage.getItem("authData");
    return authData ? JSON.parse(authData) : null;
  },
};

export default auth;

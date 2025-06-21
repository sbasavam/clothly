import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../../BaseURL";

const LoginModal = ({ isOpen, onClose, setIsLoggedIn }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ 
    full_name: "",
    email: "", 
    password: "",
    confirmPassword: "",
    phone_number: ""
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setIsLoading(true);
  setError('');

  try {
    const endpoint = isLogin ? '/auth/login' : '/auth/create-user';
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          email: form.email,
          password: form.password,
          phone_number: form.phone_number || null,
        ...(!isLogin && { full_name: form.name })
      }),
    });

    if (!response.ok) {
      let errorMsg = 'Request failed';
      try {
        const errorData = await response.json();
        errorMsg = errorData.message || errorMsg;
      } catch (e) {
        errorMsg = response.statusText || errorMsg;
      }
      throw new Error(errorMsg);
    }

    const data = await response.json();
    
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data.user));
    
    setIsLoggedIn(true);
    onClose();
    navigate('/user/dashboard');
  } catch (err) {
    setError(err.message);
    console.error('Authentication error:', err);
  } finally {
    setIsLoading(false);
  }
};

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="max-w-md w-full mx-auto p-8 bg-gradient-to-br from-indigo-100 via-blue-50 to-pink-100 rounded-2xl shadow-2xl animate-fade-in relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          disabled={isLoading}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <h2 className="text-3xl font-bold text-center mb-6 text-indigo-700 drop-shadow-lg animate-bounce">
          {isLogin ? "Login" : "Register"}
        </h2>

        {error && (
          <div className="mb-4 p-2 bg-red-100 text-red-700 rounded text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {!isLogin && (
            <>
              <div>
                <label className="block text-indigo-700 font-semibold mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="full_name"
                  value={form.full_name}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  className="w-full border border-indigo-200 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white"
                />
              </div>
              
              <div>
                <label className="block text-indigo-700 font-semibold mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone_number"
                  value={form.phone_number}
                  onChange={handleChange}
                  disabled={isLoading}
                  className="w-full border border-indigo-200 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white"
                />
              </div>
            </>
          )}

          <div>
            <label className="block text-indigo-700 font-semibold mb-2">
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              disabled={isLoading}
              className="w-full border border-indigo-200 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white"
            />
          </div>

          <div>
            <label className="block text-indigo-700 font-semibold mb-2">
              Password *
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              minLength="6"
              disabled={isLoading}
              className="w-full border border-indigo-200 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white"
            />
          </div>

          {!isLogin && (
            <div>
              <label className="block text-indigo-700 font-semibold mb-2">
                Confirm Password *
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                required
                minLength="6"
                disabled={isLoading}
                className="w-full border border-indigo-200 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white"
              />
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 bg-gradient-to-r from-indigo-500 via-blue-500 to-pink-400 hover:from-pink-400 hover:to-indigo-500 text-white font-bold rounded-lg shadow-lg transition-all text-lg animate-fade-in flex items-center justify-center disabled:opacity-75"
          >
            {isLoading ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Processing...
              </>
            ) : isLogin ? (
              "Login"
            ) : (
              "Register"
            )}
          </button>
        </form>

        <div className="mt-6 text-center">
          {isLogin ? (
            <>
              <span className="text-gray-600">Don't have an account? </span>
              <button
                type="button"
                onClick={() => setIsLogin(false)}
                className="text-indigo-600 font-semibold hover:underline transition-all"
                disabled={isLoading}
              >
                Register
              </button>
            </>
          ) : (
            <>
              <span className="text-gray-600">Already have an account? </span>
              <button
                type="button"
                onClick={() => setIsLogin(true)}
                className="text-indigo-600 font-semibold hover:underline transition-all"
                disabled={isLoading}
              >
                Login
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginModal;





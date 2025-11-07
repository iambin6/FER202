// src/reducers/authReducer.jsx

// Initial State
export const initialAuthState = {
  isAuthenticated: false,
  user: null, // { id, username, fullname, role }
  loading: false,
  error: null,
  showWelcomeModal: false,
};

// Reducer
export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_START':
      return {
        ...state,
        loading: true,
        error: null,
      };

    case 'LOGIN_SUCCESS':
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload, // { id, username, fullname, role }
        error: null,
        showWelcomeModal: true,
      };

    case 'LOGIN_FAILURE':
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload, // Thông báo lỗi
      };

    case 'LOGOUT':
      return {
        ...initialAuthState,
      };

    case 'CLEAR_ERROR':
      return {
        ...state,
        error: null,
      };

    case 'CLOSE_WELCOME_MODAL':
      return {
        ...state,
        showWelcomeModal: false,
      };

    default:
      return state;
  }
};


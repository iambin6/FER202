// src/contexts/AuthContext.jsx
import React, { createContext, useReducer, useContext, useCallback, useEffect } from 'react';
import { authReducer, initialAuthState } from '../reducers/authReducer';
import authApi from '../api/authAPI';

// Contexts
export const AuthStateContext = createContext(initialAuthState);
export const AuthDispatchContext = createContext(null);

// Custom Hooks
export const useAuthState = () => useContext(AuthStateContext);
export const useAuthDispatch = () => useContext(AuthDispatchContext);

// AuthProvider Component
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialAuthState);

  // Khôi phục session từ localStorage khi app load
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      try {
        const user = JSON.parse(savedUser);
        dispatch({ type: 'LOGIN_SUCCESS', payload: user });
      } catch (error) {
        console.error('Lỗi khi parse user từ localStorage:', error);
        localStorage.removeItem('user');
      }
    }
  }, []);

  // Hàm LOGIN: Kiểm tra username và password
  const login = useCallback(async (username, password) => {
    dispatch({ type: 'LOGIN_START' });

    try {
      // Gọi API để tìm account với username và password khớp
      const response = await authApi.get('/accounts', {
        params: {
          username: username,
          password: password,
        },
      });

      // json-server trả về mảng, nếu tìm thấy sẽ có 1 phần tử
      if (response.data && response.data.length > 0) {
        const user = response.data[0];
        // Lưu thông tin user (không lưu password)
        const userInfo = {
          id: user.id,
          username: user.username,
          fullname: user.fullname,
          role: user.role,
        };

        // Lưu vào localStorage để duy trì session
        localStorage.setItem('user', JSON.stringify(userInfo));

        dispatch({ type: 'LOGIN_SUCCESS', payload: userInfo });
        return { success: true };
      } else {
        // Không tìm thấy account phù hợp
        dispatch({ 
          type: 'LOGIN_FAILURE', 
          payload: 'Tên đăng nhập hoặc mật khẩu không đúng!' 
        });
        return { success: false, error: 'Tên đăng nhập hoặc mật khẩu không đúng!' };
      }
    } catch (error) {
      console.error('Lỗi khi đăng nhập:', error);
      dispatch({ 
        type: 'LOGIN_FAILURE', 
        payload: 'Không thể kết nối đến server. Vui lòng thử lại!' 
      });
      return { success: false, error: 'Không thể kết nối đến server. Vui lòng thử lại!' };
    }
  }, []);

  // Hàm LOGOUT: Xóa session
  const logout = useCallback(() => {
    localStorage.removeItem('user');
    dispatch({ type: 'LOGOUT' });
  }, []);

  // Hàm xóa lỗi
  const clearError = useCallback(() => {
    dispatch({ type: 'CLEAR_ERROR' });
  }, []);

  // Giá trị của Dispatch Context
  const dispatchValue = {
    login,
    logout,
    clearError,
  };

  return (
    <AuthStateContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatchValue}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
};


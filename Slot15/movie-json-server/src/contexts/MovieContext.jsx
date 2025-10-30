// src/contexts/MovieContext.jsx
import React, { createContext, useReducer, useContext, useEffect, useCallback } from 'react';
import { movieReducer, initialMovieState } from '../reducers/movieReducers';
import movieApi from '../api/movieAPI'; // Import Axios

// Contexts
export const MovieStateContext = createContext(initialMovieState); 
export const MovieDispatchContext = createContext(null);          

// Custom Hooks
export const useMovieState = () => useContext(MovieStateContext);
export const useMovieDispatch = () => useContext(MovieDispatchContext);

// MovieProvider Component
export const MovieProvider = ({ children }) => {
  const [state, dispatch] = useReducer(movieReducer, initialMovieState);

  // Hàm READ: Tải lại dữ liệu (Axios GET)
  const fetchMovies = useCallback(async () => {
    dispatch({ type: 'START_LOADING' });
    try {
      const response = await movieApi.get('/movies');
      dispatch({ type: 'SET_MOVIES', payload: response.data });
    } catch (error) {
      console.error("Lỗi khi tải danh sách phim:", error);
      // Giữ state cũ nếu lỗi (hoặc [] nếu ban đầu chưa có)
      dispatch({ type: 'SET_MOVIES', payload: [] }); 
    }
  }, [dispatch]);

  // Hàm fetch genres từ API
  const fetchGenres = useCallback(async () => {
    try {
      const response = await movieApi.get('/genres');
      dispatch({ type: 'SET_GENRES', payload: response.data });
    } catch (error) {
      console.error("Lỗi khi tải danh sách thể loại:", error);
      dispatch({ type: 'SET_GENRES', payload: [] });
    }
  }, [dispatch]); 
  
  // Hàm DELETE: Xóa phim (Axios DELETE)
  const confirmDelete = useCallback(async (id) => {
    dispatch({ type: 'CLOSE_DELETE_MODAL' });
    dispatch({ type: 'START_LOADING' });

    try {
      await movieApi.delete(`/movies/${id}`);
      fetchMovies(); // Tải lại dữ liệu
    } catch (error) {
      console.error("Lỗi khi xóa phim:", error);
      fetchMovies(); // Reload to get current state from server
    }
  }, [fetchMovies]);

  // Hàm CREATE/UPDATE: Xử lý POST và PUT (Axios POST/PUT)
  const handleCreateOrUpdate = useCallback(async (dataToSend, isEditing, editingId) => {
    dispatch({ type: 'START_LOADING' });
    
    try {
      if (isEditing && editingId !== null && editingId !== undefined) {
        // UPDATE (PATCH - json-server v1+ khuyến nghị dùng PATCH)
        console.log('UPDATE movie:', editingId, dataToSend);
        await movieApi.patch(`/movies/${editingId}`, dataToSend);
        console.log('UPDATE success');
      } else {
        // CREATE (POST)
        console.log('CREATE movie:', dataToSend);
        await movieApi.post('/movies', dataToSend);
        console.log('CREATE success');
      }
      
      dispatch({ type: 'RESET_FORM' }); 
      await fetchMovies(); 
      return true;
    } catch (error) {
      console.error("Lỗi thao tác CREATE/UPDATE:", error);
      console.error("Error details:", error.response?.data || error.message);
      await fetchMovies(); // Reload to get current state from server
      return false;
    }
  }, [fetchMovies]);

  useEffect(() => {
    fetchMovies();
    fetchGenres();
  }, [fetchMovies, fetchGenres]);

  // Giá trị của Dispatch Context
  const dispatchValue = {
      dispatch, 
      fetchMovies,
      fetchGenres,
      confirmDelete,
      handleCreateOrUpdate 
  };

  return (
    <MovieStateContext.Provider value={state}>
      <MovieDispatchContext.Provider value={dispatchValue}>
        {children}
      </MovieDispatchContext.Provider>
    </MovieStateContext.Provider>
  );
};

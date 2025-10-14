import React, { createContext, useContext, useReducer } from 'react';

// Initial state
const initialState = {
  profiles: [
    {
      id: 1,
      firstName: 'Tral',
      lastName: 'TB',
      email: 'tralbt@fe.edu.vn',
      phone: '0976306047',
      age: 25,
      username: 'tra1234',
      street: '123 Main Street',
      city: 'Ho Chi Minh',
      state: 'Ho Chi Minh',
      zipCode: '700000',
      country: 'Vietnam',
      createdAt: '2024-01-15',
      status: 'Active'
    },
    {
      id: 2,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      phone: '0987654321',
      age: 30,
      username: 'johndoe',
      street: '456 Oak Avenue',
      city: 'Hanoi',
      state: 'Hanoi',
      zipCode: '100000',
      country: 'Vietnam',
      createdAt: '2024-01-20',
      status: 'Active'
    }
  ],
  nextId: 3
};

// Action types
const ACTIONS = {
  ADD_PROFILE: 'ADD_PROFILE',
  UPDATE_PROFILE: 'UPDATE_PROFILE',
  DELETE_PROFILE: 'DELETE_PROFILE',
  SET_PROFILES: 'SET_PROFILES'
};

// Reducer
const profileReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_PROFILE:
      const newProfile = {
        ...action.payload,
        id: state.nextId,
        createdAt: new Date().toISOString().split('T')[0],
        status: 'Active'
      };
      return {
        ...state,
        profiles: [...state.profiles, newProfile],
        nextId: state.nextId + 1
      };

    case ACTIONS.UPDATE_PROFILE:
      return {
        ...state,
        profiles: state.profiles.map(profile =>
          profile.id === action.payload.id
            ? { ...profile, ...action.payload }
            : profile
        )
      };

    case ACTIONS.DELETE_PROFILE:
      return {
        ...state,
        profiles: state.profiles.filter(profile => profile.id !== action.payload.id)
      };

    case ACTIONS.SET_PROFILES:
      return {
        ...state,
        profiles: action.payload
      };

    default:
      return state;
  }
};

// Create context
const ProfileContext = createContext();

// Provider component
export const ProfileProvider = ({ children }) => {
  const [state, dispatch] = useReducer(profileReducer, initialState);

  const addProfile = (profileData) => {
    dispatch({
      type: ACTIONS.ADD_PROFILE,
      payload: profileData
    });
  };

  const updateProfile = (profileData) => {
    dispatch({
      type: ACTIONS.UPDATE_PROFILE,
      payload: profileData
    });
  };

  const deleteProfile = (id) => {
    dispatch({
      type: ACTIONS.DELETE_PROFILE,
      payload: { id }
    });
  };

  const getProfileById = (id) => {
    return state.profiles.find(profile => profile.id === parseInt(id));
  };

  const value = {
    profiles: state.profiles,
    addProfile,
    updateProfile,
    deleteProfile,
    getProfileById,
    nextId: state.nextId
  };

  return (
    <ProfileContext.Provider value={value}>
      {children}
    </ProfileContext.Provider>
  );
};

// Custom hook
export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context;
};

export default ProfileContext;

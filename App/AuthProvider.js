import React, { createContext, useState, useEffect } from 'react';
import Toast from 'react-native-toast-message';
export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider
    >
      {children}      
      <Toast />
    </AuthContext.Provider>
  )
}
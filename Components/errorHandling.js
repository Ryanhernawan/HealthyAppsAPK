import { View, Text } from 'react-native'
import React from 'react'

const errorHandling = () => {

// errorHandling.js

// Global unhandled promise rejection handler
const handlePromiseRejection = (error) => {
    // Handle the error appropriately (e.g., log, display a user-friendly message)
    console.error('Unhandled Promise Rejection:', error);
  };
  
  // Attach the listener for unhandled promise rejections
  if (!__DEV__) {
    // Only attach the listener in production mode
    process.on('unhandledRejection', handlePromiseRejection);
  }
  
}

export default errorHandling
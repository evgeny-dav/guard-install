
import React from 'react';
import { Navigate } from 'react-router-dom';

const Index = () => {
  // Redirects to the home page
  return <Navigate to="/" replace />;
};

export default Index;

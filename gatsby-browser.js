import React from 'react';
import Layout from './src/components/Layout';
import '@fontsource/fira-mono';

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);
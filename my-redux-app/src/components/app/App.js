import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage } from '../../pages/';
import { PostPage } from '../../pages/';
import { UsersPage } from '../../pages/';
import { AppHeader } from '../appHeader/AppHeader';
import { ErrorPage } from '../../pages/';

import './App.scss'

const App = () => {
  return (
    <Router>
      <AppHeader/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/post" element={<PostPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Navigation from './components/navigation/navigation.component';
import UserMenu from './routes/user-menu/user-menu.route';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Routes>
        <Route index element={<UserMenu />} />
      </Routes>
    </div>
  );
}

export default App;

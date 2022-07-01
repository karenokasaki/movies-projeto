
import { Routes, Route } from 'react-router-dom'
import FormPage from './components/Form';
import EditList from './pages/EditList';
import FilmDetails from './pages/filmDetails';
import Home from './pages/Home';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/criar-lista" element={<FormPage />} />
        <Route path="/lista/:id" element={<FilmDetails />} />
        <Route path="/lista/:id/edit" element={<EditList />} />
      </Routes>
    </div>
  );
}

export default App;

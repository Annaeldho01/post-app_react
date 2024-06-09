import logo from './logo.svg';
import './App.css';
import AddPost from './components/AddPost';
import DeletePost from './components/DeletePost';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearcPost from './components/SearcPost';
import ViewAll from './components/ViewAll';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AddPost/>}/>
      <Route path="/search" element={<SearcPost/>}/>
      <Route path="/delete" element={<DeletePost/>}/>
      <Route path="/view" element={<ViewAll/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

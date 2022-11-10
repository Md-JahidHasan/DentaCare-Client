import './App.css';
import {RouterProvider } from 'react-router-dom';
import router from './components/Routes/Router';
import 'react-photo-view/dist/react-photo-view.css';
import { ToastContainer } from 'react-toastify';

function App() {
  
  return (
    <div>
      <ToastContainer></ToastContainer>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

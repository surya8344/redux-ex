import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import Form from './components/Form';
import Dashboard from './components/Dashboard';
import TaskOne from './components/TaskOne';
import TourTask from './components/TourTask';
import ThirdTask from './components/ThirdTask';
import ShowHide from './components/ShowHide';
import  {InputEditDelete}  from './components/InputEditDelete';
import Animation from './components/animation/animation'

ReactDOM.render(
  <React.StrictMode>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="form/" element={<Form />} />
        <Route path="form/dashboard/" element={<Dashboard />} />
        <Route path="taskOne/" element={<TaskOne />} />
        <Route path="tourTask/" element={<TourTask/>} />
        <Route path="thirdTask/" element={<ThirdTask/>} />
        <Route path="hideShow/" element={<ShowHide/>} />
        <Route path="inputeditdelete" element={<InputEditDelete/>} />
        <Route path="animation" element={<Animation/>} />
       
        
      </Routes>
    </BrowserRouter>
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorkerRegistration.unregister();

reportWebVitals();

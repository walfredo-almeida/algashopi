import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomeView from './views/Home.view';

function App () {
   return <div>
  ola mergulhador

   </div>

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HomeView />
  </React.StrictMode>
);



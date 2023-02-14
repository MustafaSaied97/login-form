import React from 'react';
import ReactDOM from 'react-dom/client'
import  {AppWithProvider} from './components/context/AppWithProvider';
import reportWebVitals from './reportWebVitals';

/*style*/
import "../node_modules/bootstrap/dist/css/bootstrap.css" 
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    < AppWithProvider />
  </React.StrictMode>
);

reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Slider from './Slider/Slider';

import { Provider } from 'react-redux'
import { store } from './store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Provider store={store}>
      <React.StrictMode>
         <Header/>
         <App>
            <Slider/>
         </App>
         <Footer/>
      </React.StrictMode>
   </Provider>
);

reportWebVitals();

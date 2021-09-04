import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FilterProvider } from './context/filterContext';
import { GlobalProvider } from './context/globalContext';
import { ProductsProvider } from './context/productsContext';
import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <GlobalProvider>
            <ProductsProvider>
               <FilterProvider>
                  <App />
               </FilterProvider>
           </ProductsProvider>
        </GlobalProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

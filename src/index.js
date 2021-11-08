import { Auth0Provider } from '@auth0/auth0-react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CartProvider } from './context/cartContext';
import { FilterProvider } from './context/filterContext';
import { GlobalProvider } from './context/globalContext';
import { ProductsProvider } from './context/productsContext';
import { UserProvider } from './context/userContext';
import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <Auth0Provider 
          domain={process.env.REACT_APP_AUTH_DOMAIN} 
          clientId={process.env.REACT_APP_AUTH_CLIENT_ID} 
          redirectUri={window.location.origin} 
          cacheLocation="localstorage">
          <UserProvider>
            <GlobalProvider>
              <ProductsProvider>
                <FilterProvider>
                  <CartProvider>
                    <App />
                  </CartProvider>
                </FilterProvider>
              </ProductsProvider>
           </GlobalProvider>
         </UserProvider>
        </Auth0Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

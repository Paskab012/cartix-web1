import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import './styles/index.css';
import store, { Persistor } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={Persistor}>
                <App />
            </PersistGate>
        </Provider>
    </React.StrictMode>,
);

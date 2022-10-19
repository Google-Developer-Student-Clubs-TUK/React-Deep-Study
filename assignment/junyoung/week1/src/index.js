import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';

const rootNode = document.getElementById('root');
//react 18버전 부터는 createRoot사용
ReactDOM.createRoot(rootNode).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
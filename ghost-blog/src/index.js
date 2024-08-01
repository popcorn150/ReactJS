import React from 'react';
// import App from './App';
// import List from './List';
import RecipeList from './Ingredents';
import ReactDOM from 'react-dom/client';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/* <App />
        <List /> */}
        <RecipeList />
    </React.StrictMode>
);

import React from 'react';
// import App from './App';
// import List from './List';
// import RecipeList from './Ingredents';
import Poem from './Haiku';
import ReactDOM from 'react-dom/client';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/* <App />
        <List />
        <RecipeList /> */}
        <Poem />
    </React.StrictMode>
);

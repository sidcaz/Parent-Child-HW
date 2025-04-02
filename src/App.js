import React from 'react';
import ParentComponent from './ParentComponent';

const App = () => {
    return (
        <div className="app">
            <h1>Parent and Child Components</h1>
            <ParentComponent />
        </div>
    );
};

export default App;
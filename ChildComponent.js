import React from 'react';

const ChildComponent = ({ content, onButtonClick }) => {
    return (
        <div className="child">
            <p>{content}</p>
            <button onClick={onButtonClick}>Change Content</button>
        </div>
    );
};

export default ChildComponent;
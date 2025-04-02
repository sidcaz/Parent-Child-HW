import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
    const [child1Content, setChild1Content] = useState("Initial Content 1");
    const [child2Content, setChild2Content] = useState("Initial Content 2");

    const handleChild1Click = () => {
        setChild1Content("Updated Content 1");
    };

    const handleChild2Click = () => {
        setChild2Content("Updated Content 2");
    };

    return (
        <div className="parent">
            <ChildComponent 
                content={child1Content} 
                onButtonClick={handleChild1Click} 
            />
            <ChildComponent 
                content={child2Content} 
                onButtonClick={handleChild2Click} 
            />
        </div>
    );
};

export default ParentComponent;
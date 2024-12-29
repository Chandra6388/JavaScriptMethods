import React from "react";

const StringMethods = () => {
    const str = "Hello World!";
    return (
        <div>
        <h1>String Methods</h1>
        <p>Original String: {str}</p>
        <p>Length: {str.length}</p>
        <p>Uppercase: {str.toUpperCase()}</p>
        <p>Lowercase: {str.toLowerCase()}</p>
        <p>Substring: {str.substring(0, 5)}</p>
        <p>Split: {str.split(" ")[0]}</p>
        </div>
    );
    }

export default StringMethods;
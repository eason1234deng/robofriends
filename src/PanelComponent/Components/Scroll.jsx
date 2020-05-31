import React from 'react';

const Scroll = ({ children }) =>
    <div style={{overflowY: 'scroll', height: 'calc(100vh - 187px)' }}>
        {children}
    </div>;

export default Scroll;
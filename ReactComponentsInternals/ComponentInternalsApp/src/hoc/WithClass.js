import React from "react"; 

const withClass = (WrappedComponent, className) => {
    // These are props of wrapped  component
    return props => (
        <div className={className}>
            <WrappedComponent {...props} />
        </div>
    ); 
};  

export default withClass; 
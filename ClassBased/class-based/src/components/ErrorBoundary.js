import { Component } from 'react';

class ErrorBoundary extends Component {
    constructor() {
        super();
        this.state = { hasError: false};
    }
    
    componentDidCatch(error) {
        this.setState({ hasError: true})
    }

    return() {
        if (this.state.hasError) {
            return <p>Something went wrong</p>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
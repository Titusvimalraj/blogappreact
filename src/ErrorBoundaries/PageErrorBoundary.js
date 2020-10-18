import React, { Component } from 'react';

class PageErrorBoundary extends Component {

    state = {
        isCrashed: false,
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
        this.setState({ isCrashed: true, });
    }

    render() {
        if (this.state.isCrashed) {
            return (
                <h1>Something Went Wrong...</h1>
            )
        }
        return this.props.children;
    }
}

export default PageErrorBoundary;
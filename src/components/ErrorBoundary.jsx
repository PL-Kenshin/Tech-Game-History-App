import React from "react";


class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
    componentDidCatch(error, info) {
      // Example "componentStack":
      //   in ComponentThatThrows (created by App)
      //   in ErrorBoundary (created by App)
      //   in div (created by App)
      //   in App
      //console.log(error)
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return (
            <div className="containercontainer-fluid p-0">
                <h1>500</h1>
                <h2>Something went wrong...</h2>
                <button className="btn btn-primary" onClick={e=> {
                    e.preventDefault()
                    this.setState({hasError:false})
                    window.location.assign("/")
                }}>Go back</button>
            </div>
        )
      }
  
      return this.props.children;
    }
  }

 
export default ErrorBoundary;
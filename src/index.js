import React from 'react';
import ReactDOM from 'react-dom/client';

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = { latitude: null, errorMessage: '' }

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ latitude: position.coords.latitude });
      },
      (error) => {
        this.setState({ errorMessage: error.message });
      }
    );

  }

  render() {
    if (this.state.errorMessage && !this.state.latitude) {
      return <div> {this.state.errorMessage} </div>
    }

    if (!this.state.errorMessage && this.state.latitude) {
      return <div> {this.state.latitude} </div>
    }

    else {
      return <div>Loading...</div>
    }

  }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


import React from 'react';
import ReactDOM from 'react-dom/client';

class App extends React.Component {
    render() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log(position);
            },
            (error) => {
                console.log(error);
            }
        );
        return (
            <div>
                You are in the northern hemisphere
            </div>
        )
    }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


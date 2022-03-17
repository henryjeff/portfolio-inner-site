// import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Text from './components/general/Text';
import Desktop from './components/os/Desktop';

function App() {
    // window.addEventListener('message', (event) => {
    // IMPORTANT: check the origin of the data!
    // console.log(event.origin);
    // if (event.origin.startsWith('http://your-first-site.com')) {
    //     // The data was sent from your site.
    //     // Data sent with postMessage is stored in event.data:
    //     console.log(event.data);
    // } else {
    //     // The data was NOT sent from your site!
    //     // Be careful! Do not use it. This else branch is
    //     // here just for clarity, you usually shouldn't need it.
    //     return;
    // }
    // });
    // const site = window.open(
    //     'http://localhost:http://192.168.0.19:8080/',
    //     '_blank'
    // );

    // window.parent.postMessage('Hello from the other side!', '*');

    // site.sendMessage('Hello from the app!', 'http://localhost:8080/');

    return (
        <div className="App">
            <Desktop />
        </div>
    );
}

export default App;

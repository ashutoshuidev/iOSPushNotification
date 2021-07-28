import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import firebase from 'firebase';

function App() {

  const [token1, setToken] = useState(''); 

  const askForPermissionToReceiveNotifications = async () => {
    try {
      const messaging = firebase.messaging();
      await messaging.requestPermission();
      const token = await messaging.getToken();
      console.log('Your token is:', token);
      setToken(token);
      return token;
    } catch (error) {
      //setToken(error);
      console.error(error);
      alert(error);
      return error;
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Push Notification for iOS
        </p>
        
        <button onClick={askForPermissionToReceiveNotifications} >
          Click to receive notifications
        </button>

      <p>
      {token1}
      </p>

      </header>
    </div>
  );
}



export default App;

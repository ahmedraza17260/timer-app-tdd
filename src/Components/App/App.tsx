import React from 'react';
import './App.css';
import Timer from '../Timer/Timer';
import firebase from 'firebase';
import axios from 'axios';


function App() {

    setTimeout(sendNotification, 5000);

    async function sendNotification() {
        const messaging = firebase.messaging();
        const token = await messaging.getToken();
        console.log('TOKEN in Component: ', token);
        const response = await axios.post(
            'https://fcm.googleapis.com/fcm/send',
            {
                notification: {
                    title: "React Quiz PWA By Ahmed Raza",
                    body: "",
                    click_action: "",
                    icon: '',
                },
                "to": token
            },
            { headers: { 'Content-Type': 'application/json', 'Authorization': 'key=AAAAiyq69Q8:APA91bEiljXSkkRDa0-qYIMvSRVGJXD705lGDRSqNfMSRSDQBS5pI12pp73IXrA82WCCyeGqVNMd0eDs49ORGFPqoGQoZU69Ug8ZJvxdfvzMvCu0nvrH90NoEdvuHTUtRrEMQIt2LKV0' } }
        );
        console.log('Response: ', response);
    }
    return (
        <div>
            <h1>Timer App</h1>
            <div className="App">
                <Timer />
            </div> <br />
            <div className="copyRight">
                <h4> Powered by Ahmed Raza </h4>
                <a href="https://github.com/ahmedraza17260" rel="noopener noreferrer" target="_blank">
                    {" "}
                    <h3> Copyright &copy; 2020 Ahmed Raza </h3>{" "}
                </a>
                <h3> All Right Reserved </h3>
            </div>
        </div>
    );
}

export default App;
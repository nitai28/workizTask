import './App.css';
import React, {useEffect, useState} from 'react';
import axios from "axios";

const BaseURL = 'http://localhost:5000'

function App() {
    const [messages, setMessages] = useState([])

    const loadMessages = async () => {
        try {
            let res = await axios.get(`${BaseURL}/api/messages`)
            res?.data && setMessages(res.data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        loadMessages()
    }, [])

    return (
        <div className="App">
            <nav className="header">
                <span>Workiz Messages</span>
            </nav>
            <h1 className="title">Messages</h1>
            <div className={"messagesContainer"}>
                {messages.length > 0 && messages.map((message, index) => (<div className="messageItem" key={index}>
                    <span>{message}</span>
                </div>))}
            </div>

        </div>
    );
}

export default App;

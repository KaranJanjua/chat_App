import React, { Component } from "react";
import { ChatEngine } from "react-chat-engine";
import "./App.css";
import ChatFeed from "./components/ChatFeed";
import LoginForm from'./components/loginForm';

const App = () => {
  if (!localStorage.getItem("username")) return <LoginForm />

  return (
    <ChatEngine
      height="100vh"
      projectID="7386c513-bf7a-40ff-9f64-882776044594"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};
export default App;

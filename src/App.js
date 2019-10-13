import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Clock from "./components/Clock";
import AddToDo from "./components/AddToDo";
import TodoList from "./components/TodoList";
import Zoom from 'react-reveal/Zoom'
import "./App.css";
import Logo from './logo.svg';

function App() {
  return (
    <Provider store={store}>
      <Zoom>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              padding: '2rem',
              maxWidth: '750px',
              width: '95%',
              position: 'relative',
              boxShadow: '0 0 .2rem gray',
              margin: '1rem',
            }}
          >
            <img src={Logo} style={{
              width: '3rem',
              color: 'black',
              position: 'absolute',
              top: 5,
              left: 5
            }}/>
            <Clock />
            <h1 style={{
              fontSize: '5rem',
              margin: 0,
              textAlign: 'center',
              padding: 0,
              paddingBottom: '1rem'
            }}>get-to-it</h1>
            <AddToDo />
            <TodoList />
          </div>
        </div>
      </Zoom>
    </Provider>
  );
}

export default App;

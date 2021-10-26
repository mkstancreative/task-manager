import React from 'react';
import "./App.css";
import TaskListContextProvider from './components/context/TaskListContext';
import Header from './components/Header';
import TaskForm from './components/TaskForm';

import TaskList from './components/TaskList';


const App = () => {
  return (
      <>
      <TaskListContextProvider>
        <div className="container">
          <div className="app-wrapper">
            <div className="main">
              <Header />
              <TaskForm />
              <TaskList />
            </div>
          </div>
        </div>
        <div>
        
        </div>
        
      </TaskListContextProvider>

    </>
      

  );
};

export default App;
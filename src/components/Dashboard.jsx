import React from 'react';
import TodoList from './TodoList';
import {Routes,Route } from "react-router-dom"
import About from './About';
import NotFound from './NotFound';

const Dashboard = () => {
    return (
    <div>
        <Routes>
            <Route path="/" element = {<TodoList />} />
            <Route path="/about" element = {<About />} />
            <Route path="/notFound" element = {<NotFound />} />
        </Routes>
    </div>
   
    );
}

export default Dashboard;
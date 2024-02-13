
//import './css/App.css';
// import './src/css/App.css'
// import { Route, Routes } from "react-router-dom";
// import Navbar from './src/components/Navbar.jsx'
// import Footer from './src/components/Footer.jsx'
// import SideBar from './src/components/SideBar.jsx';
// import TodoList from './src/components/TodoList.jsx';
// import { NotFound } from './src/components/NotFound.jsx';
// import  TaskDetails  from './src/components/TaskDetails.jsx';
// import {About} from './src/components/About.jsx'
// import data from "./data.json"
import './src/css/App.css';
import { Route, Routes } from "react-router-dom";
import Navbar from './src/components/Navbar.jsx'
import Footer from './src/components/Footer.jsx'
import SideBar from './src/components/SideBar.jsx';
import TodoList from './src/components/TodoList.jsx';
import NotFound from './src/components/NotFound.jsx';
import  TaskDetails  from './src/components/TaskDetails.jsx';
import {About} from './src/components/About.jsx'
import data from "./data.json"
import Dashboard from './src/components/Dashboard.jsx';

function App() {

  return (
    <div className="App">

      <Navbar />
      <SideBar />

      <Routes>
        <Route path="/" element={<Dashboard />} />
         {/* <Route path="/tasks/:taskId" element={<TaskDetails />} />  */}
        <Route path="/tasks/:taskId" element={<TaskDetails tasksToDisplay={data} />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
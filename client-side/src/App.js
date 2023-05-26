import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import ShowTask from "../src/pages/Show-Task"
import Home from "./pages/Home";
import NotFound from "./pages/Not-Found";
import Header from "./common/Header";
import AddTask from "./pages/Add-Task";
import LogIn from "./pages/LogIn";

function App() {
  return (
    <>
      <BrowserRouter>
          <Header/>
        <Routes>
          <Route path="/" element={<ShowTask />} />
          <Route path="/home" element={<Home />} />
          {/*<Route path="/blogs/:title" element={<Blog />} />*/}
          <Route path="/add-task" element={<AddTask/>} />
          <Route path="/logIn" element={<LogIn />} />
          {/*<Route path="/register" element={<Register />} />*/}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

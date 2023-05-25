import Sidebar from "./Dashboard/DashboardComponents/Sidebar";
import { Routes, Route , BrowserRouter} from 'react-router-dom'
import './App.css'
import Home from "./Dashboard/Pages/Home";
import Layout from "./Dashboard/DashboardComponents/Layout";
import Background from "./Dashboard/DashboardComponents/Background";
import Doctors from "./Dashboard/Pages/Doctors";
import Dashboard from "./Dashboard/Dashboard";
import PatientsInfo from "./Dashboard/Pages/PatientsInfo";


const App = () => {
     return (
         <BrowserRouter>
              <Routes>
                   <Route path="/*" element={<Dashboard><Home/></Dashboard>}/>
                   <Route path="/doctors" element={<Dashboard><Doctors/></Dashboard>}/>
              </Routes>
           </BrowserRouter>
     )
}

export default App;
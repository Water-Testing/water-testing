import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Samples from './Components/Samples';
import Layout from './Components/shared/Layout';
import Inbox from './Components/Inbox';
import Settings from './Components/Settings';
import SamplesV2 from './Components/SamplesV2';
import Logout from './Components/Logout';
//routing set up for the dashboard, will contain a sidebar to access different pages
function App() {
  return (
<Router>
   <Routes>
         <Route path = "/" element = {<Layout/>}> 
          <Route index element = {<Dashboard/>}/>
          <Route path = "samples" element = {<Samples/>}/>
          <Route path = "inbox" element = {<Inbox/>}/>
          <Route path = "settings" element = {<Settings/>}/>
          <Route path = "samplesv2" element = {<SamplesV2/>}/>          
          <Route path = "logout" element = {<Logout/>}/>
          
    </Route>
   </Routes>
</Router>

  )
}

export default App;

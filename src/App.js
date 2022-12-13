import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom';
import Home from './Components/Home';
import Samples from './Components/Samples';
import Layout from './Components/shared/Layout';
import Inbox from './Components/Inbox';
import Logout from './Components/Logout';

//routing set up for the dashboard, will contain a sidebar to access different pages
function App() {
  return (
<Router>
   <Routes>
         <Route path = "/" element = {<Layout/>}> 
          <Route index element = {<Home/>}/>
          <Route path = "inbox" element = {<Inbox/>}/>
          <Route path = "samples" element = {<Samples/>}/>
          <Route path = "logout" element = {<Logout/>}/>
          
    </Route>
   </Routes>
</Router>

  )
}

export default App;

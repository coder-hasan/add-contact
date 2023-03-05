import './App.css';
import { 
  BrowserRouter as Router,
  Routes,
  Route
 } from 'react-router-dom';

import ContactDetails from './Components/ContactDetails/ContactDetails';
import Contacts from './Components/Contacts/Contacts';
import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import About from './Components/About/About';

// import contacts from './data.json';
import { useEffect, useState } from 'react';
import axios from 'axios';
import AddContacts from './pages/AddContacts';

function App() {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:4000/contacts')
      .then(({data}) => setContacts(data))
      
  }, []);
  // console.log(contacts)
  return (
    <div>
      {/* <h1>I am App</h1> */}
      <Router>
        <Nav></Nav>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/contacts' element={<Contacts contacts={contacts}></Contacts>}></Route>
          <Route path='/add-contacts' element={<AddContacts></AddContacts>}></Route>
          <Route path='/contact/:contactId' element={<ContactDetails contacts={contacts}></ContactDetails>}></Route>
          {/* <Route path='*' element={<PageNotFound></PageNotFound>}></Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;

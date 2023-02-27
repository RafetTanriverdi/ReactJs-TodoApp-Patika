import './App.css';
import { useState } from 'react';
import Header from "./components/Header"
import List from './components/List';
import Footer from './components/Footer';

function App() {
  const [contacts, setContacts] = useState([]);
  const [situation, setSituation] = useState("All")
  return (
    <div className='todoapp'>

      <Header setContacts={setContacts} contacts={contacts} />
      <List contacts={contacts} setContacts={setContacts} situation={situation}/>
      <Footer contacts={contacts} setContacts={setContacts} situation={situation} setSituation={setSituation}/>

      
    </div>
  );
}

export default App;

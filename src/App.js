import { useState, useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import ContactList from './components/ContactList/ContactList.js';
import ContactForm from './components/ContactForm/ContactForm.js';
import Filter from './components/Filter/Filter.js';
import style from './App.module.css';

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const savedSettings = localStorage.getItem('name');
    const parsedSettings = JSON.parse(savedSettings);

    if (parsedSettings === null) {
      setContacts([
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      ]);

      return;
    }

    if (parsedSettings.length === 0) {
      return;
    }

    setContacts(parsedSettings);
  }, []);

  useEffect(() => {
    const stringifyContacts = JSON.stringify(contacts);
    localStorage.setItem('name', stringifyContacts);
  }, [contacts]);

  const handleAddContact = newContact => {
    setContacts(prevState => [...prevState, newContact]);
  };

  const handleCheckUniqueContact = name => {
    const isExistContact = !!contacts.find(contact => contact.name === name);
    isExistContact && alert('Contact is already exist');

    return !isExistContact;
  };

  const handleRemoveContact = id => {
    const deleteContact = contacts.filter(contact => contact.id !== id);
    setContacts(deleteContact);
  };

  const handleRemoveContactFromLocalStor = id => {
    const savedSettings = localStorage.getItem('name');
    const parsedSettings = JSON.parse(savedSettings);
    if (parsedSettings === null) {
      return;
    }

    if (parsedSettings.length < 0) {
      return;
    }

    const arrayDeleteById = parsedSettings.filter(contact => contact.id !== id);
    const serializedState = JSON.stringify(arrayDeleteById);
    localStorage.setItem('name', serializedState);
  };

  const [filter, setFilter] = useState('');

  const handleFilterChange = filter => setFilter(filter);

  const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  return (
    <>
      <h2>From Contact</h2>
      <ContactForm
        onAdd={handleAddContact}
        onCheckUnique={handleCheckUniqueContact}
      />
      <h2>Contacts list</h2>
      <Filter filter={filter} onChange={handleFilterChange} />
      <ContactList
        contacts={getVisibleContacts()}
        onRemove={handleRemoveContact}
        onRemoveLocal={handleRemoveContactFromLocalStor}
      />
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;

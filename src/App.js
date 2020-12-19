import { Component } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import ContactList from './components/ContactList/ContactList.js';
import ContactForm from './components/ContactForm/ContactForm.js';
import Filter from './components/Filter/Filter.js';
import style from './App.module.css';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const savedSettings = localStorage.getItem('name');
    const parsedSettings = JSON.parse(savedSettings);

    if (parsedSettings.length > 0) {
      this.setState({ contacts: parsedSettings });
    }
  }
  componentWillUnmount() {
    const savedContacts = this.state.contacts;
    const stringifyContacts = JSON.stringify(savedContacts);
    localStorage.setItem('name', stringifyContacts);
  }

  handleAddContact = newContact => {
    console.log(`just`);
    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));
  };

  handleCheckUniqueContact = name => {
    const { contacts } = this.state;
    const isExistContact = !!contacts.find(contacts => contacts.name === name);
    isExistContact && alert('Contact is already exist');

    return !isExistContact;
  };

  handleRemoveContact = id => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));
  };

  handleRemoveContactFromLocalStor = id => {
    const savedSettings = localStorage.getItem('name');
    const parsedSettings = JSON.parse(savedSettings);

    if (parsedSettings.length < 0 || parsedSettings === null) {
      return;
    }

    if (parsedSettings !== null) {
      const arrayDeleteById = parsedSettings.filter(
        contact => contact.id !== id,
      );

      const serializedState = JSON.stringify(arrayDeleteById);
      localStorage.setItem('name', serializedState);
    }
  };
  handleFilterChange = filter => this.setState({ filter });

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <>
        <h2>From Contact</h2>
        <ContactForm
          onAdd={this.handleAddContact}
          onCheckUnique={this.handleCheckUniqueContact}
        />
        <h2>Contacts list</h2>
        <Filter filter={filter} onChange={this.handleFilterChange} />
        <ContactList
          contacts={visibleContacts}
          onRemove={this.handleRemoveContact}
          onRemoveLocal={this.handleRemoveContactFromLocalStor}
        />
        <ToastContainer></ToastContainer>
      </>
    );
  }
}

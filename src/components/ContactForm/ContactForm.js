import style from './ContactForm.module.css';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function ContactForm({ onAdd, onCheckUnique }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleChangeForm = ({ target }) => {
    const { name, value } = target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        console.log('Sorry, we are not have ' + name + '.');
    }
  };

  const validateFrom = () => {
    if (!name || !phone) {
      toast('Some filed is empty');
      return false;
    }

    return onCheckUnique(name);
  };

  const resetForm = () => {
    setName('');
    setPhone('');
  };

  const handleFromSubmit = e => {
    e.preventDefault();
    const isValidForm = validateFrom();

    if (!isValidForm) return;

    const newContact = { id: uuidv4(), name, phone };

    onAdd(newContact);
    resetForm();

    const savedSettings = localStorage.getItem('name');
    const parsedSettings = JSON.parse(savedSettings);

    if (parsedSettings === null || parsedSettings.length === 0) {
      localStorage.setItem('name', JSON.stringify([newContact]));
      return;
    }

    if (parsedSettings.length !== 0) {
      const array = [...parsedSettings, newContact];
      localStorage.setItem('name', JSON.stringify(array));
      return;
    }
  };

  return (
    <form onSubmit={handleFromSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Enter name"
        value={name}
        onChange={handleChangeForm}
      ></input>
      <input
        type="tel"
        name="phone"
        placeholder="Enter phone number"
        value={phone}
        onChange={handleChangeForm}
      ></input>
      <button type="submit">Add Contact</button>
    </form>
  );
}
export default ContactForm;

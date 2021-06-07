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
    if (!name && !phone) {
      toast.warn('⚠️ Fields are empty!', {
        position: 'top-right',
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return false;
    }

    if (!name && phone) {
      toast.warn('⚠️ Field name empty!', {
        position: 'top-right',
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return false;
    }

    if (!phone && name) {
      toast.warn('⚠️ Field phone empty!', {
        position: 'top-right',
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return false;
    }

    if (phone.length !== 10) {
      toast.warn('⚠️ Number has to have 10 symbols!', {
        position: 'top-right',
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return false;
    }

    if (name.length > 12) {
      toast.warn('⚠️ Name has to be no longer 12 characters!', {
        position: 'top-right',
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return false;
    }

    return onCheckUnique(name, phone);
  };

  const resetForm = () => {
    setName('');
    setPhone('');
  };

  const handleFromSubmit = e => {
    e.preventDefault();
    const isExistPhone = validateFrom();
    if (!isExistPhone) return;
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
    <form className={style.contactForm} onSubmit={handleFromSubmit}>
      <input
        className={style.contactForm__input}
        type="text"
        name="name"
        placeholder="Enter name"
        value={name}
        onChange={handleChangeForm}
      ></input>
      <input
        className={style.contactForm__input}
        type="tel"
        name="phone"
        placeholder="Enter phone number"
        value={phone}
        onChange={handleChangeForm}
      ></input>
      <button className={style.buttonSubmit} type="submit">
        Add Contact
      </button>
    </form>
  );
}
export default ContactForm;

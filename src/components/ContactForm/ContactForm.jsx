import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Input from 'components/Input/Input';
import AddContactBtn from 'components/Button/AddContactBtn';
import { addContact } from 'redux/contacts/contacts.reducer';
import { selectContacts } from 'redux/contacts/contacts.selectors';
import { FofmBasic } from './ContactFormStyle';
import { ButtonWrap } from 'components/UtiliteStyle/UtiliteStyle';


const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
 

  const handleFormInput = e => {
    const inputNameValue = e.target.value;
    const inputName = e.target.name;
    
    switch (inputName) {
      case 'name': {
        setName(inputNameValue);
        return;
      }
      case 'number': {
        setNumber(inputNameValue);
        return;
      }
      default:
        return;
    }
  };


  const handlerFormSubmit = ({ name, number }) => {
    const formData = {
      name: name,
      number: number,
    };

    const normalizeName = name.toLowerCase();
    const ArrayNames = contacts.find(
      item => item.name.toLowerCase() === normalizeName
    );
    if (ArrayNames) {
      alert(`${name} вже є в книзі`);
      return;
    }

    dispatch(addContact(formData))
  };


  const handlerSubmitForm = e => {
    e.preventDefault();
    handlerFormSubmit({ name, number });
    resetState();
  };

  
  const resetState = () => {
    setName('');
    setNumber('');
  };

  return (
    <FofmBasic onSubmit={handlerSubmitForm}>
      <Input
        onChange={handleFormInput}
        value={name}
        type="text"
        name="name"
        required="required"
      ></Input>
      <Input
        value={number}
        onChange={handleFormInput}
        type="tel"
        name="number"
        required="required"
      ></Input>
      <ButtonWrap><AddContactBtn text="add contact" /></ButtonWrap>
      
    </FofmBasic>
  );
};

export default ContactForm;

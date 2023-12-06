import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';

import { fetchContacts,deleteContact } from 'redux/contacts/contacts.reducer';
import { selectVisibleContacts,selectIsloading ,selectError} from 'redux/contacts/contacts.selectors';

import ContactItem from './ContactItem';
import Loader from 'components/Loader/Loader';

import { ListContacts } from './ContactListStyle';



const ContactList = () => {
  
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContacts);
  const isLoading=useSelector(selectIsloading)
  const error=useSelector(selectError)
  



  useEffect(()=>{
    dispatch(fetchContacts())
   
  },[dispatch])



  const clickDeletBtn = contactId => {

    dispatch(deleteContact(contactId))
  };

 
 
  return (
    <ListContacts>
      {isLoading && !error ? <Loader/> :
      contacts.map(({id,name,number}) => (
      <ContactItem
        key={id}
        name={name}
        number={number}
        onDeleteContact={clickDeletBtn}
        id={id}
        text='Delete'

        />
    
      ))}
    </ListContacts>
  );
};

export default ContactList;

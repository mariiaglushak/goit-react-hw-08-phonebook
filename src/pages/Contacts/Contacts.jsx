import ContactForm from "components/ContactForm/ContactForm";
import Filter from "components/Filter/Filter";
import ContactList from "components/ContactList/ContactList";
import { Wrapper,MainTitleCont ,SectionFormCont,ContactsBookTitle} from "./ContactsStyle";


const Contacts=()=>{
  return(<Wrapper>
    <SectionFormCont><MainTitleCont>Phonebook</MainTitleCont>
      <ContactForm />
      </SectionFormCont>
      <SectionFormCont>
      <ContactsBookTitle>Contacts</ContactsBookTitle>
      <Filter text="Find contacts by name"/>
      <ContactList />
      </SectionFormCont>
  </Wrapper>
)}
export default Contacts;
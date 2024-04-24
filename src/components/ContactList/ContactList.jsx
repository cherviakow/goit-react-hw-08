import { useSelector } from "react-redux";
import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { selectFilteredContacts } from "../../redux/contactsSlice";

export default function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.contacts_list}>
      {filteredContacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
}

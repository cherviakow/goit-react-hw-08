import { useSelector } from "react-redux";
import css from "./Contacts.module.css";
import Contact from "../Contact/Contact";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import DocumentTitle from "../DocumentTitle";

export default function Contacts() {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <>
      <DocumentTitle>Your contacts</DocumentTitle>
      <ul className={css.contacts_list}>
        {filteredContacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </ul>
    </>
  );
}
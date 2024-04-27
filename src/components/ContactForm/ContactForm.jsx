import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact, fetchContacts } from "../../redux/contacts/operations";
import css from "./ContactForm.module.css";
import toast from "react-hot-toast";
import { selectLoading } from "../../redux/contacts/selectors";
import SearchBox from "../SearchBox/SearchBox";
import Contacts from "../Contacts/Contacts";

export default function ContactForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(addContact({ name, number }))
      .unwrap()
      .then(() => {
        toast.success(`New contact with name ${name} added!`);
      })
      .catch(() => {
        toast.error("Something went wrong..");
      });

    setName("");
    setNumber("");
  };

  return (
    <div>
      <form className={css.form} onSubmit={handleSubmit}>
        <label>
          <span className={css.label_span}>Name  </span>
          <input
            type="text"
            name="name"
            className={css.input1}
            value={name}
            required
            onChange={handleNameChange}
          />
        </label>
        <label>
          
          <span className={css.label_span}>Phone  </span>
          <input
            type="tel"
            name="number"
            value={number}
            required
            onChange={handleNumberChange}
          />
        </label>
        
        <button type="submit">Add contact</button>
      </form>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="contacts_page-contacts-con">
      
          <SearchBox />
          <Contacts />
        </div>
      )}
    </div>
  );
}
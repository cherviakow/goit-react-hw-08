import { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";
import css from "./Form.module.css";
import toast from "react-hot-toast";

export default function Form() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

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
    <form className={css.form} onSubmit={handleSubmit}>
    <h1 className={css.phBook}>Phonebook</h1>
      <label>
        <span className={css.label_span}>Name</span>
        <input
          type="text"
          name="name"
          value={name}
          required
          onChange={handleNameChange}
        />
      </label>
      <label>
        <span className={css.label_span}>Phone</span>
        <input
          type="tel"
          name="number"
          value={number}
          required
          onChange={handleNumberChange}
        />
      </label>
      <button className={css.formBtn} type="submit">Add contact</button>
    </form>
  );
}

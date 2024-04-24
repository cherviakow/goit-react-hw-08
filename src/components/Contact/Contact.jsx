import { useDispatch } from "react-redux";
// import { deleteContact } from "../../redux/contactsSlice";
import css from "./Contact.module.css";
import toast from "react-hot-toast";
import { deleteContact } from "../../redux/contactsOps";
export default function Contact({ contact: { id, name, number } }) {
  const dispatch = useDispatch();

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id))
      .unwrap()
      .then(() => {
        toast.success(`Contact ${name} was deleted!`);
      })
      .catch(() => {
        toast.error("Something went wrong..");
      });
  };

  return (
    <li className={css.contacts_list__item}>
      {name}:
      <span>
        <i>{number}</i>
      </span>
      <button
        type="button"
        className={css.contacts_button}
        onClick={() => handleDeleteContact(id)}>
        delete
      </button>
    </li>
  );
}
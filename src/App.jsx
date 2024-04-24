import "./App.css";
import "modern-normalize";
import Form from "./components/Form/Form";
import Layout from "./components/Layout/Layout";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "./redux/contactsOps";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const dispatch = useDispatch();
  const selectLoading = useSelector((state) => state.loading);
  const selectError = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(fetchContacts())
      .unwrap()
      .then((value) => {
        toast.success(`You have ${value.length} contacts`);
      })
      .catch(() => {
        toast.error("Something went wrong..");
      });
  }, [dispatch]);

  return (
    <Layout>
      <Form />
      <SearchBox />
      <ContactList />
      {selectLoading && <p>Loading ...</p>}
      {selectError && <p>Error : {selectError}</p>}
      <Toaster />
    </Layout>
  );
}

export default App;

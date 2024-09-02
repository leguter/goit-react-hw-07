import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./ContactForm/ContactForm";
import { fetchContacts } from "./redux/contactsOps";
import { useEffect } from "react";
import { useDispatch,  useSelector } from "react-redux";
import { selectError, selectIsLoading } from "./redux/selectors";
function App() {
   const dispatch = useDispatch();
   const isLoading = useSelector(selectIsLoading);
   const error = useSelector(selectError);

   useEffect(() => {
     dispatch(fetchContacts());
   }, [dispatch]);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList />
    </div>
  );
}

export default App;

import Contact from "../Contact/Contact";
import css from './ContactList.module.css'
import { deleteContact } from "../../redux/contactsOps";
import { useDispatch, useSelector } from "react-redux";
// import { selectContacts } from "../../redux/contactsSlice";
import { filteredContacts } from "../../redux/selectors";
const ContactList = () => {
    const dispatch = useDispatch();
// const contacts = useSelector(selectContacts);
function deleteCard(item) {
    const action = deleteContact(item.id);
    dispatch(action);
} const filtedContacts = useSelector(filteredContacts )
      //  const filteredCards = contacts.filter((card) =>
      //    card.name.toLowerCase().includes(filterValue.toLowerCase())
      //  )
       return (
         <ul className={css.list}>
               {filtedContacts.map((card) => (
             <li key={card.id}>
               <Contact
                 number={card.number}
                 name={card.name}
                 deleteCard={() => deleteCard(card)}
               />
               </li>
               
           ))}
         </ul>
       )
     }
export default ContactList
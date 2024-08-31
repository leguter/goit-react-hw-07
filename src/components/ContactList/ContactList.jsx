import Contact from "../Contact/Contact";
// import { selectContacts } from "../../redux/contactsSlice";
import css from './ContactList.module.css'
import { deleteContact } from "../../redux/contactsSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
const ContactList = () => {
    // const contacts = useSelector(selectContacts)
    const dispatch = useDispatch();
    const filterValue = useSelector((state) => state.filter.filterValue);
const contacts = useSelector(selectContacts);
function deleteCard(item) {
    const action = deleteContact(item.id);
    dispatch(action);
}
       const filteredCards = contacts.filter((card) =>
         card.name.toLowerCase().includes(filterValue.toLowerCase())
       )
       return (
         <ul className={css.list}>
               {filteredCards.map((card) => (
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
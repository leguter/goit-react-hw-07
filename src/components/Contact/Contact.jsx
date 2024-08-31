import css from './Contact.module.css'
const Contact = ({
    number,
    name,
 deleteCard,
}) => {

    return (
      <div className={css.item}>
        <span className={css.spanText}>
          <p className={css.name}>{name}</p>
          <p className={css.name}>{number}</p>
        </span>
        <button type="button" onClick={deleteCard} className={css.deleteBtn}>Delete</button>
      </div>
    );
}
export default Contact
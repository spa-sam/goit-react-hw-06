import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

function ContactList({ contacts }) {
  return (
    <div className={css.contactList}>
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </div>
  );
}

export default ContactList;

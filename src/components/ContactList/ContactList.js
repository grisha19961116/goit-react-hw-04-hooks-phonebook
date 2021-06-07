import style from './ContactList.module.css';

const ContactList = ({ contacts, onRemove, onRemoveLocal }) => {
  if (contacts.length === 0) return null;
  return (
    <ul className={style.contactUl}>
      {contacts.map(({ id, name, phone }) => {
        return (
          <li className={style.contactLi} key={id}>
            <p className={style.name}>{name}</p>
            <p className={style.phone}>{phone}</p>
            <p
              onClick={() => {
                onRemove(id);
                onRemoveLocal(id);
              }}
              className={style.p__delete}
            >
              Delete
            </p>
          </li>
        );
      })}
    </ul>
  );
};
export default ContactList;

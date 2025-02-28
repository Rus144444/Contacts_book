import React from "react";

const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.length === 0 ? (
        <li>Нет контактов</li>
      ) : (
        contacts.map((contact) => (
          <li key={contact.id}>
            {contact.name} - {contact.number} -{" "}
            <button onClick={() => onDeleteContact(contact.id)}>
              Удалить контакт.
            </button>
            <br />
          </li>
        ))
      )}
    </ul>
  );
};

export { ContactsList };

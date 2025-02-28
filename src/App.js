import { Component } from "react";
import { nanoid } from "nanoid";
import { Form } from "./Form/Form";
import { ContactsList } from "./ContactsList/ContactsList";
import { Filter } from "./Filter/Filter";

class App extends Component {
  constructor() {
    super();
    this.state = {
      filter: "",
      contacts: [],
    };
  }

  handleFilterChange = (event) => {
    this.setState({ filter: event.target.value });
  };

  addContact = (name, number) => {
    const { contacts } = this.state;

    // Проверяем на дубликаты
    if (
      contacts.some(
        (contact) => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert("Этот контакт уже есть в списке!");
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      <div className="App">
        <h1>Контакты</h1>
        <Form addContact={this.addContact} />

        <h2>Поиск контактов</h2>
        <Filter filter={filter} onFilterChange={this.handleFilterChange} />

        <h2>Список контактов</h2>
        <ContactsList
          onDeleteContact={this.deleteContact}
          contacts={filteredContacts}
        />
      </div>
    );
  }
}

export default App;

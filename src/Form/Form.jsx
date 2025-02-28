import { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      number: "",
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, number } = this.state;

    if (name.trim() === "" || number.trim() === "") return;

    this.props.addContact(name, number);

    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChange}
          name="name"
          value={name}
          required
          placeholder="Введите имя контакта"
        />
        <br />
        <input
          onChange={this.handleChange}
          name="number"
          value={number}
          required
          placeholder="Введите номер телефона"
        />
        <br />
        <br />
        <button type="submit">Добавить</button>
      </form>
    );
  }
}

export { Form };

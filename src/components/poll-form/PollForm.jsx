import React from "react";
import shortid from "shortid";
import MyForm from "./Form";

const defaultOptions = [
  { id: shortid.generate(), value: "", vote: 0 },
  { id: shortid.generate(), value: "", vote: 0 },
];

class PollForm extends React.Component {
  state = {
    title: "",
    description: "",
    options: defaultOptions,
    errors: {},
  };

  componentDidMount() {
    const { poll } = this.props;
    if (poll && Object.keys(poll).length > 0) {
      this.setState({
        title: poll.title,
        description: poll.description,
        options: poll.options,
      });
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleOptionChange = (event, index) => {
    const { options } = this.state;
    options[index].value = event.target.value;
    this.setState({ options });
  };

  createOptions = () => {
    const { options } = this.state;
    if (options.length < 5) {
      options.push({
        id: shortid.generate(),
        value: "",
        vote: 0,
      });
      this.setState({ options });
    } else {
      alert("You can create maximum 5 options.");
    }
  };

  deleteOptions = (index) => {
    const { options } = this.state;
    if (options.length > 2) {
      options.splice(index, 1);
      this.setState({ options });
    } else {
      alert("You must have at least 2 options.");
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { isValid, errors } = this.validate();

    if (isValid) {
      const { title, description, options } = this.state;
      const poll = {
        title,
        description,
        options,
      };

      if (this.props.isUpdate) {
        poll.id = this.props.poll.id;
        this.props.submit(poll);
        alert("Updated Successfully");
        this.props.toggleModal();
      } else {
        this.props.submit({
          title,
          description,
          options,
        });
        event.target.reset();
        this.setState({
          title: "",
          description: "",
          options: defaultOptions,
          errors: {},
        });
      }
    } else {
      this.setState({ errors });
    }
  };

  validate = () => {
    const errors = {};
    const { title, description, options } = this.state;
    if (!title) {
      errors.title = "Please provide a title.";
    } else if (title.length < 20) {
      errors.title = "Title is too short.";
    } else if (title.length > 100) {
      errors.title = "Title is too long.";
    }

    if (!description) {
      errors.description = "Please provide a description.";
    } else if (description.length > 500) {
      errors.description = "Description is too long.";
    }

    const optionsErrors = [];
    options.forEach((opt, index) => {
      if (!opt.value) {
        optionsErrors[index] = "Options text empty.";
        alert("Please provide a option name.");
        // optionsErrors.push("Options text empty.");
      } else if (opt.value.length > 100) {
        optionsErrors[index] = "Options text too long.";
        alert("Options text is too long.");
        // optionsErrors.push("Options text is too long.");
      }
    });

    if (optionsErrors.length > 0) {
      errors.length = optionsErrors;
    }

    return {
      errors,
      isValid: Object.keys(errors).length === 0,
    };
  };

  render() {
    const { title, description, options, errors } = this.state;
    return (
      <MyForm
        title={title}
        description={description}
        options={options}
        errors={errors}
        buttonValue={this.props.buttonValue || "Create Poll"}
        handleChange={this.handleChange}
        handleOptionChange={this.handleOptionChange}
        createOptions={this.createOptions}
        deleteOptions={this.deleteOptions}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default PollForm;

import React, { Component } from 'react';
import './App.css';
import Form from './Components/Form';
import Result from './Components/Result';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        fullName: "",
        email: "",
        birthday: "",
        gender: "",
        division: "",
        skills: [],
        address: ""
      },
      skills: [
        {
          id: 1,
          name: "PHP"
        },
        {
          id: 2,
          name: "Laravel"
        },
        {
          id: 3,
          name: "React JS"
        },
        {
          id: 4,
          name: "VueJS"
        }
      ],
      divisions: [
        {
          id: 1,
          name: "Unit 1"
        },
        {
          id: 2,
          name: "Unit 2"
        },
        {
          id: 3,
          name: "Unit 3"
        },
        {
          id: 4,
          name: "Unit 4"
        }
      ],
      isSubmit: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { type, name, value, checked } = event.target;
    let prevUser = this.state.user;
    this.setState({
      user: {
        ...prevUser,
        [name]:
          type === "checkbox"
            ? checked
              ? [...prevUser.skills, JSON.parse(value)]
              : prevUser.skills.filter((skill) => {
                  return skill.id !== JSON.parse(value).id;
                })
            : value
      }
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      isSubmit: true
    });
  }
  render() {
    return (
      <div className="container">
        <Form
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          skills={this.state.skills}
          divisions={this.state.divisions}
          user={this.state.user}
        />
        <br></br>
        <Result isSubmit={this.state.isSubmit} user={this.state.user} />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";

import Timer from "../Timer";
import TimerInput from "./TimerInput";
import SubmitButton from "../SubmitButton";
import Dropdown from "../Dropdown";

class Start extends Component {
  state = {
    minutes: "20",
    seconds: "00",
    subjects: ["Latin"],
    subject: "Latin",
  };

  // componentDidMount = () => {
  //   const receivedSubjects = [];
  //   for (let subject of this.props.subjects) {
  //     receivedSubjects.push(subject);
  //   }
  //   this.setState(() => ({
  //     subjects: receivedSubjects,
  //   }));
  // };

  handleSettings = event => {
    const { name, value } = event.target;
    this.setState(() => ({
      [name]: value,
    }));
  };

  startTest = event => {
    const { subject, minutes } = this.state;
    console.log(`${subject}, ${minutes}`);
  };

  render() {
    const { minutes, seconds, subjects, subject } = this.state;
    const { handleSettings, startTest } = this;
    return (
      <div>
        <Timer minutes={minutes} seconds={seconds} />
        <TimerInput action={handleSettings} minutes={minutes} />
        <Dropdown action={handleSettings} choices={subjects} name="subject" />
        <SubmitButton path="/quiz" query={{ subject, minutes }} action={startTest} text="Start" />
      </div>
    );
  }
}

export default Start;

import React, { PureComponent } from "react";

import { Card, Divider, Grid, Step } from "semantic-ui-react";

import Timer from "../Timer";
import TimerInput from "./TimerInput";
import SubmitButton from "../SubmitButton";
import Dropdown from "../Dropdown";

class Start extends PureComponent {
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
        <Card>
          <Grid columns={1}>
            <Grid.Column>
              <Step.Group vertical>
                <Step>
                  <Step.Content>
                    <Step.Title>Time</Step.Title>
                    <Step.Description>Set a time limit</Step.Description>
                    <TimerInput action={handleSettings} minutes={minutes} />
                  </Step.Content>
                </Step>
                <Step>
                  <Step.Content>
                    <Step.Title>Subject</Step.Title>
                    <Step.Description>Choose a subject</Step.Description>
                    <Dropdown action={handleSettings} choices={subjects} name="subject" />
                  </Step.Content>
                </Step>
                <Step>
                  <Step.Content>
                    <Step.Title>Start</Step.Title>
                    <Step.Description>Press start to begin your test!</Step.Description>
                    <SubmitButton
                      path="/quiz"
                      query={{ subject, minutes }}
                      action={startTest}
                      text="Start"
                    />
                  </Step.Content>
                </Step>
              </Step.Group>
            </Grid.Column>
        </Grid>
      </Card>
    </div>
    );
  }
}

export default Start;

import { Component } from "react";
import { Statistics } from "./statistics/statistics";
import { FeedbackOptions } from "./feedbackOptions/feedbackOptions";
import { Section } from "./section/section";
import { Notification } from "./notification/notification";

class App extends Component{
state = {
  good: 0,
  neutral: 0,
  bad: 0
  }
  
  
  leaveFeedback = ({ target: { name } }) => {
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((total, curr) => (total + curr));
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();

    if (total === 0) {
      return 0; // Щоб уникнути ділення на нуль
    }

    let positivePercentage = (good / total) * 100;
    positivePercentage = Math.round(positivePercentage);
    return positivePercentage;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (<>
      <Section title='Please leave feedback'>
         <FeedbackOptions  options={Object.keys(this.state)}
        leaveFeedback={this.leaveFeedback} />
      </Section>
       <Section title="Statistics">
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
    </>
     
    )
  }

}
export default App;

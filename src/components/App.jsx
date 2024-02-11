import { useState } from 'react';
import { Statistics } from "./statistics/statistics";
import { FeedbackOptions } from "./feedbackOptions/feedbackOptions";
import { Section } from "./section/section";
import { Notification } from "./notification/notification";

const App = () => {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const options = ['good', 'bad', 'neutral']
  const leaveFeedback = options => {
    switch (options) {
      case 'good':
      setGood(prevGood => prevGood + 1);
        break;
      
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break
      
      default:
        return;
        

    }
  }

  
 const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbach = () => {
    const total = countTotalFeedback();
    const positivePercentage = Math.round((good * 100) / total);
    return total ? positivePercentage : 0;
  };
  
 const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbach();


  return (<>
     <Section title='Please leave feedback'>
      <FeedbackOptions options={options}
        leaveFeedback={leaveFeedback} />
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






// class App extends Component{

  
  


//   countTotalFeedback = () => {
//     return Object.values(this.state).reduce((total, curr) => (total + curr));
//   };

//   countPositiveFeedbackPercentage = () => {
//     const { good } = this.state;
//     const total = this.countTotalFeedback();

//     if (total === 0) {
//       return 0; // Щоб уникнути ділення на нуль
//     }

//     let positivePercentage = (good / total) * 100;
//     positivePercentage = Math.round(positivePercentage);
//     return positivePercentage;
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const total = this.countTotalFeedback();
//     const positivePercentage = this.countPositiveFeedbackPercentage();
//     return (<>
//       <Section title='Please leave feedback'>
//          <FeedbackOptions  options={Object.keys(this.state)}
//         leaveFeedback={this.leaveFeedback} />
//       </Section>
//        <Section title="Statistics">
//           {total ? (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={total}
//               positivePercentage={positivePercentage}
//             />
//           ) : (
//             <Notification message="There is no feedback" />
//           )}
//         </Section>
//     </>
     
//     )
//   }

// }
// export default App;
export default App;

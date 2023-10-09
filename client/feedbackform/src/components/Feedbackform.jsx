import { useState } from "react";
import QuestionFour from "./questions/QuestionFour";
import QuestionOne from "./questions/QuestionOne";
import QuestionThree from "./questions/QuestionThree";
import QuestionTwo from "./questions/QuestionTwo";

const Feedbackform = () => {
  const [feedBack, setFeedBack] = useState({
    question1: "",
    question2: "Information",
    question3: 3,
    question4: "",
  });

  const onChangeHandler = (data) => {
    setFeedBack({ ...feedBack, ...data });
  };
  return (
    <div className="bg-gray-300 dark:bg-gray-900 ">
      <div className="py-8 lg:py-16 px-8 mx-auto max-w-screen-md bg-gray-800">
        <h2 className="mb-4 text-4xl tracking-widest  font-bold text-center text-gray-300 dark:text-white">
          FEEDBACK
        </h2>
        <div className="space-y-8">
          <QuestionOne onChange={onChangeHandler} value={feedBack.question1} />
          <QuestionTwo />
          <QuestionThree />
          <QuestionFour />

          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Submit Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feedbackform;

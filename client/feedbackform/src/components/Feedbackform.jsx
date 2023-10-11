import { useState } from "react";
import QuestionFour from "./questions/QuestionFour";
import QuestionOne from "./questions/QuestionOne";
import QuestionThree from "./questions/QuestionThree";
import QuestionTwo from "./questions/QuestionTwo";
import QuestionFive from "./questions/QuestionFive";
import { feedbackSubmitAction } from "./service/action";
import ErrorDisplay from "./ErrorDisplay";
import NavTheme from "./NavTheme";

/* The main component */
const Feedbackform = () => {
  const initialState = {
    question1: "",
    question2: [],
    question3: 9,
    question4: "",
    question5: "",
  };

  const [feedBack, setFeedBack] = useState(initialState);

  const onChangeHandler = (data) => {
    setFeedBack({ ...feedBack, ...data });
  };

  const checkBoxOnChangeHandler = (data) => {
    const { name, checked } = data.target;

    /* If checked false omit that name value from the array */
    if (!checked) {
      const omitedCheckox = feedBack.question2.filter((i) => i !== name);
      setFeedBack({ ...feedBack, question2: omitedCheckox });
    }

    if (checked) {
      setFeedBack({ ...feedBack, question2: [...feedBack.question2, name] });
    }
  };

  /* Page Reset This function set the inital state to feedback state */
  const resetHandler = () => {
    setFeedBack(initialState);
    setError({ error: false, errormessages: [] });
  };

  const clearError = () => {
    setError({ error: false, errormessages: [] });
  };

  const [error, setError] = useState({
    error: false,
    errormessages: [],
  });

  const onSubmit = async () => {
    try {
      const submitRes = await feedbackSubmitAction({ data: feedBack });
      setError({ error: false, errormessages: [] });
      console.log("submit***", submitRes);
    } catch (error) {
      console.log("error****", error?.data?.data?.data);
      setError({
        error: true,
        errormessages: error?.data?.data?.data,
      });
    }
  };

  return (
    <NavTheme>
      <h2 className="mb-4 text-4xl tracking-widest  font-bold text-center text-gray-300 dark:text-white">
        FEEDBACK
      </h2>

      <div className="my-3">
        {error.error && (
          <ErrorDisplay
            errormessages={error.errormessages}
            clearError={clearError}
          />
        )}
      </div>

      <div className="space-y-8">
        {/* Each component has one question and handled one question and return the value of the component */}
        <QuestionOne onChange={onChangeHandler} value={feedBack.question1} />
        <QuestionTwo
          onChange={checkBoxOnChangeHandler}
          value={feedBack.question2}
        />
        <QuestionThree onChange={onChangeHandler} value={feedBack.question3} />
        <QuestionFour onChange={onChangeHandler} value={feedBack.question4} />
        <QuestionFive onChange={onChangeHandler} value={feedBack.question5} />

        <div className="flex justify-between">
          <button
            onClick={resetHandler}
            type="submit"
            className="py-3  px-5 text-sm font-medium text-center text-white rounded-lg bg-red-600 sm:w-fit hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Reset
          </button>
          {error.error && (
            <a
              href="#top"
              className=" text-red-600 px-1 items-center flex border-pink-900 text-xs border rounded-md hover:bg-red-600 hover:text-white"
            >
              <>Error Occured See the top </>{" "}
              <div className="font-extrabold text-lg pl-3"> ↑ </div>
            </a>
          )}
          <button
            onClick={onSubmit}
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Submit
          </button>
        </div>
      </div>
    </NavTheme>
  );
};

export default Feedbackform;

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
  const [processing, setProcessing] = useState(false);

  const onSubmit = async () => {
    setProcessing(true);
    try {
      const submitRes = await feedbackSubmitAction({ data: feedBack });
      setProcessing(false);
      setError({ error: false, errormessages: [] });
      const {
        data: { feedbackid },
      } = submitRes;

      if (feedbackid) {
        setFeedBack(initialState);
        window.open(`/success/${feedbackid}`, "_blank");
      }
    } catch (error) {
      setProcessing(false);
      setError({
        error: true,
        errormessages: error?.data?.data?.data,
      });
    }
  };

  return (
    <NavTheme>
      <div className="py-16 px-8">
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
          <QuestionThree
            onChange={onChangeHandler}
            value={feedBack.question3}
          />
          <QuestionFour onChange={onChangeHandler} value={feedBack.question4} />
          <QuestionFive onChange={onChangeHandler} value={feedBack.question5} />

          <div className="flex justify-between">
            <button
              onClick={resetHandler}
              type="submit"
              className="py-3  px-5 text-sm font-medium text-center text-white rounded-lg bg-red-600 sm:w-fit hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-primary-300 "
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

            {processing && (
              <button
                onClick={onSubmit}
                type="submit"
                className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 "
              >
                <svg
                  aria-hidden="true"
                  role="status"
                  class="inline w-4 h-4 mr-3 text-gray-200 animate-spin dark:text-gray-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="#1C64F2"
                  />
                </svg>
                Loading...
              </button>
            )}

            {!processing && (
              <button
                onClick={onSubmit}
                type="submit"
                className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 "
              >
                Submit
              </button>
            )}
          </div>
        </div>
      </div>
    </NavTheme>
  );
};

export default Feedbackform;

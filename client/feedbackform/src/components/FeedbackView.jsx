import { useEffect, useState } from "react";
import NavTheme from "./NavTheme";
import { useParams } from "react-router";
import { feedbackViewAction } from "./service/action";
import ErrorDisplay from "./ErrorDisplay";
import { useNavigate } from "react-router-dom";

const FeedbackView = () => {
  const { feedbackid } = useParams();
  const goto = useNavigate();

  const [feedbackData, setFeedbackData] = useState(undefined);

  useEffect(() => {
    if (feedbackid) {
      feedbackViewAction({ feedbackid })
        .then((res) => {
          const { data } = res;

          if (data) {
            let createdModDate = data["createdat"];

            if (data["createdat"]) {
              const cdateFormat = new Date(data["createdat"]);
              createdModDate = `${cdateFormat.getDate()}-${cdateFormat.getMonth()}-${cdateFormat.getFullYear()}`;
            }

            let birthdayModDate = data["Enter your birthday?"];

            if (data["Enter your birthday?"]) {
              const bdateFormat = new Date(data["Enter your birthday?"]);
              birthdayModDate = `${bdateFormat.getDate()}-${bdateFormat.getMonth()}-${bdateFormat.getFullYear()}`;
            }

            setFeedbackData({
              ...data,
              createdat: createdModDate,
              "Enter your birthday?": birthdayModDate,
            });
          }
        })
        .catch((err) => {
          console.log("err***", err);
        });
    }

    return () => setFeedbackData(undefined);
  }, [feedbackid]);

  return (
    <NavTheme>
      <div className="flex justify-end">
        <button
          onClick={() => goto(`/`)}
          type="submit"
          className="py-3 m-3 fixed px-5 text-xs font-medium text-center text-white rounded-lg bg-slate-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 "
        >
          Add New Feedback
        </button>
      </div>

      <div className="px-8 py-16">
        <h2 className="mb-4 text-4xl tracking-widest  font-bold text-center text-gray-300 dark:text-white">
          Submited Feedback
        </h2>

        {!feedbackData && (
          <>
            <ErrorDisplay errormessages={["No Data Found"]} />
          </>
        )}
        {feedbackData && (
          <div className="space-y-8 mt-10">
            {Object.keys(feedbackData).length &&
              Object.keys(feedbackData).map((datakey, index) => (
                <div key={index}>
                  <label className="block text-2xl font-semibold text-green-400 dark:text-gray-300">
                    {datakey}
                  </label>

                  {feedbackData[datakey] &&
                    typeof feedbackData[datakey] === "string" && (
                      <div className="flex items-center mb-3">
                        <label className="ml-2 text-lg font-medium text-gray-300 dark:text-gray-300">
                          {feedbackData[datakey]}
                        </label>
                      </div>
                    )}

                  {feedbackData[datakey] &&
                    Array.isArray(feedbackData[datakey]) &&
                    feedbackData[datakey].length &&
                    feedbackData[datakey].map((value, index) => (
                      <div className="flex items-center " key={index}>
                        <label className="ml-2 text-lg font-medium text-gray-300 dark:text-gray-300">
                          {value}
                        </label>
                      </div>
                    ))}
                </div>
              ))}
          </div>
        )}
      </div>
    </NavTheme>
  );
};

export default FeedbackView;

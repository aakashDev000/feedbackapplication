const QuestionOne = ({ onChange, value }) => {
  return (
    <>
      <div>
        <label className="block mb-2 text-lg font-bold text-gray-300 dark:text-gray-300">
          1. How often do you use this app ?
        </label>

        <div className="flex items-center mb-3">
          <input
            checked={value === "daily" ? true : false}
            id="daily"
            type="radio"
            value=""
            name="daily"
            onChange={(e) => {
              onChange({ question1: "daily" });
            }}
            className="w-4 h-4 hover:cursor-pointer text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label className="ml-2 text-sm font-medium text-gray-300 dark:text-gray-300">
            Daily
          </label>
        </div>
        <div className="flex items-center mb-3">
          <input
            checked={value === "weekly" ? true : false}
            id="weekly"
            type="radio"
            value=""
            name="weekly"
            onChange={(e) => {
              onChange({ question1: "weekly" });
            }}
            className="w-4 hover:cursor-pointer h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label className="ml-2 text-sm font-medium text-gray-300 dark:text-gray-300">
            Weekly
          </label>
        </div>

        <div className="flex items-center mb-3">
          <input
            checked={value === "monthly" ? true : false}
            id="monthly"
            type="radio"
            value=""
            name="monthly"
            onChange={(e) => {
              onChange({ question1: "monthly" });
            }}
            className="w-4 h-4 hover:cursor-pointer text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label className="ml-2 text-sm font-medium text-gray-300 dark:text-gray-300">
            Monthly
          </label>
        </div>

        <div className="flex items-center mb-3">
          <input
            checked={value === "rarely" ? true : false}
            id="rarely"
            type="radio"
            value=""
            name="rarely"
            onChange={(e) => {
              onChange({ question1: "rarely" });
            }}
            className="w-4 h-4 hover:cursor-pointer text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label className="ml-2 text-sm font-medium text-gray-300 dark:text-gray-300">
            Rarely
          </label>
        </div>
        <div className="flex items-center mb-3">
          <input
            checked={value === "firsttime" ? true : false}
            id="firsttime"
            type="radio"
            value=""
            name="firsttime"
            onChange={(e) => {
              onChange({ question1: "firsttime" });
            }}
            className="w-4 h-4 hover:cursor-pointer text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label className="ml-2 text-sm font-medium text-gray-300 dark:text-gray-300">
            First Time
          </label>
        </div>
      </div>
    </>
  );
};

export default QuestionOne;

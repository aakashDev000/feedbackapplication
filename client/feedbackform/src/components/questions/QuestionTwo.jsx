const QuestionTwo = ({ onChange, value }) => {
  return (
    <div>
      <label className="block mb-2 text-lg font-bold text-gray-300 dark:text-gray-300">
        2. Main app goal ?
      </label>

      <div className="flex items-center mb-4">
        <input
          id="information"
          type="checkbox"
          value=""
          checked={value.includes("information") ? true : false}
          name="information"
          onChange={onChange}
          className="w-4 h-4 hover:cursor-pointer text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label className="ml-2 text-sm font-medium text-gray-300 dark:text-gray-300">
          Information
        </label>
      </div>
      <div className="flex items-center mb-4">
        <input
          id="chat"
          type="checkbox"
          value=""
          checked={value.includes("chat") ? true : false}
          name="chat"
          onChange={onChange}
          className="w-4 h-4 hover:cursor-pointer text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label className="ml-2 text-sm font-medium text-gray-300 dark:text-gray-300">
          Chat{" "}
        </label>
      </div>
      <div className="flex items-center mb-4">
        <input
          id="entertainment"
          type="checkbox"
          value=""
          checked={value.includes("entertainment") ? true : false}
          name="entertainment"
          onChange={onChange}
          className="w-4 h-4 hover:cursor-pointer text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label className="ml-2 text-sm font-medium text-gray-300 dark:text-gray-300">
          Entertainment
        </label>
      </div>
      <div className="flex items-center mb-4">
        <input
          id="buy"
          type="checkbox"
          value=""
          checked={value.includes("buy") ? true : false}
          name="buy"
          onChange={onChange}
          className="w-4 h-4 hover:cursor-pointer text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label className="ml-2 text-sm font-medium text-gray-300 dark:text-gray-300">
          Buy
        </label>
      </div>
      <div className="flex items-center mb-4">
        <input
          id="socialize"
          type="checkbox"
          value=""
          checked={value.includes("socialize") ? true : false}
          name="socialize"
          onChange={onChange}
          className="w-4 h-4 hover:cursor-pointer text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label className="ml-2 text-sm font-medium text-gray-300 dark:text-gray-300">
          Socialize
        </label>
      </div>
      <div className="flex items-center">
        <input
          id="other"
          type="checkbox"
          value=""
          checked={value.includes("other") ? true : false}
          name="other"
          onChange={onChange}
          className="w-4 h-4 hover:cursor-pointer text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label className="ml-2 text-sm font-medium text-gray-300 dark:text-gray-300">
          Other
        </label>
      </div>
    </div>
  );
};

export default QuestionTwo;

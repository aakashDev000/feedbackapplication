const QuestionFive = ({ onChange, value }) => {
  const currentDate = new Date();

  const fullYear = currentDate.getFullYear();

  const month =
    String(currentDate.getMonth() + 1).length > 1
      ? currentDate.getMonth() + 1
      : `0${currentDate.getMonth() + 1}`;

  const fulldate = currentDate.getDate();

  const date = fullYear + "-" + month + "-" + fulldate;

  return (
    <div>
      <div className="max-w-sm">
        <label className="block mb-2 text-lg font-bold text-gray-300 dark:text-gray-400">
          5. Enter your birthday ?
        </label>
        <input
          datepicker="true"
          value={value}
          onChange={(e) => {
            const { value } = e.target;
            onChange({ question5: value });
          }}
          max={date}
          type="date"
          className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5 bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
    </div>
  );
};

export default QuestionFive;

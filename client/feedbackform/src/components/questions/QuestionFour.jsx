const QuestionFour = ({ onChange, value }) => {
  return (
    <div className="sm:col-span-2">
      <label className="block mb-2 text-lg font-bold text-gray-300 dark:text-gray-400">
        4. Suggest any improvements :
      </label>
      <textarea
        id="message"
        rows="6"
        value={value}
        onChange={(e) => {
          const { value } = e.target;
          onChange({ question4: value });
        }}
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-100 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
        placeholder="Leave a comment..."
      ></textarea>
    </div>
  );
};

export default QuestionFour;

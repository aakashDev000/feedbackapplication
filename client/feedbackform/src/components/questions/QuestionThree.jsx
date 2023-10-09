const QuestionThree = () => {
  return (
    <div>
      <label
        className="block mb-2 text-lg font-bold text-gray-300 dark:text-gray-400"
      >
        3. Rate user experience (1-10) :
      </label>

      <input
        id="minmax-range"
        type="range"
        min="0"
        max="10"
        value="3"
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
      />
    </div>
  );
};

export default QuestionThree;

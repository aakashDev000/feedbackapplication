const QuestionThree = ({ onChange, value }) => {
  return (
    <div>
      <label className="block mb-2 text-lg font-bold text-gray-300 dark:text-gray-400">
        3. Rate user experience (1-10) :
      </label>

      <div className="text-white dark:text-gray-400 flex justify-end">
        <span
          className={
            value < 4
              ? "border rounded-md p-1 px-2 bg-red-600"
              : value < 9
              ? "border rounded-md p-1 px-2 bg-blue-600"
              : "border rounded-md p-1 px-2 bg-green-600"
          }
        >
          {value}
        </span>
      </div>
      <input
        id="minmax-range"
        type="range"
        min="1"
        max="10"
        value={value}
        onChange={(e) => {
          const { value } = e.target;
          onChange({ question3: Number(value) });
        }}
        className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
      />
    </div>
  );
};

export default QuestionThree;

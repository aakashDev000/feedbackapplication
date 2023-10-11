const ErrorDisplay = ({ errormessages, clearError }) => {
  return (
    <div className="border bg-slate-300 rounded-lg flex justify-between ">
      <div className="text-red-500 p-3 font-semibold">
        {errormessages &&
          errormessages.length &&
          errormessages.map((error, index) => (
            <div className="" key={index}>
              {index + 1} - {error}
            </div>
          ))}

        {!errormessages && <div> Error occured in server</div>}
      </div>
      <div className="flex justify-end mr-3 mt-2 h-7">
        <div
          onClick={clearError}
          className="p-1 border text-sm text-gray-800 rounded-md border-green-600 hover:bg-green-700 hover:text-white hover:cursor-pointer"
        >
          Clear Error
        </div>
      </div>
    </div>
  );
};

export default ErrorDisplay;

const ErrorDisplay = ({ errormessages }) => {
  return (
    <>
      {errormessages.length &&
        errormessages.map((error, index) => <div key={index}>{error}</div>)}
    </>
  );
};

export default ErrorDisplay;

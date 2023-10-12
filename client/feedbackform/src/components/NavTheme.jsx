const NavTheme = ({ children }) => {
  return (
    <div className="bg-gray-200 dark:bg-gray-900">
      <div className=" mx-auto max-w-screen-md  bg-gray-800" id="top">
        {children}
      </div>
    </div>
  );
};

export default NavTheme;

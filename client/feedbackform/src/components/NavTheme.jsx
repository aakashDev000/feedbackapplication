const NavTheme = ({ children }) => {
  return (
    <div className="bg-gray-300 dark:bg-gray-900">
      <div
        className="py-8 lg:py-16 px-8 mx-auto max-w-screen-md bg-gray-800"
        id="top"
      >
        {children}
      </div>
    </div>
  );
};

export default NavTheme;

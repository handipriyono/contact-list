const Header = () => {
  return (
    <>
      <>
        <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-40 w-full bg-white border-b border-gray-200 text-sm py-3 sm:py-0">
          <nav className="relative w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
            <div className="flex items-center min-h-[70px]">
              <a
                className="flex-none text-xl font-semibold dark:text-white"
                aria-label="Brand"
              >
                ContactApp
              </a>
            </div>
          </nav>
        </header>
      </>
    </>
  );
};

export default Header;

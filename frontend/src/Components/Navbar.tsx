import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';

interface NavbarProps {
    setLoggedin: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({ setLoggedin }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
    const [isSignupPopupOpen, setIsSignupPopupOpen] = useState(false);

    // Toggle the mobile menu
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Open the login popup
    const openLoginPopup = () => {
        setIsLoginPopupOpen(true);
    };

    // Close the login popup
    const closeLoginPopup = () => {
        setIsLoginPopupOpen(false);
    };

    // Open the signup popup
    const openSignupPopup = () => {
        setIsSignupPopupOpen(true);
    };

    // Close the signup popup
    const closeSignupPopup = () => {
        setIsSignupPopupOpen(false);
    };

    return (
        <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-end mx-auto p-4">
                <div className="flex md:order-2">
                    {/* Hamburger menu button */}
                    <button
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        onClick={toggleMobileMenu}
                        aria-controls="navbar-sticky"
                        aria-expanded={isMobileMenuOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                </div>
                <div
                    className={`items-center justify-end ${isMobileMenuOpen ? 'flex' : 'hidden'
                        } w-full md:flex md:w-auto md:order-1`}
                    id="navbar-sticky"
                >
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <button
                                type="button"
                                className="block my-2 md:my-0 py-2 pl-3 pr-4 text-white bg-blue-700 rounded hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                onClick={openLoginPopup}
                                
                            >
                                Login
                            </button>
                        </li>
                        <li>
                            <button
                                type="button"
                                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                onClick={openSignupPopup}
                            >
                                Signin
                            </button>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Login Popup */}
            {isLoginPopupOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 w-96">
                        <Login setLoggedin={setLoggedin} />
                        <button
                            type="button"
                            className="block mx-auto mt-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center text-white dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            onClick={closeLoginPopup}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            {/* Signup Popup */}
            {isSignupPopupOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 w-96">
                        <Signup />
                        <button
                            type="button"
                            className="block mx-auto mt-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center text-white dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            onClick={closeSignupPopup}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

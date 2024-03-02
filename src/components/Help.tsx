import { Outlet, NavLink } from "react-router-dom";

const Help = () => {
  return (
    <div className="bg-gradient-to-b from-[#C2B0A1] to-[#897765] px-2 py-4 flex flex-col">
      <div className="flex flex-row items-center justify-between mb-8">
        <h1 className="text-bold text-xl">How Can We Help You?</h1>
        <NavLink to="/">
          <button className="bg-white ml-auto mr-2 px-4 py-2 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </button>
        </NavLink>
      </div>
      <div className="flex flex-col  justify-center space-y-2">
        <div className="flex flex-rwo justify-between bg-white rounded-sm px-2 py-4">
          <h3>I forgot my password. How can I reset it?</h3>
          <button className="ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-rwo justify-between bg-white rounded-sm px-2 py-4">
          <h3>How can I communicate with my instructor or classmates?</h3>
          <button className="ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-rwo justify-between bg-white rounded-sm px-2 py-4">
          <h3>How do I change my profile information?</h3>
          <button className="ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-rwo justify-between bg-white rounded-sm px-2 py-4">
          <h3>
            What should I do if I encounter inappropriate content or behavior?
          </h3>
          <button className="ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-rwo justify-between bg-white rounded-sm px-2 py-4">
          <h3>What should I do if I encounter a bug or error message?</h3>
          <button className="ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-rwo justify-between bg-white rounded-sm px-2 py-4">
          <h3>I have a question that's not listed here. How can I get help</h3>
          <button className="ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
        </div>
        <div className="bg-white ml-auto mr-auto rounded-md">
          <button className="items-center content-center px-4 py-4">
            Contact Us
          </button>
        </div>
      </div>

      {/* <NavLink to="contact">
        <button className="bg-white">Contact Us</button>
      </NavLink> */}

      <Outlet />
    </div>
  );
};

export default Help;

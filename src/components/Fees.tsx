import Table from "./hooks/Table";
import { NavLink } from "react-router-dom";

const data = [
  {
    TransactionID: 1234567,
    PaymentDate: "12-Jan-2024",
    TotalFee: 24000,
  },
  {
    TransactionID: 324324567,
    PaymentDate: "12-Feb-2024",
    TotalFee: 24234,
  },
  {
    TransactionID: 9874567,
    PaymentDate: "12-Mar-2024",
    TotalFee: 24456,
  },
];

const data1 = [
  {
    TransactionID: 1234567,
    PaymentDate: "12-Jan-2024",
    TotalFee: 24000,
    Fees: 2344,
  },
  {
    TransactionID: 324324567,
    PaymentDate: "12-Feb-2024",
    TotalFee: 24234,
    Fees: 2344,
  },
  {
    TransactionID: 9874567,
    PaymentDate: "12-Mar-2024",
    TotalFee: 24456,
    Fees: 2344,
  },
];

const Fees = () => {
  return (
    <div className="flex flex-col items-center pt-16 space-y-4 bg-gradient-to-b from-[#C2B0A1] to-[#897765] pb-20">
      <NavLink to="/">
        <button className="bg-white ml-72 mr-5 px-4 py-2 rounded-lg">
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
      <span className="flex w-[20rem] h-12 text-center bg-white justify-center items-center rounded-2xl">
        <h1 className="font-bold">Tuition</h1>
      </span>
      <Table data={data} />
      <span className="flex w-[20rem] h-12 text-center bg-white justify-center items-center rounded-2xl">
        <h1 className="font-bold">Admission</h1>
      </span>
      <Table data={data1} />
      <span className="flex w-[20rem] h-12 text-center bg-white justify-center items-center rounded-2xl">
        <button>
          <NavLink to="/">
            <h2 className="font-bold">Go Back</h2>
          </NavLink>
        </button>
      </span>
    </div>
  );
};

export default Fees;

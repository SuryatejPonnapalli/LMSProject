import Table from "./hooks/Table";

const data =[{
    TransactionID:1234567,
    PaymentDate: "12-Jan-2024",
    TotalFee:24000
},
{
    TransactionID:324324567,
    PaymentDate: "12-Feb-2024",
    TotalFee:24234
},
{
    TransactionID:9874567,
    PaymentDate: "12-Mar-2024",
    TotalFee:24456
}]

const data1 =[{
    TransactionID:1234567,
    PaymentDate: "12-Jan-2024",
    TotalFee:24000,
    Fees: 2344
},
{
    TransactionID:324324567,
    PaymentDate: "12-Feb-2024",
    TotalFee:24234,
    Fees: 2344
},
{
    TransactionID:9874567,
    PaymentDate: "12-Mar-2024",
    TotalFee:24456,
    Fees: 2344
}]

const Fees = () => {
    return ( 
        <div className="flex flex-col items-center pt-16 space-y-4 bg-[#E7DCC9] pb-20">
            <span className="flex w-[20rem] h-12 text-center bg-white justify-center items-center rounded-2xl">
                <h1 className="font-bold">Tuition</h1>
            </span >
            <Table data={data}/>
            <span className="flex w-[20rem] h-12 text-center bg-white justify-center items-center rounded-2xl">
                <h1 className="font-bold">Admission</h1>
            </span>
            <Table data={data1} />
            <span className="flex w-[20rem] h-12 text-center bg-white justify-center items-center rounded-2xl">
               <button>
                    <h2 className="font-bold">Pay Now</h2>
                </button>
            </span>
        </div>
     );
}
 
export default Fees;
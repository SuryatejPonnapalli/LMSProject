const Icons = ({source,heading}) => {
    return ( 
        <div className="flex flex-col size-24 p-2 items-center justify-center rounded-3xl bg-[#432920] mx-[0.4rem] my-2">
            {/* Icon */}
            <div>
                <img className="size-10" src={source} alt={heading} />
            </div>
            {/* Heading for Icon */}
            <div>
               <p className="text-[#D1C3BD]">{heading}</p> 
            </div>
        </div>
     );
}
 
export default Icons;
const Icons = ({source,heading}) => {
    return ( 
        <div className="flex flex-col">
            {/* Icon */}
            <div className="flex items-center justify-center size-16 rounded-full bg-[#A4907B] mx-[1.4rem] my-2">
                <img className="size-10" src={source} alt={heading} />
            </div>
            {/* Heading for Icon */}
            <div className="text-center">
               <p className="text-[#283712]">{heading}</p> 
            </div>
        </div>
     );
}
 
export default Icons;
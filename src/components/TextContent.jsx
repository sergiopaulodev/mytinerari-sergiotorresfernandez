export default function TextContent() {
  return (
    <>
        <div className="md:flex md:w-2/3">
            <div className="flex flex-col h-full gap-10 mb-4 justify-center items-start">
                <h1 className="flex xl:text-5xl text-4xl font-bold text-[#1C1C1C]">Find the perfect destination</h1>
                <p className="xl:text-2xl text-xl font-semibold text-[#1C1C1C]">Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</p>
                <button className="flex  py-4 px-5 justify-center items-center gap-1 bg-[#4F46E5] rounded-lg">
                    <p className="text-2xl font-semibold text-white">View More</p>
                </button>  
            </div>
        </div>                
    </>
  );
}

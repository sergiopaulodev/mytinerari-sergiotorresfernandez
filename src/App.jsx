function App() {


  return (
    <>
        <div className="flex justify-between items-center mx-[218px] mt-[32px] mb-[318px]">
            <h1 className="text-[32px] font-bold">My Tinerari</h1>
            <nav className="flex gap-[32px]">
                <a href="./" className="text-24px font-bold">Home</a>
                <a href="./" className="text-24px font-bold">Cities</a>
                <button className="bg-[#4F46E5] rounded-lg">
                    <a href="./" className="my-[16px] mx-[32px] text-white">Login</a>
                </button>
            </nav>
        </div>
        <div className="flex justify-between items-center mx-[218px] mb-[399]">
            <div className="flex flex-col gap-[40px] justify-center items-start w-[724px]">
                <h2 className="text-[48px] font-bold">Find the perfect destination</h2>
                <p className="text-[24px]">Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</p>
                <button className="flex py-[16px] px-[20px] justify-center items-center bg-[#4F46E5] rounded-lg">
                    <p className="text-[24px] font-semibold text-white">View More</p>
                </button>
            </div>
            <figure className="">
                <img src="/rectangulo.svg" alt="img" className="w-[308px] h-[200]" />
            </figure>
        </div>
    </>
  )
}

export default App

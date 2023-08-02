function App() {


  return (
    <>
        <header className="flex justify-between w-auto items-center lg:mx-20 mx-10 mt-8 xl:mb-72 mb-16">
            <h2 className="xl:text-4xl text-3xl font-bold text-[#1C1C1C]">My Tinerary</h2>
            {/* <nav className="flex gap-8 items-center"> */}
            <nav className="hidden md:flex md:gap-8 md:items-center ">
                <a href="./" className="text-2xl font-bold text-[#1C1C1C]">Home</a>
                <a href="./" className="text-2xl font-bold text-[#1C1C1C]">Cities</a>
                <button className="bg-[#4F46E5] rounded-lg py-1 px-2">
                    <a href="./" className="text-[24px] text-white">Login</a>
                </button>
            </nav>
        </header>
        <main className="flex flex-col md:flex-row justify-between gap-10 lg:mx-20 xl:mb-96 mx-10">
            <div className="flex flex-col gap-10 mb-4 justify-center items-start lg:w-2/3">
                <h1 className="flex xl:text-5xl text-4xl font-bold text-[#1C1C1C]">Find the perfect destination</h1>
                <p className="xl:text-2xl text-xl font-semibold text-[#1C1C1C]">Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</p>
            <button className="flex  py-4 px-5 justify-center items-center gap-1 bg-[#4F46E5] rounded-lg">
                    <p className="text-2xl font-semibold text-white">View More</p>
            </button>
            </div>
            <figure className="flex items-center lg:justify-end lg:w-1/3 md:w-full mb-8 md:mb-0">
                <img src="/rectangulo.svg" alt="img" className="md:w-full" />
            </figure>
        </main>
    </>
  )
}

export default App

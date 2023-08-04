import { useState } from "react";

export default function HamburgerMenu() {
   
    const [isChecked, setIsOpen] = useState(true)


    return (
      <>
          <div className="hamburger-menu flex justify-between items-center p-0 md:hidden">
              <input type="checkbox" id="hamburger" onClick={()=>{setIsOpen(!isChecked)}} className="hidden"  />
  
              {isChecked ? 
              <label htmlFor="hamburger">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10"
                  ><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
              </label>
              :
              <label htmlFor="hamburger">
                <div className="menu flex flex-col">
                    <nav className="flex gap-4 self-end items-end flex-col md:flex md:items-center ">
                        <a href="./" className="text-2xl font-bold text-[#1C1C1C] px-4">Home</a>
                        <a href="./" className="text-2xl font-bold text-[#1C1C1C] px-4">Cities</a>
                        <button className="bg-[#1C1C1C] flex justify-between py-2 px-4 rounded-lg ">
                            <a href="./" className=" text-2xl text-white font-bold flex-nowrap">
                                <svg
                                    className="inline-flex align-baseline"
                                    xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                    <path d="M13.7813 5C13.7813 6.72589 12.3122 8.125 10.5 8.125C8.68783 8.125 7.21876 6.72589 7.21876 5C7.21876 3.27411 8.68783 1.875 10.5 1.875C12.3122 1.875 13.7813 3.27411 13.7813 5Z" fill="white"/>  <path d="M3.93851 16.7652C4.00002 13.3641 6.91415 10.625 10.5 10.625C14.086 10.625 17.0001 13.3642 17.0615 16.7654C15.0641 17.6383 12.8419 18.125 10.5003 18.125C8.15851 18.125 5.9361 17.6383 3.93851 16.7652Z" fill="white"
                                />
                                </svg>
                                Login
                            </a>
                        </button>
                    </nav>
                </div>
              </label>
              }
                  
          </div>
      </>
    );
}

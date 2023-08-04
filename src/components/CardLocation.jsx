export default function CardLocation( {src, city} ) {
  return (
        <>
            <div className="bg-center bg-no-repeat bg-cover  md:w-full flex flex-col justify-between shadow-2xl rounded-md min-h-[20vh] max-w-[40vw] min-w-[20vw]" style={{backgroundImage: `url(${src})`}}>
                <a href="" className="flex gap-2 mt-2 mx-2 text-white">
                    <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="icon location" fillRule="evenodd" clipRule="evenodd" d="M6.69008 16.932L6.69288 16.9333C6.89 17.019 7 16.999 7 16.999C7 16.999 7.11 17.019 7.30791 16.9329L7.30992 16.932L7.31565 16.9294L7.33381 16.921C7.34884 16.9141 7.36967 16.9043 7.39591 16.8916C7.44837 16.8663 7.52255 16.8296 7.61533 16.7812C7.80078 16.6845 8.06121 16.5409 8.37166 16.3485C8.99123 15.9645 9.81736 15.3816 10.6455 14.5834C12.3022 12.9866 14 10.4915 14 6.99902C14 3.13303 10.866 -0.000976562 7 -0.000976562C3.13401 -0.000976562 0 3.13303 0 6.99902C0 10.4915 1.69783 12.9866 3.35452 14.5834C4.18264 15.3816 5.00877 15.9645 5.62834 16.3485C5.93879 16.5409 6.19922 16.6845 6.38467 16.7812C6.47745 16.8296 6.55163 16.8663 6.60409 16.8916C6.63033 16.9043 6.65116 16.9141 6.66619 16.921L6.68435 16.9294L6.69008 16.932ZM7 9.24902C8.24264 9.24902 9.25 8.24166 9.25 6.99902C9.25 5.75638 8.24264 4.74902 7 4.74902C5.75736 4.74902 4.75 5.75638 4.75 6.99902C4.75 8.24166 5.75736 9.24902 7 9.24902Z" fill="white"/>
                    </svg>
                    <h3 className="bg-slate-300 opacity-80 text-black px-2 rounded-md">{city}</h3>
                </a>
                <button className="bg-blue-950 text-white w-[60%] ml-2 mb-2 rounded-md">
                    <p>View More</p>
                </button>
            </div>
            

        </>
  );
}

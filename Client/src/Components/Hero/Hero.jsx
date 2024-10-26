import heroImg from "../../assets/hero.jpg";

function Hero() {
  return (
    <div className="relative px-4 md:px-8">
      <img
        src={heroImg}
        className="h-64 sm:h-80 md:h-96 rounded-3xl w-full object-cover"
        alt="Hero"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-white font-bold mb-6 md:mb-8 text-center">
          Find Best Rooms in RentHive
        </h1>
        <div className="relative w-full max-w-sm sm:max-w-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="20px"
            height="20px"
            className="absolute left-3 top-2 text-gray-500"
          >
            <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z" />
          </svg>
          <input
            type="text"
            placeholder="Where are you from?"
            className="pl-10 pr-4 py-2 w-full bg-white rounded-full shadow-md focus:outline-none text-gray-700 placeholder-gray-400"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;

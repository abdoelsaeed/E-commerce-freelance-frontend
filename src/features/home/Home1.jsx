import HeroText from "./HeroText";
import HeroImage from "./HeroImage";

function Home1() {
  return (
    <div className="bg-[#8AB1DB] min-h-screen w-screen -mx-[6%] -mt-16 flex flex-col lg:flex-row justify-between items-center px-4 sm:px-8 lg:px-23">
      <div className="flex flex-col lg:flex-row justify-between items-center w-full h-full pt-16">
        <HeroText />
        <HeroImage />
      </div>
    </div>
  );
}

export default Home1;

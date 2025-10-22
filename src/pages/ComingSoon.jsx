import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ComingSoon() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="fixed inset-0 w-screen h-screen bg-gradient-to-br from-[#0D1B2A] via-[#1B263B] to-[#415A77] flex items-center justify-center overflow-hidden z-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden ">
        {/* Floating Circles */}
        <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-[#1672D4]/20 rounded-full animate-pulse"></div>
        <div className="absolute top-20 sm:top-40 right-10 sm:right-32 w-12 h-12 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-amber-400/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 sm:bottom-32 left-1/4 w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-[#1672D4]/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-14 h-14 sm:w-20 sm:h-20 lg:w-28 lg:h-28 bg-amber-400/15 rounded-full animate-bounce"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-8 sm:grid-cols-10 lg:grid-cols-12 grid-rows-6 sm:grid-rows-8 h-full w-full">
            {Array.from({ length: 48 }).map((_, i) => (
              <div key={i} className="border border-white/10"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div
        className={`relative z-10 text-center transition-all duration-1000 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        {/* Logo */}
        <div className="mb-4 sm:mb-6 md:mb-8 mt-2 sm:mt-4 md:mt-6 lg:mt-10">
          <h1
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-1 sm:mb-2 md:mb-4 px-2 sm:px-4"
            style={{ fontFamily: "Kalnia, serif" }}
          >
            NIRVA
          </h1>
          <div className="w-12 sm:w-16 md:w-20 lg:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-[#1672D4] to-amber-400 mx-auto rounded-full"></div>
        </div>

        {/* Coming Soon Text */}
        <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12 px-2 sm:px-4">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-1 sm:mb-2 md:mb-4 tracking-wider">
            COMING
          </h2>
          <h2
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#1672D4] to-amber-400 bg-clip-text text-transparent mb-1 sm:mb-2 md:mb-4 tracking-wider"
            style={{ WebkitBackgroundClip: "text", MozBackgroundClip: "text" }}
          >
            SOON
          </h2>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            We're crafting something extraordinary for you.
            <br className="hidden sm:block" />
            <span className="text-amber-400 font-semibold">
              Stay tuned for the launch!
            </span>
          </p>
        </div>

        {/* Animated Progress Bar */}
        <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12 max-w-xs sm:max-w-sm md:max-w-md mx-auto px-2 sm:px-4">
          <div className="flex justify-between text-xs sm:text-sm text-gray-400 mb-1 sm:mb-2">
            <span>Development</span>
            <span>85%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-1 sm:h-1.5 md:h-2 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-[#1672D4] to-amber-400 rounded-full animate-pulse relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
            </div>
          </div>
        </div>

        {/* Features Preview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-6 mb-4 sm:mb-6 md:mb-8 lg:mb-12 max-w-6xl mx-auto px-2 sm:px-4">
          <div
            className="bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
            style={{
              WebkitBackdropFilter: "blur(4px)",
              MozBackdropFilter: "blur(4px)",
            }}
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#1672D4] rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4">
              <span className="text-sm sm:text-lg md:text-2xl">👕</span>
            </div>
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-1 sm:mb-2">
              Premium Apparel
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm md:text-base">
              Crafted essentials for your everyday life
            </p>
          </div>

          <div
            className="bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
            style={{
              WebkitBackdropFilter: "blur(4px)",
              MozBackdropFilter: "blur(4px)",
            }}
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-amber-400 rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4">
              <span className="text-sm sm:text-lg md:text-2xl">🚀</span>
            </div>
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-1 sm:mb-2">
              Fast Delivery
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm md:text-base">
              Lightning-fast shipping worldwide
            </p>
          </div>

          <div
            className="bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
            style={{
              WebkitBackdropFilter: "blur(4px)",
              MozBackdropFilter: "blur(4px)",
            }}
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#1672D4] rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4">
              <span className="text-sm sm:text-lg md:text-2xl">💎</span>
            </div>
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-1 sm:mb-2">
              Quality First
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm md:text-base">
              Premium materials, exceptional quality
            </p>
          </div>
        </div>

        {/* Back to Home Button */}
        <div className="max-w-xs sm:max-w-sm md:max-w-md mx-auto px-2 sm:px-4">
          <p className="text-gray-300 mb-3 sm:mb-4 text-xs sm:text-sm md:text-base">
            Ready to explore our current collection?
          </p>
          <div className="flex justify-center">
            <Link
              to="/"
              className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 bg-gradient-to-r from-[#1672D4] to-amber-400 text-white font-semibold rounded-lg hover:from-[#0d5bb8] hover:to-amber-500 transition-all duration-300 transform hover:scale-105 text-xs sm:text-sm md:text-base shadow-lg hover:shadow-xl"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComingSoon;

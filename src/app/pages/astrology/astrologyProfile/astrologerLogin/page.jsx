import React from "react";

export default function LoginPage() {
  return (
    <div className="mt-15 bg-gradient-to-b from-saffron-100 via-yellow-100 to-white flex flex-col md:flex-row items-center justify-center p-4 md:p-12">
      {/* Login Card */}
      <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 w-full max-w-xl flex flex-col">
        <h1 className="text-center text-3xl md:text-4xl font-extrabold text-golden-600 mb-6 text-black">
          AstroVastuGuru <span className="text-yellow-500">✨</span>
        </h1>

        <form className="space-y-5">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-yellow-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-golden-500 transition duration-300"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-yellow-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-golden-500 transition duration-300"
            />
          </div>

          {/* Remember Me */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              className="h-4 w-4 text-golden-500 focus:ring-golden-400 border-gray-300 rounded"
            />
            <label htmlFor="remember" className="ml-2 text-sm text-gray-700">
              Remember me
            </label>
          </div>

          {/* Login Button */}
          <div className="overflow-hidden rounded-xl">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#FD8115] to-[#FFCC33] hover:from-[#FFCC33] hover:to-[#FD8115] text-white py-3 rounded-xl font-semibold shadow-md hover:scale-105 transform transition duration-300 will-change-transform"
            >
              Log In
            </button>
          </div>
        </form>

        {/* Links */}
        <div className="mt-6 text-center space-y-2">
          <a
            href="#"
            className="text-sm text-golden-600 hover:underline font-medium"
          >
            Forgot your password?
          </a>
          <p className="text-sm text-gray-700">
            Don't have an account?{" "}
            <a href="#" className="text-golden-500 font-semibold hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

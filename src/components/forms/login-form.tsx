"use client";

import type React from "react";

import { Facebook, Twitter } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="space-y-4 p-4 sm:p-20 border">
      <div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-400"
                required
              />
            </div>
          </div>

          <div>
            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-400"
                required
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-3 bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-medium rounded-md transition-colors"
            >
              <div>Sign in</div>
            </button>
          </div>
        </form>
      </div>

      <div className="text-sm text-gray-600">
        <div>
          <p>
            <span>New Customer? </span>
            <Link
              href="/auth/register"
              className="text-pink-500 hover:underline"
            >
              Create account
            </Link>
          </p>
        </div>
        <div className="mt-1">
          <p>
            <a href="#" className="text-pink-500 hover:underline">
              Forgot your password?
            </a>
          </p>
        </div>
      </div>

      <div className="mt-4">
        <div className="grid grid-cols-2 gap-2">
          <div>
            <a
              href="#"
              className="flex items-center justify-center gap-2 py-2 px-3 bg-blue-600 text-white rounded-md text-sm"
            >
              <div>
                <Facebook size={16} />
              </div>
              <div>
                <span>Facebook</span>
              </div>
            </a>
          </div>
          <div>
            <a
              href="#"
              className="flex items-center justify-center gap-2 py-2 px-3 bg-blue-500 text-white rounded-md text-sm"
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" />
                </svg>
              </div>
              <div>
                <span>Google</span>
              </div>
            </a>
          </div>
          <div>
            <a
              href="#"
              className="flex items-center justify-center gap-2 py-2 px-3 bg-blue-400 text-white rounded-md text-sm"
            >
              <div>
                <Twitter size={16} />
              </div>
              <div>
                <span>Twitter</span>
              </div>
            </a>
          </div>
          <div>
            <a
              href="#"
              className="flex items-center justify-center gap-2 py-2 px-3 bg-orange-500 text-white rounded-md text-sm"
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M13.958,10.09c0,0.232,0.003,0.441,0.003,0.642c0,1.375-0.004,3.446-0.015,4.838c-0.004,0.112-0.019,0.219-0.023,0.331c0,0.327-0.305,0.594-0.687,0.594c-0.378,0-0.686-0.265-0.686-0.594c-0.007-0.112-0.02-0.219-0.022-0.331c-0.011-1.389-0.016-3.461-0.016-4.838c0-0.201,0.002-0.41,0.003-0.642c-0.641,0.641-1.687,1.759-2.557,2.628c-0.267,0.268-0.701,0.268-0.969,0c-0.268-0.267-0.268-0.701,0-0.969c1.881-1.88,4.39-4.388,4.382-4.371c0.268-0.267,0.701-0.267,0.969,0c-0.007-0.016,2.5,2.491,4.381,4.372c0.268,0.268,0.268,0.701,0,0.969c-0.268,0.268-0.701,0.268-0.969,0C16.644,11.849,14.599,10.731,13.958,10.09z M21.7,12.683C21.7,17.728,17.726,21.7,12.683,21.7C7.639,21.7,3.667,17.728,3.667,12.683c0-5.043,3.972-9.016,9.016-9.016C17.726,3.667,21.7,7.64,21.7,12.683z M20.35,12.683c0-4.235-3.434-7.667-7.667-7.667c-4.234,0-7.667,3.433-7.667,7.667c0,4.235,3.434,7.667,7.667,7.667C16.916,20.35,20.35,16.917,20.35,12.683z" />
                </svg>
              </div>
              <div>
                <span>Amazon</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

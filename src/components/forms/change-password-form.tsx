"use client";

import type React from "react";

import { useState } from "react";
import { ArrowLeft, Eye, EyeOff, Lock } from "lucide-react";

export function ChangePasswordForm() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your password update logic here
    console.log("Updating password...");
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <div className="mb-6 flex items-center">
        <button className="mr-2">
          <ArrowLeft className="h-5 w-5 text-gray-700" />
        </button>
        <h1 className="text-xl font-medium text-gray-900">Change Password</h1>
      </div>

      <p className="text-sm text-gray-600 mb-6">
        Your password must be 8-10 character long.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="space-y-5">
          <div className="space-y-1">
            <label
              htmlFor="old-password"
              className="block text-sm text-gray-700"
            >
              Enter old password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Lock className="h-4 w-4 text-gray-400" />
              </div>
              <input
                id="old-password"
                type={showOldPassword ? "text" : "password"}
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Enter old password"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center pr-3"
                onClick={() => setShowOldPassword(!showOldPassword)}
              >
                {showOldPassword ? (
                  <EyeOff className="h-4 w-4 text-gray-400" />
                ) : (
                  <Eye className="h-4 w-4 text-gray-400" />
                )}
              </button>
            </div>
          </div>

          <div className="space-y-1">
            <label
              htmlFor="new-password"
              className="block text-sm text-gray-700"
            >
              Set new password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Lock className="h-4 w-4 text-gray-400" />
              </div>
              <input
                id="new-password"
                type={showNewPassword ? "text" : "password"}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Set new password"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center pr-3"
                onClick={() => setShowNewPassword(!showNewPassword)}
              >
                {showNewPassword ? (
                  <EyeOff className="h-4 w-4 text-gray-400" />
                ) : (
                  <Eye className="h-4 w-4 text-gray-400" />
                )}
              </button>
            </div>
          </div>

          <div className="space-y-1">
            <label
              htmlFor="confirm-password"
              className="block text-sm text-gray-700"
            >
              Re-enter new password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Lock className="h-4 w-4 text-gray-400" />
              </div>
              <input
                id="confirm-password"
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Re-enter new password"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center pr-3"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <EyeOff className="h-4 w-4 text-gray-400" />
                ) : (
                  <Eye className="h-4 w-4 text-gray-400" />
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors mt-6"
          >
            Update password
          </button>
        </div>
      </form>
    </div>
  );
}

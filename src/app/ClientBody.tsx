"use client";

import React, { useEffect } from "react";
import { Toaster } from "@/components/ui/sonner";

interface ClientBodyProps {
  children: React.ReactNode;
}

const ClientBody = ({ children }: ClientBodyProps) => {
  // Remove any extension-added classes during hydration
  useEffect(() => {
    // This runs only on the client after hydration
    document.body.className = "antialiased";
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Toaster position="top-center" />
      {children}
    </div>
  );
};

export default ClientBody;

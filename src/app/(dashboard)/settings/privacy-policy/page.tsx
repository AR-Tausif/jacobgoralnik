"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";
import { Button } from "@/components/ui/button";

const JoditEditor = dynamic(() => import("jodit-react"), {
  ssr: false,
});

const PrivacyPolicy = () => {
  const config = useMemo(
    () => ({
      readonly: false,
      uploader: { insertImageAsBase64URI: true },
      height: "76vh",
    }),
    []
  );

  return (
    <div>
      <h3>Privacy Policy</h3>
      <div
        style={{
          background: "#fdfdfd",
          padding: 8,
          borderRadius: 8,
          marginTop: 20,
        }}
      >
        <div>
          <JoditEditor
            // value={content}
            config={config}
            tabIndex={1}
            // onBlur={onBlur}
          />
        </div>
        <Button className="w-full">Save Changes</Button>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

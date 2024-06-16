// components/SubmitButton.tsx

import React from "react";

interface SubmitButtonProps {
  isLoading: boolean;
  text: string;
  loadingText?: string;
  className?: string;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({
  isLoading,
  text,
  loadingText = "Loading...",
  className,
}) => {
  return (
    <button
      type="submit"
      className={`w-full px-4 py-2 text-white rounded ${className} ${
        isLoading ? "opacity-50 cursor-not-allowed" : ""
      }`}
      disabled={isLoading}
    >
      {isLoading ? loadingText : text}
    </button>
  );
};

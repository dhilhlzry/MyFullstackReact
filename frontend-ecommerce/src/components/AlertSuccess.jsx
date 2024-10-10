import React from "react";
import { createPortal } from "react-dom";

const AlertSuccess = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="flex shadow-md gap-6 rounded-lg overflow-hidden divide-x max-w-2xl dark:bg-gray-50 dark:text-gray-800 dark:divide-gray-300">
        <div className="flex flex-1 flex-col p-4 border-l-8 dark:border-buttonblue">
          <span className="text-3xl">Successfully</span>
          <span className="text-sm dark:text-gray-600">
            {children}
          </span>
        </div>
        <button
          className="px-4 flex items-center text-xs uppercase tracking-wide dark:text-gray-600 dark:border-gray-300"
          onClick={onClose}
        >
          Dismiss
        </button>
      </div>
    </div>,
    document.body
  );
};

export default AlertSuccess;

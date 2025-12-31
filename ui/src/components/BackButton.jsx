import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function BackButton({ className = "" }) {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      aria-label="Go Back"
      className={`flex items-center gap-2 fixed left-5 top-5 px-3 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-smooth z-50 font-medium text-sm ${className}`}
      type="button"
    >
      <ArrowLeft className="w-4 h-4" />
      Back
    </button>
  );
}

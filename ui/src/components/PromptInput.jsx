import React, { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import Button from "./Button";

const PromptInput = ({ onSubmit, isRunning }) => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  const handleSubmit = () => {
    if (!isRunning && inputValue.trim()) {
      if (onSubmit) onSubmit(inputValue.trim());
      setInputValue("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4">
      <div className="relative">
        {/* Input Container */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm hover:shadow-md transition-smooth overflow-hidden">
          <div className="flex items-end gap-3 p-4">
            {/* Textarea */}
            <div className="flex-1">
              <textarea
                ref={inputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Describe your startup idea..."
                className="w-full bg-transparent border-none outline-none resize-none text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400 text-base leading-relaxed max-h-40"
                rows={3}
                style={{
                  height: "auto",
                  minHeight: "3.5rem",
                }}
                onInput={(e) => {
                  const target = e.target;
                  target.style.height = "auto";
                  target.style.height = `${Math.min(
                    target.scrollHeight,
                    160
                  )}px`;
                }}
              />
            </div>

            {/* Submit Button */}
            <Button
              onClick={handleSubmit}
              disabled={!inputValue.trim() || isRunning}
              variant="primary"
              size="md"
              className="shrink-0 gap-2"
              aria-busy={isRunning ? "true" : "false"}
              aria-label={isRunning ? "Processing..." : "Submit prompt"}
            >
              {isRunning ? (
                <>
                  <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  Send
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromptInput;

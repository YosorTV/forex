import React, { useState } from "react";
import { FileText, X } from "lucide-react";

interface SpeakerNotesProps {
  notes?: string;
}

export default function SpeakerNotes({ notes }: SpeakerNotesProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (!notes) return null;

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-20 right-6 bg-gradient-to-br from-navy to-accentBlue text-white p-3 rounded-full shadow-button hover:shadow-lg hover:scale-105 transition-all z-40 hover:ring-2 hover:ring-accentBlue/50"
        aria-label="Toggle speaker notes"
      >
        {isOpen ? <X size={20} /> : <FileText size={20} />}
      </button>

      {isOpen && (
        <div className="fixed bottom-20 sm:bottom-24 right-4 sm:right-6 left-4 sm:left-auto max-w-md bg-white border border-gray-200 rounded-xl shadow-card p-4 z-40 animate-fade-in-up max-h-[60vh] overflow-y-auto">
          <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-200">
            <div className="w-8 h-8 bg-gradient-to-br from-navy to-accentBlue rounded-lg flex items-center justify-center">
              <FileText size={16} className="text-white" />
            </div>
            <h4 className="font-semibold text-sm text-navy">Speaker Notes</h4>
          </div>
          <div className="text-sm text-textPrimary leading-relaxed whitespace-pre-line">
            {notes}
          </div>
        </div>
      )}
    </>
  );
}

import React from "react";
import type { FormNode } from "../../types";

interface Props {
  forms: FormNode[];
  onSelectForm: (form: FormNode) => void;
  selectedFormId?: string;  
}

export const FormList: React.FC<Props> = ({ forms, onSelectForm, selectedFormId }) => (
  <aside className="w-72 bg-gradient-to-b from-slate-800 to-slate-900 text-white shadow-xl rounded-xl p-6 font-sans">
    <h2 className="text-xl font-bold mb-4 border-b border-slate-600 pb-2">Forms</h2>
    
    <div className="space-y-3 max-h-[70vh] overflow-y-auto">
      {forms.map(form => (
        <button
          key={form.id}
          onClick={() => onSelectForm(form)}
          className={`
            w-full text-left px-4 py-2 rounded-lg text-sm font-medium
            transition-colors duration-200
            ${
              form.id === selectedFormId
                ? "bg-blue-600 text-white shadow-md"
                : "bg-slate-100 text-slate-800 hover:bg-blue-100 hover:text-blue-700"
            }
            focus:outline-none focus:ring-2 focus:ring-blue-400
          `}
        >
          {form.name}
        </button>
      ))}
    </div>
  </aside>
);

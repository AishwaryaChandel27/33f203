import React from "react";
import type { FormNode, PrefillSource, GlobalData } from "../../types";
import { getTransitiveDependencies } from "../../utlis/graphUtils";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  form: FormNode;
  allForms: FormNode[];
  globalData: GlobalData[];
  onSelect: (source: PrefillSource) => void;
}

export const Modal: React.FC<Props> = ({ isOpen, onClose, form, allForms, globalData, onSelect }) => {
  if (!isOpen) return null;
  const upstream = getTransitiveDependencies(form.id, allForms);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center">
      <div className="bg-white p-4 rounded w-96 max-h-[80vh] overflow-y-auto">
        <h3 className="text-lg font-bold mb-2">Select a Prefill Source</h3>
        {upstream.map(f => (
          <div key={f.id}>
            <h4 className="font-semibold">{f.name}</h4>
            <ul className="ml-4">
              {f.fields.map(field => (
                <li
                  key={field.id}
                  onClick={() => onSelect({ sourceType: "form", sourceId: f.id, fieldId: field.id })}
                  className="cursor-pointer hover:bg-blue-100 p-1"
                >
                  {field.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <h4 className="font-semibold mt-4">Global Data</h4>
        <ul className="ml-4">
          {globalData.map(d => (
            <li
              key={d.key}
              onClick={() => onSelect({ sourceType: "global", sourceId: d.key })}
              className="cursor-pointer hover:bg-blue-100 p-1"
            >
              {d.label}
            </li>
          ))}
        </ul>
        <button onClick={onClose} className="mt-4 bg-gray-300 px-3 py-1 rounded">Cancel</button>
      </div>
    </div>
  );
};

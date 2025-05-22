import React, { useState } from "react";
import type { FormNode, FormField, PrefillSource } from "../../types";
import { Modal } from "../Modal/Modal";

interface Props {
  form: FormNode;
  allForms: FormNode[];
  onUpdatePrefill: (fieldId: string, source?: PrefillSource) => void;
}

export const PrefillConfig: React.FC<Props> = ({ form, allForms, onUpdatePrefill }) => {
  const [selectedField, setSelectedField] = useState<FormField | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (field: FormField) => {
    setSelectedField(field);
    setIsModalOpen(true);
  };

  return (
    <div className="p-6 bg-slate-50 rounded-lg font-sans">
      <h2 className="text-2xl font-bold mb-6 text-slate-800">
        Configure Prefill for <span className="text-blue-600">{form.name}</span>
      </h2>

      {form.fields.map((field) => (
        <div
          key={field.id}
          className="mb-4 flex items-center justify-between bg-white p-3 rounded-md shadow-sm"
        >
          <div className="text-slate-700 font-medium">
            {field.name}:
            <span className="ml-2 text-slate-500 text-sm font-normal">
              {field.prefillSource
                ? field.prefillSource.sourceType === "form"
                  ? `Form ${field.prefillSource.sourceId}.${field.prefillSource.fieldId}`
                  : `Global: ${field.prefillSource.sourceId}`
                : "No prefill set"}
            </span>
          </div>

          {field.prefillSource ? (
            <button
              aria-label={`Remove prefill for ${field.name}`}
              className="text-sm text-red-500 hover:text-red-700"
              onClick={() => onUpdatePrefill(field.id)}
            >
              ✕ Remove
            </button>
          ) : (
            <button
              aria-label={`Set prefill for ${field.name}`}
              className="text-sm text-blue-600 hover:text-blue-800 font-medium"
              onClick={() => openModal(field)}
            >
              + Set Prefill
            </button>
          )}
        </div>
      ))}

      {selectedField && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          form={form}
          allForms={allForms}
          globalData={[
            { key: "client_name", label: "Client Name" },
            { key: "organization_id", label: "Organization ID" },
          ]}
          onSelect={(source: PrefillSource) => {
            onUpdatePrefill(selectedField.id, source);
            setIsModalOpen(false);
          }}
        />
      )}
    </div>
  );
};

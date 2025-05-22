import React, { useEffect, useState } from "react";
import { fetchFormGraph } from "./api/formApi";
import type { FormNode, PrefillSource } from "./types";
import { FormList } from "./components/FormList/FormList";
import { PrefillConfig } from "./components/PrefillConfig/prefillConfig";

const App: React.FC = () => {
  const [forms, setForms] = useState<FormNode[]>([]);
  const [selectedForm, setSelectedForm] = useState<FormNode | null>(null);

  // Load form data on mount
  useEffect(() => {
    fetchFormGraph().then(setForms);
  }, []);

  // Update prefill source for selected form field
  const updatePrefill = (fieldId: string, source?: PrefillSource) => {
    if (!selectedForm) return;

    setForms((prevForms) =>
      prevForms.map((form) =>
        form.id === selectedForm.id
          ? {
              ...form,
              fields: form.fields.map((field) =>
                field.id === fieldId ? { ...field, prefillSource: source } : field
              ),
            }
          : form
      )
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-blue-100 font-sans p-6 flex flex-col md:flex-row gap-6">
      
      {/* Sidebar: Form List */}
      <section className="md:w-1/3">
        <h2 className="text-xl font-semibold text-indigo-700 mb-4">Available Forms</h2>
        <FormList
          forms={forms}
          onSelectForm={setSelectedForm}
          selectedFormId={selectedForm?.id}
        />
      </section>

      {/* Main Panel: Prefill Config */}
      <main className="flex-1 bg-white rounded-2xl shadow-lg p-6">
        {selectedForm ? (
          <>
            <h2 className="text-2xl font-bold text-blue-700 mb-4">
              Prefill Configuration
            </h2>
            <PrefillConfig
              form={selectedForm}
              allForms={forms}
              onUpdatePrefill={updatePrefill}
            />
          </>
        ) : (
          <div className="text-gray-600 text-lg text-center mt-20">
            Select a form to configure <span className="font-medium">prefill settings</span>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;

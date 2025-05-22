

# 🚀 Journey Builder React Coding Challenge

This is a submission for the **Avantos Journey Builder React Coding Challenge**. The app renders a list of forms from a DAG (Directed Acyclic Graph) and allows users to configure field-level prefill mappings using upstream form fields or global data.

---

## 📋 Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Tech Stack](#tech-stack)
- [Architecture Design](#architecture-design)
- [Extensibility](#extensibility)
- [Screenshots](#screenshots)


---

## ✅ Features

- 📦 Fetches forms DAG from mock server
- 🧩 Renders a list of forms in the sidebar
- 🔎 Displays each form’s fields with existing prefill configuration
- 🛠 Allows:
  - Setting prefill from upstream forms or global data
  - Clearing prefill mappings
- 🧱 Modular design to support future data sources

---

## 🧪 Demo

A 30-minute screen recording demonstrating the following is included:

- Fetching and displaying forms
- Selecting a form to view fields
- Opening a modal to configure field-level prefill
- Choosing from upstream fields and global data
- Clearing prefill mappings

---

## ⚙ Installation

bash
# 1. Clone the project
git clone https://github.com/your-username/journey-builder-react.git
cd journey-builder-react

# 2. Install dependencies
npm install

# 3. Clone and run the mock server (in a new terminal tab)
git clone https://github.com/mosaic-avantos/frontendchallengeserver
cd frontendchallengeserver
npm install
npm start

# 4. Start the React app
cd ../journey-builder-react
npm run dev
`

> App will run on: `http://localhost:5173/`

---

## 💡 Usage

1. Start the mock server (`frontendchallengeserver`).
2. Open the app (`npm run dev`).
3. Click on a form in the sidebar to view its fields.
4. Click on any field to:

   * Select a prefill source (upstream form fields or global data).
   * Clear a prefill using the ❌ button.

---

## 📁 Folder Structure

```
src/
├── api/
│   └── formApi.ts           # API logic to fetch DAG
├── components/
│   ├── FormList/
│   │   └── FormList.tsx     # Sidebar with forms
│   ├── PrefillConfig/
│   │   └── prefillConfig.tsx # Field-level prefill mapping UI
│   └── Modal/
│       └── Modal.tsx        # Modal for selecting prefill source
├── types/
│   └── index.ts             # TypeScript types/interfaces
├── utils/
│   ├── graphUtils.ts        # DAG traversal logic
│   ├── parseGraph.ts        # Converts API DAG into usable graph
│   └── globalData.ts        # Mock global data for prefill
├── App.tsx                  # Main app entry
├── App.css                  # App styles
├── index.css                # Base styles
└── main.tsx                 # Vite entry
```
---

## 🛠 Tech Stack

* **React** (with hooks)
* **TypeScript**
* **Vite** (build tool)
* **Axios** (HTTP requests)
* **Tailwind CSS** (utility-first styling)
* **Node.js + Express** (mock API server)

---

## 🧱 Architecture Design

The app is architected for clarity and extensibility:

* **Data Sources**: Each prefill field can be populated from upstream form fields or global data.
* **Modular Components**: Modal and prefill logic are separated and reusable.
* **DAG Utilities**: Custom graph parser and DAG traversal to identify upstream dependencies.

---

## 🌱 Extensibility

The architecture supports easy integration of new prefill sources:

1. Add your new data source to `globalData.ts` or a new file.
2. Extend `Modal.tsx` to display it as an option.
3. Update `PrefillSource` type in `types/index.ts`.

> Future sources like Action Properties or Client Organization Properties can be added without disrupting existing logic.

---

## 📸 Screenshots


### 🧾 Form List Sidebar

![image](https://github.com/user-attachments/assets/a11a6177-d6c2-46a5-ab5c-39b3dc952c59)

### 🛠 Prefill Mapping View

![image](https://github.com/user-attachments/assets/50f01426-8aea-45dd-bc48-51824d658871)


### 🔍 Source Selection Modal
![image](https://github.com/user-attachments/assets/7ea22ee3-12eb-4243-93ec-6c4636dcecce)

---

## 📃 License

This project was built as part of the **Avantos Frontend Coding Challenge** and is for evaluation purposes only.



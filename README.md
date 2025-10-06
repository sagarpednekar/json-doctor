# 🧠 JSON Doctor

### *Fix. Explain. Explore JSON like never before.*

[![Next.js](https://img.shields.io/badge/Built%20with-Next.js-000000?logo=nextdotjs)](https://nextjs.org/)
[![Gemini](https://img.shields.io/badge/AI-Gemini-blue?logo=google)](https://aistudio.google.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

---

Perfect timing 💪 — having a **clear, developer-friendly README** makes your **JSON Doctor** project instantly more professional and open-source–ready.

Below is a polished, production-quality README.md template you can drop directly into your repo.
It’s tailored for your stack: **Next.js + Gemini AI + Tailwind + JSON repair & schema inference app**.

---


## 🩺 Overview

**JSON Doctor** is an AI-powered developer tool that automatically **repairs invalid JSON**, **explains what was fixed**, and **infers a JSON Schema** — all in an intuitive, multi-view UI (Tree, JSON, and Diff modes).

Powered by **Google Gemini**, **Next.js 14**, and **Tailwind CSS**, it’s designed for developers who frequently debug, inspect, or clean up JSON data from APIs, logs, or user inputs.

---

## 🚀 Features

✅ **AI-Powered JSON Repair** – Automatically fixes malformed JSON (missing commas, unquoted keys, trailing commas, etc.)
✅ **Schema Inference** – Generates a valid JSON Schema from your data
✅ **Error Explanation** – Human-readable breakdown of what was fixed
✅ **Multi-Mode Viewer** – Switch between:

* 🧾 JSON View (syntax-highlighted code editor)
* 🌳 Tree View (collapsible nested viewer)
* ⚖️ Diff View (before vs after comparison)
  ✅ **Copy / Download / Share** – Export your fixed JSON and schema easily
  ✅ **Built for Speed** – Gemini 1.5 Flash ensures low latency
  ✅ **Deployed Anywhere** – Works seamlessly on Vercel or Firebase

---

## 🧰 Tech Stack

| Layer                  | Technology                                                               |
| ---------------------- | ------------------------------------------------------------------------ |
| **Frontend**           | Next.js 15 (App Router) + TypeScript                                     |
| **Styling**            | Tailwind CSS                                                             |
| **AI Engine**          | Google Gemini API (`@google/generative-ai`)                              |
| **JSON Visualization** | `react-json-view`, `@monaco-editor/react`, `react-diff-viewer-continued` |
                                               |

---

## 🧑‍💻 Getting Started

### 1️⃣ Clone the Repo

```bash
git clone https://github.com/sagarpednekar/json-doctor.git
cd json-doctor
```

### 2️⃣ Install Dependencies

```bash
pnpm install
```

### 3️⃣ Configure Environment Variables

Create a `.env.local` file in the root:

```bash
GEMINI_API_KEY=your_gemini_api_key_here
```

You can get your API key from [Google AI Studio](https://aistudio.google.com/).

---

### 4️⃣ Run Locally

```bash
pnpm dev
```

Now open: 👉 [http://localhost:3000](http://localhost:3000)

---

## 💡 How It Works

1. User pastes or uploads broken JSON
2. The app sends it to the `/api/repair` route
3. Gemini model (`gemini-1.5-flash`) repairs and explains it
4. The UI displays:

   * Fixed JSON (in Monaco editor)
   * Tree view for exploration
   * Diff view for before/after comparison
5. User can copy, download, or export the repaired JSON & schema

---

## ⚙️ API Endpoint

**POST** `/api/repair`

**Request Body:**

```json
{
  "input": "{ invalid: 'json' here }"
}
```

**Response:**

```json
{
  "repaired": { "valid": "json" },
  "schema": { "type": "object", "properties": { "valid": { "type": "string" } } },
  "explanation": "Fixed missing quotes and replaced single quotes with double quotes."
}
```

---

## 🎨 UI Preview

```
🧠 JSON Doctor
──────────────────────────────────────────────
[ Paste JSON ] [ Upload File ] [ Fix JSON 🔧 ]

| JSON View | Tree View | Diff View |
──────────────────────────────────────────────
<editor or tree appears here>

[ Copy JSON ] [ Download JSON ] [ Export Schema ]
──────────────────────────────────────────────
```

---

## 🧠 Gemini Prompt Example

```text
You are a JSON repair assistant.
Tasks:
1. Fix invalid JSON syntax.
2. Infer correct data types.
3. Generate JSON schema.
4. Explain the changes made.

Return JSON in this structure:
{
  "repaired": <fixed JSON>,
  "schema": <json schema>,
  "explanation": <text>
}
```

---

## 🧩 Libraries Used

* **@google/generative-ai** – Gemini API SDK
* **@monaco-editor/react** – JSON editor with syntax highlighting
* **react-json-view** – Tree explorer
* **react-diff-viewer-continued** – Before/after diff view
* **Tailwind CSS** – Styling
* **Next.js App Router** – API + frontend in one codebase

---

## 🌍 Deployment (Vercel Example)

1. Push to GitHub
2. Import repo into [Vercel](https://vercel.com)
3. Add `GEMINI_API_KEY` in **Environment Variables**
4. Deploy 🎉

---

## 📦 Future Enhancements

* [ ] Real-time “Fix as You Type” mode
* [ ] Schema-based validation mode
* [ ] User history / cloud storage
* [ ] Public REST API for developers
* [ ] VS Code extension integration

---

## 🛡️ License

This project is licensed under the **MIT License** – see [LICENSE](LICENSE) for details.

---

## 👨‍💻 Author

**[Sagar Pednekar]**
Full Stack Engineer — Node.js | Next.js | AI Integrations
🌐 [Portfolio](https://github.com/sagarpednekar)
💼 [LinkedIn](https://linkedin.com/in/yourprofile)
🐙 [GitHub](https://github.com/sagarpednekar)

---

## 💬 Feedback

Got suggestions or found a bug?
Open an [Issue](https://github.com/your-username/json-doctor/issues) or start a discussion 💡


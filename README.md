# 🩺 S.A.M.I. — Système d'Assistance Médicale Intelligent

> **نظام المساعدة الطبية الذكي بالدارجة المغربية**
> AI-powered medical pre-diagnosis for Moroccan public hospitals

![Version](https://img.shields.io/badge/version-2.0-00d4aa) ![Team](https://img.shields.io/badge/team-SYNAPSE-ff4757) ![License](https://img.shields.io/badge/license-MIT-blue)

## 🎯 Problem

Morocco's public hospitals face severe overcrowding: **4-8 hour wait times**, doctor-to-patient ratios of 1:1,600. Patients speaking Darija struggle with French-only medical systems.

## 💡 Solution

S.A.M.I. automates pre-consultation via AI:
1. **Patient speaks in Darija** → NLP extracts symptoms
2. **Bayesian ML engine** → Calculates probability of 20+ diseases
3. **Smart questioning** → Asks discriminating follow-up questions
4. **Medical report** → Structured report for the doctor with suggested tests

**Result**: ~5 min saved/consultation, ~33% reduction in wait times.

## 🏗️ Project Structure

```
sami-medical-ai/
├── public/
│   ├── index.html          # Frontend + embedded ML engine
│   ├── manifest.json       # PWA manifest
│   └── sw.js               # Service worker (offline)
├── api/
│   ├── chat.js             # Serverless: AI chat proxy
│   └── transcribe.js       # Serverless: Whisper voice
├── .env.example            # Env vars template
├── .gitignore              # Excludes .env
├── vercel.json             # Deploy config
├── package.json            # Dependencies
└── README.md
```

## 🧠 ML Engine (No API Required)

| Feature | Details |
|---------|---------|
| Algorithm | Naive Bayes with prevalence priors |
| Diseases | 20+ conditions |
| Symptoms | 35+ mapped with intensity (1-10) |
| NLP | 80+ Darija/French keywords |
| Report | Severity scoring, ranked diagnoses, recommended tests |

## 🚀 Deployment

### Option A: Vercel (Full Features) — Recommended

```bash
git clone https://github.com/YOUR-USERNAME/sami-medical-ai.git
cd sami-medical-ai
npm i -g vercel
vercel
```

Then add `OPENAI_API_KEY` in Vercel Dashboard → Settings → Environment Variables.

### Option B: GitHub Pages (ML Only)

1. Create a new GitHub repo
2. Upload the 3 files from `public/` folder
3. Settings → Pages → Source: main branch → Save
4. Live at: `https://YOUR-USERNAME.github.io/REPO-NAME/`

> GitHub Pages = static only. AI chat + voice need Vercel.

## 🔒 Security

- ✅ No API keys in source code
- ✅ `.env` in `.gitignore`
- ✅ Server-side API proxy (`/api/chat.js`)
- ✅ Client-side ML (zero data transmission for core features)
- ✅ HTTPS enforced on Vercel

## 📱 Features

| Feature | API Required |
|---------|-------------|
| 🧠 Bayesian ML Diagnosis | ❌ No |
| 🗣️ Darija NLP | ❌ No |
| 📋 Report Generation | ❌ No |
| 🎙️ Voice (Browser) | ❌ No |
| 📱 PWA + Offline | ❌ No |
| 🤖 AI Chat (GPT) | ✅ Yes |
| 🎙️ Whisper Darija | ✅ Yes |

## 🧪 Tech Stack

- Frontend: Vanilla HTML/CSS/JS (<100KB)
- ML: Custom Bayesian classifier (JS)
- NLP: Rule-based Darija/French extraction
- Backend: Vercel Serverless Functions
- AI: OpenAI GPT-4o-mini + Whisper
- PWA: Service Worker + Manifest

## ⚠️ Disclaimer

S.A.M.I. is a research prototype. It does NOT replace professional medical advice.

## 👥 Team SYNAPSE — Rab'Hacks 2026

MIT License

# Doctrine of Dark Elegance

> "Aesthetics of control. Architecture of the mind. Unyielding resilience."

A curated material library, tactical knowledge base, and AI-driven design advisor embodying the principles of **Dark Elegance**: matte textures, deep tones, and tactical minimalism.

## Overview

This application serves as a digital sanctuary for the "Doctrine of Dark Elegance," a philosophical and aesthetic framework that prioritizes truth, silence, and resilience over noise and superficiality. It combines a visual library of materials and design principles with a repository of tactical documents analyzing psychological warfare and social manipulation.

## Features

### 1. Visual & Sensory Foundations
A curated grid of high-fidelity materials and design principles that define the aesthetic.
- **Materials**: Textured panels, matte stone, brushed bronze, and raw embossed surfaces.
- **Principles**: Tactile aesthetics, subdued palettes, selective illumination, and spatial command.

### 2. Core Doctrines (Document Library)
A reader interface for foundational texts on psychological operations, brand strategy, and social engineering.
- **Civilians as Weapons**: Analysis of how everyday individuals are weaponized in smear campaigns.
- **The Unseen War**: A tactical manual for survival against coordinated psychological attacks.
- **Psychological Determinants**: A deep dive into vulnerability assessments.
- **RyanrealAF Brand Ethos**: A case study in resilience and authentic branding.

### 3. Doctrine Advisor (AI Chat)
An interactive chat interface powered by **Google Gemini**.
- Acts as the "Custodian of the Doctrine."
- Provides guidance on aesthetics, philosophy, and the tactical content within the documents.
- Responds with a persona of deep intellect and unyielding resilience.

## Tech Stack

- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **AI Integration**: Google GenAI SDK (Gemini 2.5 Flash)
- **Fonts**: Inter (Google Fonts)

## Setup & Configuration

### Prerequisites
- Node.js
- A Google Gemini API Key

### Installation

1.  **Clone the repository**
    ```bash
    git clone <repository-url>
    cd doctrine-of-dark-elegance
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Configure Environment**
    - The application requires a Google Gemini API Key to function fully.
    - Ensure `process.env.API_KEY` is available in your environment.

4.  **Run the application**
    ```bash
    npm start
    ```

## Project Structure

- `src/components/`: React components for the UI (Cards, Grids, Chat, Layout).
- `src/services/`: API integration logic (`geminiService.ts`).
- `src/types.ts`: TypeScript definitions for Materials, Documents, and Chat.
- `src/constants.ts`: Static data for materials, design principles, and full document text.

## Aesthetic Guidelines

The UI follows a strict "Dark Elegance" code:
- **Colors**: Matte Black (`#1a1a1a`), Charcoal (`#2b2b2b`), Bronze Accent (`#ffd166`).
- **Typography**: Inter (Sans-serif), clean, legible, authoritative.
- **Interaction**: Smooth transitions, subtle hover effects, modal overlays for focus.

---

*Rendered with Tactical Minimalism.*
# SheVoice 🟣
*The World Wasn't Built For You. Let's Change That.*

**SheVoice** is a dedicated platform designed to highlight and address the "Invisible Women Problem"—a real global issue where many products, cities, and services are designed for men by default, ignoring women's needs.

Through SheVoice, women can report design problems they face in everyday life, map them, and ensure these stories reach the right authorities for real-world change.

---

## 🎯 What Does This Project Do?

This platform provides a loud, mapped, and actionable voice to everyday struggles.

Examples of problems you can report:
*   🚏 **Unsafe bus stops** or poor street lighting.
*   💺 **Office chairs** that are uncomfortable for women's bodies.
*   ⚠️ **Workplace harassment** or unsafe facilities.
*   🏥 **Medical symptoms ignored** or a lack of women doctors.

Instead of these issues going unheard, SheVoice plots them on a global map, crowdsources confirmation through community voting, and smart-routes them to the specific authority responsible (e.g., Municipal Corporation, HR Department, Health Authority).

---

## ⚙️ Tech Stack

We built this platform using modern, scalable, and fast technologies:

*   **Frontend Ecosystem:**
    *   **React (JS):** Core component-based UI engineering.
    *   **React Router DOM:** Fast, client-side routing between the Map, Registration, and Reporting modules.
    *   **Vanilla CSS:** Custom, premium, dark-themed UI with glassmorphism, dynamic gradients, and smooth micro-animations.

*   **Mapping & Geolocation:**
    *   **React-Leaflet (OpenStreetMap):** Interactive map rendering.
    *   **CARTO basemaps:** Clean, sleek dark-mode tiles.
    *   **Browser Geolocation API:** To instantly center maps on the reporting user.

*   **Backend & Database:**
    *   **Supabase (PostgreSQL):** Serverless, scalable relational database.
    *   **Supabase Storage:** Secure, public cloud storage for photo evidence uploads.
    *   **Supabase Auth / Row-Level Security (RLS):** To ensure secure read/write policies on public reporting and voting.

---

## 🚀 The Core Workflow

Here is exactly how SheVoice creates change from start to finish:

### 1. The Report (Photo Evidence & Details)
A user encounters an issue (e.g., Unsafe street lighting). They navigate to the **Report Issue** portal. They fill out what went wrong, upload a photo as evidence, and the system automatically grabs their exact GPS coordinates.

### 2. Smart Authority Routing 🚦
Depending on the category the user selects, the system automatically tags the report for a specific type of authority:
*   *Public Safety* ➔ **Municipal Corporation**
*   *Workplace* ➔ **Office Management / HR**
*   *Healthcare* ➔ **Health Authority**

If an organization (e.g., a specific hospital or tech company) has partnered with SheVoice, users can also directly link their problem to that registered organization.

### 3. Problem Hotspots Map
The reported issue instantly goes live on the **Map View**. Decision-makers can visualize the data density in certain geographic zones, seeing exactly what types of problems are clustering where.

### 4. Community Upvoting
Other women who have experienced the exact same issue can find the pin on the map and click **"Confirm Issue"**. This increments a live vote counter. Higher votes signal to authorities that the problem is widespread and needs urgent priority.

---

## 🛠️ Run Locally

Want to contribute? Run the project on your machine:

1. Clone the repository.
2. Navigate into the client directory:
   ```bash
   cd client
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the development server:
   ```bash
   npm start
   ```
5. View it in action at `http://localhost:3000`

---
*Made with ♥ for International Women's Day 2026*

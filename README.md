# SheVoice
*The World Wasn't Built For You. Let's Change That.*

**SheVoice** is a comprehensive civic technology platform designed to address the systemic "Invisible Women Problem"—the pervasive global issue where infrastructure, products, and public services are predominantly designed for men by default, often ignoring or dangerously compromising women's safety and needs.

SheVoice empowers women to document, map, and amplify the design flaws and safety hazards they encounter in their daily lives. By providing a centralized, data-driven platform, SheVoice ensures that these critical stories are no longer individual grievances but aggregated community data that can be routed directly to the authorities capable of implementing real-world changes.

---

## What Does This Project Do?

The fundamental goal of SheVoice is to provide a mapped, actionable voice to everyday struggles that are frequently overlooked by traditional urban planning and corporate design. 

Examples of issues the platform is built to handle:
*   **Public Safety:** Unsafe transit stops, inadequate street lighting, or poorly designed pedestrian infrastructure.
*   **Workplace Ergonomics and Safety:** Office furniture designed exclusively for male ergonomics, unsafe facilities, or workplace harassment.
*   **Healthcare Inequities:** Medical symptoms that are routinely dismissed, lack of accessible women's health clinics, or insufficient female medical staff.

Rather than these issues remaining unheard anecdotes, SheVoice geographically plots them on an interactive global map. The platform leverages crowdsourced community voting to confirm the severity and frequency of these issues, and utilizes smart-routing algorithms to direct the aggregated data to the specific regulatory body or organization responsible — whether that is a Municipal Corporation, a corporate HR Department, or a Regional Health Authority.

---

## Technology Stack

SheVoice is architected using a modern, scalable, and responsive technology stack designed for high performance and secure data handling:

*   **Frontend Ecosystem:**
    *   **React:** The core library used for building a modular, component-based user interface.
    *   **React Router DOM:** Enables seamless, client-side routing across the platform's various modules, including the Map Dashboard, Issue Reporting Portal, and Organization Registration.
    *   **Vanilla CSS:** Employs a custom, premium dark-themed design system featuring glassmorphism, dynamic gradients, and fluid micro-animations to ensure an engaging user experience without heavy UI framework dependencies.

*   **Mapping and Geolocation Services:**
    *   **React-Leaflet:** Integrates OpenStreetMap data to render interactive, high-performance maps.
    *   **CARTO Basemaps:** Utilized for clean, high-contrast dark-mode map tiles that align with the platform's aesthetic.
    *   **Browser Geolocation API:** Automatically captures accurate incident coordinates and centers the map dynamically based on the user's location.

*   **Backend Infrastructure and Database:**
    *   **Supabase (PostgreSQL):** Provides a robust, serverless relational database architecture capable of scaling with community growth.
    *   **Supabase Storage:** Manages the secure, public cloud storage required for users to upload photographic evidence of reported issues.
    *   **Supabase Row-Level Security (RLS):** Implements strict, database-level security policies to manage authorized read and write access for anonymous reporting, community voting, and organization data.

---

## The Core System Workflow

SheVoice operationalizes civic engagement through a streamlined four-step workflow:

### 1. Incident Reporting and Evidence Collection
When a user encounters a design flaw or safety hazard, they access the Report Issue portal. They provide a detailed description of the problem, upload photographic evidence, and the system automatically captures their exact GPS coordinates to ensure geographical accuracy.

### 2. Intelligent Authority Routing
Upon submission, the platform's routing system categorizes the report and automatically tags it for the appropriate jurisdiction:
*   Issues categorized under *Public Safety* are routed to local **Municipal Corporations** or City Councils.
*   Issues related to the *Workplace* are directed to the relevant **Office Management or Human Resources** departments.
*   Issues classified under *Healthcare* are escalated to regional **Health Authorities** or hospital administrations.

Furthermore, partnered organizations can register on the platform, allowing users to link their reports directly to specific corporate entities or institutions.

### 3. Geographic Problem Dashboard
Immediately after submission, the reported issue is plotted live on the interactive Map View. This geographic dashboard allows both users and decision-makers to visualize data density, identifying specific geographic zones where systemic problems are clustering.

### 4. Community Validation (Upvoting)
To prevent the dilution of critical issues, the platform features a community validation mechanism. Other users who have experienced or witnessed the same problem at a plotted location can use the "Confirm Issue" functionality. This increments a live priority counter. High-vote clusters act as a data-backed signal to authorities, proving that a specific issue is widespread and requires urgent intervention.

---

## Local Development Setup

To contribute to the SheVoice platform or run it locally for testing:

1. Clone the repository to your local machine.
2. Navigate into the client directory:
   ```bash
   cd client
   ```
3. Install the required Node.js dependencies:
   ```bash
   npm install
   ```
4. Start the local development server:
   ```bash
   npm start
   ```
5. Access the application in your browser at `http://localhost:3000`

---
*Designed and Developed for International Women's Day 2026*

# Lakson Bank — Unified Products Dashboard

A clean, modern, and professional single-screen **Banking Products Dashboard** built with **React** and **Vite**, featuring unified portfolio statistics, multi-category banking products, real-time search & filters, Indian Rupee (₹ INR) currency localization, pure black OLED dark mode, customer profile popup, and full mobile responsiveness.

---

## 🚀 Key Features

1. **Unified Banking Product Screen**:
   - Single unified dashboard displaying multiple retail & wealth banking products across 4 core categories:
     - **Savings & Salary Accounts**
     - **Credit Cards**
     - **Personal & Home Loans**
     - **Fixed Deposits & Wealth Investments**
   - Each product card displays:
     - Product Name & Masked Account Identifier
     - Category Badge with distinctive theme
     - Live Status Chip (`Active`, `Pre-Approved`, `In Review`)
     - Key Metrics (e.g., Available Balance, Interest Rate, Credit Limit, Due Date, Monthly EMI)
     - Key Perks & Features checklist
     - Call-to-action buttons: **"View Details"** and **"Apply Now"** (for Pre-Approved products)

2. **🇮🇳 Indian Rupee (₹ INR) Localization**:
   - Formatted in standard Indian numbering system (`₹` Lakhs/Crores).
   - Real-world metadata: IFSC codes (`LAKS0000412`), DICGC insurance protection (up to ₹5,00,000), RBI compliance.

3. **🌓 Pure Black OLED Dark Mode & Swiss Light Mode**:
   - Institutional color system: clean slate light mode and true pitch-black (`#000000`) OLED dark mode.
   - Smooth one-click theme switcher in header with `localStorage` persistence.
   - High-contrast, translucent badges for maximum legibility without visual clutter.

4. **🔍 Interactive Filtering & View Modes**:
   - Category filter pills with dynamic count badges.
   - Real-time search by product name, category, or account number with clear button.
   - Status dropdown filter (`All Statuses`, `Active`, `Pre-Approved`, `In Review`).
   - Grid and List/Table view modes.

5. **📱 100% Mobile Responsive**:
   - Fluid single-column layouts on mobile screens (`< 520px` & `< 768px`).
   - Sticky bottom-sheet popup modals with touch-friendly dismiss targets.
   - Horizontally scrollable category pills and pannable data tables.

6. **👤 Customer Profile Popup**:
   - Clickable customer profile chip (`Ananya K.`) in the header.
   - Displays Customer CIF (`84920184`), KYC verification status, registered phone & email, home branch IFSC, linked PAN, and dedicated Relationship Manager contact.

7. **🏛️ Institutional Footer**:
   - Official regulatory disclosures (RBI regulated, DICGC insurance eligible).
   - 24/7 customer assistance helplines and cyber fraud reporting contacts.
   - Terms, privacy policy, and RBI Fair Practices links.

---

## 🛠️ Technology Stack

- **Framework**: React 19
- **Build Tool & Bundler**: Vite 8
- **Icons**: Lucide React
- **Styling**: Pure CSS3 with CSS Custom Properties / Design Tokens (No bloated CSS frameworks, zero runtime overhead)
- **Linter**: Oxlint

---

## 📦 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or pnpm

### Installation & Run

```bash
# 1. Clone repository
git clone https://github.com/Thirupathi7Hub/Lakson_Bank_Assessment.git
cd Lakson_Bank_Assessment

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Build for production
npm run build
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

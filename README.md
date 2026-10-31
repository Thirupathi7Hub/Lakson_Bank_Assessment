# Lakson Bank — Banking Products Dashboard

A responsive banking dashboard built with React and Vite to provide a unified view of customer banking products, account information, and financial services.

The application brings savings accounts, credit cards, loans, and investment products into a single interface, with interactive search, filtering, and multiple viewing options.

---

## Features

### Dashboard
- Unified view of banking products across four categories:
  - Savings & Salary Accounts
  - Credit Cards
  - Personal & Home Loans
  - Fixed Deposits & Wealth Investments
- Product cards with account identifiers, status, and key financial information.
- Quick access to product details and application actions.
- Portfolio-level statistics.

### Search and Filtering
- Search by product name, category, or account number.
- Filter products by category and account status.
- Dynamic product counts.
- Grid and table view options.

### Interface and Theming
- OLED black dark theme and light theme.
- Persistent theme preference using `localStorage`.
- Responsive layouts for desktop, tablet, and mobile.
- Touch-friendly navigation and modal interactions.
- Consistent styling using CSS custom properties.

### Customer Profile
- Customer information popup.
- CIF and KYC verification details.
- Registered contact information.
- Branch and IFSC information.
- Relationship Manager details.

### Banking Information
- Indian Rupee (INR) currency formatting.
- Indian numbering conventions for financial values.
- IFSC information and DICGC insurance disclosures.
- RBI-related regulatory information and customer support details.

---

## Technology Stack

| Technology | Purpose |
| :--- | :--- |
| **React 19** | Frontend development |
| **Vite 8** | Development server and build tool |
| **JavaScript** | Application logic |
| **CSS3** | Styling and responsive layouts |
| **Lucide React** | Interface icons |
| **Oxlint** | Code quality and linting |

---

## Project Structure

```
Lakson_Bank_Assessment/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── components/
│   │   ├── ApplicationModal.jsx
│   │   ├── ExecutivePortfolioBar.jsx
│   │   ├── FilterControls.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ProductDetailModal.jsx
│   │   ├── ProductTable.jsx
│   │   ├── ProfileModal.jsx
│   │   └── Toast.jsx
│   ├── data/
│   │   └── mockProducts.js
│   ├── services/
│   │   └── bankingService.js
│   ├── styles/
│   │   ├── dashboard.css
│   │   └── tokens.css
│   ├── utils/
│   │   └── formatters.js
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── .oxlintrc.json
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

## Getting Started

### Prerequisites
- Node.js 18 or later
- npm or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Thirupathi7Hub/Lakson_Bank_Assessment.git
```

2. Navigate to the application directory:
```bash
cd Lakson_Bank_Assessment
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

Open the application at: [http://localhost:5173](http://localhost:5173)

### Production Build
To generate an optimized production build:
```bash
npm run build
```

---

## Project Information

- **Project**: Lakson Bank — Banking Products Dashboard
- **Type**: Frontend Web Application
- **Framework**: React
- **Build Tool**: Vite
- **Currency**: Indian Rupee (INR)

---

## Disclaimer

This project is a frontend assessment/demo application. Customer information, account details, financial values, and banking interactions are illustrative and should not be treated as real banking data or services.

---

Developed by [Thirupathi M.](https://github.com/Thirupathi7Hub)

import React from 'react';
import { PiggyBank, CreditCard, Landmark, TrendingUp } from 'lucide-react';

export default function ExecutivePortfolioBar({ summary }) {
  const {
    totalSavings = '₹3,30,400',
    availableCredit = '₹4,65,000',
    activeLoans = '₹18,50,000',
    investments = '₹4,85,000',
  } = summary || {};

  return (
    <section className="dashboard-hero-section">
      <div className="hero-text-block">
        <h1 className="page-headline">Banking Products Dashboard</h1>
        <p className="page-description">
          A unified view of your savings accounts, credit cards, active loans, and investments in Indian Rupee (INR).
        </p>
      </div>

      {/* 4 Clean Quick Stats */}
      <div className="summary-stats-grid">
        <div className="stat-card">
          <div className="stat-card-top">
            <span className="stat-label">Savings & Accounts</span>
            <PiggyBank size={16} className="stat-icon" color="#059669" />
          </div>
          <div className="stat-value tabular-nums">{totalSavings}</div>
          <div className="stat-meta">2 Active Accounts</div>
        </div>

        <div className="stat-card">
          <div className="stat-card-top">
            <span className="stat-label">Available Credit</span>
            <CreditCard size={16} className="stat-icon" color="#2563eb" />
          </div>
          <div className="stat-value tabular-nums">{availableCredit}</div>
          <div className="stat-meta">Across 2 Cards</div>
        </div>

        <div className="stat-card">
          <div className="stat-card-top">
            <span className="stat-label">Active Loans</span>
            <Landmark size={16} className="stat-icon" color="#d97706" />
          </div>
          <div className="stat-value tabular-nums">{activeLoans}</div>
          <div className="stat-meta">Home & Personal Loans</div>
        </div>

        <div className="stat-card">
          <div className="stat-card-top">
            <span className="stat-label">Investments</span>
            <TrendingUp size={16} className="stat-icon" color="#7c3aed" />
          </div>
          <div className="stat-value tabular-nums">{investments}</div>
          <div className="stat-meta">Fixed Deposits & Mutual Funds</div>
        </div>
      </div>
    </section>
  );
}

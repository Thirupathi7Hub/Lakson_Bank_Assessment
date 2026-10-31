import React from 'react';
import { Building2, ShieldCheck, Phone, Lock } from 'lucide-react';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="app-footer">
      <div className="footer-inner">
        {/* Top Tier */}
        <div className="footer-grid">
          {/* Brand & Regulatory Info */}
          <div className="footer-col brand-col">
            <div className="footer-brand">
              <div className="brand-mark-sm">
                <Building2 size={16} />
              </div>
              <span className="footer-brand-title">Lakson Bank</span>
            </div>
            <p className="footer-text">
              Regulated by the Reserve Bank of India (RBI). Deposits eligible for insurance up to ₹5,00,000 by DICGC.
            </p>
            <div className="footer-security-pill">
              <Lock size={12} />
              <span>256-Bit Bank Grade Encryption</span>
            </div>
          </div>

          {/* Products Column */}
          <div className="footer-col">
            <h4 className="footer-heading">Banking Products</h4>
            <ul className="footer-links">
              <li><span className="footer-link">Savings & Salary Accounts</span></li>
              <li><span className="footer-link">Credit & Charge Cards</span></li>
              <li><span className="footer-link">Personal & Home Loans</span></li>
              <li><span className="footer-link">Fixed & Recurring Deposits</span></li>
            </ul>
          </div>

          {/* Security & Support */}
          <div className="footer-col">
            <h4 className="footer-heading">Customer Assistance</h4>
            <div className="footer-contact-item">
              <Phone size={13} />
              <span>24/7 Helpline: 1800-209-4321</span>
            </div>
            <div className="footer-contact-item">
              <ShieldCheck size={13} />
              <span>Cyber Fraud Helpdesk: 1930 / support@lakson.in</span>
            </div>
            <p className="footer-text-muted" style={{ marginTop: '0.5rem' }}>
              Branch Hours: Mon – Sat (9:30 AM to 4:30 PM IST)
            </p>
          </div>
        </div>

        {/* Bottom Tier: Copyright & Disclosures */}
        <div className="footer-bottom-bar">
          <div className="footer-copyright">
            © {CURRENT_YEAR} Lakson Bank Ltd. All rights reserved. Member of Indian Banks' Association (IBA).
          </div>
          <div className="footer-legal-links">
            <span className="legal-link">Privacy Policy</span>
            <span className="legal-dot">•</span>
            <span className="legal-link">Terms of Service</span>
            <span className="legal-dot">•</span>
            <span className="legal-link">RBI Fair Practices</span>
            <span className="legal-dot">•</span>
            <span className="legal-link">Security</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

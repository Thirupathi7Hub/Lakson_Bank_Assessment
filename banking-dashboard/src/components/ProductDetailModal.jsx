import React, { useEffect } from 'react';
import { X, ShieldCheck, Sparkles } from 'lucide-react';
import { STATUS_CONFIG } from '../data/mockProducts';
import { getCategoryBadgeTheme } from '../utils/formatters';

export default function ProductDetailModal({ product, onClose, onApply }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  if (!product) return null;

  const statusInfo = STATUS_CONFIG[product.status] || STATUS_CONFIG.active;
  const categoryTheme = getCategoryBadgeTheme(product.category);
  const isPreApproved = product.status === 'pre_approved';

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="simple-modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header-simple">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <span 
                className={`category-chip cat-${product.category}`}
                style={{ 
                  backgroundColor: categoryTheme.bg, 
                  color: categoryTheme.color,
                  borderColor: categoryTheme.border 
                }}
              >
                {product.categoryLabel}
              </span>
              <span 
                className={`status-chip status-${product.status}`}
                style={{ 
                  backgroundColor: statusInfo.bg, 
                  color: statusInfo.color,
                  borderColor: statusInfo.border 
                }}
              >
                <span className="status-dot" style={{ backgroundColor: statusInfo.color }} />
                <span>{statusInfo.label}</span>
              </span>
            </div>
            <h2 className="modal-title-simple">{product.name}</h2>
          </div>

          <button 
            type="button" 
            className="modal-close-icon"
            onClick={onClose}
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Content */}
        <div className="modal-body-simple">
          {/* Description */}
          <p className="modal-desc">
            {product.details?.description || 'View complete information, rates, and terms for this banking product.'}
          </p>

          {/* Key Specifications Grid */}
          <div className="modal-specs-grid">
            <div className="spec-card">
              <span className="spec-title">Account Identifier</span>
              <span className="spec-value tabular-nums">{product.accountNumber}</span>
            </div>
            <div className="spec-card">
              <span className="spec-title">{product.metric1.label}</span>
              <span className="spec-value tabular-nums">{product.metric1.value}</span>
            </div>
            <div className="spec-card">
              <span className="spec-title">{product.metric2.label}</span>
              <span className="spec-value tabular-nums">{product.metric2.value}</span>
            </div>
            {product.details?.monthlyFee && (
              <div className="spec-card">
                <span className="spec-title">Monthly Charges</span>
                <span className="spec-value">{product.details.monthlyFee}</span>
              </div>
            )}
            {product.details?.creditLimit && (
              <div className="spec-card">
                <span className="spec-title">Total Credit Limit</span>
                <span className="spec-value tabular-nums">{product.details.creditLimit}</span>
              </div>
            )}
            {product.details?.annualFee && (
              <div className="spec-card">
                <span className="spec-title">Annual Membership</span>
                <span className="spec-value">{product.details.annualFee}</span>
              </div>
            )}
            {product.details?.monthlyEMI && (
              <div className="spec-card">
                <span className="spec-title">Monthly EMI</span>
                <span className="spec-value tabular-nums">{product.details.monthlyEMI}</span>
              </div>
            )}
            {product.details?.tenureRemaining && (
              <div className="spec-card">
                <span className="spec-title">Tenure Remaining</span>
                <span className="spec-value">{product.details.tenureRemaining}</span>
              </div>
            )}
            {product.details?.maturityValue && (
              <div className="spec-card">
                <span className="spec-title">Maturity Value</span>
                <span className="spec-value tabular-nums">{product.details.maturityValue}</span>
              </div>
            )}
            {product.details?.tenure && (
              <div className="spec-card">
                <span className="spec-title">Deposit Tenure</span>
                <span className="spec-value">{product.details.tenure}</span>
              </div>
            )}
          </div>

          {/* Key Benefits */}
          <div>
            <h4 style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
              Key Benefits & Features
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              {product.features.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
                  <ShieldCheck size={14} color="#059669" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="modal-footer-simple">
          <button 
            type="button" 
            className="btn-secondary"
            onClick={onClose}
          >
            Close
          </button>

          {isPreApproved && (
            <button 
              type="button" 
              className="btn-primary"
              onClick={() => {
                onClose();
                onApply(product);
              }}
            >
              <Sparkles size={14} />
              <span>Apply for this Product</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

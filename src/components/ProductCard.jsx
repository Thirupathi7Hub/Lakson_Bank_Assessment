import React from 'react';
import { Check, ChevronRight, Sparkles } from 'lucide-react';
import { STATUS_CONFIG } from '../data/mockProducts';
import { getCategoryBadgeTheme } from '../utils/formatters';

export default function ProductCard({ product, onViewDetails, onApply }) {
  const statusInfo = STATUS_CONFIG[product.status] || STATUS_CONFIG.active;
  const categoryTheme = getCategoryBadgeTheme(product.category);
  const isPreApproved = product.status === 'pre_approved';

  return (
    <div className="product-card">
      {/* Header: Category & Status */}
      <div className="card-top-row">
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

      {/* Product Name & Account ID */}
      <div className="card-name-block">
        <h3 className="card-title" onClick={() => onViewDetails(product)}>
          {product.name}
        </h3>
        <div className="card-acc-id">{product.accountNumber}</div>
      </div>

      {/* Key Metrics (1 or 2 metrics required by prompt) */}
      <div className="card-metrics-box">
        <div className="metric-item">
          <span className="metric-label">{product.metric1.label}</span>
          <span className="metric-val tabular-nums">{product.metric1.value}</span>
        </div>
        <div className="metric-item">
          <span className="metric-label">{product.metric2.label}</span>
          <span className="metric-val tabular-nums">{product.metric2.value}</span>
        </div>
      </div>

      {/* Simple Highlights / Perks */}
      <ul className="card-perks-list">
        {product.features.map((item, idx) => (
          <li key={idx} className="perk-row">
            <Check size={13} className="perk-check" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {/* Action CTA Buttons */}
      <div className="card-footer-actions">
        <button
          type="button"
          className="cta-btn secondary"
          onClick={() => onViewDetails(product)}
        >
          <span>View Details</span>
          <ChevronRight size={14} />
        </button>

        {isPreApproved && (
          <button
            type="button"
            className="cta-btn primary"
            onClick={() => onApply(product)}
          >
            <Sparkles size={13} />
            <span>Apply Now</span>
          </button>
        )}
      </div>
    </div>
  );
}

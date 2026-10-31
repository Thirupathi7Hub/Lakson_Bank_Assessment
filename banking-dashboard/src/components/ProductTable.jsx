import React from 'react';
import { ChevronRight } from 'lucide-react';
import { STATUS_CONFIG } from '../data/mockProducts';
import { getCategoryBadgeTheme } from '../utils/formatters';

export default function ProductTable({ products, onViewDetails, onApply }) {
  return (
    <div className="table-responsive-wrapper">
      <table className="simple-table">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Category</th>
            <th>Status</th>
            <th>Key Metric 1</th>
            <th>Key Metric 2</th>
            <th style={{ textAlign: 'right' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            const statusInfo = STATUS_CONFIG[product.status] || STATUS_CONFIG.active;
            const categoryTheme = getCategoryBadgeTheme(product.category);
            const isPreApproved = product.status === 'pre_approved';

            return (
              <tr 
                key={product.id}
                onClick={() => onViewDetails(product)}
                style={{ cursor: 'pointer' }}
              >
                <td>
                  <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{product.name}</div>
                  <div style={{ fontSize: '0.6875rem', color: 'var(--text-muted)' }}>{product.accountNumber}</div>
                </td>

                <td>
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
                </td>

                <td>
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
                </td>

                <td>
                  <div className="tabular-nums" style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
                    {product.metric1.value}
                  </div>
                  <div style={{ fontSize: '0.6875rem', color: 'var(--text-muted)' }}>
                    {product.metric1.label}
                  </div>
                </td>

                <td>
                  <div className="tabular-nums" style={{ fontWeight: 500, color: 'var(--text-secondary)' }}>
                    {product.metric2.value}
                  </div>
                  <div style={{ fontSize: '0.6875rem', color: 'var(--text-muted)' }}>
                    {product.metric2.label}
                  </div>
                </td>

                <td style={{ textAlign: 'right' }}>
                  <div style={{ display: 'inline-flex', gap: '6px' }} onClick={(e) => e.stopPropagation()}>
                    <button
                      type="button"
                      className="cta-btn secondary"
                      style={{ padding: '0.35rem 0.65rem', fontSize: '0.75rem' }}
                      onClick={() => onViewDetails(product)}
                    >
                      <span>View Details</span>
                      <ChevronRight size={12} />
                    </button>

                    {isPreApproved && (
                      <button
                        type="button"
                        className="cta-btn primary"
                        style={{ padding: '0.35rem 0.65rem', fontSize: '0.75rem' }}
                        onClick={() => onApply(product)}
                      >
                        <span>Apply</span>
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

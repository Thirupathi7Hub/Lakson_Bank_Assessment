import React, { useState } from 'react';
import { X, CheckCircle2, Sparkles, ShieldCheck } from 'lucide-react';

export default function ApplicationModal({ product, onClose, onConfirmApplication }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDone, setIsDone] = useState(false);

  if (!product) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await onConfirmApplication(product.id);
      setIsDone(true);
      setTimeout(() => {
        onClose();
      }, 1500);
    } catch (err) {
      console.error(err);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="simple-modal-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '480px' }}>
        <div className="modal-header-simple">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#d97706', fontSize: '0.75rem', fontWeight: 600 }}>
              <Sparkles size={14} />
              <span>Instant Digital Application</span>
            </div>
            <h2 className="modal-title-simple">{product.name}</h2>
          </div>

          <button 
            type="button" 
            className="modal-close-icon"
            onClick={onClose}
            disabled={isSubmitting}
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        {isDone ? (
          <div className="modal-body-simple" style={{ textAlign: 'center', padding: '2.5rem 1rem' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#ecfdf5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
              <CheckCircle2 size={32} />
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
              Application Approved!
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              Your {product.name} has been activated and added to your dashboard.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="modal-body-simple">
              <div style={{ background: 'var(--bg-card-subtle)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-sm)', padding: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <ShieldCheck size={20} color="#059669" style={{ flexShrink: 0 }} />
                <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
                  Pre-approved based on your banking profile. Instant verification with zero paperwork.
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem', margin: '0.5rem 0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8125rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Product Type:</span>
                  <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{product.categoryLabel}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8125rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>{product.metric1.label}:</span>
                  <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{product.metric1.value}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8125rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Processing:</span>
                  <span style={{ fontWeight: 600, color: '#059669' }}>Free & Instant</span>
                </div>
              </div>

              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>
                By clicking Confirm, you agree to the product terms and electronic delivery disclosures.
              </p>
            </div>

            <div className="modal-footer-simple">
              <button 
                type="button" 
                className="btn-secondary"
                onClick={onClose}
                disabled={isSubmitting}
              >
                Cancel
              </button>
              <button 
                type="submit" 
                className="btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Activating...' : 'Confirm & Activate'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

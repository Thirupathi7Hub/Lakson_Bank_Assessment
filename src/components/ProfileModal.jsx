import React, { useEffect } from 'react';
import { X, ShieldCheck, Mail, Phone, MapPin, Building, CreditCard, User, Award } from 'lucide-react';

export default function ProfileModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKey);
    }
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="simple-modal-card profile-modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header-simple">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div className="profile-avatar-large">
              <span>AK</span>
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
                <h2 className="modal-title-simple" style={{ fontSize: '1rem', margin: 0 }}>
                  Ananya Krishnamurthy
                </h2>
                <span className="kyc-badge">
                  <ShieldCheck size={12} />
                  <span>Verified</span>
                </span>
              </div>
              <p style={{ margin: '2px 0 0', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                CIF: 84920184 • Priority Wealth Member
              </p>
            </div>
          </div>

          <button 
            type="button" 
            className="modal-close-icon"
            onClick={onClose}
            aria-label="Close profile modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="modal-body-simple" style={{ gap: '0.875rem' }}>
          {/* Quick Info Grid */}
          <div className="profile-details-grid">
            <div className="profile-info-tile">
              <span className="profile-tile-label">
                <Phone size={12} />
                <span>Registered Mobile</span>
              </span>
              <span className="profile-tile-value tabular-nums">+91 98765 43210</span>
            </div>

            <div className="profile-info-tile">
              <span className="profile-tile-label">
                <Mail size={12} />
                <span>Email Address</span>
              </span>
              <span className="profile-tile-value">ananya.k@example.com</span>
            </div>

            <div className="profile-info-tile">
              <span className="profile-tile-label">
                <MapPin size={12} />
                <span>Home Branch</span>
              </span>
              <span className="profile-tile-value">Indiranagar, Bengaluru</span>
            </div>

            <div className="profile-info-tile">
              <span className="profile-tile-label">
                <Building size={12} />
                <span>Branch IFSC</span>
              </span>
              <span className="profile-tile-value tabular-nums">LAKS0000412</span>
            </div>

            <div className="profile-info-tile">
              <span className="profile-tile-label">
                <CreditCard size={12} />
                <span>PAN Number</span>
              </span>
              <span className="profile-tile-value tabular-nums">ABCDE8492F (Linked)</span>
            </div>

            <div className="profile-info-tile">
              <span className="profile-tile-label">
                <Award size={12} />
                <span>Membership Tier</span>
              </span>
              <span className="profile-tile-value">Priority Banking Tier 3</span>
            </div>
          </div>

          {/* Relationship Manager Box */}
          <div className="rm-contact-box">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
              <div className="rm-avatar">
                <User size={16} />
              </div>
              <div>
                <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  Vikramaditya Rao
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  Dedicated Relationship Manager • +91 98201 55432
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="modal-footer-simple">
          <button 
            type="button" 
            className="btn-secondary" 
            onClick={onClose}
            style={{ width: '100%', justifyContent: 'center' }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}


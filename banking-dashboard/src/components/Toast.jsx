import React, { useEffect } from 'react';
import { CheckCircle2, Info, AlertCircle, X } from 'lucide-react';

export default function Toast({ message, type = 'success', onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3200);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="toast-shelf">
      <div className="toast-pill">
        {type === 'success' && <CheckCircle2 size={16} color="var(--accent-emerald)" />}
        {type === 'info' && <Info size={16} color="var(--accent-indigo)" />}
        {type === 'error' && <AlertCircle size={16} color="var(--accent-amber)" />}
        <span>{message}</span>
        <button 
          type="button" 
          onClick={onClose}
          style={{ marginLeft: '8px', color: 'rgba(255,255,255,0.6)', cursor: 'pointer' }}
        >
          <X size={13} />
        </button>
      </div>
    </div>
  );
}


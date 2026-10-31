import React from 'react';
import { Building2, Sun, Moon, RotateCcw } from 'lucide-react';

export default function Header({ theme, toggleTheme, onResetData, onOpenProfile }) {
  return (
    <header className="top-header">
      <div className="top-header-inner">
        {/* Brand */}
        <div className="brand-section">
          <div className="brand-mark">
            <Building2 size={18} />
          </div>
          <div className="brand-info">
            <div className="brand-title">Lakson Bank</div>
          </div>
        </div>

        {/* Actions */}
        <div className="header-actions">
          {/* Reset Demo State */}
          <button 
            type="button" 
            className="icon-btn" 
            title="Reset to default products"
            onClick={onResetData}
            aria-label="Reset demo"
          >
            <RotateCcw size={15} />
          </button>

          {/* Theme Switcher */}
          <button 
            type="button" 
            className="icon-btn" 
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* User profile button */}
          <button 
            type="button" 
            className="user-profile-chip"
            onClick={onOpenProfile}
            title="View customer profile details"
            aria-label="Open customer profile"
          >
            <div className="avatar-initials">AK</div>
            <span className="user-meta-name">Ananya K.</span>
          </button>
        </div>
      </div>
    </header>
  );
}

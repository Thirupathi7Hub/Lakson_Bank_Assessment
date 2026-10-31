import React from 'react';
import { Search, X, LayoutGrid, List } from 'lucide-react';
import { PRODUCT_CATEGORIES } from '../data/mockProducts';

export default function FilterControls({
  selectedCategory,
  onSelectCategory,
  categoryCounts,
  searchQuery,
  onSearchChange,
  statusFilter,
  onStatusChange,
  viewMode,
  onViewModeChange,
}) {
  return (
    <div className="filter-controls-container">
      {/* Category Pills */}
      <div className="category-pills-row" role="tablist">
        {PRODUCT_CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat.id;
          const count = categoryCounts[cat.id] ?? 0;

          return (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`category-pill ${isActive ? 'active' : ''}`}
              onClick={() => onSelectCategory(cat.id)}
            >
              <span>{cat.label}</span>
              <span className="pill-badge">{count}</span>
            </button>
          );
        })}
      </div>

      {/* Search & Status Filter Row */}
      <div className="search-filter-row">
        {/* Search Input */}
        <div className="search-box">
          <Search size={15} className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder="Search by product name, category or account number..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
          {searchQuery && (
            <button
              type="button"
              className="clear-btn"
              onClick={() => onSearchChange('')}
              title="Clear search"
            >
              <X size={13} />
            </button>
          )}
        </div>

        {/* Filter Dropdown & View Mode */}
        <div className="filter-extras">
          <select
            className="select-dropdown"
            value={statusFilter}
            onChange={(e) => onStatusChange(e.target.value)}
            aria-label="Filter by status"
          >
            <option value="all">All Statuses</option>
            <option value="active">Active Only</option>
            <option value="pre_approved">Pre-Approved Only</option>
          </select>

          {/* View Mode Toggle */}
          <div className="view-toggle">
            <button
              type="button"
              className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
              onClick={() => onViewModeChange('grid')}
              title="Grid View"
              aria-label="Grid View"
            >
              <LayoutGrid size={15} />
            </button>
            <button
              type="button"
              className={`view-btn ${viewMode === 'table' ? 'active' : ''}`}
              onClick={() => onViewModeChange('table')}
              title="List View"
              aria-label="List View"
            >
              <List size={15} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

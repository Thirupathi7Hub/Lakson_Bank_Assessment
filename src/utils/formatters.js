/**
 * Financial Formatting & Category Styling Utilities
 */

export function getCategoryBadgeTheme(category) {
  switch (category) {
    case 'savings':
      return {
        bg: '#ecfdf5',
        color: '#065f46',
        border: '#a7f3d0',
        label: 'Savings',
      };
    case 'credit':
      return {
        bg: '#f1f5f9',
        color: '#0f172a',
        border: '#cbd5e1',
        label: 'Credit Card',
      };
    case 'loan':
      return {
        bg: '#eff6ff',
        color: '#1e40af',
        border: '#bfdbfe',
        label: 'Loan',
      };
    case 'wealth':
      return {
        bg: '#fffbeb',
        color: '#92400e',
        border: '#fde68a',
        label: 'Investments',
      };
    default:
      return {
        bg: '#f8fafc',
        color: '#475569',
        border: '#e2e8f0',
        label: 'Product',
      };
  }
}

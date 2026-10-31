/**
 * Mock Banking API Service
 * Clean and simple asynchronous service returning product data
 */

import { MOCK_BANKING_PRODUCTS } from '../data/mockProducts';

let productsStore = [...MOCK_BANKING_PRODUCTS];

export const bankingService = {
  /**
   * Fetch products with optional category, status, and search filters
   */
  async getProducts({ category = 'all', status = 'all', search = '' } = {}) {
    await new Promise((resolve) => setTimeout(resolve, 150));

    let filtered = [...productsStore];

    if (category && category !== 'all') {
      filtered = filtered.filter((p) => p.category === category);
    }

    if (status && status !== 'all') {
      filtered = filtered.filter((p) => p.status === status);
    }

    if (search && search.trim() !== '') {
      const q = search.trim().toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.categoryLabel.toLowerCase().includes(q) ||
          p.accountNumber.toLowerCase().includes(q)
      );
    }

    return {
      products: filtered,
      totalCount: filtered.length,
    };
  },

  /**
   * Get simple portfolio totals
   */
  async getPortfolioSummary() {
    await new Promise((resolve) => setTimeout(resolve, 100));

    return {
      totalSavings: '₹3,30,400',
      availableCredit: '₹4,65,000',
      activeLoans: '₹18,50,000',
      investments: '₹4,85,000',
    };
  },

  /**
   * Submit application for a product
   */
  async submitApplication(productId) {
    await new Promise((resolve) => setTimeout(resolve, 300));
    const index = productsStore.findIndex((p) => p.id === productId);
    if (index === -1) {
      throw new Error('Product not found');
    }

    const current = productsStore[index];
    const updated = {
      ...current,
      status: 'active',
      accountNumber: `•••• ${Math.floor(1000 + Math.random() * 9000)}`,
      ctaLabel: 'View Details',
    };

    productsStore[index] = updated;

    return {
      success: true,
      product: updated,
      message: `${updated.name} has been activated successfully!`,
    };
  },

  /**
   * Reset store to initial state
   */
  resetStore() {
    productsStore = [...MOCK_BANKING_PRODUCTS];
    return true;
  },
};

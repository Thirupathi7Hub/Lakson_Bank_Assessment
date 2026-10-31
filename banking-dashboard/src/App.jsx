import React, { useState, useEffect, useCallback, useMemo } from 'react';
import './styles/tokens.css';
import './styles/dashboard.css';

import Header from './components/Header';
import ExecutivePortfolioBar from './components/ExecutivePortfolioBar';
import FilterControls from './components/FilterControls';
import ProductCard from './components/ProductCard';
import ProductTable from './components/ProductTable';
import ProductDetailModal from './components/ProductDetailModal';
import ApplicationModal from './components/ApplicationModal';
import ProfileModal from './components/ProfileModal';
import Footer from './components/Footer';
import Toast from './components/Toast';

import { bankingService } from './services/bankingService';
import { SearchX } from 'lucide-react';

export default function App() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('lakson_theme') || 'dark';
    } catch {
      return 'dark';
    }
  });

  // Products and Summary
  const [products, setProducts] = useState([]);
  const [allProductsRaw, setAllProductsRaw] = useState([]);
  const [portfolioSummary, setPortfolioSummary] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Filters
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'table'

  // Modals
  const [activeDetailProduct, setActiveDetailProduct] = useState(null);
  const [activeApplyProduct, setActiveApplyProduct] = useState(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // Toast feedback
  const [toast, setToast] = useState(null);

  const showToast = useCallback((message, type = 'success') => {
    setToast({ message, type });
  }, []);

  // Set theme on root
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('lakson_theme', theme);
    } catch {
      // ignore
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Fetch products
  const refreshData = useCallback(async () => {
    try {
      const [productsRes, allRes, summaryRes] = await Promise.all([
        bankingService.getProducts({
          category: selectedCategory,
          status: statusFilter,
          search: searchQuery,
        }),
        bankingService.getProducts({ category: 'all', status: 'all', search: '' }),
        bankingService.getPortfolioSummary(),
      ]);
      setProducts(productsRes.products);
      setAllProductsRaw(allRes.products);
      setPortfolioSummary(summaryRes);
    } catch (err) {
      console.error(err);
      showToast('Error loading banking products', 'error');
    }
  }, [selectedCategory, statusFilter, searchQuery, showToast]);

  useEffect(() => {
    let ignore = false;
    const fetchInitial = async () => {
      try {
        const [productsRes, allRes, summaryRes] = await Promise.all([
          bankingService.getProducts({
            category: selectedCategory,
            status: statusFilter,
            search: searchQuery,
          }),
          bankingService.getProducts({ category: 'all', status: 'all', search: '' }),
          bankingService.getPortfolioSummary(),
        ]);
        if (!ignore) {
          setProducts(productsRes.products);
          setAllProductsRaw(allRes.products);
          setPortfolioSummary(summaryRes);
        }
      } catch (err) {
        console.error(err);
        if (!ignore) {
          showToast('Error loading banking products', 'error');
        }
      } finally {
        if (!ignore) {
          setIsLoading(false);
        }
      }
    };

    fetchInitial();
    return () => {
      ignore = true;
    };
  }, [selectedCategory, statusFilter, searchQuery, showToast]);

  // Tab counts
  const categoryCounts = useMemo(() => {
    const counts = { all: allProductsRaw.length };
    allProductsRaw.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, [allProductsRaw]);

  // Handle application confirmation
  const handleConfirmApplication = async (productId) => {
    const res = await bankingService.submitApplication(productId);
    showToast(res.message, 'success');
    await refreshData();
    if (activeDetailProduct && activeDetailProduct.id === productId) {
      setActiveDetailProduct(res.product);
    }
  };

  // Reset demo
  const handleResetData = async () => {
    bankingService.resetStore();
    setSelectedCategory('all');
    setStatusFilter('all');
    setSearchQuery('');
    showToast('Reset products to default', 'info');
    await refreshData();
  };

  return (
    <div className="app-container">
      {/* Top Header */}
      <Header
        theme={theme}
        toggleTheme={toggleTheme}
        onResetData={handleResetData}
        onOpenProfile={() => setIsProfileOpen(true)}
      />

      {/* Main Content */}
      <main className="dashboard-content">
        {/* Simple Hero Section */}
        <ExecutivePortfolioBar summary={portfolioSummary} />

        {/* Filter & Search Toolbar */}
        <FilterControls
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          categoryCounts={categoryCounts}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          statusFilter={statusFilter}
          onStatusChange={setStatusFilter}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
        />

        {/* Product Cards Grid or Table */}
        {isLoading ? (
          <div className="empty-box">
            <p>Loading banking products...</p>
          </div>
        ) : products.length === 0 ? (
          <div className="empty-box">
            <SearchX size={32} style={{ color: 'var(--text-muted)', margin: '0 auto 8px' }} />
            <h3 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '4px' }}>
              No products found
            </h3>
            <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
              Try searching with different keywords or changing the category filter.
            </p>
            <button
              type="button"
              className="btn-secondary"
              onClick={() => {
                setSelectedCategory('all');
                setStatusFilter('all');
                setSearchQuery('');
              }}
            >
              Clear Filters
            </button>
          </div>
        ) : viewMode === 'grid' ? (
          <div className="products-grid">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={setActiveDetailProduct}
                onApply={setActiveApplyProduct}
              />
            ))}
          </div>
        ) : (
          <ProductTable
            products={products}
            onViewDetails={setActiveDetailProduct}
            onApply={setActiveApplyProduct}
          />
        )}
      </main>

      {/* Footer */}
      <Footer />

      {/* Simple View Details Modal Popup */}
      {activeDetailProduct && (
        <ProductDetailModal
          product={activeDetailProduct}
          onClose={() => setActiveDetailProduct(null)}
          onApply={setActiveApplyProduct}
        />
      )}

      {/* Simple Apply Modal Popup */}
      {activeApplyProduct && (
        <ApplicationModal
          product={activeApplyProduct}
          onClose={() => setActiveApplyProduct(null)}
          onConfirmApplication={handleConfirmApplication}
        />
      )}

      {/* Profile Modal Popup */}
      <ProfileModal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
      />

      {/* Toast Notification */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
}

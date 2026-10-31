/**
 * Mock Banking Products Dataset
 * Clean, realistic Indian banking products with standard INR values
 */

export const PRODUCT_CATEGORIES = [
  { id: 'all', label: 'All Products' },
  { id: 'savings', label: 'Savings & Accounts' },
  { id: 'credit', label: 'Credit Cards' },
  { id: 'loan', label: 'Loans' },
  { id: 'wealth', label: 'Investments' },
];

export const STATUS_CONFIG = {
  active: {
    label: 'Active',
    color: '#059669',
    bg: '#ecfdf5',
    border: '#a7f3d0',
  },
  pre_approved: {
    label: 'Pre-Approved',
    color: '#d97706',
    bg: '#fffbeb',
    border: '#fde68a',
  },
  in_review: {
    label: 'In Review',
    color: '#2563eb',
    bg: '#eff6ff',
    border: '#bfdbfe',
  },
};

export const MOCK_BANKING_PRODUCTS = [
  // 1. Savings Account
  {
    id: 'prod-1',
    name: 'Advantage Savings Account',
    category: 'savings',
    categoryLabel: 'Savings',
    status: 'active',
    accountNumber: '•••• 4892',
    currency: 'INR',
    metric1: {
      label: 'Available Balance',
      value: '₹2,45,000',
    },
    metric2: {
      label: 'Interest Rate',
      value: '7.10% p.a.',
    },
    ctaLabel: 'View Details',
    features: [
      'Zero balance penalty & free debit card',
      'Unlimited free domestic ATM & UPI transfers',
      'Earn interest calculated daily, paid monthly',
    ],
    details: {
      description: 'A high-interest daily savings account designed for flexible liquidity and seamless digital payments.',
      accountType: 'Regular Savings',
      minimumBalance: '₹10,000',
      monthlyFee: '₹0 (Free)',
      nextInterestDate: '30 Nov 2026',
    },
  },

  // 2. Salary Account
  {
    id: 'prod-2',
    name: 'Corporate Salary Account',
    category: 'savings',
    categoryLabel: 'Savings',
    status: 'active',
    accountNumber: '•••• 8821',
    currency: 'INR',
    metric1: {
      label: 'Available Balance',
      value: '₹85,400',
    },
    metric2: {
      label: 'Interest Rate',
      value: '4.50% p.a.',
    },
    ctaLabel: 'View Details',
    features: [
      'Zero minimum balance requirement',
      'Complimentary Platinum debit card',
      'Free personal accident insurance of ₹10 Lakhs',
    ],
    details: {
      description: 'Zero-balance corporate payroll account with preferential rates on loans and free airport lounge visits.',
      accountType: 'Salary Account',
      minimumBalance: '₹0 (Zero Balance)',
      monthlyFee: '₹0',
      nextInterestDate: '30 Nov 2026',
    },
  },

  // 3. Premium Credit Card
  {
    id: 'prod-3',
    name: 'Sapphire Cashback Credit Card',
    category: 'credit',
    categoryLabel: 'Credit Card',
    status: 'active',
    accountNumber: '•••• 9014',
    currency: 'INR',
    metric1: {
      label: 'Available Limit',
      value: '₹1,65,000',
    },
    metric2: {
      label: 'Next Due Date',
      value: '18 Nov 2026',
    },
    ctaLabel: 'View Details',
    features: [
      '5% cashback on Amazon, Flipkart & dining',
      '4 free domestic airport lounge visits per year',
      '50 days interest-free credit period',
    ],
    details: {
      description: 'A lifestyle and cashback credit card providing automated statement credits on online shopping and dining.',
      creditLimit: '₹2,50,000',
      minDue: '₹4,500',
      interestRate: '2.99% per month',
      annualFee: '₹999 (Waived on ₹1L spend)',
    },
  },

  // 4. Pre-Approved Credit Card
  {
    id: 'prod-4',
    name: 'Titanium Platinum Credit Card',
    category: 'credit',
    categoryLabel: 'Credit Card',
    status: 'pre_approved',
    accountNumber: 'PRE-APPROVED',
    currency: 'INR',
    metric1: {
      label: 'Pre-Approved Limit',
      value: '₹3,00,000',
    },
    metric2: {
      label: 'Introductory Rate',
      value: '0% for 60 Days',
    },
    ctaLabel: 'Apply Now',
    features: [
      'Instant digital approval without income documents',
      'Lifetime free card with zero annual charges',
      '2x reward points on all fuel & grocery purchases',
    ],
    details: {
      description: 'Pre-approved based on your account history. Card is issued digitally in 60 seconds with instant UPI linkage.',
      creditLimit: '₹3,00,000',
      minDue: '₹0',
      interestRate: '2.5% per month after intro',
      annualFee: '₹0 (Lifetime Free)',
    },
  },

  // 5. Home Loan
  {
    id: 'prod-5',
    name: 'Prime Housing Loan',
    category: 'loan',
    categoryLabel: 'Loan',
    status: 'active',
    accountNumber: 'HL-48201',
    currency: 'INR',
    metric1: {
      label: 'Outstanding Loan',
      value: '₹18,50,000',
    },
    metric2: {
      label: 'Interest Rate',
      value: '8.40% p.a.',
    },
    ctaLabel: 'View Details',
    features: [
      'Fixed EMI with convenient auto-debit',
      'Zero prepayment penalty after 12 months',
      'Eligible for tax benefits under Section 80C & 24',
    ],
    details: {
      description: 'Competitive home loan for residential property purchase or renovation with flexible repayment terms.',
      originalAmount: '₹25,00,000',
      monthlyEMI: '₹24,850',
      tenureRemaining: '8 Years (96 Months)',
      nextDueDate: '10 Nov 2026',
    },
  },

  // 6. Pre-Approved Personal Loan
  {
    id: 'prod-6',
    name: 'Instant Express Personal Loan',
    category: 'loan',
    categoryLabel: 'Loan',
    status: 'pre_approved',
    accountNumber: 'PRE-SANCTIONED',
    currency: 'INR',
    metric1: {
      label: 'Sanctioned Amount',
      value: '₹5,00,000',
    },
    metric2: {
      label: 'Interest Rate',
      value: '10.50% p.a.',
    },
    ctaLabel: 'Apply Now',
    features: [
      'Funds disbursed into your account in 5 minutes',
      'No physical documentation required',
      'Flexible tenure options from 12 to 48 months',
    ],
    details: {
      description: 'Quick personal loan ready for instant disbursal for medical, travel, or home improvement needs.',
      originalAmount: '₹5,00,000',
      monthlyEMI: '₹12,850 (Estimated)',
      tenureRemaining: 'Up to 36 Months',
      nextDueDate: 'Upon disbursal',
    },
  },

  // 7. Fixed Deposit Fund
  {
    id: 'prod-7',
    name: 'Smart Yield Fixed Deposit',
    category: 'wealth',
    categoryLabel: 'Investments',
    status: 'active',
    accountNumber: 'FD-90112',
    currency: 'INR',
    metric1: {
      label: 'Invested Amount',
      value: '₹3,00,000',
    },
    metric2: {
      label: 'Maturity Rate',
      value: '7.85% p.a.',
    },
    ctaLabel: 'View Details',
    features: [
      'Guaranteed fixed returns with sovereign safety',
      'Premature withdrawal allowed in emergency',
      'Loan facility available up to 90% of FD value',
    ],
    details: {
      description: 'Safe, guaranteed investment vehicle yielding fixed quarterly compound returns.',
      maturityValue: '₹3,75,400',
      maturityDate: '15 Mar 2028',
      tenure: '3 Years',
      payoutFrequency: 'On Maturity (Reinvested)',
    },
  },

  // 8. Mutual Fund Portfolio
  {
    id: 'prod-8',
    name: 'Bluechip Equity Growth Fund',
    category: 'wealth',
    categoryLabel: 'Investments',
    status: 'active',
    accountNumber: 'MF-66742',
    currency: 'INR',
    metric1: {
      label: 'Current Value',
      value: '₹1,85,000',
    },
    metric2: {
      label: '1-Year Return',
      value: '+14.20%',
    },
    ctaLabel: 'View Details',
    features: [
      'Invested in top 50 large-cap Indian companies',
      'Active monthly SIP of ₹5,000 enabled',
      'Zero lock-in period with instant withdrawal',
    ],
    details: {
      description: 'Diversified equity mutual fund offering long-term capital appreciation with professional fund management.',
      investedAmount: '₹1,50,000',
      gainLoss: '+₹35,000 (+23.3%)',
      sipAmount: '₹5,000 / month',
      navDate: 'Today',
    },
  },
];

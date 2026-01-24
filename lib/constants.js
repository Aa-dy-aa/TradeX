export const NAV_ITEMS = [
  { href: '/', label: 'Dashboard' },
  { href: '/search', label: 'Search' },
];

// Sign-up form select options
export const INVESTMENT_GOALS = [
  { value: 'Growth', label: 'Growth' },
  { value: 'Income', label: 'Income' },
  { value: 'Balanced', label: 'Balanced' },
  { value: 'Conservative', label: 'Conservative' },
];

export const RISK_TOLERANCE_OPTIONS = [
  { value: 'Low', label: 'Low' },
  { value: 'Medium', label: 'Medium' },
  { value: 'High', label: 'High' },
];

export const PREFERRED_INDUSTRIES = [
  { value: 'Technology', label: 'Technology' },
  { value: 'Healthcare', label: 'Healthcare' },
  { value: 'Finance', label: 'Finance' },
  { value: 'Energy', label: 'Energy' },
  { value: 'Consumer Goods', label: 'Consumer Goods' },
];

export const ALERT_TYPE_OPTIONS = [
  { value: 'upper', label: 'Upper' },
  { value: 'lower', label: 'Lower' },
];

export const CONDITION_OPTIONS = [
  { value: 'greater', label: 'Greater than (>)' },
  { value: 'less', label: 'Less than (<)' },
];

// TradingView Charts
export const MARKET_OVERVIEW_WIDGET_CONFIG = {
  colorTheme: 'dark',
  dateRange: '12M',
  locale: 'en',
  largeChartUrl: '',
  isTransparent: true,
  showFloatingTooltip: true,
  plotLineColorGrowing: '#0FEDBE',
  plotLineColorFalling: '#0FEDBE',
  gridLineColor: 'rgba(240, 243, 250, 0)',
  scaleFontColor: '#DBDBDB',
  belowLineFillColorGrowing: 'rgba(41, 98, 255, 0.12)',
  belowLineFillColorFalling: 'rgba(41, 98, 255, 0.12)',
  belowLineFillColorGrowingBottom: 'rgba(41, 98, 255, 0)',
  belowLineFillColorFallingBottom: 'rgba(41, 98, 255, 0)',
  symbolActiveColor: 'rgba(15, 237, 190, 0.05)',
  tabs: [
    {
      title: 'Financial',
      symbols: [
        { s: 'NYSE:JPM', d: 'JPMorgan Chase' },
        { s: 'NYSE:WFC', d: 'Wells Fargo Co New' },
        { s: 'NYSE:BAC', d: 'Bank Amer Corp' },
        { s: 'NYSE:HSBC', d: 'Hsbc Hldgs Plc' },
        { s: 'NYSE:C', d: 'Citigroup Inc' },
        { s: 'NYSE:MA', d: 'Mastercard Incorporated' },
      ],
    },
    {
      title: 'Technology',
      symbols: [
        { s: 'NASDAQ:AAPL', d: 'Apple' },
        { s: 'NASDAQ:GOOGL', d: 'Alphabet' },
        { s: 'NASDAQ:MSFT', d: 'Microsoft' },
        { s: 'NASDAQ:FB', d: 'Meta Platforms' },
        { s: 'NYSE:ORCL', d: 'Oracle Corp' },
        { s: 'NASDAQ:INTC', d: 'Intel Corp' },
      ],
    },
    {
      title: 'Services',
      symbols: [
        { s: 'NASDAQ:AMZN', d: 'Amazon' },
        { s: 'NYSE:BABA', d: 'Alibaba Group Hldg Ltd' },
        { s: 'NYSE:T', d: 'At&t Inc' },
        { s: 'NYSE:WMT', d: 'Walmart' },
        { s: 'NYSE:V', d: 'Visa' },
      ],
    },
  ],
  support_host: 'https://www.tradingview.com',
  backgroundColor: '#141414',
  width: '100%',
  height: 600,
  showSymbolLogo: true,
  showChart: true,
};

export const HEATMAP_WIDGET_CONFIG = {
  dataSource: 'SPX500',
  blockSize: 'market_cap_basic',
  blockColor: 'change',
  grouping: 'sector',
  isTransparent: true,
  locale: 'en',
  symbolUrl: '',
  colorTheme: 'dark',
  exchanges: [],
  hasTopBar: false,
  isDataSetEnabled: false,
  isZoomEnabled: true,
  hasSymbolTooltip: true,
  isMonoSize: false,
  width: '100%',
  height: '600',
};

export const SYMBOL_INFO_WIDGET_CONFIG = (symbol) => ({
  symbol: symbol.toUpperCase(),
  colorTheme: 'dark',
  isTransparent: true,
  locale: 'en',
  width: '100%',
  height: 170,
});

export const POPULAR_STOCK_SYMBOLS = [
  'AAPL', 'MSFT', 'GOOGL', 'AMZN', 'TSLA', 'META', 'NVDA',
  'NFLX', 'ORCL', 'CRM', 'ADBE', 'INTC', 'AMD', 'PYPL',
  'UBER', 'ZOOM', 'SPOT', 'SQ', 'SHOP', 'ROKU',
];

export const NO_MARKET_NEWS =
  '<p style="margin:0;font-size:16px;line-height:1.6;color:#4b5563;">No market news available today. Please check back tomorrow.</p>';

export const WATCHLIST_TABLE_HEADER = [
  'Company',
  'Symbol',
  'Price',
  'Change',
  'Market Cap',
  'P/E Ratio',
  'Alert',
  'Action',
];

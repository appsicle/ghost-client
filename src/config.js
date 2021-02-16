module.exports = {
  apiUrl:
    process.env.NODE_ENV === 'development'
      ? process.env.REACT_APP_API_ENDPOINT_DEV
      : process.env.REACT_APP_API_ENDPOINT_PROD,
  heapUrl: process.env.NODE_ENV === 'development'
    ? process.env.REACT_APP_HEAP_DEV : process.env.REACT_APP_HEAP_PROD,
  googleAnalyticsUrl: process.env.REACT_APP_GA,
};

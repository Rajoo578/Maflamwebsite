import ReactGA from 'react-ga';

// Replace with your actual Google Analytics Tracking ID
const TRACKING_ID = 'UA-XXXXXXXXX-X';

export const initGA = () => {
  ReactGA.initialize(TRACKING_ID);
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname + window.location.search);
};

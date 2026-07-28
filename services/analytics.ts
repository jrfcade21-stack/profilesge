export const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Replace with your actual Measurement ID

type EventParams = {
  category?: string;
  label?: string;
  value?: number;
  [key: string]: any;
};

/**
 * Tracks a custom event in Google Analytics.
 * @param action - The name of the event action (e.g., 'click_cta', 'form_submit').
 * @param params - Optional parameters including category, label, and value.
 */
export const trackEvent = (action: string, params: EventParams = {}) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    const { category, label, value, ...rest } = params;
    
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
      ...rest
    });
  } else {
    // Uncomment for debugging in development without GA script loaded
    // console.log('[Analytics]', action, params);
  }
};

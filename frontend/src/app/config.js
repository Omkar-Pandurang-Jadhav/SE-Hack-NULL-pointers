/**
 * Frontend Configuration
 * Customizable settings for the Campus LMS frontend
 */

const config = {
  // API Configuration
  API_URL: import.meta.env.VITE_API_URL || 'http://3.110.96.117:30007/api',

  // App Configuration
  APP_NAME: 'Campus LMS',
  APP_VERSION: '1.0.0',

  // Feature Flags
  FEATURES: {
    ENABLE_QUIZ_BATTLES: true,
    ENABLE_MULTIPLAYER: true,
    ENABLE_CONTENT_HUB: true,
    ENABLE_PERFORMANCE_TRACKING: true,
    ENABLE_ADMIN_DASHBOARD: true,
  },

  // Course Configuration
  COURSES: {
    THUMBNAILS: [
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop',
      'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=250&fit=crop',
      'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop',
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop',
      'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=250&fit=crop',
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop',
    ],
    THUMBNAIL_COUNT: 6,
    DEFAULT_CATEGORY: 'General',
    DEFAULT_LEVEL: 'Beginner',
  },

  // UI Configuration
  UI: {
    THEME_MODE: 'light',
    SIDEBAR_ENABLED: true,
  },
};

export default config;

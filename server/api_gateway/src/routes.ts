export const ROUTES = [
  {
    url: "/users",
    auth: true,
    rateLimit: {
      windowMs: 60 * 1000,
      max: 20,
    },
    proxy: {
      target: process.env.USER_SERVICE_URL || "",
      changeOrigin: true,
      pathRewrite: {
        "^/users": "",
      },
    },
  },
  {
    url: "/discussions",
    auth: true,
    rateLimit: {
      windowMs: 60 * 1000,
      max: 20,
    },
    proxy: {
      target: process.env.DISCUSSION_SERVICE_URL || "",
      changeOrigin: true,
      pathRewrite: {
        "^/discussions": "",
      },
    },
  },
  {
    url: "/comments",
    auth: true,
    rateLimit: {
      windowMs: 60 * 1000,
      max: 20,
    },
    proxy: {
      target: process.env.COMMENT_SERVICE_URL || "",
      changeOrigin: true,
      pathRewrite: {
        "^/comments": "",
      },
    },
  },
  {
    url: "/likes",
    auth: true,
    rateLimit: {
      windowMs: 60 * 1000,
      max: 20,
    },
    proxy: {
      target: process.env.LIKE_SERVICE_URL || "",
      changeOrigin: true,
      pathRewrite: {
        "^/likes": "",
      },
    },
  },
  {
    url: "/files",
    auth: true,
    rateLimit: {
      windowMs: 60 * 1000,
      max: 10,
    },
    proxy: {
      target: process.env.FILE_SERVICE_URL || "",
      changeOrigin: true,
      pathRewrite: {
        "^/files": "",
      },
    },
  },
  {
    url: "/search",
    auth: true,
    rateLimit: {
      windowMs: 60 * 60 * 1000,
      max: 20,
    },
    proxy: {
      target: process.env.SEARCH_SERVICE_URL || "",
      changeOrigin: true,
      pathRewrite: {
        "^/search": "",
      },
    },
  },
];

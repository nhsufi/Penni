export const ROUTER_ROUTES = {
  HOME: "/",
  DASHBOARD: "/dashboard",
  ACCOUNTS: "/accounts",
};

const v1ApiPrefix = "/api/v1";

export const API_ROUTES = {
  v1: {
    status: {
      status: `${v1ApiPrefix}/status`,
      checkAuth: `${v1ApiPrefix}/status/checkAuth`,
    },
  },
};

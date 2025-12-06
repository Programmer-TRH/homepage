export interface DashboardStats {
  newsCount: number;

  message: {
    total: number;
    new: number;
  };

  sellRequest: {
    total: number;
    new: number;
  };

  instantSell: {
    total: number;
    new: number;
  };
}

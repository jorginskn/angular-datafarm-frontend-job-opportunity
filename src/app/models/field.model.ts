export interface Field {
  data: {
    grower: string;
    farm: string;
    field: string;
  };
  success: {
    title: string;
  };
  warning: {
    title: string;
    description: string;
  };
  error: {
    title: string;
    description: string;
    status: number;
  };
}

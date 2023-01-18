export interface Farm {
  data: {
    name: string;
    fields: [
      {
        type: string;
        properties: {
          idField: string;
          name: string;
        };
        geometry: {
          type: string;
          coordinates: [];
        };
      }
    ];
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

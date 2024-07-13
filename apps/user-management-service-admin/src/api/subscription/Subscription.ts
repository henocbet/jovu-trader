export type Subscription = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  planName: string | null;
  startDate: Date | null;
  endDate: Date | null;
  status?: "Option1" | null;
};

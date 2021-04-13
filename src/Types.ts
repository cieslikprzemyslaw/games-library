export type TRawGame = {
  id: number;
  first_relase_date: number;
  name: string;
  rating: number;
  summary: string;
};

export type TGame = {
  id: number;
  name: string;
  rate: number;
  summary: string;
  first_release_date: Date;
};

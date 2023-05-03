export type BlogsDetail = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  content: string;
};

export type BlogsData = {
  contents: [
    {
      id: string;
      title: string;
      createdAt: string;
      url: {
        url: string;
        height: number;
        width: number;
      };
    }
  ];
  totalCount: number;
  offset: number;
  limit: number;
};

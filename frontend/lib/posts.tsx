export type PostsData = {
  id: number;
  date: string;
  title: string;
  content?: string;
}[];

export const getSortedPostsData = () => {
  return [];
};

export const getPostsData = (type: string) => {
  return [];
};

export const getAllCategoryIds = () => {
  const types = [1, 2, 3];
  return types.map((type) => {
    return {
      params: {
        type: type.toString(),
      },
    };
  });
};

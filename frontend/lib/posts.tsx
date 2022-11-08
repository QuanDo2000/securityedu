type PostData = {
  id: number;
  date: string;
  title: string;
  content?: string;
};

export type PostsData = PostData[];

type ApiData = {
  id: number;
  title: string;
  created_at: string;
  url: string;
  category: number[];
};

export const getSortedPostsData = async () => {
  try {
    const res = await fetch('http://127.0.0.1:8000/api/list');
    const data = await res.json();

    const allSortedData = data.map((entry: ApiData) => {
      return {
        id: entry.id,
        date: entry.created_at,
        title: entry.title,
      };
    });
    return allSortedData.sort((a: PostData, b: PostData) => {
      if (a.date < b.date) {
        return 1;
      } else if (a.date > b.date) {
        return -1;
      } else {
        return 0;
      }
    });
  } catch (err) {
    console.log(err);
  }
  return [];
};

export const getPostsData = async (type: string) => {
  const nType = Number(type);
  try {
    const res = await fetch('http://127.0.0.1:8000/api/list');
    const data = await res.json();

    const allSortedData = data.reduce((filtered: PostsData, entry: ApiData) => {
      if (entry.category.includes(nType)) {
        filtered.push({
          id: entry.id,
          date: entry.created_at,
          title: entry.title,
        });
      }
      return filtered;
    }, []);
    return allSortedData.sort((a: PostData, b: PostData) => {
      if (a.date < b.date) {
        return 1;
      } else if (a.date > b.date) {
        return -1;
      } else {
        return 0;
      }
    });
  } catch (err) {
    console.log(err);
  }
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

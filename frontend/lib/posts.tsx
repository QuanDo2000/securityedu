import { remark } from 'remark';
import html from 'remark-html';

export type PostData = {
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
  content?: string;
};

export const getSortedPostsData = async () => {
  try {
    const res = await fetch('http://localhost:8000/api/list');
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
    const res = await fetch('http://localhost:8000/api/list');
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

export const getPostData = async (id: string) => {
  const nid = Number(id);
  try {
    const res = await fetch('http://localhost:8000/api/getArticle?id=' + nid);
    const data: ApiData = await res.json();

    if (data.content) {
      const content = await remark().use(html).process(data.content);
      const contentHtml = content.toString();
      return {
        id: data.id,
        title: data.title,
        date: data.created_at,
        content: contentHtml,
      };
    } else {
      return {
        id: data.id,
        title: data.title,
        date: data.created_at,
        content: data.content,
      };
    }
  } catch (err) {
    console.log(err);
  }
  return {};
};

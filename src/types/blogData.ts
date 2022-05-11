type MicroCMS<T> = {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
};

export type BlogData = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  favorite: boolean;
  body: string;
};

// type GameData = {
//   id: number;
//   name: string;
//   genre: string[];
//   developers: string[];
//   publishers: string[];
//   releaseDates: {
//     Japan: string;
//     NorthAmerica: string;
//     Europe: string;
//     Australia: string;
//   };
// };

// export default GameData;

export type MicroCMSBlogData = MicroCMS<BlogData>;

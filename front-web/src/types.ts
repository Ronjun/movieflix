export type Movie = {
  id: number;
  title: string;
  subtitle: string;
  year: number;
  imgUrl: string;
  synopsis: string;
  genre: Genre;
  reviews: Review[];
};

export type Genre = {
  id: number;
  name: string;
};

export type Review = {
  id: number;
  text: string;
  movieId: number;
  userName: string;
  user: User;
};

export type User = {
  id: number;
  name: string;
  email: string;
};

export type MoviesResponse = {
  content: Movie[];
  totalPages: number;
}
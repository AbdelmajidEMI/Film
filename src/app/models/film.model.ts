export interface Film {
  id: number,
  title: string,
  year: string,
  genres: string[],
  imageUrl: string,
}

export interface Film1 {
  id: number;
  title: string;
  release_date: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  genre_ids: number[];
  original_language: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  adult: boolean;
  // Add other fields as per the API response
}



export interface AdditionalInfo {
  director: string;
  duration: number;
  language: string;
  country: string;
  rating: number;
  awards: string[];
  // Add other properties as needed
}

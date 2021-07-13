export const API_KEY = 'b155ee0fa93810739398bb8ba9675654';
export const BASE_URL = 'https://api.themoviedb.org/3';

// * PATH
export const MOVIE_END_POINT = {
  DETAIL: id => `/movie/${id}`,
  RECOMMEND: id => `/movie/${id}/recommendations`,
  NOW: '/movie/now_playing',
  POPULAR: '/movie/popular',
  UPCOMMING: '/movie/upcoming',
};

export const TV_END_POINT = {};

// * IMAGE
export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';
export const IMAGE_SIZES = {
  backdrop_sizes: {
    w300: 'w300',
    w780: 'w780',
    w1280: 'w1280',
    original: 'original',
  },
  logo_sizes: {
    w45: 'w45',
    w92: 'w92',
    w154: 'w154',
    w185: 'w185',
    w300: 'w300',
    w500: 'w500',
    original: 'original',
  },
  poster_sizes: {
    w92: 'w92',
    w154: 'w154',
    w185: 'w185',
    w342: 'w342',
    w500: 'w500',
    w780: 'w780',
    original: 'original',
  },
  profile_sizes: {
    w45: 'w45',
    w185: 'w185',
    h632: 'h632',
    original: 'original',
  },
  still_sizes: {
    w92: 'w92',
    w185: 'w185',
    w300: 'w300',
    original: 'original',
  },
};

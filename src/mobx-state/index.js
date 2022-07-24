import {types} from 'mobx-state-tree';

const Movie = types.model('Movie', {
  title: types.string,
  poster: types.string,
});

const MovieStore = types.model('MovieStore', {
  movies: types.array(Movie),
});

const movieStore = MovieStore.create({
  movies: [
    {
      title: 'Stranger Things',
      poster: 'strangerThings',
    },
    {
      title: 'Modern Family',
      poster: 'modernFamily',
    },
  ],
});

export {movieStore};

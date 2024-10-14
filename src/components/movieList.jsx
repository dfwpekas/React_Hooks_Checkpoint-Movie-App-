import MovieCard from "./movieCard"

function MovieList({movies}) {
    return (
       <div className="movie-list">
            {movies.map((movie) => (
                <MovieCard key={movie.title} movie={movie} />
            ))}

       </div>
    )
};

export default MovieList;
function MovieCard({movie}) {
    return (
        <div className="movie-card">
            <img src={movie.posterURL} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p>{movie.description}</p>
            <p>Rating: <span style={{color: 'darkGreen'}}>{movie.rating}</span></p>
        </div>
    );
};

export default MovieCard;

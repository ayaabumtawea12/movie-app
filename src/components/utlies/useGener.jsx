const useGenre = (selectedGenres) => {
    if (selectedGenres.length < 1) return "";
  
    const GenreIds = selectedGenres.map((g) => g.id);
    return GenreIds.reduce((a, b) => a+ "," + b);
  };
  
export default useGenre;
 
  
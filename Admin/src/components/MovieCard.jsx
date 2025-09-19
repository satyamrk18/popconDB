const MovieCard = ({ _id, title, image, category, year, rating }) => {
  return (
    <div className="group relative w-56 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110">
      {/* Movie Poster */}
      <img
        src={image[0]}
        alt={title}
        className="w-full h-80 object-cover rounded-xl shadow-lg"
      />
      <p className="text-black-900 text-lg">{title}</p>

      {/* Info shown only on hover */}
      <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl p-4 flex flex-col justify-end">
        <h2 className="text-lg font-semibold text-white">{title}</h2>
        <p className="text-sm text-gray-300">Category: {category}</p>
        <p className="text-sm text-gray-300">Year: {year}</p>

        {/* Rating */}
        <div className="flex mt-1">
          {Array.from({ length: rating }).map((_, index) => (
            <span key={index} className="text-amber-400 text-lg">
              ★
            </span>
          ))}
          {Array.from({ length: 5 - rating }).map((_, index) => (
            <span key={index} className="text-gray-500 text-lg">
              ★
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

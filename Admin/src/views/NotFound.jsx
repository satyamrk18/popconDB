const NotFound = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black flex items-center justify-center p-4">
            <div className="text-center max-w-2xl mx-auto">
                {/* Animated popcorn bucket */}
                <div className="text-8xl md:text-9xl mb-8 animate-bounce">
                    🍿
                </div>

                {/* 404 Title */}
                <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 animate-pulse">
                    404
                </h1>

                {/* Subtitle */}
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6">
                    Movie Not Found! 🎥
                </h2>

                {/* Description */}
                <p className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed">
                    Looks like this reel got lost in the popcorn! 🎬<br />
                    The page you're looking for doesn't exist in our cinema.
                </p>

                {/* Interactive Elements */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button
                        onClick={() => window.history.back()}
                        className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                        🔙 Go Back
                    </button>
                    <button
                        onClick={() => window.location.href = '/'}
                        className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                        🏠 Home Sweet Home
                    </button>
                </div>

                {/* Movie-themed decorations */}
                <div className="mt-12 flex justify-center space-x-4 text-4xl md:text-5xl">
                    <span className="animate-spin">🎥</span>
                    <span className="animate-pulse">🍿</span>
                    <span className="animate-bounce">🎬</span>
                    <span className="animate-spin">🎞️</span>
                </div>

                {/* Fun message */}
                <p className="text-sm text-gray-500 mt-8 italic">
                    "In the theater of life, sometimes the best scenes are the unexpected ones!" 🌟
                </p>
            </div>
        </div>
    );
};

export default NotFound;

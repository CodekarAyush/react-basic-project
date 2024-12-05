
const LandingPage = () => {
  return (
    <div
      className="h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('./landing.jpg')", 
      }}
    >
      <div className="text-center bg-white bg-opacity-80 p-8 rounded-lg shadow-lg max-w-md">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to Our Platform
        </h1>
        <p className="text-gray-600 mb-6">
          Start your journey with us! Explore amazing features and services.
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition-all">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default LandingPage;

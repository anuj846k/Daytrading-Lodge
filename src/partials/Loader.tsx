const Loader = () => {
  return (
    <div
      className="flex justify-center items-center h-screen"
      role="alert"
      aria-busy="true"
    >
      <div
        className="animate-spin rounded-full h-12 w-12 border-2 border-blue-500"
        aria-label="Loading"
      ></div>
    </div>
  );
};

export default Loader;

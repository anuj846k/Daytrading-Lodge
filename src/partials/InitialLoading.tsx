// InitialLoading.js


const InitialLoading = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <img className="w-[80%] md:w-[50%] -mt-10 md:-mt-0 object-cover loader-logo" src='./logo.png' alt="Loading..." />
    </div>
  );
};

export default InitialLoading;

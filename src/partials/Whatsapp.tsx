const WhatsAppChatButton = () => {
  return (
    <div className="fixed bottom-[20px] md:right-[20px] right-2  md:flex md:flex-row flex-col items-center z-10">
      <a href="https://wa.me/918826895731" target="_blank">
        <div className="bg-white border-2 border-green-500 text-black  rounded-full py-1 px-3 shadow-lg mr-2 transition duration hover:underline cursor-pointer hidden md:block">
          Chat with us
        </div>
      </a>
      <div className="md:ml-0 ml-20">
        <a
          href="https://wa.me/918826895731"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/?size=100&id=16713&format=png&color=000000"
            alt="WhatsApp Icon"
            className=" w-12 h-12 rounded-full shadow-lg transition-transform transform hover:scale-125"
          />
        </a>
      </div>
    </div>
  );
};

export default WhatsAppChatButton;

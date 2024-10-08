import { FaWhatsapp } from "react-icons/fa";

const WhatsAppChatButton = () => {
  const phoneNumber = "918826895731";
  const message = encodeURIComponent("I want to enroll in your mentorship program");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
  return (
    <div className="fixed bottom-[20px] md:right-[20px] right-2  md:flex md:flex-row flex-col items-center z-10">
      <a href={whatsappUrl} rel="noopener noreferrer" target="_blank">
        <div className="bg-white border-2 border-green-500 text-black  rounded-full py-1 px-3 shadow-lg mr-10 transition duration hover:underline cursor-pointer hidden md:block">
          Chat with us
        </div>
      </a>
      <div className="md:ml-0 ml-20">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300">
            <FaWhatsapp />
          </button>

        </a>
      </div>
    </div>
  );
};

export default WhatsAppChatButton;

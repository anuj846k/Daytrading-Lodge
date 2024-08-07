"use client";

import { useState } from "react";
import { Input, Label, Checkbox, Textarea, Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { BiEnvelope, BiPhone } from "react-icons/bi";
import { Contact5Defaults } from "../constants/ContactDefault";

type Props = {
  tagline: string;
  heading: string;
  description: string;
  email: string;
  phone: string;
  button: ButtonProps;
};

export type Contact5Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Contact5 = (props: Contact5Props) => {
  const { tagline, heading, description, email, phone, button } = {
    ...Contact5Defaults,
    ...props,
  } as Props;

  const [nameInput, setNameInput] = useState("");
  const [numberInput, setNumberInput] = useState("");
  const [messageInput, setMessageInput] = useState("");
  const [acceptTerms, setAcceptTerms] = useState<boolean | "indeterminate">(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({
      nameInput,
      emailInput,
      messageInput,
      acceptTerms,
    });
  };

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-gradient-to-tr from-gray-50">
      <div className="container mx-auto grid grid-cols-1 items-start gap-y-12 md:grid-cols-2 md:gap-x-12 lg:gap-x-20 lg:gap-y-16">
        <div>
          <p className="mb-3 font-semibold text-gray-700 md:mb-4">{tagline}</p>
          <div className="mb-6 md:mb-8">
            <h2 className="mb-5 text-4xl font-bold text-gray-900 md:mb-6 md:text-6xl lg:text-7xl">{heading}</h2>
            <p className="text-gray-600 md:text-lg">{description}</p>
          </div>

          <div className="grid grid-cols-1 gap-4 py-2">
            <div className="flex items-center gap-4">
              <BiEnvelope className="size-6 text-gray-500 flex-none" />
              <p className="text-gray-700">{email}</p>
            </div>
            <div className="flex items-center gap-4">
              <BiPhone className="size-6 text-gray-500 flex-none" />
              <p className="text-gray-700">{phone}</p>
            </div>
            <div className="-mt-10">
              <img src="./contact.png" alt="" />

            </div>
          </div>
        </div>

        <form className="grid grid-cols-1 gap-6 bg-white p-8 rounded-lg border-[1px] shadow-lg" onSubmit={handleSubmit} method="POST">
          <div className="grid w-full items-center">
            <Label htmlFor="name" className="mb-2 text-gray-700">
              Name  
            </Label>
            <Input
              autoComplete="off"
              required
              type="text"
              id="name"
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              className="border-gray-300"
            />
          </div>

          <div className="grid w-full items-center">
            <Label htmlFor="email" className="mb-2 text-gray-700">
              Phone Number(+91)
            </Label>
            <Input
              type="number"
              id="number"
              required
              value={numberInput}
              onChange={(e) => setNumberInput(e.target.value)}
              className="border-gray-300"
            />
          </div>

          <div className="grid w-full items-center">
            <Label htmlFor="message" className="mb-2 text-gray-700">
              Message
            </Label>
            <Textarea
              id="message"
              placeholder="Type your message..."
              className="border-gray-300 min-h-[11.25rem] overflow-auto"
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              required
            />

          </div>

          <div className="mb-3 flex items-center space-x-2 text-sm text-gray-600 md:mb-4">
            <Checkbox id="terms" checked={acceptTerms} onCheckedChange={setAcceptTerms} />
            <Label htmlFor="terms" className="cursor-pointer">
              I accept the{" "}
              <a
                className="text-blue-600 underline"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms
              </a>
            </Label>
          </div>

          <div>
            <Button  type="submit" {...button} className="px-8 py-2 -mr-14 rounded-full bg-[#2866C4] text-white font-semibold shadow-lg hover:bg-[#ca1c2b] transition duration-300 ease-in-out transform hover:scale-105 border-none">
              {button.title}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="w-full h-auto px-8 py-28">
      <div className="max-w-[1240px] m-auto px-2 w-full">
        <p className="section-header">Contact</p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:px-4 h-full">
              <div>
                <Image
                  src="/assets/contact/headshot2.jpg"
                  alt="Contact"
                  height={200}
                  width={500}
                  className="rounded-xl ease-in duration-300 pb-2"
                />
              </div>
              <div className="">
                <h2>Jevon Cochran</h2>
                <p>Full Stack Web Developer</p>
                <p className="py-4">
                  I am available for contract or full-time positions. Contact me
                  and let's talk.
                </p>
              </div>
              {/* <div className="lg:w-[70%]">
                <p className="uppercase pt-8 pb-2">Connect With Me</p>
                <SocialIconContainer padding={4} scale={105} />
              </div> */}
            </div>
          </div>

          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl p-4 lg:px-4 flex flex-col">
            <div className="flex flex-1">
              <form className="flex flex-col flex-1 pb-4">
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      type="text"
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    type="email"
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    type="text"
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    rows={10}
                    className="border-2 rounded-lg p-3 border-gray-300"
                  />
                </div>
                <div className="flex flex-1 items-end">
                  <button className="primary-btn w-full p-4 text-gray-100 mt-4">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import React from "react";

export default function Modal({handelShowModal}) {
  return (
    <>
       <div className="fixed inset-0 z-40 flex items-center justify-center w-screen h-screen" onClick={handelShowModal}>
        <div className="fixed inset-0 bg-black opacity-30"></div>
        <div className="bg-white p-0 md:p-6 z-10 w-full max-w-lg">
          <div className="relative pb-56">
            <div className="absolute inset-0">
              <iframe
                title="Video"
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/3h0_v1cdUIA"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

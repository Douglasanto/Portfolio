import React from 'react';

import images from '../../data/images.js';

const Stacks = () => {
    return (
      <>
        <section
          id="stacks-section"
          className="bg-[rgb(8,8,7)] bg-opacity-100 section-padding flex flex-col"
        >
          <div className="text-white font-bold leading-tight">
            <h2 className="relative text-xl section-heading mb-5 md:mb-20 z-30">
              Conhecimentos {" />"}
            </h2>
            <div className="flex justify-center section-padding">
              <div className="grid grid-cols-3 gap-6 lg:flex">
                {images.map(({ name, image }) => (
                  <div key={name}>
                    <img
                      src={image.src}
                      alt={name}
                      className="bg-white rounded-[8px] box hover:rounded-[16px] hover:-translate-y-2 transition-all ease-expo"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </>
    );
}

export default Stacks
import React from 'react'
import { Testimonial } from '@/types'
import { testimoniData } from '@/utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons';

const Testimonials = () => {
  const testimoni = testimoniData;
  const StarIcon = ({ rating }:any) => {
    const stars = Array.from({ length: rating }, (_, index) => (
      <FontAwesomeIcon
        key={index}
        icon={faStar}
        style={{ color: "#ffe642", marginRight: "0.25rem" }}
      />
    ));
    return <>{stars}</>;
  };
  return (
    <div className="flex flex-wrap justify-center -mx-4 px-8 my-8">
      {testimoni.map((testimonial) => (
        <div
          key={testimonial.id}
          className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8"
        >
          <div className="bg-white p-6 rounded-lg shadow-md dark:bg-zinc-800">
            <div className='flex justify-between'>
            <h3 className="text-lg font-bold">{testimonial.name}</h3>
              <FontAwesomeIcon icon={faMessage} style={{ color:'3d84ff', marginTop: '8px' }} />
            </div>
            <p className="text-gray-600 dark:text-white">
            <StarIcon rating={testimonial.rating} />
            </p>
            <p className="text-gray-800 mb-4 dark:text-white">
              {testimonial.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Testimonials

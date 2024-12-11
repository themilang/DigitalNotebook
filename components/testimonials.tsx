'use client';
import React, { useState, useEffect } from "react";

const testimonialsData = [
   
     
        {
          rating: 4.9,
          text: "He is a highly experienced professional with a dedication to learning and improvement.",
          name: "Prof. Dhirendra Kumar Yadav",
          designation: "Professor",
          avatar: "https://scontent.fbwa5-2.fna.fbcdn.net/v/t39.30808-6/325241781_912416213249777_3244699228434466370_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=HzpU80cMZgMQ7kNvgHrX-lG&_nc_zt=23&_nc_ht=scontent.fbwa5-2.fna&_nc_gid=AcinPajUDCLb2XUp-eYhnoN&oh=00_AYB8jLV83CsLNqG-5zk4x-mD8JPkYMxoCxi6Ls5toGZ3Ng&oe=675ED882",
        },
        {
          rating: 4.9,
          text: "An innovative designer with a strong focus on creating impactful user experiences.",
          name: "Prof. Hari Narayan Yadav",
          designation: "Professor",
          avatar: "https://scontent.fbwa5-1.fna.fbcdn.net/v/t39.30808-6/312368556_5493317170784769_8741054181799271453_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=jEpU_GVmxXIQ7kNvgHObR-3&_nc_zt=23&_nc_ht=scontent.fbwa5-1.fna&_nc_gid=AuLlJ3FF4zmBCmjLfH85jtV&oh=00_AYCkwaA9Im4LoGDydP2FljhsvAxgYKZPC2pypkm5kys_EQ&oe=675F0696",
        },
        {
          rating: 4.9,
          text: "A dedicated professional who always ensures the success of his team and projects.",
          name: "Er. Kapil Budhathoki",
          designation: "Professor",
          avatar: "https://scontent.fbwa5-2.fna.fbcdn.net/v/t39.30808-6/451004876_10161237044624618_2563241742617055291_n.jpg?stp=c200.0.1200.1200a_dst-jpg_s552x414_tt6&_nc_cat=111&ccb=1-7&_nc_sid=50ad20&_nc_ohc=-geLtUdXk-0Q7kNvgHsry6h&_nc_zt=23&_nc_ht=scontent.fbwa5-2.fna&_nc_gid=A4Re6pnUjJo1UpsELDWQzZV&oh=00_AYAIYzec44M-8vfbo3WbiMRRQiZZQCTGq40dFv67oyrnIw&oe=675F06C1",
        },
        {
          rating: 4.9,
          text: "A passionate software engineer constantly seeking to learn and grow.",
          name: "Er. Arun Panthi",
          designation: "Civil Engineer",
          avatar: "https://scontent.fbwa5-2.fna.fbcdn.net/v/t39.30808-6/467607998_3868345816742213_8899182325235730795_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=ZjxigiNfHwwQ7kNvgF0C8jF&_nc_zt=23&_nc_ht=scontent.fbwa5-2.fna&_nc_gid=AQQ3RX2qlGm62_aOAyU2A_h&oh=00_AYDuPFRYkSuBTjT4Bf_R7EQRk4TCq4yJ7qFnpSHr1LgpXQ&oe=675EDEFE",
        },
        {
          rating: 4.9,
          text: "A skilled software engineer with an excellent track record in building robust systems.",
          name: "Er. Lelin Regmi",
          designation: "Software Engineer",
          avatar: "https://scontent.fbwa5-1.fna.fbcdn.net/v/t39.30808-6/427027912_2581399802023530_5473667966137199188_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=kxKOiQdYCegQ7kNvgFfDO1I&_nc_zt=23&_nc_ht=scontent.fbwa5-1.fna&_nc_gid=Adv0axO6MOx8TsrVdZ-AXNS&oh=00_AYBbyf4E10F55bs_Ra-Rru0fVKaI4nqGC7KDIPE0RRck8w&oe=675EF07C",
        },
        {
          rating: 4.9,
          text: "A tech lead with expertise in managing complex projects and delivering results.",
          name: "Er. Sunil Ram Luhar",
          designation: "Tech Lead",
          avatar: "https://scontent.fbwa5-1.fna.fbcdn.net/v/t39.30808-6/441693462_1898553197273028_2735666037582413221_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=m-sPv8UBwDMQ7kNvgHnUKdw&_nc_zt=23&_nc_ht=scontent.fbwa5-1.fna&_nc_gid=AgMMelOAU79lI97TNu4HWCv&oh=00_AYAaLwghy_2T6WRrFz0Vpdt5sLqNSEk-7_be4AAjFm0o-w&oe=675ED3A9",
        },
        {
          rating: 4.9,
          text: "A senior developer committed to creating impactful solutions and mentoring others.",
          name: "Er. Pradip Chaudhary",
          designation: "Senior Developer",
          avatar: "https://scontent.fbwa5-1.fna.fbcdn.net/v/t39.30808-6/448724028_922848382976384_3606903196883040109_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=vaIbTXzUcn4Q7kNvgEP1CZX&_nc_zt=23&_nc_ht=scontent.fbwa5-1.fna&_nc_gid=A2-zf00ZzLLXFWSDBNVxAhn&oh=00_AYCLRGxYZGCVw00BSBYgt_xIeLQKxv-NWeD8AkbFSNz2jg&oe=675EFB66",
        },
      ];


const CustomTestimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const transitionDuration = 500; // Transition duration in milliseconds
  const autoplayDelay = 3000; // Delay between slide transitions

  const handleNext = () => {
    setCurrentSlide((prev) => prev + 1);
  };

  // Reset the slide index after reaching the end of the loop
  useEffect(() => {
    const autoplay = setInterval(() => {
      handleNext();
    }, autoplayDelay);

    return () => clearInterval(autoplay);
  }, []);

  // Handle seamless reset when the last slide is reached
  useEffect(() => {
    if (currentSlide === testimonialsData.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(0);
      }, transitionDuration);
    } else {
      setIsTransitioning(true);
    }
  }, [currentSlide]);

  return (
    <section className=" -mt-16 py-24 pb-24 pt-32">
      <div className="container  -mt-12 max-w-3xl  mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 -mt-12 text-center">
          <span className=" -mt-12 text-sm text-gray-500 font-medium block mb-2">
            TESTIMONIAL
          </span>
          <h2 className=" m-2 text-4xl font-bold">What our happy users say!</h2>
        </div>

        <div className="relative overflow-hidden">
          <div
            className={`flex transition-transform ${
              isTransitioning ? "duration-500 ease-in-out" : ""
            }`}
            style={{
              transform: `translateX(-${
                (currentSlide % testimonialsData.length-1) * 100
              }%)`,
            }}
          >
            {testimonialsData.concat(testimonialsData).map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-4"
              >
                <div className="p-4 rounded-xl shadow-lg h-auto">
                  <div className="mb-3">
                    <div className="flex items-center gap-1 text-amber-500">
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 18 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                          fill="currentColor"
                        />
                      </svg>
                      <span className="text-xs font-semibold text-indigo-600">
                        {testimonial.rating}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 ">{testimonial.text}</p>
                  </div>
                  <div className="flex items-center gap-2 pt-2">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <div>
                      <h5 className="text-xs font-medium">
                        {testimonial.name}
                      </h5>
                      <span className="text-xs text-gray-500">
                        {testimonial.designation}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomTestimonials;
"use client";
import React from "react";
import Image from "next/image"; // Import the next/image component
import { useRouter } from "next/navigation";
import Link from "next/link";

const CoursePage = () => {
  const router = useRouter();

  const courses = [
    {
      name: "JWT Authentication",
      description: "Learn JWT Authentication from basics to advanced concepts.",
      price: "$13",
      featured: true,
      link: "/courses/jwt-authentication",
      image: "/images/courses/jwt.png", // Path relative to the public directory
    },
    {
      name: "Clerk Authentication",
      description: "A complete guide to modern Clerk Auth .",
      price: "Coming Soon",
      featured: false,
      link: null,
      image: "/images/courses/clerk.png", // Path relative to the public directory
    },
  ];

  return (
    <section className="pb-24 pt-32">
      <div className="container max-w-5xl mx-auto">
        {/* Header */}
        <h2 className="mb-8 text-center text-3xl font-bold text-foreground">
          Explore Our Courses
        </h2>
        <p className="mb-12 text-center text-muted-foreground">
          Choose from a range of courses designed to help you excel in your career.
        </p>

        {/* Course Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <div
              key={index}
              className="block rounded-lg border border-muted-foreground shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              {/* Image Section */}
              <div className="relative overflow-hidden">
                <Image
                  className="w-full rounded-t-lg"
                  src={course.image}
                  alt={course.name}
                  width={600} // Specify width and height for next/image optimization
                  height={400}
                  layout="responsive"
                />
                {course.link && (
                  <div className="absolute inset-0 flex items-center justify-center bg-[hsla(0,0%,0%,0.6)] opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100">
                    <button
                      type="button"
                      onClick={() => router.push(course.link)}
                      className="px-4 py-2 text-sm font-medium text-white border border-muted-foreground rounded hover:shadow-md"
                    >
                      View Course
                    </button>
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h5 className="mb-2 text-xl font-medium text-foreground">
                  {course.name}
                </h5>
                <p className="mb-4 text-sm text-muted-foreground">
                  {course.description}
                </p>
                {course.link ? (
                  <button
                    type="button"
                    className="px-6 py-2 text-sm font-medium text-foreground border border-muted-foreground rounded hover:shadow-md"
                  >
                    Enroll Now
                  </button>
                ) : (
                    <Link href="/join">
                    <p className="mt-auto w-full rounded-md py-2 text-center text-sm font-semibold text-green-500">
                      Join Waitlist
                    </p>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-muted-foreground">
          <p>Contact us if you have any questions about our courses.</p>
        </div>
      </div>
    </section>
  );
};

export default CoursePage;
import React, { useState } from "react";
import { FaLinkedin } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Christian Holm Christiansen",
      role: "Senior Manager, Danfoss",
      link: "https://www.linkedin.com/in/christianholmchristiansen/",
      quote:
        "I had the pleasure of working with Heman for over 3 years while working on a new application platform. Heman consistently demonstrated his ability to solve complex problems in a remote working environment and always went an extra mile to ensure quality in all of his work. He's a professional with a strong mindset and he is not afraid of a challenge.",
    },
    {
      id: 2,
      name: "Muthuraj Mariappan",
      role: "Architect, Intuit",
      link: "https://www.linkedin.com/in/muthuraj-mariappan/",
      quote:
        "Heman is one of those people who help to keep the team in a lighter vein in difficult, demanding and turbulent situations.His witty nature, attitude towards things in general, outgoing character make it is easy to communicate and work with him. His acumen to learn things and go deep into concepts, mentor team members, taking initiatives and accountability have been commendable.",
    },
    {
      id: 3,
      name: "Satish Kumar Mani",
      role: "Lead Test Architect, Grundfos",
      link: "https://in.linkedin.com/in/sathish-kumar-mani",
      quote:
        "At Danfoss, I had the pleasure of collaborating with Heman, a skilled developer who effectively transitioned into a successful Product Owner role. Heman possesses a strong understanding of software development principles, enabling him to deliver high-quality solutions. Beyond his technical skills, Heman has a great sense of humor that makes him a joy to work with. I highly recommend Heman for any role requiring strong technical skills and a product-centric mindset.",
    },
    {
      id: 4,
      name: "Pramod Huded",
      role: "Innovation Engineer, ABBSmart Lab",
      link: "https://www.linkedin.com/in/pramod-huded-8014b8125/",
      quote:
        "I had the pleasure of working with Heman and I must say, it was an absolute delight! Heman is an exceptional professional who embodies dedication, passion, and a caring attitude. He is always cool and composed, making it a joy to work with him. What impressed me most was his commitment to deadlines and deliverables. He always adhered to promises made, and his work ethic is truly inspiring. But what sets him apart is the way he guides and mentors junior team members. He takes a genuine interest in their growth and development, offering valuable guidance and support whenever needed. If you are looking for a team player who is not only talented but also an excellent team leader, then Heman is your go-to person! I highly recommend him for any opportunity, and Im confident that he will continue to excel in all future endeavors.",
    },
    {
      id: 5,
      name: "Tameem Ansari",
      role: "Lead Engineer, Danfoss",
      link: "https://www.linkedin.com/in/tameem-ansari-80a007190/",
      quote:
        "Heman is a great team player. Ready to learn and adapt to new technologies. He is a person with great attitude, mindset and diverse skills like code development, design & architecture, process management, decision making, handling the team & stakeholders. It is always a positive to have Heman in the team and I would highly recommend him for opportunities given to him.",
    },
    {
      id: 6,
      name: "Bhuvaneswaran Balasubramanian",
      role: "Software Development Lead, Danfoss",
      link: "https://www.linkedin.com/in/bhuvaneswaran-balasubramanian/",
      quote:
        "It was a pleasure to work with Heman due to their excellent interpersonal skills. Having worked with him on few projects, I must say he is a good developer. His work is always outstanding, and his always goes the extra mile to ensure the company standards. He is a highly-skilled, experienced, and helpful professional with a positive attitude.",
    },
    {
      id: 7,
      name: "Venkatraj Selvakumar",
      role: "Software Engineer, Danfoss",
      link: "https://www.linkedin.com/in/venkatraj-selvakumar-04a997113/",
      quote:
        "It was a great experience working with heman. His mentoring, leadership and technical skills were outstanding. As a Lead he handles and runs the team very smoothly and solves any impediments for the team immediately. The solution he gives for the technical problems shows his remarkable depth as a technical expert. I highly recommend heman Babu for any opportunity given to him.",
    },
    {
      id: 8,
      name: "Balaji Vasu",
      link: "https://www.linkedin.com/in/balaji-vasu-678559bb/",
      role: "Team leader, Renault Nissan",
      quote:
        "I highly recommend Heman Babu for his strong leadership and coding skills. The ability to take initiative and lead by example was evident in his work and interactions. ",
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((current + 1) % testimonials.length);

  const prevSlide = () =>
    setCurrent((current - 1 + testimonials.length) % testimonials.length);

  return (
    <section
      id="testimonials"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 via-sky-100 to-slate-100 text-black dark:from-gray-900 dark:via-sky-900 dark:to-cyan-800 dark:text-white flex justify-center items-center"
    >
      <div className="relative  w-11/12 overflow-hidden bg-gradient-to-br from-violet-200 via-blue-100 to-teal-50 dark:from-red-50 dark:via-blue-200 dark:to-blue-400 rounded-lg shadow-lg rounded-lg shadow-lg">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex-shrink-0 w-full p-8 text-center"
            >
              <div className="w-16 overflow-hidden mb-2 mt-[0]  mx-[auto] flex justify-center content-center">
                <a href={testimonial.link}>
                  <FaLinkedin size={48} style={{ color: "#0e76a8" }} />
                </a>
              </div>
              <div className="italic text-lg text-gray-600 break-normal px-1">
                "{testimonial.quote}"
              </div>
              <p className="mt-4 text-lg font-semibold text-gray-800">
                {testimonial.name}
              </p>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </div>
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 text-white bg-gray-800 rounded-full hover:bg-gray-700"
        >
          &#8249;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 text-white bg-gray-800 rounded-full hover:bg-gray-700"
        >
          &#8250;
        </button>

        <div className="flex justify-center space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 mb-5 rounded-full ${
                index === current
                  ? "bg-gray-800"
                  : "bg-gray-400 hover:bg-gray-600"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Testimonials };

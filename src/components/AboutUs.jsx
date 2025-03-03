import React from "react";

const AboutUs = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* About Us Section */}
      <section className="mb-16">
        <h2 className="text-green-600 text-3xl font-bold">About Us</h2>
        <p className="text-lg font-semibold text-gray-800 mt-2">
          <span className="text-orange-500">WEEKEND UX</span> Providing The Best
          Opportunities To The Students Around The Globe.
        </p>
        <p className="text-gray-600 mt-4">
          Weekend UX is a UI/UX Design Academy & Tech Weekend boot camp designed
          for students and professionals. We provide hands-on experience and
          industry insights to help you shape your future.
        </p>
        <button className="mt-4 bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600">
          Learn More
        </button>
      </section>

      {/* Features Section */}
      <section className="flex flex-wrap items-center gap-8 mb-16">
        <div className="w-full md:w-1/2">
          <img
            src="https://plus.unsplash.com/premium_photo-1664372145541-4556b409492e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3R1ZGVudHxlbnwwfHwwfHx8MA%3D%3D"
            alt="Features"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h3 className="text-xl font-semibold text-gray-800">Features</h3>
          <p className="text-2xl font-bold text-gray-900 leading-snug mt-2">
            We are always working to provide you the best features in all
            aspects.
          </p>
          <p className="text-gray-600 mt-4">
            At WEEKEND UX, our team works round the clock to offer students
            access to the latest tools, industry techniques, and expert-led
            courses.
          </p>
          <button className="mt-4 bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600">
            Learn More
          </button>
        </div>
      </section>

      {/* Our Benefits Section */}
      <section>
        <h3 className="text-green-600 text-lg font-semibold">Our Benefits</h3>
        <h2 className="text-2xl font-bold text-gray-900 mt-2">
          By Joining WEEKENS UX Platform, One Can Avail a Lot Of Benefits.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {[
            {
              title: "Standardization",
              desc: "Industry-level standards ensure quality education.",
            },
            {
              title: "Reduced Costs",
              desc: "Affordable pricing with high-value learning material.",
            },
            {
              title: "More Customization",
              desc: "Flexible learning tailored to your needs.",
            },
            {
              title: "Affordable Pricing",
              desc: "Get premium education at minimal cost.",
            },
            {
              title: "Learner Satisfaction",
              desc: "Highly rated by our alumni worldwide.",
            },
            {
              title: "Multimedia Materials",
              desc: "Engaging and interactive content for better learning.",
            },
          ].map((benefit, index) => (
            <div
              key={index}
              className="p-6 border rounded-lg shadow-lg hover:bg-green-100 transition"
            >
              <h4 className="text-lg font-bold text-green-600">
                {String(index + 1).padStart(2, "0")} {benefit.title}
              </h4>
              <p className="text-gray-600 mt-2">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

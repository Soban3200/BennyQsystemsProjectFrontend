import bgImg from '../public/bgForAbout.jpg';
import React from "react";
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat py-12"
      style={{
        backgroundImage: `url(${bgImg})`, // Replace with your image URL or local path
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content */}
      <div className="relative container mx-auto px-4 text-white">
        {/* Company Overview */}
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-4 text-center">
            About BennyQSystems
          </h1>
          <p className="text-gray-100   shadow-lg p-4  text-lg text-center">
            Welcome to BennyQSystems, your trusted partner for top-notch CCTV
            solutions and comprehensive PC selling and repair services. We are
            committed to providing high-quality products and exceptional
            customer service to meet all your technology needs.
          </p>
        </section>

        {/* Mission Statement */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-200">
            At BennyQSystems, our mission is to deliver reliable and innovative
            CCTV and PC solutions that empower our customers to secure their
            premises and optimize their computing experiences. We strive to
            exceed expectations through quality products, expert repairs, and
            unparalleled customer support.
          </p>
        </section>

        {/* Our Story */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-200 mb-4">
            Founded in 2010 by Benny Q., BennyQSystems began as a small local
            shop dedicated to providing essential PC components and repair
            services. Over the years, recognizing the growing need for security
            solutions, we expanded our offerings to include state-of-the-art
            CCTV systems.
          </p>
          <p className="text-gray-200">
            Today, BennyQSystems stands as a trusted name in the community,
            known for our expertise, quality products, and commitment to
            customer satisfaction. Our journey is marked by continuous growth,
            technological advancements, and a passion for helping our customers
            achieve their security and computing goals.
          </p>
        </section>

        {/* Our Services */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* CCTV Services */}
            <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-2 text-gray-900">
                CCTV Solutions
              </h3>
              <p className="text-gray-700">
                Protect your home or business with our comprehensive CCTV
                systems. We offer a wide range of cameras, installation
                services, and maintenance packages to ensure your property
                remains secure around the clock.
              </p>
              <ul className="list-disc list-inside mt-4 text-gray-700">
                <li>High-definition surveillance cameras</li>
                <li>Wireless and wired installation options</li>
                <li>Remote monitoring capabilities</li>
                <li>Customized security solutions</li>
              </ul>
            </div>
            {/* PC Services */}
            <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-2 text-gray-900">
                PC Selling & Repair
              </h3>
              <p className="text-gray-700">
                Whether you're looking to purchase a new PC or need expert
                repairs, BennyQSystems has you covered. Our extensive selection
                of desktops and laptops caters to all budgets and requirements,
                while our skilled technicians ensure your devices run smoothly.
              </p>
              <ul className="list-disc list-inside mt-4 text-gray-700">
                <li>Wide range of PCs and accessories</li>
                <li>Professional repair and maintenance services</li>
                <li>Upgrades and customization options</li>
                <li>Data recovery and backup solutions</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Meet Our Team */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-md text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Benny Q."
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900">Benny Q.</h3>
              <p className="text-gray-600">Founder & CEO</p>
              <p className="text-gray-700 mt-2">
                With over a decade of experience in the tech industry, Benny
                leads the team with a vision for quality and customer
                satisfaction.
              </p>
            </div>
            {/* Team Member 2 */}
            <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-md text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Jane Doe"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900">Jane Doe</h3>
              <p className="text-gray-600">Senior Technician</p>
              <p className="text-gray-700 mt-2">
                Jane is our expert in PC repairs and upgrades, ensuring every
                device functions at its best.
              </p>
            </div>
            {/* Team Member 3 */}
            <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-md text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Mark Smith"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900">
                Mark Smith
              </h3>
              <p className="text-gray-600">CCTV Specialist</p>
              <p className="text-gray-700 mt-2">
                Mark oversees all our security solutions, ensuring clients
                receive the best CCTV systems tailored to their needs.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">What Our Clients Say</h2>
          <div className="space-y-6">
            {/* Testimonial 1 */}
            <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-md">
              <p className="text-gray-700 italic">
                "BennyQSystems provided us with an excellent CCTV setup that has
                greatly enhanced our business security. Their team was
                professional and efficient."
              </p>
              <div className="mt-4 flex items-center">
                <img
                  src="https://via.placeholder.com/50"
                  alt="Client"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="text-gray-900 font-semibold">Sarah Lee</p>
                  <p className="text-gray-600 text-sm">Owner, SecureHome</p>
                </div>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-md">
              <p className="text-gray-700 italic">
                "The PC repair service at BennyQSystems is top-notch. They fixed
                my laptop quickly and efficiently. Highly recommend their
                services!"
              </p>
              <div className="mt-4 flex items-center">
                <img
                  src="https://via.placeholder.com/50"
                  alt="Client"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="text-gray-900 font-semibold">Michael Brown</p>
                  <p className="text-gray-600 text-sm">Freelancer</p>
                </div>
              </div>
            </div>
            {/* Add more testimonials as needed */}
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Our Values</h2>
          <ul className="list-disc list-inside text-gray-100 space-y-2">
            <li>
              <strong>Integrity:</strong> We conduct our business with the
              highest standards of honesty and fairness.
            </li>
            <li>
              <strong>Quality:</strong> We are committed to delivering products
              and services of exceptional quality.
            </li>
            <li>
              <strong>Customer Satisfaction:</strong> Our customers are at the
              heart of everything we do.
            </li>
            <li>
              <strong>Innovation:</strong> We embrace innovation to provide
              cutting-edge solutions.
            </li>
            <li>
              <strong>Expertise:</strong> Our team comprises skilled
              professionals dedicated to excellence.
            </li>
          </ul>
        </section>

        {/* Call to Action */}
        <section className="mb-12 text-center">
          <h2 className="text-3xl font-semibold mb-4">
            Ready to Enhance Your Security or Optimize Your PC?
          </h2>
          <p className="text-gray-200 mb-6">
            Contact us today to discuss your CCTV and PC needs. Our experts are
            here to provide personalized solutions tailored to your
            requirements.
          </p>
          <Link
            to="/quote"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors duration-300"
          >
            Get in Touch
          </Link>
        </section>
      </div>
    </div>
  );
};

export default About;

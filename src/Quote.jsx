import React from "react";
import Swal from "sweetalert2";

const Quote = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "3280b0de-293a-4f0c-b34e-d0f75d8ad809");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult(""); // Clear result message

        Swal.fire({
          title: "Success!",
          text: "Your quote request has been sent successfully!",
          icon: "success",
        });
        event.target.reset();
      } else {
        Swal.fire({
          title: "Error",
          text: data.message || "Something went wrong. Please try again.",
          icon: "error",
        });
        setResult(data.message || "Error sending message");
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Network error. Please check your connection and try again.",
        icon: "error",
      });
      setResult("Network error occurred.");
    }
  };

  return (
    <section className="bg-[#F5F7F8] dark:bg-gray-900">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-3 text-4xl tracking-tight font-extrabold text-center text-blue-600 dark:text-white">
          Request a Quote
        </h2>
        <p className="mb-8 lg:mb-12 font-light text-center text-gray-900 dark:text-gray-400 sm:text-lg">
          Interested in our CCTV or PC products? Fill out the form below to
          receive a personalized quote tailored to your needs.
        </p>
        <form
          onSubmit={onSubmit}
          className="bg-gray-100 dark:bg-gray-800 border-2 p-6 m-2 rounded-xl shadow-lg space-y-8 dark:border-gray-700"
        >
          {/* Product Selection */}
          <div>
            <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">
              Select Product Type
            </label>
            <div className="flex items-center space-x-4">
              {/* CCTV Product Radio Button */}
              <div className="flex items-center">
                <input
                  id="cctv"
                  type="radio"
                  name="product_type"
                  value="CCTV Product"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                  required
                />
                <label
                  htmlFor="cctv"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  CCTV Product
                </label>
              </div>
              {/* PC Product Radio Button */}
              <div className="flex items-center">
                <input
                  id="pc"
                  type="radio"
                  name="product_type"
                  value="PC Product"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                  required
                />
                <label
                  htmlFor="pc"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  PC Product
                </label>
              </div>
            </div>
          </div>

          {/* Your Name */}
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="shadow-sm bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>

          {/* Your Email */}
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="shadow-sm bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>

          {/* Your Phone Number */}
          <div>
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300"
            >
              Your Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              maxLength="10"
              pattern="[6-9]{1}[0-9]{9}"
              className="shadow-sm bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="+91"
              required
            />
          </div>

          {/* Your Address */}
          <div>
            <label
              htmlFor="address"
              className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300"
            >
              Your Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              className="shadow-sm h-16 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="1234 Street Name, City, State, ZIP"
              required
            />
          </div>

          {/* Your Message */}
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Provide any additional details or requirements for your quote..."
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full border-2 p-3 rounded-lg bg-blue-700 text-white font-bold hover:bg-blue-800 transition-colors duration-300 dark:bg-blue-600 dark:hover:bg-blue-700"
          >
            Send Quote Request
          </button>

          {/* Result Message */}
          <span className="dark:text-white">{result}</span>
        </form>
      </div>
    </section>
  );
};

export default Quote;

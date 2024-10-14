import React from "react";
import Swal from "sweetalert2";

const Support = () => {
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
          text: "Message sent successfully!",
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
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-12 font-light text-center text-gray-900 dark:text-gray-400 sm:text-lg">
          Got a technical issue? Want to send feedback about a beta feature?
          Need details about our Business plan? Let us know.
        </p>
        <form
          onSubmit={onSubmit}
          className="bg-gray-100 dark:bg-gray-800 border-2 dark:border-gray-700 p-4 m-2 rounded-xl shadow-lg space-y-8"
        >
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
              className="shadow-sm bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              required
            />
          </div>
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
              className="shadow-sm bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              required
            />
          </div>
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
              className="shadow-sm bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="+91"
              required
            />
          </div>
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
              className="shadow-sm h-16 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder=""
              required
            />
          </div>
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
              className="block p-2.5 w-full text-sm text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-700 rounded-lg shadow-sm border border-gray-300 dark:border-gray-600 focus:ring-primary-500 focus:border-primary-500"
              placeholder="Leave a comment..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="border-2 p-2 rounded-lg bg-blue-700 text-white dark:bg-blue-500"
          >
            Send Message
          </button>
        </form>
        <span className="dark:text-white">{result}</span>
      </div>
    </section>
  );
};

export default Support;

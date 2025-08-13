import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { testimonials } from "../../data/testimonials";

const Testimonials = () => {
  const { t, language } = useLanguage();

  const StarRating = ({ rating }) => {
    return (
      <div className="flex space-x-1 mb-4">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className={`w-5 h-5 ${
              index < rating
                ? "text-yellow-400"
                : "text-gray-300 dark:text-gray-600"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section
      id="testimonials"
      className="py-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t("testimonials.title")}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {t("testimonials.subtitle")}
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4"></div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:border-purple-500 transition-colors flex flex-col"
            >
              {/* Star Rating */}
              <StarRating rating={testimonial.rating} />

              {/* Testimonial Content */}
              <blockquote className="text-gray-700 dark:text-gray-300 italic mb-6">
                "{testimonial.content[language]}"
              </blockquote>

              {/* Button View Full Review */}
              <div className="mt-auto pt-4">
                <a
                  href={testimonial.reviewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-500 dark:hover:text-purple-300 transition-colors text-sm"
                >
                  {t("testimonials.viewReview")}
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>

              {/* Author Info */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-300 dark:border-gray-700">
                <div className="flex items-center space-x-4">
                  {/* Avatar */}
                  <div className="w-12 h-12 bg-gray-300 dark:bg-gray-700 rounded-full flex items-center justify-center">
                    <span className="text-lg font-medium text-gray-600 dark:text-gray-400">
                      {testimonial.author.name[language].charAt(0)}
                    </span>
                  </div>

                  {/* Author Details */}
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">
                      {testimonial.author.name[language]}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.author.position[language]}
                    </p>
                  </div>
                </div>

                {/* Company */}
                <div className="text-blue-600 dark:text-blue-400 font-medium">
                  {testimonial.company[language]}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
            {t("testimonials.subtitle")}
          </div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t("testimonials.title")}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto"></div>
        </div>

        {/* Testimonials Grid - 3 columns on large screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 flex flex-col h-full"
            >
              {/* Author Image */}
              <div className="w-full h-48 overflow-hidden">
                <img
                  src={testimonial.image}
                  alt={testimonial.author.name[language]}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/800x400?text=Client+Photo";
                  }}
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                {/* Star Rating */}
                <StarRating rating={testimonial.rating} />

                {/* Testimonial Content */}
                <blockquote className="text-gray-600 dark:text-gray-300 mb-6 text-base">
                  "{testimonial.content[language]}"
                </blockquote>

                {/* Author Info */}
                <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      {/* Avatar */}
                      {testimonial.author.avatar ? (
                        <img
                          src={testimonial.author.avatar}
                          alt={testimonial.author.name[language]}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                      ) : (
                        <div className="w-12 h-12 bg-gray-300 dark:bg-gray-700 rounded-full flex items-center justify-center">
                          <span className="text-lg font-medium text-gray-600 dark:text-gray-400">
                            {testimonial.author.name[language].charAt(0)}
                          </span>
                        </div>
                      )}

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
                    <div className="text-blue-600 dark:text-blue-400 font-medium text-sm">
                      {testimonial.company[language]}
                    </div>
                  </div>

                  {/* View Review Button - Fixed at bottom */}
                  <div className="mt-4">
                    <a
                      href={testimonial.reviewLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full text-center py-2 px-4 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded text-sm font-medium text-gray-800 dark:text-gray-200 transition-colors inline-flex items-center justify-center"
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

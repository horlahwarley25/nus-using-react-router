import React, { lazy } from "react";
import { Link } from "react-router";
import blogPosts from "../data/blogposts";
import Heading from "./heading";

const HomePage = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          default: () => {

            return (
              <div className="min-h-screen min-w-screen bg-gradient-to-br from-blue-50 to-indigo-100">
                <div className="container mx-auto px-4 py-8">
                  <header className="mb-12 text-center">
                    <h1 className="text-5xl font-bold text-gray-800 mb-4">
                      Nature's Unknown Secrets 🐝
                    </h1>
                    <p className="text-gray-600 text-lg">
                      Explore articles about nature and its hidden wonders
                    </p>
                  </header>

                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                    {blogPosts.map((post) => (
                      <div
                        key={post.id}
                        className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                      >
                        <div className="p-6">
                          <h2 className="text-2xl font-bold text-gray-800 mb-3 hover:text-indigo-600 transition-colors">
                            {post.title}
                          </h2>
                          <p className="text-gray-600 mb-4 line-clamp-3">
                            {post.excerpt}
                          </p>
                          <Link
                            to={`/post/${post.id}`}
                            className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-semibold transition-colors"
                          >
                            Read more
                            <svg
                              className="w-4 h-4 ml-2"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          },
        });
      }, 800);
    }),
);

export default HomePage;

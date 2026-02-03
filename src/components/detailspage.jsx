import React, { lazy } from "react";
import { Link, useParams, useNavigate } from "react-router";
import blogPosts from "../data/blogposts";

const DetailPage = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          default: () => {
            const { id } = useParams();
            const navigate = useNavigate();
            const post = blogPosts.find((p) => p.id === parseInt(id));

            if (!post) {
              return (
                <div className="min-h-screen min-w-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
                  <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full text-center">
                    <div className="text-6xl mb-4">📭</div>
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">
                      Post Not Found
                    </h1>
                    <p className="text-gray-600 mb-6">
                      The blog post you're looking for doesn't exist.
                    </p>
                    <button
                      onClick={() => navigate("/")}
                      className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
                    >
                      Back to Home
                    </button>
                  </div>
                </div>
              );
            }

            return (
              <div className="min-h-screen min-w-screen bg-gradient-to-br from-blue-50 to-indigo-100">
                <div className="container mx-auto px-4 py-8 max-w-4xl">
                  <nav className="mb-8 flex gap-4">
                    <button
                      onClick={() => navigate(-1)}
                      className="flex items-center text-gray-600 hover:text-gray-800 font-semibold transition-colors"
                    >
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                      Go Back
                    </button>
                    <Link
                      to="/"
                      className="flex items-center text-indigo-600 hover:text-indigo-800 font-semibold transition-colors"
                    >
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        />
                      </svg>
                      Home
                    </Link>
                  </nav>

                  <article className="bg-white rounded-lg shadow-xl p-8">
                    <header className="mb-8 border-b border-gray-200 pb-6">
                      <h1 className="text-4xl font-bold text-gray-800 mb-4">
                        {post.title}
                      </h1>
                      <div className="flex items-center text-gray-500 text-sm">
                        <span className="mr-4">📅 January 29, 2026</span>
                        <span>⏱️ 5 min read</span>
                      </div>
                    </header>

                    <div className="prose prose-lg max-w-none">
                      <p className="text-gray-700 leading-relaxed text-lg">
                        {post.content}
                      </p>
                    </div>

                    <footer className="mt-8 pt-6 border-t border-gray-200">
                      <div className="flex justify-between items-center">
                        <Link
                          to="/"
                          className="bg-indigo-200 hover:bg-indigo-300 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
                        >
                          Back to All Posts
                        </Link>
                      </div>
                    </footer>
                  </article>
                </div>
              </div>
            );
          },
        });
      }, 1000);
    }),
);

export default DetailPage;

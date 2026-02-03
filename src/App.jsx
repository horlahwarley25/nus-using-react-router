import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router";
import HomePage from "./components/homepage";
import DetailPage from "./components/detailspage";
import LoadingSpinner from "./components/loadingspinner";
import "./styles.css";
import Heading from "./components/heading";
import Footer from "./components/footer";

let ErrorBoundary = lazy(() => import("./components/errorboundary"));
let PageNotFound = lazy(() => import("./components/pagenotfound"));

// Error Boundary Component

// Main App Component
export default function App() {
  return (
    <ErrorBoundary>
      <Heading />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/post/:id"
            element={
              <DetailPage />
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
        <Footer />
    </ErrorBoundary>
  );
}

import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  AboutPage,
  ContactPage,
  Gallery,
  Landing,
  NotFound,
  ServicePage,
} from "./pages";

import Layout from "./layouts/Layout";

export default function App() {
  return (
    <Routes>
      <Route
        element={<Layout />}
      >
        <Route index element={<Landing />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/gallery" element={<Gallery />} />
      </Route>
      {/* Not Found */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

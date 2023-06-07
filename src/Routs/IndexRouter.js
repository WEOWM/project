import React from "react";
import { Route, Routes } from "react-router-dom";
import Default from "../Layout/Default";
import DashBoard from "../views/Dashboard/DashBoard";

const IndexRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Default />}>
          <Route path="/" element={<DashBoard />} />
        </Route>
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </div>
  );
};

export default IndexRouter;

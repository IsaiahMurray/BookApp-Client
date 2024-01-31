import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  ProfileProvider,
} from "./components/Context/ProfileContext";
// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   Route,
//   RouterProvider,
// } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ProfileProvider>
      <App />
    </ProfileProvider>
  </React.StrictMode>
);

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Root />}>
//       <Route path="dashboard" element={<Dashboard />} />
//       {/* ... etc. */}
//     </Route>
//   )
// );

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );
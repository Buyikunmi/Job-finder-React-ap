import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import NotFoundPage from "./assets/pages/NotFoundPage";
import JobPage from "./assets/pages/JobPage";
import AddJobPage from "./pages/AddJobPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route path="/" index element={<HomePage />} />
      <Route path="/jobs" index element={<JobsPage />} />
      <Route path="/add-jobs" index element={<AddJobPage />} />
      <Route path="/job/:id" index element={<JobPage />} />
      <Route path="*" index element={<NotFoundPage />} />
    </Route>
  )
);
const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;

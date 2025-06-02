import "./App.css";
import bgImage from "./assets/background.jpg";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import HomePage from "./components/HomePage";

const router = createBrowserRouter(
  createRoutesFromElements(
    /* Wrap this Root Route to create Router here */
    <Route path="/" element={<HomePage />}></Route>
  )
);
function App() {
  return (
    <>
      <div
        className="background"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;

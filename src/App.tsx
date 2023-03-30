import { useState } from "react";
import "./App.css";
import PageOne from "./pages/Firstpage/FirstPage";
import PageTwo from "./pages/SecondPage/SecondPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showAddDropdown, setShowAddDropdown] = useState(false);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <PageOne
              showAddDropdown={showAddDropdown}
              setShowAddDropdown={setShowAddDropdown}
              showDropdown={showDropdown}
              setShowDropdown={setShowDropdown}
            />
          }
        />
        <Route path="/2" element={<PageTwo />} />
      </Routes>
    </Router>
  );
}

export default App;

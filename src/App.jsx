import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import India from "./pages/India";
import World from "./pages/World";
import UPSC from "./pages/UPSC";
import NTA from "./pages/NTA";
import Saved from "./pages/Saved";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
       <Route
       path="/"
       element={
       <ProtectedRoute>
        <Home />
        </ProtectedRoute>
       }
       />
       
       <Route
       path="/india"
       element={
        <ProtectedRoute>
          <India />
        </ProtectedRoute>
       }
       />

<Route 
  path="/world"
  element={
    <ProtectedRoute>
      <World />
    </ProtectedRoute>
  }
/>

<Route
  path="/upsc"
  element={
    <ProtectedRoute>
      <UPSC />
    </ProtectedRoute>
  }
/>

<Route
  path="/nta"
  element={
    <ProtectedRoute>
      <NTA />
    </ProtectedRoute>
  }
/>

<Route
  path="/saved"
  element={
    <ProtectedRoute>
      <Saved />
    </ProtectedRoute>
  }
/>

<Route
  path="/profile"
  element={
    <ProtectedRoute>
      <Profile />
    </ProtectedRoute>
  }
/>

<Route path="/login" 
  element={<Login />} 
        
/>


<Route path="/signup" 
  element={<Signup />} 
        
/>


    </Routes>
  </BrowserRouter>
  );
}

export default App;
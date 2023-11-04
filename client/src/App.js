import React from "react";
import "./App.css";
import Hadith from "./components/Pages/Hadith/Hadith";
import People from "./containers/People";
import Layout from "./hoc/Layout/Layout";

function App() {
  return (
    <Layout>
      <People />
    </Layout>
  );
}

export default App;

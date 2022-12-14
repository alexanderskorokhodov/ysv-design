//styles
import "./styles/App.scss";
import "./styles/themes.scss";

import React, { useEffect, useState, useRef,  useMemo } from "react";
import useColorScheme from "./scripts/useColorScheme";

// components
import Footer from "./components/Footer";

// pages
import Main from "./pages/Main";
import Error from "./pages/Error"

// router
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {

  // theme references
  const isDark = useColorScheme('dark');
  const theme = isDark ? 'dark' : 'light';

  return (
    <div className={`App ${theme}`}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main theme={theme}/>} />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
        <Footer/>
    </div>
  );
}

export default App;

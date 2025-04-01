import React from "react";
import { ThemeProvider } from "./hooks";
import AppRoutes from "./Routes";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppRoutes />
    </ThemeProvider>
  );
};

export default App;

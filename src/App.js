import "./App.css";
import { BrowserRouter, Routes } from "react-router-dom";
import renderRoutes from "./routes";
import { Suspense } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 100,
    }}
    spin
  />
);

function App() {
  return (
    <Suspense
      fallback={
        <Spin
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
          indicator={antIcon}
          key="spin"
        />
      }
    >
      <BrowserRouter>
        <Routes>{renderRoutes()}</Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;

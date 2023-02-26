import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import { Footer } from "./_component/Footer/Footer";
import { Header } from "./_component/Header/Header";

const { Content } = Layout;
const App = () => {
  return (
    <Layout className="bg-#1d1d1d">
      <section className="header absolute w-full z-10">
        <Header />
      </section>
      <Content>
        <div className="site-layout-content">
          <Outlet />
        </div>
        <Footer />
      </Content>
    </Layout>
  );
};
export default App;

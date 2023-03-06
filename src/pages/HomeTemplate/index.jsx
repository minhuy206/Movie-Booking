import { Layout } from "antd";
import { Outlet, useParams } from "react-router-dom";
import { Footer } from "./_component/Footer/Footer";
import { Header } from "./_component/Header/Header";

const { Content } = Layout;
const Home = () => {
  const headerBackground = {
    backgroundImage:
      "linear-gradient(to bottom, #3d3d3d, #353535, #2d2d2d, #252525, #1d1d1d)",
  };
  const param = useParams();
  return (
    <Layout className="bg-#1d1d1d">
      {param.maLichChieu ? (
        <section className="header relative w-full z-10">
          <Header backgroundImage={headerBackground} />
        </section>
      ) : (
        <section className="header absolute w-full z-10">
          <Header />
        </section>
      )}
      <Content>
        <div className="site-layout-content">
          <Outlet />
        </div>
        {param.maLichChieu ? (
          <div className="hidden">
            <Footer />
          </div>
        ) : (
          <div>
            <Footer />
          </div>
        )}
      </Content>
    </Layout>
  );
};
export default Home;

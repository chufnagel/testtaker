import Layout from "../components/Layout";
import Passage from "../components/Passage";
import passage from "../static/passage.json";

const Index = () => (
  <Layout>
    <Passage passage={passage} />
  </Layout>
);

export default Index;

import Banner from "./Banner";
import Footer from "./Footer";
import News from "./News";
import Recommended from "./Recommended";
import TopSeller from "./TopSeller";

export default function Home() {
  return (
    <>
      <Banner/>
      <TopSeller/>
      <Recommended/>
      <News/>
      <Footer/>
    </>
  )
}

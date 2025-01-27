import Banner from "./components/Banner/Banner";
import Companies from "./components/Companies/Companies";
import Mentor from "./components/Mentor/Mentor";
import Newsletter from "./components/Newsletter/Newsletter";
import Students from "./components/Students/Students";
import Tabs from './components/Courses/Courses'
import Snapshot from "./components/SnapShot/SnapShot";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import PromotionalBanner from "./components/PromotionalBanner/PromotionalBanner";

export default function Home() {
  return (
    <main>
        <Banner />
        <Snapshot />
        <Tabs />
        <WhyChooseUs />
        <Companies />
        <Mentor />
        <Students />
        {/* <Newsletter /> */}
    </main>
  )
}

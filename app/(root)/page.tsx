import AboutOurShow from "@/components/landingPageCmp/OurShow/AboutOurShow";
import HeaderSection from "@/components/landingPageCmp/HeroSection"
import InfiniteScroll from "@/components/landingPageCmp/InfiniteScroll"
import MainFeature from "@/components/landingPageCmp/MainFeatures"


function page() {
    return (
        <main>
          <HeaderSection/>
          <InfiniteScroll/>
          <AboutOurShow/>
          <MainFeature/>

        </main>
    )
}

export default page;
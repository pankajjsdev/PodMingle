import AboutOurShow from "@/components/landingPageCmp/OurShow/AboutOurShow";
import HeaderSection from "@/components/landingPageCmp/HeroSection"
import InfiniteScroll from "@/components/landingPageCmp/InfiniteScroll"
import MainFeature from "@/components/landingPageCmp/MainFeatures"
import EpisodsList from "@/components/Episodes/index"


function page() {
    return (
        <main>
          <HeaderSection/>
          <InfiniteScroll/>
          <AboutOurShow/>
          <MainFeature/>
          <EpisodsList/>
        </main>
    )
}

export default page;
import AboutOurShow from "@/components/landingPageCmp/OurShow/AboutOurShow";
import HeaderSection from "@/components/landingPageCmp/HeroSection"
import InfiniteScroll from "@/components/landingPageCmp/InfiniteScroll"


function page() {
    return (
        <main>
          <HeaderSection/>
          <InfiniteScroll/>
          <AboutOurShow/>

        </main>
    )
}

export default page;
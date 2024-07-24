import AboutOurShow from "@/components/landingPageCmp/OurShow/AboutOurShow";
import HeaderSection from "@/components/landingPageCmp/HeroSection"
import InfiniteScroll from "@/components/landingPageCmp/InfiniteScroll"
import MainFeature from "@/components/landingPageCmp/MainFeatures"
import EpisodsList from "@/components/Episodes/index"
import AdsOne from "@/components/landingPageCmp/AdsSections/AdsOne";
import FAQ from "@/components/FAQ";
import BlogList from "@/components/blog";
import Testimonials from "@/components/landingPageCmp/Testimonials";
import EpisodeHero from "@/components/Episodes/EpisodeHero";


function page() {
    return (
        <main>
            <EpisodeHero/>
          <EpisodsList/>
          <FAQ/>
          <BlogList/>
        </main>
    )
}

export default page;
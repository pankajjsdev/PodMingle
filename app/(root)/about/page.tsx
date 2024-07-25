import AdsOne from "@/components/landingPageCmp/AdsSections/AdsOne";
import FAQ from "@/components/FAQ";
import BlogList from "@/components/blog";
import AboutHeroSection from "@/components/About/AboutHeroSection";
import Stats from "@/components/About/Stats";
import OurMissionVision from "@/components/About/OurMissionVision";
import OurHosts from "@/components/About/OurHosts";

function page() {
    return (
        <main>
            <AboutHeroSection/>
            <Stats/>
            <OurMissionVision/>
            <OurHosts/>
            <AdsOne />
            <FAQ />
            <BlogList />
        </main>
    )
}

export default page
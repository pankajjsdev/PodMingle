
import EpisodeDetails from "@/components/Episodes/EpisodeDetails";
import EpisodeHero from "@/components/Episodes/EpisodeHero";
import PodMinglePlayer from "@/components/Episodes/Player";
import FAQ from "@/components/FAQ";
import AdsOne from "@/components/landingPageCmp/AdsSections/AdsOne";


function page() {
    return (
        <main>
            <EpisodeHero />
            {/* <PodMinglePlayer/> */}
            <EpisodeDetails/>
            <AdsOne />
            <FAQ />
        </main>
    )
}

export default page;
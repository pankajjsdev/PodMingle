
import EpisodeDetails from "@/components/Episodes/EpisodeDetails";
import EpisodeHero from "@/components/Episodes/EpisodeHero";
import FAQ from "@/components/FAQ";
import AdsOne from "@/components/landingPageCmp/AdsSections/AdsOne";


function page() {
    return (
        <main>
            <EpisodeHero />
            <EpisodeDetails/>

            <AdsOne />
                <FAQ />
        </main>
    )
}

export default page;
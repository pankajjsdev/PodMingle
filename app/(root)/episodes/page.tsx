
import EpisodsList from "@/components/Episodes/index"
import FAQ from "@/components/FAQ";
import BlogList from "@/components/blog";
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
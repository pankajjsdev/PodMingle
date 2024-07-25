import Section from "../common/Section"
import { H4 } from "../common/Typography"
import CategoryHeader from "./CategoryHeader"
import EpisodesList from "./EpisodesList"

function index() {
    return (
        <Section>
            <div className="container mx-auto">
            <CategoryHeader/>
            </div>
            <div className="container mx-auto mb-8">
            <EpisodesList/>
            </div>

        </Section>
    )
}

export default index
import { ButtonPrimary } from "../common/Button"
import Section from "../common/Section"
import { H2 } from "../common/Typography"
import BlogCard from "./BlogCard"


const blogData = [
    {
        title: 'Understanding Your Audience and Measuring Success',
        tags: 'Marketing',
        imageUrl: '/images/blog1.png',
        link: '/'
    },
    {
        title: 'Understanding Your Audience and Measuring Success',
        tags: 'Marketing',
        imageUrl: '/images/blog1.png',
        link: '/'
    },
    {
        title: 'Understanding Your Audience and Measuring Success',
        tags: 'Marketing',
        imageUrl: '/images/blog1.png',
        link: '/'
    }
]

function index() {
    return (
        <Section>
            <div className="container mb-8 space-y-8">
                <div className="flex items-center justify-between py-6">
                    <H2>Articles & News</H2>
                    <ButtonPrimary title="Browse all article" />
                </div>
                <div className="grid grid-cols-3 gap-6">
                    {
                        blogData?.map((blog, index) => {
                            return (
                                <BlogCard key={index} blog={blog} />
                            )
                        })

                    }
                </div>
                <div></div>
            </div>
        </Section>
    )
}

export default index
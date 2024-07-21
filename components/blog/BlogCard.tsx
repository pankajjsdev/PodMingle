import Link from "next/link"
import { H4 } from "../common/Typography"
import Image from "next/image"

function BlogCard({ blog }: any) {
    return (
        <>
        <div className="shadow rounded-3xl p-4 space-y-4">
            <Link href={blog.link}>
                <Image
                    src={blog.imageUrl}
                    width={390}
                    height={260}
                    alt={`Image for blog ${blog.title}`}
                />
            </Link>
                <span className="inline-flex text-base rounded-lg p-2 bg-whitesmoke capitalize">{blog.tags}</span>
            <H4>{blog.title}</H4>
            <div className="flex items-center justify-between">
                <Link className="flex items-center space-x-2" href={blog.link}>
                    <span>Read more</span>
                    <Image
                        src="/images/play-btn.png"
                        width={18}
                        height={18}
                        alt="Play button"
                    />
                </Link>
            </div>
        </div>
    </>
    )
}

export default BlogCard
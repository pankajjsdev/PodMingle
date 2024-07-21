import Section from "@/components/common/Section";
import EpisodeCard from "./EpisodeCard";


const podcastList = [
    {
        date: "May 12, 2024",
        duration: "1hr 20min",
        episodeNumber: 1,
        title: "How to become a Digital Product Designer With Ahsan",
        description: "In this episode, Ahsan shares his journey and tips on how to become a successful digital product designer.",
        listenLink: "https://example.com/listen/episode1",
        imageUrl: "/images/podcast1.png",
        type: "Free",
        tags: ["Design", "Career", "Digital"],
        category: "Career Development",
        author: {
            name: "Ahsan",
            bio: "Ahsan is a renowned digital product designer with over 10 years of experience.",
            profileImageUrl: "https://example.com/images/author-ahsan.jpg"
        },
        label: "New Episode"
    },
    {
        date: "May 19, 2024",
        duration: "1hr 05min",
        episodeNumber: 2,
        title: "The Future of Web Development with Jane Doe",
        description: "Jane Doe discusses the latest trends and future prospects in web development.",
        listenLink: "https://example.com/listen/episode2",
        imageUrl: "/images/podcast2.png",
        type: "Paid",
        tags: ["Web Development", "Technology", "Future"],
        category: "Technology",
        author: {
            name: "Jane Doe",
            bio: "Jane Doe is a software engineer and tech futurist.",
            profileImageUrl: "https://example.com/images/author-jane.jpg"
        },
        label: ""
    },
    {
        date: "May 26, 2024",
        duration: "1hr 10min",
        episodeNumber: 3,
        title: "Mastering User Experience Design with John Smith",
        description: "John Smith shares his insights on creating exceptional user experiences.",
        listenLink: "https://example.com/listen/episode3",
        imageUrl: "/images/podcast3.png",
        type: "Free",
        tags: ["UX Design", "User Experience", "Design"],
        category: "Design",
        author: {
            name: "John Smith",
            bio: "John Smith is a UX designer with a passion for creating user-friendly interfaces.",
            profileImageUrl: "https://example.com/images/author-john.jpg"
        },
        label: "New Episode"
    },
    {
        date: "June 2, 2024",
        duration: "1hr 15min",
        episodeNumber: 4,
        title: "Building Scalable Applications with Emily White",
        description: "Emily White talks about the challenges and strategies for building scalable applications.",
        listenLink: "https://example.com/listen/episode4",
        imageUrl: "/images/podcast4.png",
        type: "Paid",
        tags: ["Scalability", "Applications", "Development"],
        category: "Software Development",
        author: {
            name: "Emily White",
            bio: "Emily White is a software architect specializing in scalable applications.",
            profileImageUrl: "https://example.com/images/author-emily.jpg"
        },
        label: ""
    },
    {
        date: "June 9, 2024",
        duration: "1hr 25min",
        episodeNumber: 5,
        title: "Effective Team Management with Michael Brown",
        description: "Michael Brown shares his tips and experiences on managing teams effectively.",
        listenLink: "https://example.com/listen/episode5",
        imageUrl: "/images/podcast5.png",
        type: "Free",
        tags: ["Team Management", "Leadership", "Productivity"],
        category: "Management",
        author: {
            name: "Michael Brown",
            bio: "Michael Brown is an expert in team management and leadership.",
            profileImageUrl: "https://example.com/images/author-michael.jpg"
        },
        label: ""
    },
    {
        date: "May 12, 2024",
        duration: "1hr 20min",
        episodeNumber: 1,
        title: "How to become a Digital Product Designer With Ahsan",
        description: "In this episode, Ahsan shares his journey and tips on how to become a successful digital product designer.",
        listenLink: "https://example.com/listen/episode1",
        imageUrl: "/images/podcast1.png",
        type: "Free",
        tags: ["Design", "Career", "Digital"],
        category: "Career Development",
        author: {
            name: "Ahsan",
            bio: "Ahsan is a renowned digital product designer with over 10 years of experience.",
            profileImageUrl: "https://example.com/images/author-ahsan.jpg"
        },
        label: "New Episode"
    },
    {
        date: "May 19, 2024",
        duration: "1hr 05min",
        episodeNumber: 2,
        title: "The Future of Web Development with Jane Doe",
        description: "Jane Doe discusses the latest trends and future prospects in web development.",
        listenLink: "https://example.com/listen/episode2",
        imageUrl: "/images/podcast2.png",
        type: "Paid",
        tags: ["Web Development", "Technology", "Future"],
        category: "Technology",
        author: {
            name: "Jane Doe",
            bio: "Jane Doe is a software engineer and tech futurist.",
            profileImageUrl: "https://example.com/images/author-jane.jpg"
        },
        label: ""
    },
    {
        date: "May 26, 2024",
        duration: "1hr 10min",
        episodeNumber: 3,
        title: "Mastering User Experience Design with John Smith",
        description: "John Smith shares his insights on creating exceptional user experiences.",
        listenLink: "https://example.com/listen/episode3",
        imageUrl: "/images/podcast3.png",
        type: "Free",
        tags: ["UX Design", "User Experience", "Design"],
        category: "Design",
        author: {
            name: "John Smith",
            bio: "John Smith is a UX designer with a passion for creating user-friendly interfaces.",
            profileImageUrl: "https://example.com/images/author-john.jpg"
        },
        label: "New Episode"
    },
];



function EpisodesList() {
    return (
        <Section>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {
                    podcastList.map((episode, index) => {
                        return (
                            <EpisodeCard key={index} episode={episode} />
                        )
                    })
                }
            </div>
        </Section>
    )
}

export default EpisodesList
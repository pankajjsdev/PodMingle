import Image from "next/image";
import { H4, P } from "../common/Typography";
import Link from "next/link";
import Head from "next/head";

interface Author {
    name: string;
    bio: string;
    profileImageUrl: string;
}

interface Podcast {
    date: string;
    duration: string;
    episodeNumber: number;
    title: string;
    description: string;
    listenLink: string;
    imageUrl: string;
    type: string;
    tags: string[];
    category: string;
    author: Author;
    label: string;
}

interface EpisodeCardProps {
    episode: Podcast;
}

const EpisodeCard: React.FC<EpisodeCardProps> = ({ episode }) => {
    return (
        <>
            <Head>
                <title>{episode.title}</title>
                <meta name="description" content={episode.description} />
                <meta name="keywords" content={episode.tags.join(", ")} />
                <meta name="author" content={episode.author.name} />
            </Head>
            <div className="shadow rounded-3xl p-4 space-y-4">
                <Link href={episode.listenLink}>
                    <Image
                        src={episode.imageUrl}
                        width={373}
                        height={248}
                        alt={`Image for episode ${episode.title}`}
                    />
                </Link>
                <div className="flex justify-between">
                    <span className="text-base">{episode.date}</span>
                    <span className="text-base font-semibold">{episode.duration}</span>
                </div>
                <H4>{episode.title}</H4>
                <div className="flex items-center justify-between">
                    <Link className="flex items-center space-x-2" href={episode.listenLink}>
                        <span>Listen Now</span>
                        <Image
                            src="/images/play-btn.png"
                            width={18}
                            height={18}
                            alt="Play button"
                        />
                    </Link>
                    <div>
                        <Image
                            src="/images/music-waves.png"
                            width={120}
                            height={27}
                            alt="Music waves"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default EpisodeCard;

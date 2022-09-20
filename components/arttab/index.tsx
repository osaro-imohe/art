import Image from "next/image";

type Art = {
	artist: string;
	title: string;
	created_at: string;
	medium: string;
	description: string;
	image_url: string;
}

type ArtProps = {
	art: Art;
}

const ArtTab = ({ art }: ArtProps) => (
	<div className="sm:w-12/12 md:w-6/12 lg:w-4/12 px-2 py-2" data-testid="art-li">
		<div className="w-full h-96 border-solid border-2 border-zinc-100 rounded-md overflow-hidden">
			<Image src={art.image_url} alt={art.title} width="100%" height="50%" layout="responsive" objectFit="cover" />
			<div className="px-2 w-full">
				<p className="text-purple-600 font-normal">{art.title}</p>
				<p className="mt-2 text-zinc-500 font-light">{art.artist} - {art.created_at}</p>
				<p className="mt-2 text-zinc-500 font-thin">{art.medium}</p>
				<p className="mt-2 text-zinc-500 font-thin">{art.description}</p> 
			</div>
			<p></p>
		</div>
	</div>
)

export default ArtTab;
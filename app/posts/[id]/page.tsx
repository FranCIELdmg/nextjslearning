import { PostProps } from "../page";
import { PostInfo } from "./_components/post";

export default async function DetailPost({
    params 
}: {
    params: Promise<{ id: string }>
}) {

    const { id } = await params;

    return(
        <div>
            <h1 className="text-4xl font-bold">Detalhes do post: {id}</h1>

            <PostInfo id={id} />
        </div>
    )
}
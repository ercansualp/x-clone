import More from "./more";
import PostOwnerName from "~/pages/home/posts/post/post-header/post-owner-name/index.jsx";
import PostOwnerUsername from "~/pages/home/posts/post/post-header/post-owner-username/index.jsx";

export default function PostHeader() {
    return (
        <div className="flex justify-between items-center mb-0.5">
            <div className="flex items-center gap-1">
                <PostOwnerName />
                <PostOwnerUsername />
            </div>
            <More />
        </div>
    )
}
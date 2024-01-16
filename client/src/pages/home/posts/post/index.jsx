import PostFooter from "~/pages/home/posts/post/post-footer/index.jsx";
import PostContent from "~/pages/home/posts/post/post-content/index.jsx";
import PostDescription from "~/pages/home/posts/post/post-description/index.jsx";
import PostOwnerAvatar from "~/pages/home/posts/post/post-owner-avatar/index.jsx";
import PostHeader from "~/pages/home/posts/post/post-header/index.jsx";

export default function Post() {
    return (
        <article className="px-[15px] pt-[11px] flex gap-[11px] items-start hover:bg-[#00000008] cursor-pointer transition-colors">
            <PostOwnerAvatar />
            <div className="flex flex-col grow">
                <PostHeader />
                <PostDescription />
                <PostContent />
                <PostFooter />
            </div>
        </article>
    )
}


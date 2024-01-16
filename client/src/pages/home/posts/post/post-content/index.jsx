import Video from "~/assets/video/instagram-kesfet-video-small.mp4";

export default function PostContent() {
    return (
        <div className="my-[11px]">
            <video className="rounded-2xl" style={{width: "100%"}} controls>
                <source src={Video} type="video/mp4" />
            </video>
        </div>
    )
}
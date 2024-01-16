import {Link} from "react-router-dom";
import AvatarPicture from "~/assets/img/AhAh3xlU_400x400.png";

export default function PostOwnerAvatar() {
    return (
        <Link to="/"
              className="hover:opacity-90 transition-all rounded-full !w-[38px] !h-[38px] bg-contain"
              style={{backgroundImage: `url(${AvatarPicture})`}}/>
    )
}
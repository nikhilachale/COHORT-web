import { Link } from "react-router-dom";
import { Avatar } from "./Blogcard";

interface SideBlogCardProps {
    id: number;
    authorName: string;
    title: string;
}

export const SideBlogCard = ({ id, authorName, title }: SideBlogCardProps) => {
    return (
        <Link to={`/blog/${id}`}>
            <div className=" py-3 cursor-pointer">
                <div className="flex items-center gap-2">
                    <Avatar size={20} name={authorName} />
                    <div className="text-sm text-black font-light">{authorName}</div>
                </div>
                <h3 className="text-base  pt-2  font-bold text-gray-900">{title}</h3>
                <div  className="text-sm pt-2  text-black font-light">2d ago</div>
            </div>
        </Link>
    );
};
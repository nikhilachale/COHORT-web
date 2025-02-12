import { Appbar } from "../components/Appbar";
import { Blogcard } from "../components/Blogcard";
import { BlogcardSkeleton } from "../components/BlogSkeleton";
import { SideBlogCard } from "../components/Sideblogcard";
import { Link } from "react-router-dom";

import { useBlogs } from "../hooks/useBlogs";
import RecommendedTopics from "../components/RecommendedTopics";
import Blogbar from "../components/Blogbar";
export const Blogs = () => {
    const { loading, blogs } = useBlogs();

    if (loading) {
        return <div><BlogcardSkeleton /></div>;
    }

    // ✅ Check if blogs is undefined or empty before using .map()
    if (!blogs || blogs.length === 0) {
        return <div>No blogs found.</div>;
    }

    return (
        <div className="">
            <Appbar />
            <div className="grid grid-cols-[65%_35%] items-start max-w-7xl mx-auto gap-10">


                <div className="mx-16  mt-7 ">
                    <div>
                        <Blogbar/>
                    </div>
                    {/* Main Blog Section */}
                <div className="flex flex-col mt-7 w-9/10">
                    {blogs.map((blog, index) => (
                        <Blogcard
                            key={index}
                            id={blog.id}
                            authorName={blog?.author?.name || "Unknown"}
                            title={blog?.title || "No Title"}
                            content={blog?.content || "No Content Available"}
                            publishDate={"10 Feb 2025"}
                        />
                    ))}
                </div>
                </div>
                

                {/* Sidebar Section */}
                <div className="border-l border-slate-200 pl-6">
                    <div className="mx-6 mt-7 pr-14">
                        <div className="text-base font-medium font-sans">Staff Picks</div>
                        <div>
                            {blogs.slice(0, 3).map((blog, index) => (
                                <SideBlogCard
                                    key={index}
                                    id={blog.id}
                                    authorName={blog?.author?.name || "Unknown"}
                                    title={blog?.title || "No Title"}
                                />
                            ))}
                        </div>
                        <Link to={`/blogs`}>
                            <div className="text-sm pt-2  text-black font-light hover:underline">
                                See full list
                            </div>
                        </Link>

                        {/* Recommended Topics */}
                        <div className="mt-6">
                            <div className="text-base font-medium font-sans mb-3">Recommended Topics</div>
                            <RecommendedTopics />
                            <Link to={`/blogs`}>
                                <div className="text-sm pt-2  text-black font-light hover:underline">
                                    See more topics
                                </div>
                            </Link>
                        </div>

                        <div className="mt-6">
                            <div className="text-base font-medium font-sans mb-3">Reading list</div>

                            <div className="text-sm pt-2  text-black font-light hover:underline">
                                Click the  on any story to easily add it to your reading list or a custom list that you can share.
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
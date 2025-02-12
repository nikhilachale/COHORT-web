// Skeleton Loader Component
export const BlogcardSkeleton = () => {
    return (


        <div className="animate-pulse">
            {/* Appbar Skeleton */}
            <div className="border-b border-slate-200 py-4 px-5 flex justify-between items-center">
                {/* Left section: Logo + Search bar */}
                <div className="flex items-center gap-4">
                    <div className="h-6 w-24 bg-gray-300 rounded"></div>
                    <div className="h-8 w-64 bg-gray-300 rounded-full"></div>
                </div>

                {/* Right section: Avatar */}
                <div className="h-8 w-8 bg-gray-300 rounded-full"></div>
            </div>

            <div className="grid grid-cols-[65%_35%] items-start max-w-7xl mx-auto gap-10 mt-7">
                {/* Main Blog Section Skeleton */}
                <div className="mx-16">
                    <div className="h-10 w-full bg-gray-300 rounded mb-4"></div>
                    {/* Blog Cards Skeleton */}
                    {[...Array(3)].map((_, index) => (
                        <div key={index} className="mb-6 p-4 border border-gray-200 rounded-lg">
                            <div className="h-6 w-1/2 bg-gray-300 rounded mb-2"></div>
                            <div className="h-4 w-1/3 bg-gray-300 rounded mb-2"></div>
                            <div className="h-16 w-full bg-gray-300 rounded"></div>
                        </div>
                    ))}
                </div>

                {/* Sidebar Skeleton */}
                <div className="border-l border-slate-200 pl-6">
                    <div className="mx-6 pr-14">
                        <div className="h-6 w-32 bg-gray-300 rounded mb-4"></div>
                        {[...Array(3)].map((_, index) => (
                            <div key={index} className="h-12 w-full bg-gray-300 rounded mb-3"></div>
                        ))}
                        <div className="h-4 w-24 bg-gray-300 rounded mb-6"></div>
                        <div className="h-6 w-32 bg-gray-300 rounded mb-4"></div>
                        <div className="h-8 w-full bg-gray-300 rounded"></div>
                    </div>
                </div>
            </div>
        </div>

    );
};

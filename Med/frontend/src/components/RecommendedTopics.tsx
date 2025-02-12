export default function RecommendedTopics() {
    const topics = [
        "Data Science",
        "Self Improvement",
        "Relationships",
        "Writing ",
        "Technology",
        "Cryptocurrency",
        "Politics"
    ];



    return (
        <div className="flex flex-wrap gap-3">
            {topics.map((topic, index) => (
                <button
                    key={index}
                    type="button"
                    className="text-black bg-[#f2f2f2] font-light rounded-full cursor-pointer w-fit text-sm px-4 py-2"
                >
                    {topic}
                </button>
            ))}
        </div>
    );
}
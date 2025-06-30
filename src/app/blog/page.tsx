import SearchBar from "@/components/ui/searchBar";
import BlogCardList from "./ui/blogCard";
import Footer from "@/components/layout/footer";

export default function Blog() {
    return (
        <div className="">
            {/* Header */}
            <div className="h-35 lg:py-10 lg:h-80 w-screen bg-accent text-background font-bold text-center text-2xl">
                <span className="lg:text-[300px] text-8xl">Let's</span>
                <p className="lg:inline">Learn With Me!</p>
            </div>

            {/* Search Bar dan Category */}
            <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-4 lg:px-25 px-5 py-10">
                {/* Kategori */}
                <div className="flex flex-wrap gap-2 lg:flex-nowrap">
                    <p className="glassmorphin p-1">Automation</p>
                    <p className="glassmorphin p-1">Blockchain</p>
                    <p className="glassmorphin p-1">Frontend</p>
                    <p className="glassmorphin p-1">Backend</p>
                </div>

                {/* Search bar */}
                <div className="w-full lg:w-100">
                    <SearchBar />
                </div>
            </div>

            <div className="lg:px-10 p-5">
                <BlogCardList />
            </div>
        </div>
    );
}

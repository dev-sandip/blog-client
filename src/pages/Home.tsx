import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from "../components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import { useQuery } from "@tanstack/react-query"
import { getAllBlogs } from "@/http/api"
import Loading from "../components/Loading"
import { Blog } from "@/types"
import { formatDate } from '@/lib/dateUtils';

const Home: React.FC = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ["blogs"],
        queryFn: getAllBlogs,
    });

    if (isLoading) return <Loading />;
    if (error) return <div>An error occurred: {(error as Error).message}</div>;

    // Check if data exists and is an array
    const blogs = Array.isArray(data) ? data : data?.data;

    if (!blogs.data || blogs.data.length === 0) {
        return <p className="text-center">No blog posts available at the moment.</p>;
    }

    return (
        <main className="flex-1">
            <section className="w-full py-12 md:py-24 lg:py-32">
                <div className=" mx-auto px-4 md:px-6">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Latest Blog Posts</h2>
                    <div className="grid  gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {blogs.data.map((blog: Blog) => (
                            <Card key={blog._id} className="overflow-hidden">
                                <CardHeader className="p-0">
                                    <img
                                        src={blog.thumbnail?.url || "/default-thumbnail.jpg"}
                                        alt={blog.title}
                                        className="w-full h-[200px] object-cover"
                                    />
                                </CardHeader>
                                <CardContent className="p-4">
                                    <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
                                    <p className="text-sm text-muted-foreground mb-4">{blog.metaDescription}</p>
                                    <div className="flex items-center">
                                        <Avatar className="h-8 w-8 mr-2">
                                            <AvatarImage src={blog.author.profileImg} alt={blog.author.name || "Author"} />
                                            <AvatarFallback>{blog.author.name?.charAt(0) || "A"}</AvatarFallback>
                                        </Avatar>
                                        <span className="text-sm font-medium">{blog.author?.name || "Anonymous"}</span>
                                    </div>
                                </CardContent>
                                <CardFooter className="p-4 pt-0">
                                    <span className="text-sm text-muted-foreground">
                                        {formatDate(blog.createdAt, 'MMMM d, yyyy')}
                                    </span>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
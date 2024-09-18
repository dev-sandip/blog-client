

const Loading = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center">
                <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary"></div>
                <h2 className="text-2xl font-semibold mt-4 text-gray-700">Loading...</h2>
                <p className="text-gray-500 mt-2">Please wait while we fetch your content.</p>
            </div>
        </div>
    )
}

export default Loading  
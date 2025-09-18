    const NotFoundComponent = ({ setRoute, message }) => (
        <div className="container mx-auto px-6 py-20 text-center">
            <h1 className="text-6xl font-bold text-gray-800">404</h1>
            <h2 className="text-2xl font-semibold mt-4 text-gray-700">{message || "Page Not Found"}</h2>
            <p className="mt-2 text-gray-500">The page you are looking for does not exist.</p>
            <button onClick={() => setRoute({ name: 'home' })} className="mt-8 bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700">Go to Homepage</button>
        </div>
    );

export default NotFoundComponent;
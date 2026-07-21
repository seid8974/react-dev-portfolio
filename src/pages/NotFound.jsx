import { useNavigate } from 'react-router-dom'
import { Home, ArrowLeft } from 'lucide-react'

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-3xl rounded-full" />

            <div className="relative flex flex-col items-center gap-6 text-center">
                {/* 404 */}
                <h1 className="text-[120px] md:text-[180px] font-bold leading-none bg-gradient-to-b from-primary via-primary/50 to-transparent bg-clip-text text-transparent">
                    404
                </h1>

                <div className="flex flex-col gap-2">
                    <h2 className="text-2xl md:text-3xl font-semibold text-white">
                        Page Not Found
                    </h2>
                    <p className="text-white/60 max-w-md">
                        The page you're looking for doesn't exist or has been moved.
                    </p>
                </div>

                <div className="flex items-center gap-4 mt-4">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white/70 hover:bg-white/10 hover:text-white transition-all duration-300"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Go Back
                    </button>

                    <button
                        onClick={() => navigate('/')}
                        className="flex items-center gap-2 px-6 py-3 bg-primary text-black font-medium rounded-xl hover:bg-primary/90 hover:scale-105 transition-all duration-300"
                    >
                        <Home className="w-4 h-4" />
                        Go Home
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NotFound;

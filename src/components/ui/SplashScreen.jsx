import { useEffect, useState } from 'react'
import { PERSONAL_INFO } from '../../utils/constants'

const SplashScreen = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        setFadeOut(true);
                        setTimeout(onComplete, 500);
                    }, 200);
                    return 100;
                }
                return prev + 2;
            });
        }, 20);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <div className={`fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
            {/* Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 blur-3xl rounded-full" />

            <div className="relative flex flex-col items-center gap-8">
                {/* Logo */}
                <div className="flex flex-col items-center gap-2">
                    <span className="text-5xl font-bold bg-gradient-to-r from-primary via-primary/70 to-primary/40 bg-clip-text text-transparent">
                        {PERSONAL_INFO.name.split(' ')[0]}
                    </span>
                    <span className="text-sm text-white/50 tracking-[4px] uppercase">
                        {PERSONAL_INFO.title}
                    </span>
                </div>

                {/* Progress bar */}
                <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-gradient-to-r from-primary/50 to-primary rounded-full transition-all duration-75"
                        style={{ width: `${progress}%` }}
                    />
                </div>

                <span className="text-xs text-white/30">{progress}%</span>
            </div>
        </div>
    );
};

export default SplashScreen;

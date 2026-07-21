import { useEffect, useState } from 'react'
import { ChevronUp } from 'lucide-react'

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 400);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className={`fixed bottom-8 right-8 z-50 p-3 bg-primary text-black rounded-full shadow-lg shadow-primary/30 hover:bg-primary/90 hover:scale-110 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
        >
            <ChevronUp className='w-5 h-5' />
        </button>
    );
};

export default ScrollToTop;

import { useState, useEffect } from 'react';

function NetworkStatus() {
    const [isOnline, setIsOnline] = useState(navigator.onLine);

    useEffect(() => {
        const handleOnline = () => setIsOnline(true);
        const handleOffline = () => setIsOnline(false);

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);

    return (
        <div>
            {isOnline ? (
                <p style={{ color: 'green' }}>You are online</p>
            ) : (
                <p style={{ color: 'red' }}>You are offline</p>
            )}
        </div>
    );
}

export default NetworkStatus;

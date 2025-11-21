import { useEffect } from 'react';
import { useRegisterSW } from 'virtual:pwa-register/react';

export default function PWABadge() {
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(r:any) {
      console.log('SW Registered: ' + r);
    },
    onRegisterError(error:any) {
      console.log('SW registration error', error);
    },
  });

  const close = () => {
    setOfflineReady(false);
    setNeedRefresh(false);
  };

  useEffect(() => {
    if (offlineReady) {
      console.log('App ready to work offline');
    }
  }, [offlineReady]);

  return (
    <div className="pwa-toast" role="alert">
      {(offlineReady || needRefresh) && (
        <div className="fixed bottom-4 right-4 bg-gradient-to-r from-red-600 to-red-700 text-white p-4 rounded-lg shadow-2xl z-50 max-w-sm">
          <div className="flex flex-col gap-3">
            {offlineReady ? (
              <span className="text-sm font-medium">
                App lista para funcionar sin conexión
              </span>
            ) : (
              <span className="text-sm font-medium">
                Nueva versión disponible
              </span>
            )}
            <div className="flex gap-2">
              {needRefresh && (
                <button
                  className="px-4 py-2 bg-white text-red-600 rounded font-semibold text-sm hover:bg-red-50 transition-colors"
                  onClick={() => updateServiceWorker(true)}
                >
                  Actualizar
                </button>
              )}
              <button
                className="px-4 py-2 bg-black/30 text-white rounded font-semibold text-sm hover:bg-black/50 transition-colors"
                onClick={() => close()}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

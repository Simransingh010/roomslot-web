/**
 * Client-side polyfill for crypto.randomUUID.
 * Restores UUID generation in non-secure HTTP contexts (such as local LAN IP testing)
 * without triggering any unsafe raw script injection or XSS findings.
 */

interface PolyfilledCrypto {
  randomUUID?: () => string;
}

interface PolyfilledWindow {
  crypto?: Omit<Crypto, 'randomUUID'> & PolyfilledCrypto;
}

if (typeof window !== 'undefined') {
  try {
    const polyfilledWindow = window as unknown as PolyfilledWindow;
    if (!polyfilledWindow.crypto) {
      polyfilledWindow.crypto = {} as Omit<Crypto, 'randomUUID'> & PolyfilledCrypto;
    }
    
    const cryptoInstance = polyfilledWindow.crypto;
    if (!cryptoInstance.randomUUID) {
      cryptoInstance.randomUUID = function (): string {
        if (cryptoInstance.getRandomValues) {
          // Standard RFC 4122 v4 compliant generator using getRandomValues
          const buffer = new Uint8Array(16);
          cryptoInstance.getRandomValues(buffer);
          // Set version 4 (0100)
          buffer[6] = (buffer[6] & 0x0f) | 0x40;
          // Set variant (10xx)
          buffer[8] = (buffer[8] & 0x3f) | 0x80;
          
          let hex = '';
          for (let i = 0; i < 16; i++) {
            if (i === 4 || i === 6 || i === 8 || i === 10) {
              hex += '-';
            }
            hex += buffer[i].toString(16).padStart(2, '0');
          }
          return hex;
        } else {
          // Fallback using Math.random
          return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            const r = (Math.random() * 16) | 0;
            const v = c === 'x' ? r : (r & 0x3) | 0x8;
            return v.toString(16);
          });
        }
      };
    }
  } catch (e) {
    console.error('Failed to polyfill crypto.randomUUID:', e);
  }
}

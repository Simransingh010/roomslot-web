/**
 * Polyfill for crypto.randomUUID in non-secure contexts (e.g. local HTTP on a LAN IP).
 * Injected synchronously in <head> before app bundles run; also applied on client import.
 */

function createRandomUUID(cryptoRef: Crypto): Crypto["randomUUID"] {
  return function randomUUID() {
    if (cryptoRef.getRandomValues) {
      const buffer = new Uint8Array(16);
      cryptoRef.getRandomValues(buffer);
      buffer[6] = (buffer[6] & 0x0f) | 0x40;
      buffer[8] = (buffer[8] & 0x3f) | 0x80;

      let hex = "";
      for (let i = 0; i < 16; i++) {
        if (i === 4 || i === 6 || i === 8 || i === 10) hex += "-";
        hex += buffer[i].toString(16).padStart(2, "0");
      }
      return hex as `${string}-${string}-${string}-${string}-${string}`;
    }

    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0;
      const v = c === "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    }) as `${string}-${string}-${string}-${string}-${string}`;
  };
}

export function installCryptoRandomUUIDPolyfill(
  globalObject: typeof globalThis = globalThis,
): void {
  const cryptoRef = globalObject.crypto;
  if (!cryptoRef || typeof cryptoRef.randomUUID === "function") return;

  const randomUUID = createRandomUUID(cryptoRef);

  try {
    (cryptoRef as { randomUUID?: Crypto["randomUUID"] }).randomUUID = randomUUID;
    if (typeof cryptoRef.randomUUID === "function") return;
  } catch {
    // crypto may be non-extensible; try defineProperty or replace global crypto
  }

  try {
    Object.defineProperty(cryptoRef, "randomUUID", {
      value: randomUUID,
      writable: true,
      configurable: true,
      enumerable: true,
    });
    if (typeof cryptoRef.randomUUID === "function") return;
  } catch {
    // fall through to patched object
  }

  try {
    const patched = Object.create(cryptoRef) as Crypto;
    Object.defineProperty(patched, "randomUUID", {
      value: randomUUID,
      writable: true,
      configurable: true,
      enumerable: true,
    });
    Object.defineProperty(globalObject, "crypto", {
      value: patched,
      configurable: true,
      writable: true,
    });
  } catch {
    // non-secure contexts should allow at least one strategy above
  }
}

/** Minified IIFE for synchronous <head> injection before Next.js bundles load. */
export const CRYPTO_POLYFILL_SCRIPT = String.raw`(function () {
  var g = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : self;
  if (!g || !g.crypto || typeof g.crypto.randomUUID === "function") return;
  var c = g.crypto;
  var u = function () {
    if (c.getRandomValues) {
      var b = new Uint8Array(16);
      c.getRandomValues(b);
      b[6] = (b[6] & 15) | 64;
      b[8] = (b[8] & 63) | 128;
      var h = "";
      for (var i = 0; i < 16; i++) {
        if (i === 4 || i === 6 || i === 8 || i === 10) h += "-";
        h += b[i].toString(16).padStart(2, "0");
      }
      return h;
    }
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (ch) {
      var r = (Math.random() * 16) | 0;
      return (ch === "x" ? r : (r & 3) | 8).toString(16);
    });
  };
  try {
    c.randomUUID = u;
    if (typeof c.randomUUID === "function") return;
  } catch (e) {}
  try {
    Object.defineProperty(c, "randomUUID", { value: u, writable: true, configurable: true, enumerable: true });
    if (typeof c.randomUUID === "function") return;
  } catch (e) {}
  try {
    var p = Object.create(c);
    Object.defineProperty(p, "randomUUID", { value: u, writable: true, configurable: true, enumerable: true });
    Object.defineProperty(g, "crypto", { value: p, configurable: true, writable: true });
  } catch (e) {}
})();`;

if (typeof window !== "undefined") {
  installCryptoRandomUUIDPolyfill();
}

import Cookies from "js-cookie";

export interface SetCookieOptions {
  /**
   * Define when the cookie will be removed. Value can be a Number
   * which will be interpreted as days from time of creation or a
   * Date instance. If omitted, the cookie becomes a session cookie.
   */
  expires?: number | Date;

  /**
   * Define the path where the cookie is available. Defaults to '/'
   */
  path?: string;

  /**
   * Define the domain where the cookie is available. Defaults to
   * the domain of the page where the cookie was created.
   */
  domain?: string;

  /**
   * A Boolean indicating if the cookie transmission requires a
   * secure protocol (https). Defaults to false.
   */
  secure?: boolean;

  /**
   * Asserts that a cookie must not be sent with cross-origin requests,
   * providing some protection against cross-site request forgery
   * attacks (CSRF)
   * https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite
   */
  sameSite?: "strict" | "Strict" | "lax" | "Lax" | "none" | "None";
}

/**
 * Get a cookie
 * @param key Cookie key
 * @returns Value
 */
export function get(key: string): string | undefined {
  return Cookies.get(key);
}

/**
 * Set a cookie
 * @param {string} key - Cookie key
 * @param {string} value - Value to set
 * @param {SetCookieOptions} options - Options for the cookie
 */
export function set(
  key: string,
  value: string,
  options: SetCookieOptions
): string | undefined {
  return Cookies.set(key, value, options);
}

/**
 * Remove a cookie
 * @param {string} key Cookie key to be removed
 */
export function remove(key: string): void {
  Cookies.remove(key);
}
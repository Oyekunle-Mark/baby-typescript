/**
 * Works quite similarly to react hooks.
 * @param {any} initialValue
 * @returns {dynamic functions} get, set
 */

export default function useState(initialValue: any): object {
  let val = initialValue;

  const get = () => val;
  const set = newVal => (val = newVal);

  return Object.freeze([ get, set ]);
}

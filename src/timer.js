export const interval = (fun, timeout = 5 * 1000) => {
  fun();
  return setInterval(() => {
    fun();
  }, timeout);
};
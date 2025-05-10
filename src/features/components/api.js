export async function fetchBio(person, signal) {
  const delay = person === "Bob" ? 2000 : 200;

  return new Promise((resolve, reject) => {
    // Handle abortion
    if (signal.aborted) {
      reject(new DOMException("Aborted", "AbortError"));
      return;
    }

    const timeoutId = setTimeout(() => {
      resolve(`This is ${person}’s bio.`);
    }, delay);

    // Listen for abort signal and cancel timeout
    signal.addEventListener("abort", () => {
      clearTimeout(timeoutId); // ✅ Cancels the pending timeout
      reject(new DOMException("Aborted", "AbortError")); // ✅ Reject the promise
    });
  });
}

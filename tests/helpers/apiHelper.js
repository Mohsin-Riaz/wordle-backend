const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

let lastCallTime = 0;
const DELAY = 1000; // 1 second delay between calls

async function rateLimitedRequest(requestFn) {
    const now = Date.now();
    const timeSinceLastCall = now - lastCallTime;

    if (timeSinceLastCall < DELAY) {
        await sleep(DELAY - timeSinceLastCall);
    }

    try {
        const response = await requestFn();
        lastCallTime = Date.now();
        return response;
    } catch (error) {
        if (error.status === 429) {
            await sleep(DELAY * 2);
            lastCallTime = Date.now();
            return await requestFn();
        }
        throw error;
    }
}

module.exports = { rateLimitedRequest };

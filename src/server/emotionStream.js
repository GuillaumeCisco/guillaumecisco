
import {Transform} from 'stream';
import createCache from '@emotion/cache';

/**
 * Creates a per-request Emotion cache + a Transform stream that injects
 * critical <style> tags inline as React streams HTML chunks.
 *
 * @returns {{ cache: EmotionCache, transform: Transform }}
 */
export const createEmotionStream = () => {
    const cache = createCache({key: 'css'});
    const flushed = new Set();

    const transform = new Transform({
        transform(chunk, _encoding, callback) {
            const html = chunk.toString();
            let styleTags = '';

            for (const key in cache.inserted) {
                if (flushed.has(key)) continue;
                const css = cache.inserted[key];
                if (typeof css === 'string') {
                    flushed.add(key);
                    styleTags += `<style data-emotion="${cache.key} ${key}">${css}</style>`;
                }
            }

            callback(null, styleTags + html);
        },
    });

    return {cache, transform};
};


import {Transform} from 'stream';
import createEmotionServer from '@emotion/server/create-instance';
import createCache from '@emotion/cache';

/**
 * Creates a per-request Emotion cache + a Transform stream that injects
 * critical <style> tags inline as React streams HTML chunks.
 *
 * @returns {{ cache: EmotionCache, transform: Transform }}
 */
export const createEmotionStream = () => {
    const cache = createCache({key: 'css'});
    const {constructStyleTagsFromChunks, extractCriticalToChunks} = createEmotionServer(cache);
    const flushedIds = new Set();

    const transform = new Transform({
        transform(chunk, _encoding, callback) {
            const html = chunk.toString();
            const styleChunks = extractCriticalToChunks(html);
            const newStyles = styleChunks.styles.filter(s => {
                const id = s.key + s.ids.join('');
                if (flushedIds.has(id)) return false;
                flushedIds.add(id);
                return true;
            });
            const styleTags = constructStyleTagsFromChunks({html: '', styles: newStyles});
            callback(null, styleTags + html);
        },
    });

    return {cache, transform};
};

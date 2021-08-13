import { URL, PostData } from "../types";

export const post = (url: URL, data: PostData) =>
    fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })

export const concatPath = (baseHost: URL, relPath: string) => baseHost + '/' + relPath;
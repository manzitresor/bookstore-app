function getImgUrls(name: string) {
    return new URL(`../assets/books/${name}`, import.meta.url)
}

export { getImgUrls }
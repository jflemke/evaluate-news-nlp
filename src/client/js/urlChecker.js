function isValidURL(inputText) {
    // RegEx from https://codegolf.stackexchange.com/questions/464/shortest-url-regex-match-in-javascript
    return /.+\.\w\w.*/.test(inputText);
}

export { isValidURL }

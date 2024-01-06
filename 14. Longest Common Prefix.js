/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strings) {
    if (strings.length === 0) {
        return "";
    }

    // Assume the first string as the initial common prefix
    let commonPrefix = strings[0];

    for (let i = 1; i < strings.length; i++) {
        let j = 0;

        // Compare characters of the current string with the common prefix
        while (j < commonPrefix.length && j < strings[i].length && commonPrefix[j] === strings[i][j]) {
            j++;
        }

        // Update the common prefix based on the comparison
        commonPrefix = commonPrefix.slice(0, j);

        // If the common prefix becomes empty, no need to check further
        if (commonPrefix === "") {
            break;
        }
    }

    return commonPrefix;
}

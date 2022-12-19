// Given a string columnTitle that represents the column title as
// appears in an Excel sheet, return its corresponding column number.

/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
    const len = columnTitle.length;
    let colNum = 0;
    for (let i = 0; i < len; i++) {
        let charCode = columnTitle.charCodeAt(i) - 64;
        colNum += charCode * (26 ** (len - i - 1));
    }
    return colNum;
};

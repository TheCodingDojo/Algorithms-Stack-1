/* 
  Book Index

  Given [1, 13, 14, 15, 37, 38, 70] which represent page numbers
  return string "1, 13-15, 37-38, 70"
*/

function bookIndex(pageNums) {
  let formattedPageNums = "";
  let pageRangeStartIdx = 0;

  for (let i = 0; i < pageNums.length; ++i) {
    let currentPageNum = pageNums[i];
    let nextPageNum = pageNums[i + 1];
    let pageRangeStopIdx = i;

    // page range is not sequential
    if (currentPageNum + 1 !== nextPageNum) {
      // single page, no range
      if (pageRangeStartIdx === pageRangeStopIdx) {
        formattedPageNums += currentPageNum;
      }
      // we have a page range
      else {
        formattedPageNums += `${pageNums[pageRangeStartIdx]}-${pageNums[pageRangeStopIdx]}`;
      }
      // add comma, except on the last iteration
      if (i !== pageNums.length - 1) {
        formattedPageNums += ", ";
      }
      
      // Since we've added a page range
      // need to get start idx set up for next page range
      pageRangeStartIdx = i + 1;
    }
  }
  return formattedPageNums;
}
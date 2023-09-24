/**
 * 주어진 문자열에서 스니펫을 추출합니다.
 * @param content 추출할 문자열
 * @param keyword 검색할 키워드 (옵션)
 * @param snippetLength 스니펫의 최대 길이 (기본값: 100)
 * @returns 추출된 스니펫 문자열
 */
export const getContentSnippet = (content: string, keyword?: string, snippetLength = 100) => {
  // 키워드가 주어지지 않은 경우, 처음 100자를 반환
  if (!keyword) return content.slice(0, snippetLength);

  let startIndex = 0;
  const keywordLength = keyword.length;

  while (startIndex < content.length) {
    const chunk = content.slice(startIndex, startIndex + snippetLength - keywordLength);
    const keywordIndex = chunk.indexOf(keyword);

    if (keywordIndex === -1) {
      startIndex += snippetLength;
    } else {
      // 키워드가 발견되면 해당 스니펫을 반환
      return chunk;
    }
  }

  // 키워드를 찾지 못하면 처음 100자를 반환
  return content.slice(0, snippetLength);
};

/**
 * 문자열의 길이가 길 경우 말줄임표를 붙여 반환합니다.
 * @param content 추출할 문자열
 * @param maxLength 최대 길이 (기본값: 6)
 * @returns 추출된 문자열
 */
export const truncateContent = (content: string, maxLength: number = 6) => {
  return content.length > maxLength ? content.slice(0, maxLength) + '...' : content;
};

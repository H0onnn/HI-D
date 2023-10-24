/**
 * 함수를 디바운스합니다.
 * @param callback
 * @param delay
 * @returns 디바운스 함수
 * @description
 * 이 함수는 주어진 시간동안 새로운 함수가 호출되지 않으면 마지막으로 호출된 함수를 실행합니다.
 * 예를 들어, 1초의 딜레이를 주고 1초 동안 새로운 함수가 호출되지 않으면 마지막으로 호출된 함수를 실행합니다.
 */
export const debounce = <T extends unknown[]>(callback: (...args: T) => void, delay: number) => {
  let timeoutId: ReturnType<typeof setTimeout>;

  return (...args: T) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => callback(...args), delay);
  };
};

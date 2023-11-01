export const REPORT_CATEGORIES = [
  '욕설/비방 및 개인정보 노출',
  '음란성 및 청소년에게 부적절한 내용',
  '불쾌감 및 분란 유발',
  '잘못된 정보 제공',
] as const;

export type ReportKeys = (typeof REPORT_CATEGORIES)[number];

export const reportToEnglishMapping: Record<ReportKeys, string> = {
  '욕설/비방 및 개인정보 노출': 'PROFANITY',
  '음란성 및 청소년에게 부적절한 내용': 'PORNOGRAPHY',
  '불쾌감 및 분란 유발': 'DISCOMFORT',
  '잘못된 정보 제공': 'WRONG_INFO',
} as const;

export const reportToKoreanMapping: Record<string, ReportKeys> = {
  PROFANITY: '욕설/비방 및 개인정보 노출',
  PORNOGRAPHY: '음란성 및 청소년에게 부적절한 내용',
  DISCOMFORT: '불쾌감 및 분란 유발',
  WRONG_INFO: '잘못된 정보 제공',
} as const;

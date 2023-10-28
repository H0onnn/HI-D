import { TagInterface } from '@/types/post';
import { LINK } from './links';

export const tabList = [
  { id: 1, name: '도움이 필요해요', category: 'NEED_HELP', link: LINK.POST_HELP },
  { id: 2, name: '자유게시판', category: 'FREE', link: LINK.POST_FREE },
];

export const freePostTagList: TagInterface[] = [
  { id: 0, name: '전체', en: '' },
  { id: 1, name: '연애', en: 'LOVE' },
  { id: 2, name: '일상', en: 'DAILY' },
  { id: 3, name: '같이해요', en: 'TOGETHER' },
  { id: 4, name: '맛집', en: 'RESTAURANT' },
  { id: 5, name: '잡담', en: 'CHITCHAT' },
];

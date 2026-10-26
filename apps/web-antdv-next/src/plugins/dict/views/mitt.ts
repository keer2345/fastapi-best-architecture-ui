import type { ID } from '#/types';

import mitt from 'mitt';

type Events = {
  rowClick: ID;
};

export const emitter = mitt<Events>();

/**
 *
 * Asynchronously loads the component for FamilyTree
 *
 */

import { lazyLoad } from 'utils/loadable';

export const FamilyTree = lazyLoad(
  () => import('./index'),
  module => module.FamilyTree,
);

import type { Block } from 'payload';
import { CTABlock } from '../CTA/config';

export const CTACenteredBlock: Block = {
  ...CTABlock,
  slug: 'ctaCenteredBlock',
  interfaceName: 'CTACenteredBlock',
  labels: {
    singular: 'CenteredCTA',
    plural: 'CenteredCTAs'
  }
}
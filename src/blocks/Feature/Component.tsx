import React from 'react';

import type { FeatureBlock as FeatureBlockProps } from '@/payload-types';
import { Media } from '@/components/Media';
import { Card, CardContent, CardTitle, CardHeader, CardDescription, CardFooter } from '@/components/ui/card';

export const FeatureBlock: React.FC<FeatureBlockProps> = (props) => {
  console.log(props);
  
  return(
    <Card>
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{props.description}</CardDescription>
      { props.image && <Media resource={props.image} size="small" />}
      </CardContent>
    </Card>
  )
}
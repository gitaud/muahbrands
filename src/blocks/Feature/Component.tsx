import React from 'react';

import type { FeatureBlock as FeatureBlockProps } from '@/payload-types';
import { Media } from '@/components/Media';
import { Card, CardContent, CardTitle, CardHeader, CardDescription, CardFooter } from '@/components/ui/card';


export const FeatureBlock: React.FC<FeatureBlockProps> = (props) => {

  
  return(
    <div className="container py-16">
      {
        props.features?.map(feature => (
          <Card className="my-2 " key={feature.id}>
            <CardHeader>
              <CardTitle>{feature.feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{feature.feature.description}</CardDescription>
            { feature.feature.image && <Media resource={feature.feature.image} size="small" />}
            </CardContent>
          </Card>
        ))
      }
    </div>
  )
}
import React from 'react';

import type { FeatureBlock as FeatureBlockProps } from '@/payload-types';
import { Media } from '@/components/Media';
import { Card, CardContent, CardTitle, CardHeader, CardDescription } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

export const FeatureBlock: React.FC<FeatureBlockProps> = (props) => {

  
  return(
    <div className="bg-oasis">
      <div className="container py-8 lg:py-16 lg:flex gap-2 lg:gap-4 flex-wrap">
        {
          props.features?.map(feature => (
            <Card className="my-2" key={feature.id}>
              <CardHeader>
                <Sparkles className="mb-2" />
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
    </div>
  )
}
// Este arquivo possui mais informação do que o necessário, alguns dos imports não estão disponíveis no projeto


import Feature from 'ol/Feature';
import LineString from 'ol/geom/LineString';
import { Stroke, Style } from 'ol/style';
import { useCallback } from 'react';

import { useMap } from './MapContext/index';

interface AddPinProps {
  coordinates: number[];
}

export function useDirections() {
  const storageKey = '@terraplanner:directions';
  const { directionsLayer } = useMap();
  const source = directionsLayer.getSource()!;

  const addDirection = useCallback(
    ({coordinates }: AddPinProps) => {

      const lineString = new LineString(coordinates);
      lineString.transform('EPSG:4326', 'EPSG:3857');

      const direction = new Feature(lineString);
      direction.setStyle(
        new Style({
          stroke: new Stroke({ color: [255, 0, 0, 1], width: 5 })
        })
      );

      const formattedDirection = {
        color: [255, 0, 0, 1],
        opacity: 1
      };


      source.addFeature(direction);

      return formattedDirection;
    },
    [source]
  );

  return {
    addDirection,
  };
}

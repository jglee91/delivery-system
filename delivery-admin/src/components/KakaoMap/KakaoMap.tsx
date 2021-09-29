import { useEffect, useRef } from 'react';
import { Wrapper } from './KakaoMap.styles';

interface KakaoMapProps {}

const KakaoMap: React.FC<KakaoMapProps> = () => {
  const $map = useRef(null);

  useEffect(() => {
    if (window.kakao && window.kakao?.maps) {
      initMap();
    } else {
      const script = document.createElement('script');
      script.onload = () => kakao.maps.load(initMap);
      script.src = `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&libraries=services&appkey=${process.env.KAKAO_JS_KEY}`;
      document.head.appendChild(script);
    }
  }, []);

  const initMap = () => {
    if ($map.current) {
      const map = new kakao.maps.Map($map.current, {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
      });
    }
  };

  return <Wrapper ref={$map}>Kakao Map</Wrapper>;
};

export default KakaoMap;

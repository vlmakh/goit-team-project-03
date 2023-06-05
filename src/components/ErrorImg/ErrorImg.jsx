import error_sm_1x from 'images/error/error-sm-1x.webp';
import error_sm_2x from 'images/error/error-sm-2x.webp';

import error_md_1x from 'images/error/error-md-1x.webp';
import error_md_2x from 'images/error/error-md-2x.webp';

import error_lg_1x from 'images/error/error-lg-1x.webp';
import error_lg_2x from 'images/error/error-lg-2x.webp';

import { Img } from './ErrorImg.styled';

const ErrorImg = () => {
  return (
    <Img
      srcSet={`${error_sm_1x} 280w, ${error_sm_2x} 560w, ${error_md_1x} 704w, ${error_md_2x} 1408w, ${error_lg_1x} 822w, ${error_lg_2x} 1644w`}
      src={`${error_sm_1x}`}
      sizes="(min-width: 1280px) 1644px, (min-width: 1280px) 822px, (min-width: 768px) 1408px, (min-width: 768px) 704px,  100vw"
      alt="not found page"
      loading="lazy"
    />
  );
};

export default ErrorImg;

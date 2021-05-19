import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
const ImgLink = ({ href, img, alt, height, width }) => {
  return (
    <>
      <Link href={href} passHref>
        <a href={href}>
          <Image src={img} alt={alt} height={height} width={width} />
        </a>
      </Link>
      <style jsx>
        {`
          .ImgLink-root {
            position: relative;
          }
        `}
      </style>
    </>
  );
};

export default ImgLink;

import React from 'react';
import { Oval } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <>
      <Oval
        height={80}
        width={80}
        color="#4fa94d"
        wrapperStyle={{
          position: 'fixed',
          bottom: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
          zIndex: '100',
        }}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#4fa94d"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </>
  );
};

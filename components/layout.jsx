import React from 'react';
import {useRouter} from 'next/router';

function Layout({children}) {
  const router = useRouter();

  const images = [
    {
      src: '/images/mml-logo.webp',
      alt: 'MML Logo',
      popup: null,
      showOnPages: [], // Show on all pages
    },
    {
      src: '/images/search.webp',
      alt: 'Search',
      popup: null,
      showOnPages: ['book', 'list'], // Show on specific page
    },
    {
      src: '/images/account.webp',
      alt: 'Account',
      popup: null,
      showOnPages: ['book', 'list'], 
    },
  ];

  const renderPopup = (popupContent) => {
    return <div>{popupContent}</div>;
  };

  const shouldShowImage = (image) => {
    const currentPage = router.pathname.replace('/', ''); // Get the current page name
    return (
      image.showOnPages.length === 0 || // Show on all pages
      image.showOnPages.includes(currentPage) // Show on specific pages
    );
  };

  const filteredImages = images.filter(shouldShowImage);

  const renderHeader = () => {
    const imageContainerStyle = {
        display: 'flex',
      };
    
      const imageStyles = [
        {
          width: '10em',
          height: 'auto',
          paddingLeft: '2em',
        },
        {
          width: '5em',
          height: 'auto',
          marginLeft: '62em',
          marginBottom: '1.4em',
          objectFit: 'contain', 
        },
        {
          width: '5em',
          height: 'auto',
          marginLeft: '1em',
          marginBottom: '1.5em',
          objectFit: 'contain',
        },
      ];

      return (
        <header>
          <div style={imageContainerStyle}>
            {filteredImages.map((image, index) => {
              if (filteredImages.length === 1) {
                // Handle case when there's only one image
                return (
                  <React.Fragment key={image.src}>
                    <img {...image}
                      style={{ ...imageStyles[index]}}
                    />
                    {image.popup && renderPopup(image.popup)}
                  </React.Fragment>
                );
              } else {
                // Handle case when there are multiple images
                return (
                  <React.Fragment key={image.src}>
                    <img {...image}
                      style={imageStyles[index]}
                    />
                    {image.popup && renderPopup(image.popup)}
                  </React.Fragment>
                );
              }
            })}
          </div>
        </header>
      );
    };

  return (
    <div>
      {renderHeader()}
      {children}
    </div>
  );
}

export default Layout;

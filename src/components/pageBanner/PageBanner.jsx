import React from "react";
import { styled } from "@mui/material/styles";
// import { Rerousel } from "rerousel";
import { Carousel } from "react-carousel-minimal";
import { Typography, Skeleton } from "@mui/material";
// import * as appColor from '../../settings/appColor'

const BannerContainer = styled('div')(
  ({theme}) => ({

  }) 
)

const PageBanner = ({ games, sx }) => {
  // const slidingImageRef = useRef(null);
  // console.log(games.data.results);

  const renderSlidingImage = () => {
    if (games.loading || !games.data?.results?.length) {
      if (games.data.results?.length === 0)
        return <Typography>Data Not Found</Typography>;
      return (
        <Skeleton variant="rectangular" width="100%" height="500px" sx={{
          borderRadius: '10px'
        }}/>
      );
    } else {
      // console.log('from page baner',games.data.results[0].backround_image)
      const data = games.data.results.map(game => {
        return (
          {
            image: game.background_image,
            caption: game.name
          }
        )
      })
      const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
      }
      const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
      }
      return (
        <BannerContainer sx={{
          position: 'relative'
        }}>
          {/* <Typography variant='h2' color={appColor.secondaryYellow} sx={{
            position: 'absolute',
            top: 20,
            left: 20,
            zIndex: 3000,
            fontWeight: 'bold',
            fontFamily: 'Bebas Neue',
            
          }}>
            SOME TEXT
          </Typography> */}
          <Carousel
            data={data}
            time={5000}
            width="100%"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={false}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={false}
            // thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "100%",
              maxHeight: "500px",
              filter: 'grayscale(50%)'
              // margin: "40px auto",
            }}
          />
          {/* <Rerousel itemRef={slidingImageRef}>
            {games.data.results.map((game) => (
              <SlidingImage
                key={game.id}
                ref={slidingImageRef}
                src={game.background_image}
              />
            ))}
          </Rerousel> */}
        </BannerContainer>
      );
    }
  };

  return <>{renderSlidingImage()}</>;
};

export default PageBanner;

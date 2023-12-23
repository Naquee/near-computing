import { Box } from "@chakra-ui/react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import photo from "../../assets/laptop.jpg";
import hsc from "../../assets/hsc.jpg";
import hsc1 from "../../assets/hsc1.jpg";
import hsc2 from "../../assets/hsc2.jpg";
import hsc3 from "../../assets/hsc3.jpg";
// import hsc4 from "../../assets/hsc4.jpg";


const homeCarasole = [
  {
    id: 1,
    imgUrl: hsc,
  },
  {
    id: 2,
    imgUrl: hsc1,
  },
  {
    id: 3,
    imgUrl: hsc2,
  },
  {
    id: 4,
    imgUrl: hsc3,
  },
 
];

const Carasole = () => {
  return (
    <Box mt="4rem" w="100%" 
    bg="#fffafa"
    // bg="blue.100"
    mb="1rem"

    >
      <Swiper
        slidesPerView={1}
        // spaceBetween={30}
        loop={true}
        pagination={{
          clickable: false,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={false}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {homeCarasole?.map((item, index) => {
          return (
            <SwiperSlide key={index} sx={{ width: "100%" }}>
              <Box width="90%" m="auto">
                <Image
                  src={item.imgUrl}
                  layout="intrinsic"
                  width="100%"
                  height="100%"
                  alt="caraslole"
                  objectFit="full"
                />
              </Box>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
};

export default Carasole;

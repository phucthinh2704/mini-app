import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import "./PhotosStyles.css";
const getRandomPhotos = async (page) => {
     try {
          const response = await axios.get(
               `https://picsum.photos/v2/list?page=${page}&limit=8`
          );
          return response.data;
     } catch (error) {
          console.log(error);
     }
};

const StyledContainer = styled.div`
     display: grid;
     /* grid-template-columns: repeat(4, 1fr); */
     grid-template-columns: auto auto auto auto;
     grid-gap: 25px;
     padding: 10px;
`;

const StyledItemPhoto = styled.div`
     padding: 12px;
     background-color: #ffa400;
     box-shadow: 3px 4px 3px black;
     border-radius: 20px;
`;

const StyledImg = styled.img`
     width: 100%;
     object-fit: cover;
`;

const StyledButtonLoad = styled.button`
     display: block;
     padding: 12px 18px;
     background-color: purple;
     color: white;
     font-size: 18px;
     font-weight: bold;
     margin: 0 auto;
     cursor: pointer;
`;

// https://picsum.photos/v2/list
// https://picsum.photos/v2/list?page=2&limit=100
const Photos = () => {
     const [randomPhotos, setRandomPhotos] = useState([]);
     const [nextPage, setNextPage] = useState(1);

     const handleLoadMorePhotos = async () => {
          const images = await getRandomPhotos(nextPage);
          const newPhotos = [...randomPhotos, ...images];
          setRandomPhotos(newPhotos);
          setNextPage(nextPage + 1);
     };

     useEffect(() => {
          handleLoadMorePhotos();
     }, []);
     return (
          <div>
               <StyledContainer>
                    {randomPhotos.map((item, index) => {
                         return (
                              <StyledItemPhoto key={item.download_url}>
                                   <StyledImg
                                        src={item.download_url}
                                        alt={item.author}
                                   />
                              </StyledItemPhoto>
                         );
                    })}
               </StyledContainer>
               <StyledButtonLoad onClick={handleLoadMorePhotos}>
                    Load More
               </StyledButtonLoad>
          </div>
     );
};

export default Photos;

import React, { useState } from 'react';
import AmenitiesStyles from "../styles/AmenitiesStyles";
import Image from "./Image";
// import { MdClose } from 'react-icons/md';
// import clsx from 'clsx';
// import HeaderStyles from '../styles/HeaderStyles';
// import { menu } from '../constants/menu';
// import Logo from './Logo';
// import ActionButton from './buttons/ActionButton';
// import Button from './buttons/Button';



const Amenities = ({apartmentAmenities, communityAmenities}) => {

    // const data = useStaticQuery (
    //     graphql`
    //         query  {
    //             allContentfulIcons {
    //                 edges {
    //                   node {
    //                     title
    //                     image {
    //                       gatsbyImageData
    //                       url
    //                     }
    //                   }
    //                 }
    //               }
    //             }
    //     `
    // );
    // const amenitiesData = data.allContentfulNavigationHeader.edges[0].node;
    const communityAmenitiesList = communityAmenities.map((amenity) => (
        
        <div className="amenity-list-item">
            <div className="icon-container">
                {/* <img src={amenity.node.image.url} altText={amenity.node.title}></img> */}
               <Image file={amenity.image.file} svg={amenity.image.svg} alt={amenity.title} cssClass={"amenity-icon-svg"}></Image> 
            </div>
            <div className="text-container">
                <p>{amenity.title}</p>
            </div>
          
        </div>
        
      ))
      

    const apartmentAmenitiesList = apartmentAmenities.map((amenity) => (
        
        <div className="amenity-list-item">
            <div className="icon-container">
                {/* <img src={amenity.node.image.url} altText={amenity.node.title}></img> */}
               <Image file={amenity.image.file} svg={amenity.image.svg} alt={amenity.title} cssClass={"amenity-icon-svg"}></Image> 
            </div>
            <div className="text-container">
                <p>{amenity.title}</p>
            </div>
          
        </div>
        
      ))

 

  return (
    <AmenitiesStyles>
        <section className="border-top">
        <div className="h1 amenity-list-title">Community Amenities</div>
        <div className="amenities-list-container">
         
            {communityAmenitiesList}
        </div>
        <div className="h1 amenity-list-title">Apartment Amenities</div>
        <div className="amenities-list-container">
          
            {apartmentAmenitiesList}
        </div>
    
        </section>
    </AmenitiesStyles>  
    )
}; 

export default Amenities;


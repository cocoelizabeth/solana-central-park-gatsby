import React from 'react';
import Image from "./Image";
import AccordianStyles from "../styles/AccordianStyles";
import AccordianItem from "./AccordianItem";

// import { MdClose } from 'react-icons/md';
// import clsx from 'clsx';
// import HeaderStyles from '../styles/HeaderStyles';
// import { menu } from '../constants/menu';
// import Logo from './Logo';
// import ActionButton from './buttons/ActionButton';
// import Button from './buttons/Button';



const Accordian = ({keyHighlights, introTextBody, apartmentAmenities, communityAmenities, faqs}) => {

      
    const communityAmenitiesList = communityAmenities.map((amenity) => (
        
        <div className="amenity-list-item">
            <div className="icon-container">
                {/* <img src={amenity.node.image.url} altText={amenity.node.title}></img> */}
               <Image file={amenity.image.file} svg={amenity.image.svg} alt={amenity.title} cssClass="amenity-icon-svg"></Image> 
            </div>
            <div className="text-container">
                <div>{amenity.title}</div>
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
                <div>{amenity.title}</div>
            </div>
          
        </div>
        
      ))

      const accordianData = [
        {
            title: "Overview",
            content: keyHighlights,
        },
        {
            title: "About",
            content: introTextBody
        },
        {
            title: "Amenities",
            content: {
                communityAmenities: {
                    title: "Community Amenities",
                    content: communityAmenitiesList,
                },
                apartmentAmenities: {
                    title: "Apartment Amenities",
                    content: apartmentAmenitiesList
                }
            }
        },
        {
            title: "FAQs",
            content: faqs 
        }

    ]

    const accordianHtml = accordianData.map((data,index) => (

       <AccordianItem data={accordianData[index]} index={index} key={data.title}/>
    ))

 

  return (
    <AccordianStyles>
        <ul className="accordian-container">
 
            {accordianHtml}
        </ul>
    {/* <div className="ac-container">
        <div key="keyHighlights">
            <input id="ac-1" name="accordion-1" type="checkbox" checked/>
            <label className="h2" for="ac-1">Quick Highlights</label>
            <article className="ac-large key-highlights">
                {keyHighlights}
            </article>
        </div>
        <div>
            <input id="ac-2" name="accordion-1" type="checkbox" />
            <label className="h2" for="ac-2 about">About</label>
            <article className="ac-medium">
                {introTextBody}
            </article>
        </div>
    </div> */}

    {/* <div className="ac-container">
        <div>
            <input id="ac-1" name="accordion-1" type="checkbox" checked/>
            <label className="h2" for="ac-1">Quick Highlights</label>
            <article className="ac-large key-highlights">
                {keyHighlights}
            </article>
        </div>
        <div>
            <input id="ac-2" name="accordion-1" type="checkbox" />
            <label className="h2" for="ac-2 about">About</label>
            <article className="ac-medium">
                {introTextBody}
            </article>
        </div>
    </div>
        <section className="border-top">
        <div className="h1 amenity-list-title">Community Amenities</div>
        <div className="amenities-list-container">
         
            {communityAmenitiesList}
        </div>
        <div className="h1 amenity-list-title">Apartment Amenities</div>
        <div className="amenities-list-container">
          
            {apartmentAmenitiesList}
        </div>
    
        </section> */}
    </AccordianStyles>  
    )
}; 

export default Accordian;


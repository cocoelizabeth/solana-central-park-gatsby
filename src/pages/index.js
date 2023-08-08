import React, { useEffect, useRef, useState } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import {renderRichText} from 'gatsby-source-contentful/rich-text'
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types'
import { GatsbyImage, getImage, getSrc, getSrcSet} from 'gatsby-plugin-image'

import HomepageStyles from "../styles/HomepageStyles"


import '../css/styles.css';
import Image from "../components/Image";
import Marquee from "../components/Marquee";
import Amenities from "../components/Amenities";
import Accordian from "../components/Accordian";

export default function Home() {
  const options = {
    renderMark: {
        [MARKS.BOLD]: (text) => <b>{text}</b>,
        [MARKS.ITALIC]: (text, key) => <em key={key}>{text}</em>,
        [MARKS.UNDERLINE]: (text, key) => <u key={key}>{text}</u>,
        [MARKS.CODE]: (text, key) => <code>{text}</code>
    },
    renderNode: {
        [INLINES.HYPERLINK]: (node, children) => {
            const { uri } = node.data
            return (
                <a href={uri} className="underline">
                    {children}
                </a>
            )
        },
        [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
        [BLOCKS.HEADING_1]: (node, key, next) => <h1>{next(node.content, key, next)}</h1>,
        [BLOCKS.HEADING_2]: (node, key, next) => <h2>{next(node.content, key, next)}</h2>,
        [BLOCKS.HEADING_3]: (node, key, next) => <h3>{next(node.content, key, next)}</h3>,
        [BLOCKS.HEADING_4]: (node, key, next) => <h4>{next(node.content, key, next)}</h4>,
        [BLOCKS.HEADING_5]: (node, key, next) => <h5>{next(node.content, key, next)}</h5>,
        [BLOCKS.HEADING_6]: (node, key, next) => <h6>{next(node.content, key, next)}</h6>,
        [BLOCKS.UL_LIST]: (node, children) => (<ul>{children}</ul>),
        [BLOCKS.OL_LIST]: (node, children) => (<ol>{children}</ol>),
        [BLOCKS.LIST_ITEM]: (node, children) => <li className="careers-bullets">{children}</li>,
    }
  }

  const data = useStaticQuery (
    graphql`
        query  {
          allContentfulPageLandingPage {
            edges {
              node {
                seoDescription {
                  seoDescription
                }
                heroGallery {
                  gatsbyImageData
                  file {
                    contentType
                    url
                  }
                  description
                }
                keyHighlights {
                  raw
                }
                introTextBody {
                  raw
                }
                pageTitle
                slug
              }
            }
          }
          allContentfulPageAmenities {
            edges {
              node {
                apartmentAmenities {
                  title
                  image {
                    gatsbyImageData
                    url
                    svg {
                      absolutePath
                      content
                      dataURI
                      originalContent
                      relativePath
                    }
                    file {
                      url
                      contentType
                    }
                  }
                }
                communityAmenities {
                  title
                  image {
                    gatsbyImageData
                    url
                    svg {
                      absolutePath
                      content
                      dataURI
                      originalContent
                      relativePath
                    }
                    file {
                      url
                      contentType
                      
                    }
                  }
                }
              }
            }
          }
        }
        
    `
);



const homepageData = data.allContentfulPageLandingPage.edges[0].node;
const seoDescription = homepageData.seoDescription.seoDescription;
const heroGalleryArray = homepageData.heroGallery;
const mainHeroImageSrcSet = homepageData.heroGallery[0].gatsbyImageData.images.sources[0].srcSet;
const mainHeroImageSrc = homepageData.heroGallery[0].gatsbyImageData.images.fallback.src;
const introTextBody = homepageData.introTextBody;
const keyHighlights = homepageData.keyHighlights;
const pageTitle = homepageData.pageTitle;
const slug = homepageData.slug;
// const amenitiesData = data.allContentfulIcons.edges
const apartmentAmenitiesData = data.allContentfulPageAmenities.edges[0].node.apartmentAmenities;
const communityAmenitiesData = data.allContentfulPageAmenities.edges[0].node.communityAmenities;
const gatsbyImageData = homepageData.heroGallery[0].gatsbyImageData
const file = homepageData.heroGallery[0].file;
const altText = homepageData.heroGallery[0].seoDescription;




  return (
    <HomepageStyles>

      <div className="hero-image-container fade-in">
        {/* <Image gatsbyImageData={gatsbyImageData} file={file} ></Image> */}
        <img src={mainHeroImageSrc} srcSet={mainHeroImageSrcSet} className="hero-image" alt={altText}></img>
       
        {/* <div className="black-background"></div>
        <span className="h1">New Denver Luxury Apartments. Leasing 2024</span> */}

      </div>
      <Marquee text="Studio, 1, and 2 Bedroom Luxury Apartments. Coming 2024."/>
      <Accordian 
        keyHighlights = {renderRichText(keyHighlights, options)}
        introTextBody = {renderRichText(introTextBody, options)}
        apartmentAmenities={apartmentAmenitiesData} 
        communityAmenities={communityAmenitiesData}
      />
      {/* <section className="border-top">
        <div className="h1 section-title">Quick Info</div>
        <div className="body-copy-container fade-in key-highlights">
          {renderRichText(keyHighlights, options)}
        </div>
      </section>
      <section className="border-top">
        <div className="body-copy-container fade-in">
        {renderRichText(introTextBody, options)}
        </div>

      </section>
      <Amenities apartmentAmenities={apartmentAmenitiesData} communityAmenities={communityAmenitiesData} /> */}
     
    </HomepageStyles>
  )
}


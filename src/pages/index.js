import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import {renderRichText} from 'gatsby-source-contentful/rich-text'
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types'
// import { GatsbyImage, getImage, getSrc, getSrcSet} from 'gatsby-plugin-image'
import HomepageStyles from "../styles/HomepageStyles";

import Marquee from "../components/Marquee";

import Accordian from "../components/Accordian";

import Image from "../components/Image";
import Amenities from "../components/Amenities";

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
// const heroGalleryArray = homepageData.heroGallery;
const mainHeroImageSrcSet = homepageData.heroGallery[0].gatsbyImageData.images.sources[0].srcSet;
const mainHeroImageSrc = homepageData.heroGallery[0].gatsbyImageData.images.fallback.src;
const introTextBody = homepageData.introTextBody;
const keyHighlights = homepageData.keyHighlights;
const pageTitle = homepageData.pageTitle;
// const slug = homepageData.slug;
// const amenitiesData = data.allContentfulIcons.edges
const apartmentAmenitiesData = data.allContentfulPageAmenities.edges[0].node.apartmentAmenities;
const communityAmenitiesData = data.allContentfulPageAmenities.edges[0].node.communityAmenities;

const altText = homepageData.heroGallery[0].description;

const gatsbyImageData = homepageData.heroGallery[0].gatsbyImageData
const file = homepageData.heroGallery[0].file;




  return (
    <HomepageStyles>

      <div className="hero-image-container fade-in">
        {/* <Image gatsbyImageData={gatsbyImageData} file={file} ></Image> */}
        <img src={mainHeroImageSrc} srcSet={mainHeroImageSrcSet} className="hero-image" alt={altText}></img>
       
        {/* <div className="black-background"></div>
        <span className="h1 gold-2">COMING SOON</span> */}

      </div>
      <Marquee text="Studio, 1, and 2 Bedroom Luxury Apartments. Coming 2024."/>
      <Accordian 
        keyHighlights = {renderRichText(keyHighlights, options)}
        introTextBody = {renderRichText(introTextBody, options)}
        apartmentAmenities={apartmentAmenitiesData} 
        communityAmenities={communityAmenitiesData}
      />
     
    </HomepageStyles>
  )
}

export function Head() {
  return (
    <>
    <title>Home | Solana Central Park Apartments </title>
    <meta name="description" content="Located in Denver’s charming Central Park neighborhood (formerly Stapleton), and just a 15 minute drive from downtown Denver, Solana Central Park features 307 pet-friendly, rental apartments. Residents can choose from nine different floor plans that range from studios, one-bedroom, and two-bedroom options.

With over 22,000 square feet of curated amenities, Solana Central Park offers a resort-style swimming pool and spa with shaded cabanas, an indoor/outdoor health and fitness center with private workout studios, and a coworking space with individual workspaces and conference rooms. Other useful amenities include a pet spa, resident parcel pending, on-site management, bike storage and repair facilities, gated garage parking, and EV charging stations. Set against the stunning backdrop of the Colorado Rocky mountains, residents will also enjoy access to over 1,000 acres of nearby parks and open space, coupled with 60 miles of biking and walking trails." />
    </>
  )
}


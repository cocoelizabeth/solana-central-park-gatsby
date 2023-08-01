import * as React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import {renderRichText} from 'gatsby-source-contentful/rich-text'
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types'
import { GatsbyImage, getImage, getSrc, getSrcSet} from 'gatsby-plugin-image'
import HomepageStyles from "../styles/HomepageStyles"
import Amenities from "../components/Amenities"
import Image from "../components/Image"

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

//   const data = useStaticQuery (
//     graphql`
//         query  {
//           allContentfulPageLandingPage {
//             edges {
//               node {
//                 seoDescription {
//                   seoDescription
//                 }
//                 heroGallery {
//                   gatsbyImageData
//                 }
//                 introTextBody {
//                   raw
//                 }
//                 pageTitle
//                 slug
//               }
//             }
//           }
//           allContentfulIcons {
//             edges {
//               node {
//                 title
//                 image {
//                   gatsbyImageData
//                   url
//                   svg {
//                     absolutePath
//                     content
//                     dataURI
//                     originalContent
//                     relativePath
//                   }
//                   file {
//                     url
//                     contentType
//                   }
//                 }
//               }
//             }
//           }
//         }
        
//     `
// );



const homepageData = data.allContentfulPageLandingPage.edges[0].node;
const seoDescription = homepageData.seoDescription.seoDescription;
const heroGalleryArray = homepageData.heroGallery;
const mainHeroImageSrcSet = homepageData.heroGallery[0].gatsbyImageData.images.sources[0].srcSet;
const mainHeroImageSrc = homepageData.heroGallery[0].gatsbyImageData.images.fallback.src;
const introTextBody = homepageData.introTextBody;
const pageTitle = homepageData.pageTitle;
const slug = homepageData.slug;
// const amenitiesData = data.allContentfulIcons.edges
const apartmentAmenitiesData = data.allContentfulPageAmenities.edges[0].node.apartmentAmenities;
const communityAmenitiesData = data.allContentfulPageAmenities.edges[0].node.communityAmenities;
const gatsbyImageData = homepageData.heroGallery[0].gatsbyImageData
const file = homepageData.heroGallery[0].file



  return (
    <HomepageStyles>

      <div className="hero-image-container">
        {/* <Image gatsbyImageData={gatsbyImageData} file={file} ></Image> */}
        <img src={mainHeroImageSrc} srcSet={mainHeroImageSrcSet} className="hero-image"></img>
      </div>
      <section>
        <div className="body-copy-container">
        {renderRichText(introTextBody, options)}
        </div>

      </section>
      <Amenities apartmentAmenities={apartmentAmenitiesData} communityAmenities={communityAmenitiesData} />
     
    </HomepageStyles>
  )
}


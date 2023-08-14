import * as React from "react"
import { useStaticQuery, graphql } from "gatsby";
import {renderRichText} from 'gatsby-source-contentful/rich-text';
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types';

// import '../css/reset.css'
// import '../css/styles.css'
import InterestListThanks from "../../components/InterestListThanks"
export default function Thanks() {
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
        [BLOCKS.HEADING_1]: (node, children) => <div className="h1">{children}</div>,
        [BLOCKS.HEADING_2]: (node, children) => <div className="h2">{children}</div>,
        [BLOCKS.HEADING_3]: (node, children) => <div className="h3">{children}</div>,
        [BLOCKS.HEADING_4]: (node, children) => <h4>{children}</h4>,
        [BLOCKS.HEADING_5]: (node, children) => <h5>{children}</h5>,
        [BLOCKS.HEADING_6]: (node, children) => <h6>{children}</h6>,
        [BLOCKS.UL_LIST]: (node, children) => (<ul>{children}</ul>),
        [BLOCKS.OL_LIST]: (node, children) => (<ol>{children}</ol>),
        [BLOCKS.LIST_ITEM]: (node, children) => <li className="careers-bullets">{children}</li>,
    }
  }

  const data = useStaticQuery (
    graphql`
        query  {
          allContentfulPageInterestListThankYou {
            edges {
              node {
                textContent {
                  raw
                }
              }
            }
          }
        }
    `
  );

  debugger

  const thankYouPageData = data.allContentfulPageInterestListThankYou.edges[0].node;
  const textContent = thankYouPageData.textContent;


  return (
    
    <InterestListThanks
      textContent={renderRichText(textContent, options)}
    />
  )
}


export function Head() {
  return (
    <>
    <title>Thank You for Your Interest | Solana Central Park Apartments</title>
    <meta name="description" content="Be among the first to experience the new standard in Denver living. Sign up for our interest list today and receive exclusive updates and leasing opportunities." />
    </>
  )
}

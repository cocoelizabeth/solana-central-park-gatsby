import React from 'react'
import propTypes from 'prop-types'
import { GatsbyImage } from 'gatsby-plugin-image'

// Render inline SVG with fallback non-svg images
export default function Image({ svg, gatsbyImageData, file, alt, cssClass}) {
  let imageCssClass = cssClass;


    if (file.contentType === 'image/svg+xml') {
      if (svg && svg.content) {

        // class for line icons
        if (alt === 'Woodfire Pizza Oven' || alt === 'Garbage Disposal') {
          imageCssClass = "amenity-icon-svg-line"
        }
        // Inlined SVGs
        return <div dangerouslySetInnerHTML={{ __html: svg.content }} className={imageCssClass} alt={alt} />
      }

    // SVGs that can/should not be inlined
    return <img src={file.url} alt={alt} />
  }

  // Non SVG images
  return <GatsbyImage image={gatsbyImageData} alt={alt} />
}

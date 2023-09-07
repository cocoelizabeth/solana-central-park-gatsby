import React from "react";
class AccordianItem extends React.Component {
    constructor(props) {
        super(props)
        
        this.title = this.props.data.title;
        this.content = this.props.data.content;
        this.index = this.props.index;
        if (this.title === "Amenities") {
            this.communityAmenitiesSubTitle = this.content.communityAmenities.title;
            this.communityAmenitiesContent = this.content.communityAmenities.content;
            this.apartmentAmenitiesSubtitle = this.content.apartmentAmenities.title;
            this.apartmentAmenitiesContent = this.content.apartmentAmenities.content;
        }

        this.accordianContent = React.createRef();
        this.accordianTitle = React.createRef();
        this.handleAccordianItemClick = this.handleAccordianItemClick.bind(this);
        

    }

    handleAccordianItemClick() {
        this.accordianContent.current.classList.toggle("reveal");
        this.accordianTitle.current.classList.toggle("reveal");
    }



    render() {
      let firstItem;
      if (this.index === 0) {
         firstItem = "reveal"
      }

        
 
        
        if (this.title.includes("Amenities")) {
            return (
                <li 
                    className="accordian-item-card border-bottom"
                    id={`pos-${this.index}`}
                    onClick = {this.handleAccordianItemClick}
                    key={this.title}
                >
                <h1 ref={this.accordianTitle} className="accordian-title">{this.title}</h1>
                <div className="accordian-content amenities" ref={this.accordianContent}>
                    <div className="amenities-container">
                        <div className="accordian-item-subtitle">{this.communityAmenitiesSubTitle}</div>
                        <div className="amenities-list-container">
                            {this.communityAmenitiesContent}
                        </div>
                        <div className="accordian-item-subtitle">{this.apartmentAmenitiesSubtitle}</div>
                        <div className="amenities-list-container">
                            {this.apartmentAmenitiesContent}
                     
                        </div>
                        <div className="asterix-text">*In all one and two bedroom apartments</div>
                    </div>
  
                </div>

                   
            </li>
            ) 
        } else {
            return (
                <li 
                    className="accordian-item-card border-bottom"
                    id={`pos-${this.index}`}
                    key={this.title}
                >
                    <h1 onClick = {this.handleAccordianItemClick} ref={this.accordianTitle}  className={`accordian-title ${firstItem}`}>{this.title}</h1>
                    <div className={`accordian-content ${firstItem} ${this.title}`} ref={this.accordianContent}>
                        {this.content}
                    </div>
                       
                </li>
            )
        }
    }
}
      
       

    



// const ProjectHeroItem = ({ project, children }) => {

//     return (

//         <div>
//             <title>{project.title}</title>

//             <nav>
//                 <ul>
//                     <li><Link to="/work">Our Work</Link></li>
//                     <li><Link to="/">Home</Link></li>
//                 </ul>
//             </nav>

//             <main>
//                 <h1>{project}</h1>
//                 {children}
//             </main>
//         </div>

//     )
// }


export default AccordianItem;
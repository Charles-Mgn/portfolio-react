import React, { useState } from 'react';
import {Link} from "react-router-dom";

class ProjectItem extends React.Component {
    render() {
        return (
            <Link className="project-card" key={this.props.name} to={{pathname: `/${this.props.name}`}}>
                <img className="project-img" src={this.props.image} alt={this.props.name}/>

                <div className="project-overlay"></div>

                <div className="project-desc">
                    <div className="project-name">
                        {this.props.name}
                    </div>
                    <div className="project-tag">
                        {this.props.type}
                    </div>
                </div>
            </Link>
        )
    }
}

export default ProjectItem;
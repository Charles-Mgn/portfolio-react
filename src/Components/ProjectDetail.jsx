import React, { useState } from 'react';

class ProjectDetail extends React.Component {
    render() {
        return (
            <section>
                <img className="project-detail-img" src={this.props.image} alt={this.props.name}/>

                <div className="project-detail">

                    <div className="project-detail-header fade-in">
                        <h1 className="project-detail-name">
                            {this.props.name}
                        </h1>
                        <a className="project-detail-url" href={this.props.url}>
                            {this.props.url}
                        </a>
                    </div>

                    <div className="project-detail-body flex-container">
                        <div className="project-detail-info">
                            <div className="project-detail-tag">
                            {this.props.type}
                            </div>
                            <div className="project-detail-date">
                                {this.props.date}
                            </div>
                            <div className="project-detail-tech">
                                {this.props.techno.map((item, index) => (
                                    <div key={index}>{item.name}</div>
                                ))}
                            </div>
                        </div>
                        <div className="project-detail-desc">
                            {this.props.desc}
                        </div>
                    </div>

                    <a href={this.props.url} target="_blank" className="project-discover-btn">Check it out!</a>
                </div>

            </section>
        )
    }
}

export default ProjectDetail;
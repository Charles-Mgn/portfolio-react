import React, {useEffect, useState} from 'react';
import Welcome from "../Components/Welcome.jsx";
import ProjectItem from "../Components/ProjectSection.jsx";
import Perso from "../Components/PersonalSection.jsx";
import Contact from "../Components/ContactSection.jsx";
import axios from 'axios';

const Home = () => {
    const [project, setProject] = useState([]);
    useEffect(() => {
        async function fetch() {
            const response = await axios.get('/assets/projects.json');
            setProject(response.data);
        }
        fetch();
    }, []);

    return (
        <main>
            <Welcome/>
            <section id="projects">
                <h2>Actions speak louder than words!</h2>
                <div className="flex-container">
                    {project.map(item => {
                        return (
                            <ProjectItem key={item.id} {...item}/>
                        );
                    })}
                </div>
            </section>
            <Perso/>
            <Contact/>
        </main>
    )
}

export default Home;
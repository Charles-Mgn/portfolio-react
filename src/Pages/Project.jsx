import {useLocation} from 'react-router-dom';
import axios from "axios";
import ProjectDetail from "../Components/ProjectDetail.jsx";
import {useEffect, useState} from "react";

const Project = () => {
    const location = useLocation().pathname.slice(1);
    console.log(location);

    const [project, setProject] = useState([]);
    useEffect(() => {
        async function fetch() {
            const response = await axios.get('/assets/projects.json');
            setProject(response.data);
            console.log(response.data);
        }
        fetch();
    }, []);

    return (
        <div className="project-page">
            {project.map(item => {
                if (item.name === location) {
                    return (
                        <ProjectDetail key={item.id} {...item}/>
                    );
                }
            })}
        </div>
    )
}

export default Project;
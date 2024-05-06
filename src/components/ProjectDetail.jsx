import { Link } from "react-router-dom";
import {
  faLink,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectDetail = (props) => {
  const technologiesElements = props.project.technologies.map((technology) => {
    return <li key={technology}>{technology}</li>;
  });
  return (
    <tbody>
      <tr className="project-detail">
        <td className="project-detail__year">
          {props.project.created.getFullYear()}
        </td>
        <td className="project-detail__name">
          {props.project.live ? (
            <Link to={`${props.project.live}`} target="_blank">
              <span>{props.project.name} </span>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </Link>
          ) : (
            <p>{props.project.name}</p>
          )}
        </td>
        <td>
          <ul className="technologies-wrapper">{technologiesElements}</ul>
        </td>
        <td>
          <Link to={`${props.project.source}`} target="_blank">
            <span>{props.project.source} </span>
            {props.project.source && <FontAwesomeIcon icon={faLink} />}
          </Link>
        </td>
      </tr>
    </tbody>
  );
};

export default ProjectDetail;

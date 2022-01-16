// import busyBakes from "../images/BusyBakesPic.PNG";

const Projects = (props) => {
  return (
    <section>
      <figure>
        <figcaption>{props.title}</figcaption>
        <a href={props.link} target="_blank" rel="noreferrer">
          <img src={"../images/" + props.image} alt={props.alt} />
        </a>
      </figure>
      <p>{props.description}</p>
      <p>
        <b>Technologies:</b> {props.technologies}
      </p>
    </section>
  );
};
export default Projects;

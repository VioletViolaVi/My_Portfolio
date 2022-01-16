import busyBakes from "../images/BusyBakesPic.PNG";

const Projects = () => {
  return (
    <section>
      <figure>
        <figcaption>BusyBakes</figcaption>
        <img src={busyBakes} alt="BusyBakes screenshot." />
      </figure>
      <p>
        A baking club website for users to browse and select baking lessons they
        wish to take.
      </p>
      <p>
        <b>Technologies:</b> HTML5, CSS3, SASS, jQuery, JavaScript, Bootstrap,
        Git, Gitpod, Github, Balsamiq Wireframes
      </p>
    </section>
  );
};
export default Projects;

import React from "react";
import project from "./data/project.json";

const Project = () => {
  return (
    <div className="container projects my-3" id="projects">
      <h1 style={{ textAlign: "center" }}>PROJECTS</h1>
      <div className="row d-flex justify-content-center">
        {project.map((data) => (
          <div key={data.id} className="col-sm-6 col-md-4 col-lg-3 my-4">
            <div
              className="card bg-dark text-light"
              style={{
                border: "1px solid lightgreen",
                boxShadow: "5px 5px 10px 10px rgba(39, 245, 231, 0.8)",
              }}
              data-aos="flip-right"
              data-aos-duration="1000"
            >
              <div className="img d-flex justify-content-center p-3">
                <img
                  src={data.imageSrc}
                  className="card-img-top"
                  alt={data.title}
                  style={{
                    width: "100%",
                    height: "auto",
                    maxWidth: "200px",
                    border: "2px solid lightgreen",
                    borderRadius: "10px",
                  }}
                />
              </div>
              <div className="card-body text-center">
                <h5 className="card-title" style={{ fontSize: "25px" }}>
                  {data.title}
                </h5>
                <p className="card-text" style={{ fontSize: "20px" }}>
                  {data.description}
                </p>
                <a
                  href={data.demo}
                  className="btn"
                  style={{
                    fontSize: "20px",
                    border: "2px solid lightgreen",
                    margin: "5px",
                    padding: "5px 10px",
                    borderRadius: "30px",
                    backgroundColor: "#687864",
                    color: "white",
                  }}
                >
                  Demo
                </a>
                <a
                  href={data.source}
                  className="btn"
                  style={{
                    fontSize: "20px",
                    border: "2px solid lightgreen",
                    margin: "5px",
                    padding: "5px 10px",
                    borderRadius: "30px",
                    backgroundColor: "#687864",
                    color: "white",
                  }}
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;

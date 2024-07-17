import React from "react";
import project from "./data/project.json";

const Project = () => {
  return (
    <>
      <div className="container projects my-3" id="projects"
      style={{
      alignItems:"center",
      marginLeft:"500px"
      }}
      >
        <h1
        style={{
          marginLeft:"-500px",
          textAlign:"center"
        }}
        >PROJECTS</h1>
        <div className="row d-flex justify-content-center align-content-center"
        
          >
          {project.map((data) => (
            <>
              <div
                key={data.id}
                className="my-4 col-sm-6 col-md-4 col-lg-3 mx-4"
              >
                <div
                  className="card bg-dark text-light"
                  style={{
                    width: "30rem",
                    border: "1px solid lightgreen",
                    boxShadow: "5px 5px 10px 10px rgba(39, 245, 231, 0.8)",
                  }}
                  data-aos="flip-right"
                  data-aos-duration="1000"
                >
                  <div className="img d-flex justify-content-center align-content-center p-3">
                    <img
                      src={data.imageSrc}
                      className="card-img-top"
                      alt="..."
                      style={{
                        width: "200px",
                        height: "90px",
                        border: "2px solid lightgreen",
                        borderRadius: "10px",
                        marginLeft:"150px",
                        marginTop:"20px"

                      }}
                    />
                  </div>
                  <div className="card">
                    <h5 className="card-title"
                    style={{
                      fontSize:"25px",
                      textAlign:"center",

                      }}
                    >{data.title}</h5>
                    <p className="card-text"
                    style={{
                      fontSize:"20px",
                      textAlign:"center",
                      
                      }}
                      >
                        {data.description}
                        </p>
                    <a href={data.demo} className="btn" style={{

                        
                       fontSize:"20px",
                        border:"2px solid lightgreen",
                        marginLeft:"180px",
                       padding:"1px",
                        borderRadius:"30px",
                        backgroundColor:"#687864"
                    }}>
                      Demo 
                     
                    </a>
                    
                    <a href={data.source} className="btn"
                    style={{

                        
                      fontSize:"20px",
                       border:"2px solid lightgreen",
                       marginLeft:"5px",
                        padding:"1.5px",
                       borderRadius:"30px",
                       backgroundColor:"#687864"
                   }}
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Project;
// https://plus.unsplash.com/premium_photo-1671599016130-7882dbff302f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cXVvdGVzJTIwd2FsbHBhcGVyfGVufDB8fDB8fHww
import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";

function Projects() {
  const projects = [

    {
      title: "Cloud Base Task Management",
      description:
        "A Cloud-Based Task Management System is a web application that helps individuals and teams create, organize, and track tasks in real time. It allows users to assign tasks, set priorities, and monitor progress from anywhere through the internet, improving productivity and collaboration.",
      image:"https://res.cloudinary.com/dgmoa4vas/image/upload/v1772946774/image-wm_2_d94ys6.png",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "Tailwind CSS",
        "RESTful APIs",
        "Redux"
      ],
      liveLink: "https://cloud-based-task-manager-4mui.vercel.app",
      githubLink: "https://github.com/anand-Thakur95/Cloud-Based-Task-Manager",
    },
    {
      title: "Online Blogging System",
      description:
        "A blog system  that allow user to read ,write and share posts online as they are called blog posts.",
      image: "https://res.cloudinary.com/dgmoa4vas/image/upload/v1772946722/BlogImage_jkwbgw.jpg",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "Tailwind CSS",
        "RESTful APIs",
      ],
      liveLink: "https://blog-app-react-b6gy.vercel.app",
      githubLink: "https://github.com/anand-Thakur95/Blog-App-react",
    },
    {
      title: "Chat-app",
      description:
        "A chat application that allows users to send and receive messages in real-time.",
      image: "https://res.cloudinary.com/dgmoa4vas/image/upload/v1772946721/chatImage_bcubvp.jpg",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "Tailwind CSS",
        "RESTful APIs",
      ],
      liveLink: "https://fullstack-chatapp-yt7t.onrender.com",
      githubLink: "https://github.com/anand-Thakur95/fullstack-chatapp",
    },
    {
      title: "scribe(voice-to-text)",
      description:
        "A voice-to-text application that allows users to convert their speech to text.",
      image: "https://res.cloudinary.com/dgmoa4vas/image/upload/v1772946751/voiceImage_crpv6w.jpg",
      technologies: ["React", "Tailwind CSS", "RESTful APIs"],
      liveLink: "https://scribe-voice-to-text.netlify.app",
      githubLink: "https://github.com/anand-Thakur95/Scribe-Voice-to-text",
    },
    {
      title: "To-Do-List",
      description:
        "A to-do list application that allows users to create, edit, and delete tasks.",
      image: "https://res.cloudinary.com/dgmoa4vas/image/upload/v1772946723/ToDoImage_wxcl9c.jpg",
      technologies: ["React", "Tailwind CSS"],
      liveLink: "https://todo-list-apptest.netlify.app",
      githubLink: "https://github.com/anand-Thakur95/reactjs-todolist",
    },
  ];
  return (
    <section id="projects" className="py-20 px-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 ">
          <h2 className="text-4xl md:text-5xl font-bold  text-foreground mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are some of the projects I've worked on during my studies and
            personal time. Each project demonstrates different skills and
            technologies.
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card
            key={index}
            className=" p-0 overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 group"
          >
            <div className="relative overflow-hidden group">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div
                className={`absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 
              flex items-center justify-center space-x-4 
              max-[320px]:flex-col max-[320px]:space-y-2 max-[320px]:space-x-0 
              group-hover:opacity-100`}
                onTouchStart={(e) => {
                  e.currentTarget.classList.add("opacity-100");
                }}
                onTouchEnd={(e) => {
                  setTimeout(() => {
                    e.currentTarget.classList.remove("opacity-100");
                  }, 2000);
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.classList.remove("opacity-100");
                }}
              >
                <Button
                  onClick={() => window.open(project.liveLink, "_blank")}
                  size="sm"
                  variant="outline"
                  className="bg-white/20 border-white text-white hover:bg-white hover:text-black"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Live Demo
                </Button>

                <Button
                  onClick={() => window.open(project.githubLink, "_blank")}
                  size="sm"
                  variant="outline"
                  className="bg-white/20 border-white text-white hover:bg-white hover:text-black"
                >
                  <Github className="h-4 w-4 mr-2" />
                  Code
                </Button>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="border-project-border"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
      <div className="text-center mt-12">
        <Button
          onClick={() =>
            window.open(
              "https://github.com/anand-Thakur95?tab=repositories",
              "_blank"
            )
          }
          variant="outline"
          size="lg"
          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground dark:hover:text-white"
        >
          <Github className="h-5 w-5 mr-2" />
          View All Projects on GitHub
        </Button>
      </div>
    </section>
  );
}

export default Projects;

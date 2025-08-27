import React from "react";
import DockerIcon from "../assets/icons/docker.svg";
import GolangIcon from "../assets/icons/golang.svg";
import JavaIcon from "../assets/icons/java.svg";
import RedisIcon from "../assets/icons/redis.svg";
import TypescriptIcon from "../assets/icons/typescript.svg";
import ReactIcon from "../assets/icons/react.svg";
import MySQLIcon from "../assets/icons/mysql.svg";
import PostgreSQLIcon from "../assets/icons/postgresql.svg";
import KubernetesIcon from "../assets/icons/kubernetes.svg";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

const skills = [
  {
    name: "Golang",
    description: "",
    icon: GolangIcon,
    link: "https://www.golang.org",
  },
  {
    name: "Docker",
    description: "",
    icon: DockerIcon,
    link: "https://www.docker.com",
  },
  {
    name: "K8s",
    description: "",
    icon: KubernetesIcon,
    link: "https://kubernetes.io",
  },
  {
    name: "React",
    description: "",
    icon: ReactIcon,
    link: "https://react.dev",
  },
  {
    name: "Typescript",
    description: "",
    icon: TypescriptIcon,
    link: "https://typescriptlang.org",
  },
  {
    name: "MySQL",
    description: "",
    icon: MySQLIcon,
    link: "https://www.mysql.com",
  },
  {
    name: "PostgreSQL",
    description: "",
    icon: PostgreSQLIcon,
    link: "https://www.postgresql.org",
  },
  {
    name: "Redis",
    description: "",
    icon: RedisIcon,
    link: "https://redis.io",
  },
  {
    name: "Java",
    description: "",
    icon: JavaIcon,
    link: "https://www.java.com",
  },
];

const About = () => {
  const scrollRef = useRef(null);
  const doubledSkills = [...skills, ...skills];
  useEffect(() => {
    const handleFocus = () => {
      // 重新启动动画
      if (scrollRef.current) {
        scrollRef.current.style.animationPlayState = "running";
      }
    };
    const handleBlur = () => {
      // 暂停动画
      if (scrollRef.current) {
        scrollRef.current.style.animationPlayState = "paused";
      }
    };

    window.addEventListener("focus", handleFocus);
    window.addEventListener("blur", handleBlur);

    // 清理事件监听器
    return () => {
      window.removeEventListener("focus", handleFocus);
      window.removeEventListener("blur", handleBlur);
    };
  }, []);
  return (
    <section
      id="about"
      className="min-h-screen font-mono flex items-center justify-center py-20"
    >
      <div className="max-w-11/12 mx-auto px-4 w-full">
        <h2 className="max-w-3xl mx-auto text-4xl  font-semibold mb-12 bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-transparent text-center">
          About Me
        </h2>

        <div className="p-8 mb-6 rounded-xl border-white/10 border-2 hover:-translate-y-1 transition-all">
          <p className="text-gray-300 mb-5 text-xl">
            Passionate developer with expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 hover:-translate-y-1 transition-all">
            <h3 className="text-2xl text-center font-bold mb-8">
              🎓 Education
            </h3>
            <ul className="pl-5 list-disc list-inside text-lg text-gray-300">
              <li>
                <strong>
                  {""}
                  <em>B.Eng in Software Engineering</em>
                </strong>
                X Institute (2019-2023)
              </li>
              <li>
                Data Struct, Web development, Backend development, Linux, Ops,
                ...
              </li>
            </ul>
          </div>
          <div className="p-6 hover:-translate-y-1 transition-all">
            <h3 className="text-2xl text-center font-bold mb-8">
              💻 Work Experience
            </h3>
            <ul className="pl-5 list-disc list-inside text-lg text-gray-300">
              <li className="text-blue-300">Backend developer(test)</li>
            </ul>
          </div>
        </div>
        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
          <h3 className="text-2xl text-center font-bold mb-8">🧰 Skills</h3>
        </div>
        <div className="overflow-hidden relative w-full py-4">
          <div className="flex animate-scroll-left space-x-8">
            {doubledSkills.map((skill, index) => {
              return (
                <div
                  className="flex items-center justify-center text-center border border-gray-300 rounded px-2 h-36 w-48 mb-2 flex-shrink-0"
                  key={index}
                >
                  <a
                    href={skill.link}
                    className="flex flex-col items-center justify-center w-full"
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      height="64px"
                      width="64px"
                    />
                    <p>{skill.description}</p>
                    <span className="justify-center py-2">{skill.name}</span>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

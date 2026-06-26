import "./styles/TechStackNew.css";

interface TechItem {
  name: string;
  icon: string;
  url: string;
}

// All tech stack items with their icons and official URLs
// Perfect inverted pyramid: 12 -> 10 -> 8 -> 6 -> 4 -> 2
const techStack: TechItem[][] = [
  // Row 1 - 12 items (largest)
  [
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", url: "https://python.org" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", url: "https://typescriptlang.org" },
    { name: "PHP", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj7kqqlm6pcJvhJbT7PeS-SRgyQmsRkxTFgQ&s", url: "https://en.cppreference.com/w/c" },
    { name: "Laravel", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqaUOwjqd0rSCP3tsWs5cTs1SHbY8Sfb-Lhg&s", url: "https://isocpp.org" },
    { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", url: "https://getbootstrap.com" },
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", url: "https://mysql.com" },
    { name: "MariaDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mariadb/mariadb-original.svg", url: "https://mariadb.org" },
    { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg", url: "https://postman.com" },
    { name: "Vite", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTciGb_dOj4yuv7rf6_2qRyPbisaFmf_G6EvLIUyzKtaA&s=10", url: "https://vite.dev" },

  ],
  // Row 2 - 10 items
  [
    { name: "Kali Linux", icon: "https://img.icons8.com/color/48/kali-linux.png", url: "https://www.kali.org" },
    { name: "Metasploit", icon: "https://img.icons8.com/color/48/metasploit.png", url: "https://www.metasploit.com" },
    { name: "Splunk", icon: "https://img.icons8.com/color/48/splunk.png", url: "https://www.splunk.com" },
    { name: "Maltego", icon: "https://livengel.de/wp-content/uploads/2022/03/Maltego-Logo-Icon-Yellow-1.png", url: "https://www.maltego.com" },
    { name: "SHODAN", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQpZX3-9EeWY6KzLhyN5mi_sjVh_mYyF4nAGbs0wvB8g&s=10", url: "https://www.shodan.io/" },
    { name: "Wireshark", icon: "https://upload.wikimedia.org/wikipedia/commons/c/c6/Wireshark_icon_new.png", url: "https://www.wireshark.org" },
    { name: "Nmap", icon: "https://img.icons8.com/color/48/nmap.png", url: "https://nmap.org" },
    { name: "Burp Suite", icon: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Logo_burpsuite.jpg", url: "https://portswigger.net/burp" },
    { name: "SIEM", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTciuSA0aQuk9huAid26Yta0un9ThNh9Lyn3A&s", url: "https://it.wikipedia.org/wiki/Security_Information_and_Event_Management" },
    { name: "Nessus", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", url: "https://it.tenable.com/products/nessus" },
  ],
  // Row 3 - 8 items
  [

    { name: "Bash", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg", url: "https://www.gnu.org/software/bash/" },
    { name: "Cisco PT", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl_QfTLuwg7zvvOtZ7Vv_1TS7EwjShAJLYug&s", url: "https://www.netacad.com/cisco-packet-tracer" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", url: "https://docker.com" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", url: "https://git-scm.com" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", url: "https://github.com" },
    { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", url: "https://linux.org" },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", url: "https://code.visualstudio.com" },
    { name: "Oracle VM", icon: "https://img.icons8.com/color/600/virtualbox.png", url: "https://www.virtualbox.org/" },
  ],
  // Row 4 - 6 items
  [
    { name: "TIA Portal", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_PWE7xxdGQMg4Hpt_ztTq2VH9u_uFbWRBNQ&s", url: "https://www.siemens.com/tia-portal" },
    { name: "Rockwell", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYYJe7pDu5ZfTQBByXRZ6NMQSRmJ1cTfAjhw&s", url: "https://inductiveautomation.com" },
    { name: "Wincc", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9UBJUFvC5xbwOqoQilO23kr6dJEWO6mYDeA&s", url: "https://inductiveautomation.com" },
    { name: "Ignition", icon: "https://avatars.githubusercontent.com/u/26392698?s=280&v=4", url: "https://inductiveautomation.com" },
    { name: "Windows", icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAPFBMVEXyUCJ/ugAApO//uQD////yTh7zWzSGvSHzVy2EvRYWp/D/uxYhqfD/vSHyTBvyVirzYj6LwCwsrPD/vyx7SrsvAAABD0lEQVR4nO3PyRHCQBAEwRFI3Df++8qTtaAVA1kOVGRVqmU3f9tPsWJAQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkLCjsIl1W0t4SHV/TEIn8dYNf96hP0j7B9h/wj7R9i/OsV6Ddv3OVZtYl0G4XUbi5CQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkPCfhR9HdHbJ00jfKAAAAABJRU5ErkJggg==", url: "https://inductiveautomation.com" },
    { name: "MS Office", icon: "https://img.icons8.com/color/48/microsoft-office-2019.png", url: "https://www.microsoft.com/microsoft-365" },
  ],
  // Row 5 - 4 items
  [
    { name: "ChatGPT", icon: "https://imgs.search.brave.com/a162Y0hLEPHL4G7WHg0Nw0DxUOn2TknT_UI4sVOwS_E/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNWE0ODk4ZGY3/Mzk1Y2EwMjAxZjJk/YmEzZWM1MzcyNTZm/MTI0YWEyOWQ3NjVk/MDgxNTMwMGQxNWMx/ZWVmZWMzZC9vcGVu/YWkuY29tLw", url: "https://chatgpt.com/" },
    { name: "Claude", icon: "https://imgs.search.brave.com/GWjaTV9oDpq1Je9ium8eyNBhR4UvPfZUchUjSllz4rI/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOTczMzdhMjk1/MjZkMGQ0YWFmNzE1/NjZhM2U4MDQzMjc5/OThlZDkyNTlhOGVh/Zjg4Mzk2MTIxOGFh/ZjkxYjdmYy9jbGF1/ZGUuYWkv", url: "https://claude.com" },
    { name: "DeepSeek", icon: "https://imgs.search.brave.com/Hc1wbSijLvChcFdACJzahFCS1pTZqJq3NYqGvh5x4-Y/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMDcyMzc5Y2Fh/Nzc0YWE5MDhlOGYz/YTIyOGJlOTRlZmJi/ZGNkYWIzMGE0NjVl/ZDUxMDBjODMzZDc0/M2I0NTNiOC9kZWVw/c2Vlay5jb20v", url: "https://deepseek.com/" },
    { name: "Gemini", icon: "https://imgs.search.brave.com/cj7jNYO4VXm428dGXzh--H0SIF6LQkp9yo24-yPzMI8/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZmEwZTNmYWNm/MTk2Yjg1YzVlNmU5/OWZkMDNkM2Y2NjVm/YzJlNDBlYjMwODMw/YWNmMmUxNDBlMjdh/NzdjMmVkZi9nZW1p/bmkuZ29vZ2xlLmNv/bS8", url: "https://gemini.google.com/" },

  ],
  // Row 6 - 2 items (tip of pyramid)
  [
    { name: "NanoCLaw", icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAq1BMVEVHcEwvIFs+MmWkmbN1cI9GN2n39/s9NWZdUnvQydlIPmtqX4JgVXs9OGoxkJxZSHM6KGBlYoVKSXMzDlSCc5RHQGtzc5FlW3+ZlqsxY4ErwsArxsIsysUcOGYYRGwNAEkRkpgmmqMpurkYfIwgiZcdUHIVKl4hpKgXZ38YXXsovrxw1NAnrK87eY45z8gcEVYitbRkq7M0L2Q6P2wTb4E6W3s5h5dP39WA4d1Op4MuAAAAGnRSTlMA78EpRIgH02gTqluW6P164Xz46jS6jb5W7DVxRWIAAAFkSURBVCiRjZLpbsIwEIRNIE0IR6AUaL2+j9wXd9//yRqqCkgEUkf+YfnTjGZXRujfGi/90WvqfHqv4cR9fw1HwVM4dr2F4y+ns/b+9tZl/n6X57uSbwOEPvbr0eyRnXLA3xUrowlCh9Nwaif3zH2OMc5wDGqAJme9TWV4n2AHCv9q/uWHKa2VuTnHh0quNhlgoleOF5YVIezWyT0Tw3lmlZY8oqEEoqe31IHCYCQxtAAF7N3KNLjXiQBjgOvBoCKpVh8Pa2F/ba5MRIIOH4YcUtE+/8JYCE4ffK2Ta1HIWBUtElGAOnLnNBGUCpHWB77o7dU1VVmzubVlfsl3+2EH+skFCGXlwSbHDIpF1zpIZMNiQuDMNJBo3IFBcrL22EBhmAGg3dwRq4jkukltEpMm6saiNaWsYEzXEseaO73CU9bgVM/bPjHPZP8HbmrOjTmmlCdJ2oNLx/Nmg1Yzb+36vdjn+gFYaym0HJ45qwAAAABJRU5ErkJggg==", url: "https://nanoclaw.dev" },
    { name: "Hermes", icon: "https://storage.yandexcloud.net/products/f2e87lnb7nbf1187ojhj.svg", url: "https://hermes-agent.nousresearch.com/" },

  ],
];

const TechStackNew = () => {
  return (
    <div className="techstack-new">
      {/* Video Background */}
      <div className="techstack-video-container">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="techstack-video"
        >
          <source src="/video/video.webm" type="video/webm" />
        </video>
        {/* Dark Overlay */}
        <div className="techstack-overlay"></div>
      </div>

      {/* Content */}
      <div className="techstack-content">
        <h2>Tech Stack</h2>

        <div className="techstack-pyramid">
          {techStack.map((row, rowIndex) => (
            <div key={rowIndex} className="techstack-row">
              {row.map((tech, techIndex) => (
                <a
                  key={techIndex}
                  href={tech.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="techstack-item"
                  title={tech.name}
                  data-cursor="disable"
                >
                  <img src={tech.icon} alt={tech.name} />
                  <span>{tech.name}</span>
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStackNew;

import wuphubPic from '../../assets/images/wuphub.svg'
import facebookBlasterPic from "../../assets/images/facebook-blaster.webp"
import instagramBlasterPic from "../../assets/images/instagram-blaster.webp"
import linkedinBlasterPic from "../../assets/images/linkedin-blaster.webp"
import twitterBlasterPic from "../../assets/images/twitter-blaster.webp"
import tiktokBlasterPic from "../../assets/images/tiktok-blaster.webp"
import whatsappBlasterPic from "../../assets/images/blaster-pro-booster.webp"


export default function ProjectsPage() {
  const projects = [
    {
      name: "WupHub",
      description:
        "A complete cloud-based WhatsApp marketing and automation platform. Manage campaigns, send bulk messages, schedule content, and track engagement — all from one powerful dashboard.",
      image: wuphubPic,
      demoLink: "https://wuphub.com/"
    },
    {
      name: "Facebook Blaster Pro",
      description:
        "Automates Facebook marketing tasks including posting, group engagement, and account growth — designed to save hours of manual work.",
      image: facebookBlasterPic,
      demoLink: "https://youtu.be/wuu0pYpGczQ?si=voVsvenmJgf7xKyZ"
    },
    {
      name: "Instagram Blaster Pro",
      description:
        "Boost your Instagram presence with automated posting, DM campaigns, follower engagement, and growth tools.",
      image: instagramBlasterPic,
      demoLink: "https://youtu.be/T4UXdNGQ1Bg?si=dy8BGuN2T3SaIMOr"
    },
    {
      name: "LinkedIn Blaster Pro",
      description:
        "Automates LinkedIn outreach, connection requests, and messaging — perfect for lead generation and professional networking.",
      image: linkedinBlasterPic,
      demoLink: "https://youtu.be/lWL1l3_AENM?si=sHGe8hT6mnY7sABf"
    },
    {
      name: "Twitter Blaster Pro",
      description:
        "Automates Twitter engagement, scheduled tweets, and follower interaction to help grow your presence effortlessly.",
      image: twitterBlasterPic,
      demoLink: "https://youtu.be/8o79g-QrAOI?si=JqyJGDOd50BFIy4G"
    },

    {
      name: "TikTok Blaster Pro",
      description:
        "Automates TikTok account management including posting, engagement, and audience growth strategies.",
      image: tiktokBlasterPic,
      demoLink: "https://youtu.be/UuFWAmixuJs?si=eOIpKP1WY-QADrr5"
    },
    {
      name: "WhatsApp Account Warmer",
      description:
        "A specialized tool to warm up WhatsApp accounts safely before bulk marketing campaigns — reducing the risk of bans and improving deliverability.",
      image: whatsappBlasterPic,
      demoLink: "https://wa.me/923424590618"
    }
  ];

  return (
    <main className="min-h-screen px-6 py-12 pt-20 md:pt-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-left font-bold text-gray-900 mb-8 text-center">
          My Projects
        </h1>
        <p className="mx-auto text-gray-700 mb-12 text-sm md:text-base">
          Here are a few of my own products that I have personally developed and am proud to showcase. While I have worked on many other projects, this selection represents the core solutions I built from start to finish.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white border rounded-lg shadow-md p-4 flex flex-col items-center
             transform transition-transform duration-300 hover:scale-120"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full max-w-xs h-auto object-contain mb-2"
              />
              <div className="w-full flex flex-col items-start">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.name}
                </h2>
                <p className="text-gray-700 text-sm mb-4 text-justify">
                  {project.description}
                </p>
                <a
                  href={project.demoLink}
                  className="text-blue-600 hover:underline text-sm font-medium transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Demo
                </a>

              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

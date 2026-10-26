import { derived } from 'svelte/store'
import { language } from '../stores/language'

const en = {
  title: "About Me",
  description: "This is where you can introduce yourself or your company. Share your story, mission, and values. Explain what makes you unique and why people should be interested in your work. Keep it concise but engaging.",
  image: "/assets/images/about.jpg",
  stats: [
    {
      value: "5+",
      label: "Years Experience",
    },
    {
      value: "50+",
      label: "Projects Completed",
    },
    {
      value: "100%",
      label: "Client Satisfaction",
    },
  ],
  skills: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Docker",
    "Git",
    "AWS"
  ],
  experience: {
    title: "Experience",
    items: [
      {
        period: "2022 - Present",
        role: "Senior Frontend Developer",
        company: "Tencent Cloud",
        description: "Leading frontend development for EdgeOne platform and templates."
      },
      {
        period: "2020 - 2022",
        role: "Frontend Developer",
        company: "Tencent Cloud",
        description: "Developed and maintained multiple web applications and tools."
      },
      {
        period: "2018 - 2020",
        role: "Junior Developer",
        company: "Tencent Cloud",
        description: "Worked on various client projects and internal tools."
      }
    ]
  },
  connect: {
    title: "Let's Connect",
    description: "Feel free to reach out if you want to collaborate or just say hi! You can drop us an email.",
    links: {
      twitter: {
        text: "follow us on twitter",
        url: "#"
      },
      email: {
        text: "email",
        url: "mailto:sutisnasantosa@gmail.com"
      }
    }
  },
  skillsMore: "More",
  skillsLess: "Less"
}

const id = {
  title: "Tentang Saya",
  description: "Di sini kamu bisa memperkenalkan diri atau perusahaanmu. Ceritakan kisah, misi, dan nilai yang kamu pegang. Jelaskan apa yang membuatmu berbeda dan kenapa orang tertarik pada karyamu. Ringkas tapi menarik.",
  image: "/assets/images/about.jpg",
  stats: [
    {
      value: "5+",
      label: "Tahun Pengalaman",
    },
    {
      value: "50+",
      label: "Proyek Selesai",
    },
    {
      value: "100%",
      label: "Kepuasan Klien",
    },
  ],
  skills: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Docker",
    "Git",
    "AWS"
  ],
  experience: {
    title: "Pengalaman",
    items: [
      {
        period: "2022 - Sekarang",
        role: "Frontend Developer Senior",
        company: "Tencent Cloud",
        description: "Memimpin pengembangan frontend untuk platform EdgeOne dan template."
      },
      {
        period: "2020 - 2022",
        role: "Frontend Developer",
        company: "Tencent Cloud",
        description: "Mengembangkan dan merawat berbagai aplikasi web dan alat."
      },
      {
        period: "2018 - 2020",
        role: "Developer Junior",
        company: "Tencent Cloud",
        description: "Mengerjakan berbagai proyek klien dan alat internal."
      }
    ]
  },
  connect: {
    title: "Mari Terhubung",
    description: "Jangan ragu menghubungi saya kalau ingin berkolaborasi atau sekadar menyapa! Kamu bisa kirim email.",
    links: {
      twitter: {
        text: "ikuti saya di twitter",
        url: "#"
      },
      email: {
        text: "email",
        url: "mailto:sutisnasantosa@gmail.com"
      }
    }
  },
  skillsMore: "Lebih banyak",
  skillsLess: "Lebih sedikit"
}

export const aboutConfig = derived(language, ($lang) => ($lang === 'id' ? id : en))

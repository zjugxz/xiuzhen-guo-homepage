export const site = {
  name: "Xiuzhen Guo",
  displayName: "XIUZHEN GUO",
  tagline: "WIRELESS INTELLIGENCE FOR NETWORKED AND EMBODIED THINGS.",
  description:
    "Academic homepage of Dr. Xiuzhen Guo, Assistant Professor at Zhejiang University and director of the WiNet Lab.",
  email: "guoxz@zju.edu.cn",
  year: 2026,
  links: {
    university: "https://www.zju.edu.cn/english/",
    lab: "https://zjugxz.github.io/WiNet-Lab/",
    labResearch: "https://zjugxz.github.io/WiNet-Lab/research/",
    labPublications: "https://zjugxz.github.io/WiNet-Lab/publications/",
    labPeople: "https://zjugxz.github.io/WiNet-Lab/people/",
    labContact: "https://zjugxz.github.io/WiNet-Lab/contact/",
    scholar: "https://scholar.google.com/citations?user=JMmLdgsAAAAJ&hl=zh-CN"
  }
};

export const navigation = [
  { key: "home", label: "Home", slug: "" },
  { key: "research", label: "Research", slug: "research" },
  { key: "publications", label: "Publications", slug: "publications" },
  { key: "awards", label: "Awards", slug: "awards" },
  { key: "group", label: "Group", slug: "group" },
  { key: "services", label: "Services", slug: "services" },
  { key: "funding", label: "Funding", slug: "funding" }
];

export const pages = [
  {
    key: "home",
    slug: "",
    title: "Xiuzhen Guo",
    description: site.description,
    body: `
      <section class="profile" aria-labelledby="profile-name">
        <img
          class="profile__portrait"
          src="assets/xiuzhen-guo.webp"
          width="800"
          height="999"
          alt="Portrait of Dr. Xiuzhen Guo"
          decoding="async"
          fetchpriority="high"
        >
        <div class="profile__details">
          <h1 id="profile-name" class="profile__name">Dr. Xiuzhen Guo</h1>
          <p class="profile__position"><strong>Assistant Professor (Tenure-Track)</strong></p>
          <p>
            Director of
            <a href="${site.links.lab}" target="_blank" rel="noopener noreferrer">Wireless Intelligence for Networked and Embodied Things (WiNet) Lab</a><br>
            College of Control Science and Engineering<br>
            <a href="${site.links.university}" target="_blank" rel="noopener noreferrer">Zhejiang University</a>, China
          </p>
          <p>Email: <a href="mailto:${site.email}">${site.email}</a></p>
        </div>
      </section>

      <section class="content-section" aria-labelledby="about-me">
        <h2 id="about-me">About Me</h2>
        <p>
          I am an Assistant Professor at
          <a href="${site.links.university}" target="_blank" rel="noopener noreferrer">Zhejiang University</a>
          (ZJU), where I lead the
          <a href="${site.links.lab}" target="_blank" rel="noopener noreferrer">Wireless Intelligence for Networked and Embodied Things (WiNet) Lab</a>.
        </p>
        <p>
          Our group studies <strong>Wireless Intelligence</strong>, focusing on a central question:
          <em>How can wireless systems connect, sense, and interact with the physical world intelligently and efficiently?</em>
          Much like human intelligence, future wireless systems should continuously perceive their surroundings, exchange information,
          and adapt to changing environments. This vision drives our research in <strong>wireless networks, battery-free IoT,
          wireless sensing, physical computing, embodied AI, and software-hardware co-design</strong>.
        </p>
        <p>
          I received my Ph.D. from the School of Software, Tsinghua University, in 2021. I received the National Natural Science
          Foundation of China Excellent Young Scientists Fund (Category B, formerly the Excellent Young Scientists Fund) and the
          Zhejiang Provincial Natural Science Foundation Distinguished Young Scholars Fund. I received the ACM China Rising Star Award,
          the AIoTSys Young Scientist Award, and the ACM MobiCom 2024 Best Paper Award. I was named among Stanford University's
          World's Top 2% Scientists.
        </p>
        <p>
          You can find me on:
          [ <a href="${site.links.scholar.replace("&", "&amp;")}" target="_blank" rel="noopener noreferrer">Google Scholar</a> ]
        </p>
      </section>

      <section class="content-section" aria-labelledby="join-my-lab">
        <h2 id="join-my-lab">Join My Lab</h2>
        <p>
          Please visit the
          <a href="${site.links.labContact}" target="_blank" rel="noopener noreferrer">WiNet Lab contact page</a>
          for current opportunities.
        </p>
      </section>
    `
  },
  {
    key: "research",
    slug: "research",
    title: "Research",
    description: "Research interests of Dr. Xiuzhen Guo in wireless intelligence.",
    body: `
      <article class="article">
        <h1>Research</h1>
        <p>My main research interests focus on wireless intelligence, organized into four interconnected directions:</p>
        <ul class="research-list">
          <li>
            <strong>Intelligent Wireless Systems</strong>
            <span>We combine machine learning with wireless communication and networking, enabling wireless systems to predict channel conditions, adapt to changing environments, and provide reliable connectivity.</span>
          </li>
          <li>
            <strong>Battery-Free and Ultra-Low-Power IoT</strong>
            <span>We develop backscatter communication, energy-efficient hardware, and networking technologies that allow IoT devices to communicate and operate with minimal or no battery power.</span>
          </li>
          <li>
            <strong>Wireless and Wearable Sensing</strong>
            <span>We use radio signals, magnetic fields, acoustic signals, and emerging sensing modalities to understand human activities, monitor health conditions, and perceive the physical environment.</span>
          </li>
          <li>
            <strong>Physical and Embodied Intelligence</strong>
            <span>We integrate AI models with wireless devices, programmable hardware, sensors, and robots, enabling intelligent agents to perceive, communicate, and interact with the real world.</span>
          </li>
        </ul>
        <p>
          Our recent research is highlighted on the
          <a href="${site.links.labResearch}" target="_blank" rel="noopener noreferrer">WiNet Lab website</a>.
        </p>
        <h2>Collaborations</h2>
        <p>
          I am interested in collaborations related to the topics above. Beyond wireless systems, AI, and IoT, I am also open to
          interdisciplinary research in areas such as healthcare, robotics, advanced manufacturing, and materials science. Please
          feel free to <a href="mailto:${site.email}">email me</a> if you have an exciting idea or potential collaboration opportunity.
        </p>
      </article>
    `
  },
  {
    key: "publications",
    slug: "publications",
    title: "Publications",
    description: "Publications by Dr. Xiuzhen Guo and the WiNet Lab.",
    body: `
      <article class="article article--brief">
        <h1>Publications</h1>
        <p>
          For the latest publications, please visit the
          <a href="${site.links.labPublications}" target="_blank" rel="noopener noreferrer">WiNet Lab website</a>.
        </p>
      </article>
    `
  },
  {
    key: "awards",
    slug: "awards",
    title: "Awards",
    description: "Awards and recognition received by Dr. Xiuzhen Guo and her students.",
    body: `
      <article class="article">
        <h1>Awards</h1>
        <h2>Recognition</h2>
        <ul>
          <li>ACM China Rising Star Award (ACM 中国新星奖), 2025</li>
          <li>ACM SIGMOBILE China Rising Star Award, 2025</li>
          <li>World's Top 2% Scientists (Stanford University), 2025</li>
          <li>AIoTSys Young Scientist Award, 2025</li>
          <li>Young Elite Scientists Sponsorship Program (中国科协青年人才托举工程), China Association for Science and Technology, 2024</li>
          <li>ACM China Doctoral Dissertation Award (ACM 中国博士论文奖), 2021</li>
          <li>ACM SIGCOMM China Doctoral Dissertation Award, 2021</li>
          <li>Shuimu Tsinghua Scholar (清华水木学者), 2021</li>
          <li>Beijing Outstanding Graduate Award, 2021</li>
        </ul>

        <h2>Awards in Academia and Industry</h2>
        <ul>
          <li><strong>Best Paper Award, ACM MobiCom, 2024</strong></li>
          <li>Best Paper Award, IEEE HPCC, 2024</li>
          <li>Best Student Paper Award, IEEE MSN, 2024</li>
          <li>Best Paper Award, CCF CWSN, 2025</li>
          <li>Popular Paper Award, IEEE TNSE, 2025</li>
          <li>Top Ten Technological Advancements in the Internet of Things, Chinese Institute of Electronics (电子学会物联网十大科技进展), 2025</li>
          <li>Second Prize in Natural Science (CCF自然科学二等奖), CCF Science and Technology Progress Award, 2023</li>
          <li>Second Prize, Ideological and Political Micro-lecture Competition at Zhejiang University (浙江大学思政微课大赛), 2024</li>
          <li>Research Highlight, ACM GetMobile, 2023 and 2025</li>
        </ul>

        <h2>Student Competition Awards under Supervision</h2>
        <ul>
          <li>National Second Prize, National College IoT Design Competition</li>
          <li>Two National Third Prizes, National College Biomedical Engineering Innovation Design Competition</li>
          <li>First Prize, East China Division of the National College IoT Design Competition</li>
          <li>Silver Award, Internet+ Zhejiang Provincial Competition</li>
        </ul>
      </article>
    `
  },
  {
    key: "group",
    slug: "group",
    title: "Group",
    description: "Research group led by Dr. Xiuzhen Guo.",
    body: `
      <article class="article article--brief">
        <h1>Group</h1>
        <p>
          For the latest group information, please visit the
          <a href="${site.links.labPeople}" target="_blank" rel="noopener noreferrer">WiNet Lab website</a>.
        </p>
      </article>
    `
  },
  {
    key: "services",
    slug: "services",
    title: "Services",
    description: "Academic service by Dr. Xiuzhen Guo.",
    body: `
      <article class="article">
        <h1>Services</h1>
        <h2>Editorship</h2>
        <ul>
          <li>Associate Editor, ACM UbiComp/IMWUT</li>
          <li>Associate Editor, Tsinghua Science and Technology</li>
          <li>Associate Editor, Journal of Zhejiang University (《浙江大学学报》)</li>
          <li>Guest Editor, Special Issue “Radio Frequency Computing”, ACM TIoT</li>
        </ul>

        <h2>Conference Chairs</h2>
        <ul>
          <li>Track Chair, IEEE ICPADS 2025</li>
          <li>TPC Co-chair, RFCom 2024/2025 (workshop in conjunction with ACM SenSys 2024)</li>
          <li>Poster and Demo Co-chair, ACM SenSys 2024</li>
          <li>Poster and Demo Co-chair, EWSN 2026</li>
          <li>Publicity Chair, ACM/IEEE SEC 2025</li>
          <li>Submission Chair, IEEE SECON 2022</li>
          <li>Co-publicity Chair, IEEE ICPADS 2022</li>
          <li>Co-publicity Chair, EAI MobiQuitous 2022</li>
          <li>Registration Chair, IEEE AIoTSys 2024</li>
        </ul>

        <h2>TPC</h2>
        <ul>
          <li>AAAI 2026</li>
          <li>ACM MobiSys 2025</li>
          <li>ACM SenSys 2024/2025</li>
          <li>IEEE ICDCS 2024/2025</li>
          <li>IEEE SECON 2023/2024</li>
          <li>IEEE ICPADS 2022/2023/2024</li>
          <li>IEEE MASS 2022</li>
          <li>IEEE DCOSS 2022</li>
          <li>IEEE MSN 2023/2024</li>
          <li>IEEE UIC 2024</li>
        </ul>

        <h2>Reviewer</h2>
        <ul>
          <li>IEEE/ACM Transactions on Networking (TON)</li>
          <li>IEEE Transactions on Mobile Computing (TMC)</li>
          <li>ACM Transactions on Sensor Networks (TOSN)</li>
          <li>IEEE Transactions on Dependable and Secure Computing (TDSC)</li>
          <li>IEEE Transactions on Wireless Communications (TWC)</li>
          <li>ACM Transactions on Internet of Things (TIOT)</li>
          <li>IEEE Internet of Things Journal (IoTJ)</li>
        </ul>
      </article>
    `
  },
  {
    key: "funding",
    slug: "funding",
    title: "Funding",
    description: "Research funding and sponsored projects led by Dr. Xiuzhen Guo.",
    body: `
      <article class="article">
        <h1>Funding</h1>
        <ul class="funding-list">
          <li>The National Natural Science Foundation of China (NSFC) Excellent Young Scientists Fund <span lang="zh-CN">(主持，国家自然科学基金青B项目，原优青)</span></li>
          <li>The National Science Fund for Distinguished Young Scholars of Zhejiang Province <span lang="zh-CN">(浙江省杰出青年科学基金)</span></li>
          <li>The National Natural Science Foundation of China (NSFC) General Program <span lang="zh-CN">(主持，国家自然科学基金面上基金项目)</span></li>
          <li>The National Natural Science Foundation of China (NSFC) Youth Science Fund Project <span lang="zh-CN">(主持，国家自然科学基金青年基金项目)</span></li>
          <li>The National Natural Science Foundation of China (NSFC) Major Program <span lang="zh-CN">(参与，国家自然科学基金重大项目)</span></li>
          <li>China Postdoctoral Science Foundation Special Grant Project <span lang="zh-CN">(主持，中国博士后科学基金特别资助项目)</span></li>
          <li>China Postdoctoral Science Foundation General Grant Project <span lang="zh-CN">(主持，中国博士后科学基金面上资助项目)</span></li>
          <li>The Research Project on Educational and Teaching Reform by the Automation Teaching Advisory Committee of the Ministry of Education <span lang="zh-CN">(主持，教育部自动化教指委教育教学改革研究课题立项资助)</span></li>
        </ul>
      </article>
    `
  }
];

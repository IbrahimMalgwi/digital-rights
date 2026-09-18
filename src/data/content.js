//src/data/content.js
const CAREERS_APPLICATION_LINK = "https://forms.gle/oGhQXs7UzaT4ZVGo7";
const CAREERS_ABOUT = "Digital Rights and Mental Health Initiative (DRMHI) is a non-profit organization committed to advancing digital rights, mental health awareness, psychosocial wellbeing, community resilience, inclusion, and related humanitarian and development initiatives.";
const VOLUNTEER_TERMS = [
    "These are strictly voluntary and unpaid positions.",
    "DRMHI will not provide salary, stipend, allowance, honorarium, remuneration, financial compensation or any other form of payment for these volunteer positions.",
    "Volunteers are required to have access to a working personal laptop and reliable internet connection."
];
const APPLICATION_REQUIREMENTS = [
    "Updated CV",
    "Application letter",
    "Copies of relevant academic qualifications",
    "Active telephone number and email address"
];
const COMMON_VOLUNTEER_META = {
    "Engagement Type": "Volunteer",
    Duration: "Six (6) Months",
    Period: "September 2026 – February 2027"
};

const makeVolunteerVacancy = ({ id, title, department, location, positions, summary, jobDescription, responsibilities, requirements }) => ({
    id,
    title,
    type: "Volunteer",
    department,
    location,
    duration: "Six (6) Months",
    numberOfPositions: positions,
    postedDate: "2026-09-18",
    summary,
    applyLink: CAREERS_APPLICATION_LINK,
    image: "",
    isOpen: true,
    details: {
        positionTitle: title,
        meta: { Department: department, Location: location, "Number of Positions": positions, ...COMMON_VOLUNTEER_META },
        about: [CAREERS_ABOUT],
        jobDescription,
        responsibilities,
        requirements,
        volunteerTerms: VOLUNTEER_TERMS,
        applicationRequirements: APPLICATION_REQUIREMENTS,
        deadlineNote: "Only shortlisted applicants will be contacted."
    }
});

const NEW_VOLUNTEER_VACANCIES = [
    makeVolunteerVacancy({
        id: "finance-accounting-volunteer-2026",
        title: "Finance / Accounting Volunteer",
        department: "Finance & Accounts",
        location: "To be assigned",
        positions: 1,
        summary: "Support DRMHI's financial documentation, record-keeping, budget monitoring, and approved accounting activities under supervision.",
        jobDescription: "The Finance/Accounting Volunteer will support DRMHI's financial documentation, record-keeping, budget monitoring, and other approved accounting activities under supervision.",
        responsibilities: ["Support organization of financial records.", "Assist with financial documentation and filing.", "Support preparation of financial reports.", "Assist with budget tracking.", "Support financial data entry.", "Assist with reconciliation under supervision.", "Maintain financial trackers.", "Support audit documentation.", "Maintain confidentiality of financial information.", "Assist with other approved finance activities."],
        requirements: ["BSc or HND in Accounting, Finance, Economics, Business Administration or a related discipline.", "Knowledge of basic accounting principles.", "Proficiency in Microsoft Excel.", "Integrity and strong attention to detail.", "Ability to maintain confidentiality.", "Working personal laptop and reliable internet access.", "Good knowledge of Microsoft Office applications.", "Minimum availability of ten (10) hours per week.", "Willingness to report physically to the DRMHI office once weekly, as agreed with DRMHI, if applicable.", "Willingness to prepare and implement bi-monthly work plans.", "Ability to respond to official DRMHI communication within one (1) hour during agreed availability periods."]
    }),
    makeVolunteerVacancy({
        id: "state-coordinator-2026",
        title: "State Coordinator",
        department: "Coordination",
        location: "Maiduguri, Borno State",
        positions: 1,
        summary: "Coordinate DRMHI programmes, volunteers, field communication, community engagement, and activity reporting within Borno State.",
        responsibilities: ["Coordinate and support DRMHI activities within the assigned state.", "Support implementation of organizational programmes and projects.", "Coordinate volunteers and support effective team collaboration.", "Facilitate communication between DRMHI departments and field teams.", "Support engagement with communities, stakeholders and partners.", "Participate in organizational planning and coordination meetings.", "Monitor assigned activities and provide regular updates.", "Support identification of partnerships and relevant opportunities.", "Prepare coordination reports and activity updates.", "Support effective implementation of DRMHI policies and procedures.", "Escalate operational, programme, safeguarding and security concerns.", "Represent DRMHI professionally when authorized.", "Perform other reasonable duties assigned by the supervisor."],
        requirements: ["Minimum BSc or HND from a recognized institution.", "Leadership and coordination abilities.", "Excellent communication and interpersonal skills.", "Organized, proactive and dependable.", "Ability to work independently and as part of a team.", "Interest in digital rights, mental health, humanitarian work, community development or related areas.", "Computer literacy.", "Good knowledge of Microsoft Office.", "Working personal laptop and reliable internet access.", "Minimum availability of ten (10) hours per week.", "Willingness to report physically once weekly as agreed with DRMHI, if applicable.", "Willingness to prepare and implement bi-monthly work plans.", "Ability to respond to official DRMHI communication within one (1) hour during agreed availability periods."]
    }),
    makeVolunteerVacancy({
        id: "protection-officer-2026",
        title: "Protection Officer",
        department: "Programs",
        location: "Maiduguri, Borno State / Assigned Duty Station",
        positions: 1,
        summary: "Support protection activities that promote the safety, dignity, and rights of vulnerable individuals and communities.",
        jobDescription: "The Protection Officer Volunteer will support DRMHI in implementing protection-related activities and promoting the safety, dignity and rights of vulnerable individuals and communities.",
        responsibilities: ["Support implementation of DRMHI protection activities.", "Assist with protection assessments and community engagement.", "Support protection awareness and sensitization activities.", "Assist in identifying protection concerns and appropriate referral pathways.", "Support community-based protection activities.", "Assist with collection and documentation of programme information.", "Participate in protection meetings, trainings and field activities.", "Assist in preparing protection reports.", "Maintain confidentiality of sensitive information.", "Support community feedback mechanisms.", "Promote safe and respectful engagement with beneficiaries.", "Immediately report safeguarding, protection and PSEA concerns through approved channels.", "Perform other duties assigned by the supervisor."],
        requirements: ["BSc or HND from a recognized institution.", "Interest in protection, humanitarian assistance, human rights, community development or a related field.", "Good communication and interpersonal skills.", "Empathy, integrity and professionalism.", "Ability to work respectfully with vulnerable populations.", "Computer literacy.", "Good knowledge of Microsoft Office.", "Working personal laptop and reliable internet access.", "Minimum availability of ten (10) hours per week.", "Willingness to report physically once weekly as agreed with DRMHI, if applicable.", "Willingness to prepare and implement bi-monthly work plans.", "Ability to respond to official DRMHI communication within one (1) hour during agreed availability periods."]
    }),
    makeVolunteerVacancy({
        id: "mhpss-officer-2026",
        title: "MHPSS Officer",
        department: "Programs",
        location: "Maiduguri, Borno State / Assigned Duty Station",
        positions: 1,
        summary: "Support DRMHI's mental health and psychosocial support activities, community awareness, and wellbeing programmes.",
        jobDescription: "The MHPSS Officer Volunteer will support DRMHI's mental health and psychosocial support activities, community awareness initiatives and psychosocial wellbeing programmes.",
        responsibilities: ["Support implementation of MHPSS activities.", "Assist with mental health and psychosocial awareness activities.", "Support community engagement and sensitization.", "Assist with identification and referral of individuals requiring specialized support.", "Support MHPSS-related assessments and activities.", "Participate in relevant meetings, trainings and workshops.", "Assist in preparation of MHPSS activity reports.", "Maintain confidentiality of sensitive information.", "Support development of MHPSS communication and awareness materials.", "Promote safe, respectful and inclusive engagement.", "Report safeguarding and protection concerns through approved channels.", "Perform other duties assigned by the supervisor."],
        requirements: ["BSc or HND from a recognized institution.", "Preferably a background in Psychology, Social Work, Counselling, Sociology, Public Health or a related discipline.", "Interest in mental health and psychosocial support.", "Strong interpersonal and communication skills.", "Empathy, professionalism and confidentiality.", "Basic computer skills.", "Working personal laptop and reliable internet access.", "Good knowledge of Microsoft Office.", "Minimum availability of ten (10) hours per week.", "Willingness to report physically once weekly as agreed with DRMHI, if applicable.", "Willingness to prepare and implement bi-monthly work plans.", "Ability to respond to official DRMHI communication within one (1) hour during agreed availability periods."]
    }),
    makeVolunteerVacancy({
        id: "monitoring-evaluation-volunteer-2026",
        title: "Monitoring & Evaluation Volunteer",
        department: "Monitoring & Evaluation",
        location: "To be assigned",
        positions: 2,
        summary: "Support programme monitoring, data collection and analysis, indicator tracking, and evidence-based programme management.",
        jobDescription: "The Monitoring & Evaluation Volunteer will support DRMHI in monitoring programme activities, collecting and analysing data, tracking indicators, and supporting evidence-based programme management.",
        responsibilities: ["Support monitoring of DRMHI activities.", "Assist with data collection.", "Support development and use of data collection tools.", "Assist with data entry and cleaning.", "Maintain M&E databases and trackers.", "Track programme indicators.", "Support monitoring visits.", "Assist with data analysis.", "Support preparation of M&E reports.", "Assist with beneficiary feedback mechanisms.", "Identify data quality issues.", "Support documentation of lessons learned.", "Assist with programme evaluations.", "Maintain confidentiality of programme and beneficiary information."],
        requirements: ["BSc or HND in Statistics, Economics, Social Sciences, Development Studies, Information Management, Computer Science or a related field.", "Good analytical and problem-solving skills.", "Proficiency in Microsoft Excel.", "Strong attention to detail.", "Good reporting skills.", "Knowledge of data collection and analysis tools is an advantage.", "Computer literacy.", "Ability to work independently and as part of a team.", "Working personal laptop and reliable internet access.", "Minimum availability of ten (10) hours per week.", "Willingness to report physically once weekly as agreed with DRMHI, if applicable.", "Willingness to prepare and implement bi-monthly work plans.", "Ability to respond to official DRMHI communication within one (1) hour during agreed availability periods."]
    }),
    makeVolunteerVacancy({
        id: "media-communications-volunteer-2026",
        title: "Media & Communications Volunteer",
        department: "Communications",
        location: "Maiduguri, Borno State",
        positions: 2,
        summary: "Support DRMHI's communication, visibility, digital media, programme documentation, and storytelling activities.",
        jobDescription: "The Communications Volunteer will support DRMHI's communication, visibility, digital media, documentation and storytelling activities.",
        responsibilities: ["Support DRMHI's social media platforms.", "Develop approved communication content.", "Support digital communication activities.", "Assist with photography and videography.", "Support video editing and graphic content development.", "Document DRMHI programmes and activities.", "Assist with newsletters, reports and visibility materials.", "Maintain a content calendar.", "Support development of success stories.", "Assist with event documentation.", "Support communication campaigns.", "Ensure appropriate consent before publishing beneficiary images or stories.", "Protect confidential information.", "Follow DRMHI communication and social media policies."],
        requirements: ["BSc or HND from a recognized institution.", "Excellent written and verbal communication skills.", "Creativity and interest in digital communication.", "Knowledge of social media platforms.", "Computer literacy.", "Working personal laptop and reliable internet access.", "Good knowledge of Microsoft Office.", "Minimum availability of ten (10) hours per week.", "Willingness to report physically once weekly as agreed with DRMHI, if applicable.", "Willingness to prepare and implement bi-monthly work plans.", "Ability to respond to official DRMHI communication within one (1) hour during agreed availability periods."]
    }),
    makeVolunteerVacancy({
        id: "fundraiser-partnerships-volunteer-2026",
        title: "Fundraiser / Partnerships Volunteer",
        department: "Grants / Resource Mobilization",
        location: "Maiduguri, Borno State",
        positions: 2,
        summary: "Support DRMHI's fundraising, donor research, proposal development, partnerships, and resource mobilization activities.",
        jobDescription: "The Fundraiser/Partnerships Volunteer will support DRMHI's fundraising, donor research, proposal development and resource mobilization activities.",
        responsibilities: ["Research donor and funding opportunities.", "Maintain funding opportunity trackers.", "Review donor calls and eligibility requirements.", "Support development of concept notes.", "Assist with proposal writing.", "Support Expressions of Interest.", "Conduct donor research and mapping.", "Support development of logical frameworks.", "Assist with proposal budgets in collaboration with Finance.", "Support preparation of organizational capacity statements.", "Assist with donor reports.", "Maintain grant documentation.", "Monitor donor deadlines.", "Support resource mobilization activities.", "Assist with partnership development materials."],
        requirements: ["BSc or HND from a recognized institution.", "Excellent written and verbal English.", "Strong research and analytical skills.", "Interest in humanitarian, development or non-profit work.", "Proficiency in Microsoft Word and Excel.", "Ability to research funding opportunities online.", "Detail-oriented and deadline-driven.", "Working personal laptop and reliable internet access.", "Minimum availability of ten (10) hours per week.", "Willingness to report physically once weekly as agreed with DRMHI, if applicable.", "Willingness to prepare and implement bi-monthly work plans.", "Ability to respond to official DRMHI communication within one (1) hour during agreed availability periods."]
    })
];

export const siteContent = {
    projects: [
        {
            id: "free-mental-health-therapy-sessions",
            slug: "free-mental-health-therapy-sessions",
            title: "Free Mental Health Therapy Sessions",
            description: "Delivered specialized one-on-one mental health care to data workers facing occupational trauma and women recovering from digital violence.",
            category: "Mental Health",
            status: "Ongoing",
            location: "Nigeria",
            impactMetric: "100+",
            impactLabel: "Pro-Bono Therapy Sessions",
            confidentialityNote: "Participant privacy and confidentiality are protected.",
            visualType: "privacy",
            image: "",
            imageAlt: "",
            primaryCTA: "Sign Up for Free Therapy",
            primaryUrl: "https://docs.google.com/forms/d/e/1FAIpQLSd6a9INIER8j8fVuPZ-J4--1g0s96gSz1I4nJkom7lS3yZKrg/viewform",
            featured: true
        },
        {
            id: "back-to-school-campaigns",
            slug: "back-to-school-campaigns",
            title: "Back-to-School Campaigns",
            description: "Equipped vulnerable children and young girls across conflict-affected areas in Nigeria with essential educational kits to maintain schooling and build digital literacy.",
            category: "Education",
            status: "Ongoing",
            location: "Nigeria",
            impactMetric: "1,000+",
            impactLabel: "Back-to-School Kits Distributed",
            image: "/images/bts.jpeg",
            imageAlt: "DRMHI back-to-school campaign activities in Nigeria",
            primaryCTA: "Learn More",
            featured: true
        },
        {
            id: "ai-data-work-research",
            slug: "ai-data-work-research",
            title: "AI and Data Work Research",
            description: "DRMHI researches the mental health, labour and human-rights implications of AI data work and uses the evidence to support worker protections.",
            overview: "DRMHI protects AI data workers by researching the severe psychological trauma associated with reviewing graphic content without adequate mental health support, documenting low pay and precarious gig contracts within outsourcing arrangements, and using this evidence to support advocacy for fair wages, worker dignity, mental health protections and stronger labour protections.",
            additionalContext: "The work also contributes to international discussions about AI labour and worker protections, including engagement with international institutions.",
            category: "Research",
            status: "Ongoing",
            location: "Africa and international forums",
            visualType: "research",
            image: "",
            imageAlt: "",
            primaryCTA: "Explore Our Research",
            featured: true,
            resources: [
                { title: "View Research", type: "Research", url: "https://data-workers.org/kauna/" },
                { title: "Read Publication", type: "Publication", url: "https://dl.acm.org/doi/10.1145/3772318.3791639" },
                { title: "Read Publication", type: "Publication", url: "https://arxiv.org/abs/2605.11699" },
                { title: "Read Publication", type: "Publication", url: "https://dl.acm.org/doi/10.1145/3805689.3812227" },
                { title: "Read Article", type: "Article", url: "https://theconversation.com/africas-data-workers-are-being-exploited-by-foreign-tech-firms-4-ways-to-protect-them-252957" },
                { title: "Read Article", type: "Article", url: "https://time.com/collections/time100-ai-2024/7012799/kauna-malgwi/" },
                { title: "View Resource", type: "Resource", url: "https://share.google/s7f3ybZy77z5vFcdO" },
                { title: "View Resource", type: "Resource", url: "https://share.google/mKrcY8c1InNJPcYK2" },
                { title: "Read Article", type: "Media", url: "https://www.ft.com/content/ef42e78f-e578-450b-9e43-36fbd1e20d01?syn-25a6b1a6=1" }
            ]
        },
        {
            id: 1,
            title: "Digital Literacy for Rural Communities",
            description: "Empowering rural communities with essential digital skills and online safety knowledge to bridge the digital divide.",
            category: "Education",
            status: "Completed",
            location: "Ghana, Nigeria, Kenya",
            duration: "2023 - 2024",
            impact: "5,000+ people trained",
            image: "/images/DHMH1.jpeg",
            objectives: [
                "Basic digital literacy training",
                "Online safety awareness",
                "Access to digital resources"
            ],
            partners: ["Local Community Centers", "Government Education Dept"],
            featured: false
        },
        {
            id: 2,
            title: "Mental Health Support Hotline",
            description: "24/7 confidential mental health support service for individuals affected by digital harassment and online abuse.",
            category: "Mental Health",
            status: "Ongoing",
            location: "South Africa, Egypt, Morocco",
            duration: "2022 - Present",
            impact: "2,000+ individuals supported",
            image: "/images/DHMH2.jpeg",
            objectives: [
                "Crisis intervention",
                "Counseling services",
                "Referral to local support"
            ],
            partners: ["Mental Health Professionals", "Telecom Partners"],
            featured: false
        },
        {
            id: 3,
            title: "Digital Rights Policy Advocacy",
            description: "Working with governments and policymakers to develop frameworks that protect digital rights while promoting mental wellbeing.",
            category: "Advocacy",
            status: "Ongoing",
            location: "West Africa Region",
            duration: "2023 - 2025",
            impact: "3 policy frameworks developed",
            image: "/images/DHMH3.jpeg",
            objectives: [
                "Policy research and analysis",
                "Stakeholder engagement",
                "Legislative advocacy"
            ],
            partners: ["African Union", "Local NGOs"],
            featured: false
        },
        {
            id: 4,
            title: "Youth Digital Wellness Program",
            description: "Comprehensive program focusing on digital wellness and mental health for young people in urban centers.",
            category: "Youth",
            status: "Completed",
            location: "Urban Centers across Africa",
            duration: "2023",
            impact: "10,000+ youth reached",
            image: "/images/DHMH4.jpeg",
            objectives: [
                "Digital wellness workshops",
                "Peer support networks",
                "Mental health resources"
            ],
            partners: ["Schools", "Youth Organizations"],
            featured: false
        },
        {
            id: 5,
            title: "Online Safety for Women",
            description: "Specialized program addressing digital safety and mental health challenges faced by women online.",
            category: "Women",
            status: "Ongoing",
            location: "Multiple African Countries",
            duration: "2024 - 2025",
            impact: "3,000+ women trained",
            image: "/images/DHMH5.jpeg",
            objectives: [
                "Digital self-defense training",
                "Support groups",
                "Legal assistance referral"
            ],
            partners: ["Women's Rights Organizations"],
            featured: false
        },
        {
            id: 6,
            title: "Research on Digital Mental Health",
            description: "Comprehensive research study examining the impact of digital technologies on mental health across different African demographics.",
            category: "Research",
            status: "Upcoming",
            location: "Pan-African",
            duration: "2024 - 2026",
            impact: "National policy recommendations",
            image: "/images/DHMH6.jpeg",
            objectives: [
                "Data collection and analysis",
                "Academic publications",
                "Policy briefings"
            ],
            partners: ["Universities", "Research Institutions"],
            featured: false
        },
        {
            id: 7,
            title: "Women Digital Futures Africa (WDFA)",
            description: "Empowering African women with digital skills, AI literacy, and safe online practices through practical training, mentorship, and advocacy programs.",
            category: "Women",
            status: "Ongoing",
            location: "Multiple African Countries",
            duration: "2023 - Present",
            impact: "500+ women trained across Africa",
            image: "/images/DHMH5.jpeg",
            website: "https://wdfahub.wixsite.com/wdf-africa",
            objectives: [
                "AI literacy and digital empowerment",
                "Mentorship and peer support networks",
                "Advocacy for safer digital spaces",
                "Practical, hands-on training"
            ],
            partners: ["Local Women's Organizations", "Tech Companies", "Educational Institutions"],
            featured: false,
            programs: [
                {
                    name: "Trainings",
                    description: "Practical, foundational trainings that build AI literacy, digital confidence, and safer online habits using local examples and hands-on activities."
                },
                {
                    name: "Mentorship",
                    description: "Relational support program pairing women with trained mentors and Peer Pods for goal-setting, confidence-building, and healthy digital habits."
                },
                {
                    name: "Advocacy",
                    description: "Promoting safer digital spaces free from technology-facilitated gender-based abuse through practical norms and policy engagement."
                }
            ],
            about: "Digital spaces are powerful, but they aren't always safe or inclusive. Many women—especially in underserved communities—face barriers of cost, language, confidence, and online harm. We believe every woman deserves the skills, safeguards, and support to participate fully in the digital space without losing privacy, dignity, or mental health.",
            services: "We design practical training, mentorship, and advocacy that help women navigate everyday digital tasks, evaluate AI responsibly, and shape safer online spaces. Our work blends hands-on learning with community support and policy engagement—always focused on real needs, real safeguards, real outcomes.",
            aiProgram: "This six-week program gives women in Africa, particularly from underserved communities, a practical foundation in AI. It uses adult learning with a peer-supported, cohort-based approach that includes WhatsApp group discussions, short one-on-one clinics, local examples, and shared resources. The course is mobile-friendly and low-data, balancing simple theory with hands-on practice."
        },
        {
            id: 8,
            title: "Data Workers' Inquiry",
            description: "A global, radically participatory research initiative where data workers themselves become community researchers, identifying urgent issues and creating change across nine countries.",
            category: "Research",
            status: "Ongoing",
            location: "Global (9 countries across 5 continents)",
            duration: "2022 - Present",
            impact: "16+ data worker researchers across 9 countries",
            image: "/images/DHMH6.jpeg",
            website: "https://data-workers.org/",
            objectives: [
                "Empower data workers as community researchers",
                "Document labor conditions in the AI industry",
                "Build workplace power and transnational solidarity",
                "Create scalable mental health interventions"
            ],
            partners: ["DAIR Institute", "Academic Institutions", "Worker Collectives"],
            featured: false,
            methodology: "The Data Workers' Inquiry is a community-based project where data workers join as community researchers to lead their own inquiries in their workplaces. Using Workers' Inquiry as a Research Methodology (WIRM), it turns hidden and precarious labor into a shared, politicized site for knowledge-making and tangible change.",
            inquiries: [
                {
                    region: "Kenya",
                    title: "Data Workers in Kenya Organize!",
                    description: "Learn about grievances of data workers at Sama, Cloud Factory, and Remotasks, and how they organize for better conditions."
                },
                {
                    region: "Syria/Lebanon",
                    title: "Syrian Data Workers in their own Words",
                    description: "Challenges faced by refugee data workers in Lebanon and daily life of data workers in Syria."
                },
                {
                    region: "Latin America",
                    title: "Latin American Data Workers Say Enough!",
                    description: "Platform-mediated data work experiences from Venezuela and Brazil."
                },
                {
                    region: "Germany",
                    title: "Content Moderators in Germany speak out",
                    description: "Grievances of data workers in Europe through podcasts and videos."
                }
            ],
            events: [
                {
                    date: "October 21, 2024",
                    topic: "What impact does content moderation have on workers' mental health?",
                    speakers: ["Kauna Malgwi", "Botlhokwa Ranta", "Fasica Gebrekidan", "Milagros Miceli"],
                    recording: true
                },
                {
                    date: "November 11, 2024",
                    topic: "Who else does data work?",
                    speakers: ["John López (WGA)", "Alex Minshall", "Oscar Araya", "Rafael Grohmann", "Alex Hanna"],
                    recording: true
                }
            ],
            about: "A Mental Health Intervention for Data Workers - A scalable mental health intervention designed for data workers, grounded in hands-on insight and evidence-based practice from the dual perspective as a former content moderator and a registered clinical psychologist. By Kauna Ibrahim Malgwi",
            tagline: "Data workers worldwide report on their workplaces"
        }
    ],

    // NEW AWARDS SECTION
    awards: [
        {
            id: 1,
            title: "BBC 100 Women 2024",
            recipient: "Kauna Malgwi",
            description: "Recognition as one of the BBC's 100 most inspiring and influential women from around the world for 2024, celebrating her groundbreaking work at the intersection of digital rights, content moderation, and mental health.",
            organization: "BBC",
            category: "Recognition",
            year: "2024",
            location: "Global",
            image: "/images/bbc100.jpg",
            featured: true,
            externalUrl: "https://bbc.in/4f0F3i7",
            tags: ["Leadership", "Women", "Digital Rights", "Mental Health", "Content Moderation"]
        },
        {
            id: 2,
            title: "TIME100 AI - Most Influential People in Artificial Intelligence",
            recipient: "Kauna Malgwi",
            description: "Recognized by TIME as one of the most influential people in artificial intelligence for groundbreaking work at the intersection of AI, content moderation, and mental health, bringing critical attention to the wellbeing of data workers globally.",
            organization: "TIME Magazine",
            category: "Recognition",
            year: "2024",
            location: "Global",
            image: "/images/times100.jpg",
            featured: true,
            externalUrl: "https://time.com/7012799/kauna-malgwi/",
            tags: ["AI", "Innovation", "Leadership", "Mental Health", "Data Workers"]
        }
    ],

    site: {
        name: "Digital Rights and Mental Health Initiative Africa",
        fullName: "Digital Rights and Mental Health Initiative Africa",
        tagline: "Advancing digital rights and mental health awareness across Africa",
        email: "Info@digitalrightsandmentalhealthinitiativeafrica.org",
        phone: "+23480 8524 3034",
        address: "Abuja, Nigeria",
        social: {
            twitter: "https://twitter.com/drmhi_africa",
            facebook: "https://facebook.com/drmhi-africa",
            linkedin: "https://linkedin.com/company/drmhi-africa",
            instagram: "https://instagram.com/drmhi_africa"
        }
    },

    navigation: [
        { name: 'Home', href: '/', current: true },
        { name: 'About', href: '/about', current: false },
        { name: 'Projects', href: '/projects', current: false },
        // { name: 'WDFA', href: '/wdfa', current: false },
        // { name: 'Data Workers', href: '/data-workers-inquiry', current: false },
        { name: 'Team', href: '/team', current: false },
        { name: 'Awards', href: '/awards', current: false },
        { name: 'Partners', href: '/partners', current: false },
        { name: 'Blog', href: '/blog', current: false },
        { name: 'Gallery', href: '/gallery', current: false },
        { name: 'Donate', href: '/donate', current: false },
        { name: 'Contact', href: '/contact', current: false }
    ],

    hero: {
        title: "Protecting digital rights and strengthening mental wellbeing",
        subtitle: "We work with women, youth, and communities across Africa to create safer digital spaces, build practical digital skills, and connect people to compassionate mental health support.",
        eyebrow: "Digital rights • Mental health • Safer communities",
        summary: "From community outreach to policy advocacy, we help people navigate online harm, build digital confidence, and access support when they need it.",
        primaryButton: { text: "Support our work", link: "/donate" },
        secondaryButton: { text: "Explore our programs", link: "/projects" }
    },

    about: {
        introduction: {
            title: "Digital Rights and Mental Health Initiative (DRMHI)",
            paragraphs: [
                "The Digital Rights and Mental Health Initiative (DRMHI) is an African non-profit organization operating at the intersection of artificial intelligence (AI), digital rights, mental health, gender, labor, and crisis response.",
                "DRMHI exists to address the acute psychological, social, economic, and human rights harms created by the rapid expansion of digital platforms and AI infrastructure across Africa."
            ]
        },
        mission: {
            title: "Our Mission",
            content: "To protect mental health, dignity and fundamental rights in communities affected by conflict, digital harm, technology-facilitated gender-based violence and exploitative digital labour through accessible care, African-led research, community action and responsible technology governance."
        },
        vision: {
            title: "Our Vision",
            content: "An Africa where technology expands human agency rather than harm, and where people, particularly women, young people, digital workers and crisis-affected communities, can live, work and participate in digital society with dignity, safety and access to mental health support."
        },
        values: [
            { title: "Human Rights & Dignity" },
            { title: "Mental Health Equity" },
            { title: "Platform Governance, TFGBV Prevention & AI Accountability" },
            { title: "Survivor-Centered Care" },
            { title: "Community Empowerment" }
        ]
    },

    team: [
        {
            id: 1,
            name: "Kauna Ibrahim Malgwi",
            role: "Executive Director and Founder, Digital Rights and Mental Health Initiative Africa",
            bio: "Clinical psychologist & Former Facebook content moderator. Recognized by BBC as one of the 100 most inspiring women of 2024 and by TIME as one of the most influential people in AI.",
            image: "/images/Kauna.jpeg",
            social: {
                linkedin: "#",
                twitter: "#"
            }
        },
        {
            id: 2,
            name: "Rhoda A. Zoaka",
            role: "Board Member",
            bio: "Educationist with extensive experience in curriculum development and educational policy across Nigeria.",
            image: "/images/Rhoda.jpeg",
            social: {
                linkedin: "#",
                twitter: "#"
            }
        },
        {
            id: 3,
            name: "Dr. Ibrahim A. Mshelia",
            role: "Board Member & Psychiatrist Consultant",
            bio: "Psychiatrist at Federal Neuropsychiatric Hospital Maiduguri, bringing expertise in mental health and clinical psychology.",
            image: "/images/Ibrahim.jpeg",
            social: {
                linkedin: "#",
                twitter: "#"
            }
        },
        {
            id: 4,
            name: "Ms. Ruth Ishaku Balami",
            role: "Board Member",
            bio: "Public Health Practitioner specializing in community health interventions and wellness programs.",
            image: "/images/Ruth.jpeg",
            social: {
                linkedin: "#",
                twitter: "#"
            }
        },
        {
            id: 5,
            name: "Saratu Mshelia",
            role: "Co-founder/Project Lead",
            bio: "Women's  Digital Futures Africa(WDFA).",
            image: "/images/Saratu.jpeg",
            social: {
                linkedin: "#",
                twitter: "#"
            }
        }
    ],

    // UPDATED PARTNERS SECTION
    partners: [
        // Existing partners
        {
            name: "African Digital Rights Network",
            logo: "/images/DHMH1.jpeg",
            description: "Collaborating on digital rights advocacy across the continent",
            type: "Network",
            website: "#",
            partnershipYear: "2023",
            tier: "Strategic Partner"
        },
        {
            name: "Mental Health Foundation Ghana",
            logo: "/images/DHMH2.jpeg",
            description: "Joint programs for mental health awareness and support",
            type: "Foundation",
            website: "#",
            partnershipYear: "2022",
            tier: "Program Partner"
        },
        {
            name: "Tech for Social Good",
            logo: "/images/DHMH3.jpeg",
            description: "Technology solutions for social impact initiatives",
            type: "Corporate",
            website: "#",
            partnershipYear: "2023",
            tier: "Technical Partner"
        },
        {
            name: "African Union Digital Initiative",
            logo: "/images/DHMH4.jpeg",
            description: "Policy development and implementation partnerships",
            type: "Government",
            website: "#",
            partnershipYear: "2021",
            tier: "Strategic Partner"
        },

        // NEW PARTNERS
        {
            name: "Gammayyar African Tech Workers Cooperative Society (GTechCoop)",
            logo: null,
            description: "Worker-owned cooperative supporting African tech workers through collective bargaining, advocacy, and mutual aid.",
            longDescription: "Collaborating to strengthen worker rights, improve working conditions, and build solidarity among tech workers across the continent.",
            type: "Cooperative",
            website: "https://gamayyarafricantechworkers.coop",
            partnershipYear: "2024",
            projects: ["Worker Rights Advocacy", "Tech Worker Solidarity", "Fair Labor Practices"],
            impact: "Supporting tech workers across Africa",
            tier: "Strategic Partner",
            social: {
                twitter: "#",
                linkedin: "#"
            }
        },
        {
            name: "Data Workers' Inquiry",
            logo: null,
            description: "Global participatory research initiative where data workers document their own labor conditions and build transnational solidarity.",
            longDescription: "Collaborating on research, mental health interventions for data workers, and building worker-led knowledge production networks across nine countries.",
            type: "Research",
            website: "https://data-workers.org",
            partnershipYear: "2022",
            projects: ["Mental Health Intervention", "Worker-led Research", "Global Solidarity", "Content Moderator Wellbeing"],
            impact: "16+ researchers across 9 countries",
            tier: "Research Partner",
            social: {
                twitter: "#",
                linkedin: "#"
            }
        },
        {
            name: "Distributed AI Research Institute (DAIR)",
            logo: null,
            description: "Independent research institute studying the societal impacts of artificial intelligence and advocating for community-centered AI development.",
            longDescription: "Partnering on research into AI labor conditions, algorithmic harms, and developing frameworks for ethical AI that centers worker and community voices.",
            type: "Research Institute",
            website: "https://www.dair-institute.org",
            partnershipYear: "2023",
            projects: ["AI Labor Research", "Algorithmic Accountability", "Worker-Centered AI"],
            impact: "Joint research publications and advocacy initiatives",
            tier: "Research Partner",
            social: {
                twitter: "https://twitter.com/dair_institute",
                linkedin: "https://linkedin.com/company/dair-institute"
            }
        },
        {
            name: "African Content Moderators Union - Nigerian Chapter",
            logo: null,
            description: "Worker-led organization advocating for the rights, fair treatment, and wellbeing of content moderators in Nigeria.",
            longDescription: "Working together to improve working conditions, provide mental health support, advocate for fair compensation, and build collective power for content moderators across Nigeria.",
            type: "Worker Union",
            website: "#",
            partnershipYear: "2023",
            projects: ["Worker Rights", "Mental Health Support", "Fair Labor Advocacy", "Safe Working Conditions"],
            impact: "Supporting content moderators across Nigeria",
            tier: "Strategic Partner",
            social: {
                twitter: "#",
                linkedin: "#"
            }
        },
        {
            name: "Girls 4 Change Community",
            logo: null,
            description: "Community-based organization empowering girls and young women through education, mentorship, advocacy, and leadership development.",
            longDescription: "Collaborating on digital literacy programs, online safety training, mental health support, and leadership opportunities for girls and young women in Nigeria.",
            type: "Community Organization",
            website: "#",
            partnershipYear: "2023",
            projects: ["Digital Literacy for Girls", "Online Safety Training", "Mentorship Programs", "Youth Leadership"],
            impact: "Reaching hundreds of girls across Nigeria",
            tier: "Community Partner",
            social: {
                twitter: "#",
                linkedin: "#",
                instagram: "#"
            }
        }
    ],

    programs: [
        {
            title: "Community Support",
            description: "We create compassionate spaces where people can access guidance, peer support, and practical help when online harm or stress becomes overwhelming.",
            icon: "🤝",
            features: ["Support Systems", "Peer Guidance", "Community Care"]
        },
        {
            title: "Digital Literacy",
            description: "We deliver workshops that build confidence, safer online habits, and practical digital skills for women, youth, and everyday users.",
            icon: "💡",
            features: ["Online Safety", "Skills Training", "Digital Confidence"]
        },
        {
            title: "Mental Health Support",
            description: "We connect people to mental health resources, wellbeing tools, and referral pathways that support resilience and recovery.",
            icon: "🧠",
            features: ["Counseling Access", "Wellbeing Resources", "Referral Pathways"]
        },
        {
            title: "Policy Advocacy",
            description: "We engage communities and decision-makers to strengthen protections for digital rights, safe workplaces, and healthier online spaces.",
            icon: "⚖️",
            features: ["Policy Research", "Legal Advocacy", "Awareness Campaigns"]
        }
    ],

    blog: {
        featured: [
            {
                id: 1,
                title: "Panel Speaker at European Parliament Brussels: Transnational Forum on Alternatives to Uberisation",
                excerpt: "Delighted to be a panel speaker in the European Parliament Brussels Belgium, discussing African content moderation and their mental health struggles.",
                date: "2024-02-21",
                author: "Kauna Malgwi",
                category: "Events",
                readTime: "5 min read",
                image: "/images/DHMH1.jpeg",
                featured: true,
                fullContent: "I'm delighted to be a panel speaker in the European Parliament Brussels Belgium, \"Transnational Forum on Alternatives to Uberisation, 21-22 Feb 2024\" about African content moderation and their Mental Health struggles."
            },
            {
                id: 2,
                title: "FIFAfrica24 Dakar: Digitalisation and Feminist Future of Work",
                excerpt: "An enlightening and fulfilling experience attending #FIFAfrica24 in Dakar, Senegal as a speaker on digitalisation and feminist future of work.",
                date: "2024-02-15",
                author: "Kauna Malgwi",
                category: "Events",
                readTime: "6 min read",
                image: "/images/DHMH2.jpeg",
                featured: true,
                fullContent: "I had an enlightening and fulfilling experience attending #FIFAfrica24 in Dakar, Senegal. It was a privilege to participate as a speaker on the digitalisation and feminist future of work(ers), where I shared insights from my work in content moderation, particularly on how digitalization can adversely affect human workers. The conference was a vibrant space filled with innovative thinkers and changemakers."
            },
            {
                id: 3,
                title: "Digital Africa Rising: Co-Moderating Pan-African Cooperation Summit",
                excerpt: "A gathering of 80 co-op leaders, scholars, tech innovators, and policymakers from 31 countries to reimagine Africa's digital future.",
                date: "2024-02-10",
                author: "Kauna Malgwi",
                category: "Advocacy",
                readTime: "6 min read",
                image: "/images/DHMH3.jpeg",
                featured: false,
                fullContent: "Digital Africa Rising 🌍. It was a gathering of 80 co-op leaders, scholars, tech innovators, and policymakers from 31 countries to reimagine Africa's digital future with cooperation at its core. It was thrilling to co-moderate with Prof. Mark Graham from Fairwork, Caroline Njuki from International Labour Organization and Prof. Trebor Scholz during this conference and contribute to the reimagining of Africa's digital landscape."
            },
            {
                id: 4,
                title: "Nawi Collective Kampala: Women in the Gig Economy & Digital Rights",
                excerpt: "Discussion in Kampala, Uganda addressing challenges women face in the gig economy, particularly in content moderation, and mental health struggles.",
                date: "2024-02-05",
                author: "Kauna Malgwi",
                category: "Advocacy",
                readTime: "5 min read",
                image: "/images/DHMH4.jpeg",
                featured: false,
                fullContent: "My participation in the discussion organized by Nawi Collective in Kampala, Uganda 🇺🇬 provided a valuable platform to address the challenges women face in the gig economy, particularly in content moderation, and the associated mental health struggles. From protection against addictive algorithms to safeguarding against sexual harassment and abuse, ensuring digital rights for women is paramount."
            },
            {
                id: 5,
                title: "The Intersection of Digital Rights and Mental Health in Africa",
                excerpt: "Exploring how digital technologies impact mental wellbeing and what we can do to protect both.",
                date: "2024-01-15",
                author: "Dr. Amina Bello",
                category: "Research",
                readTime: "5 min read",
                image: "/images/DHMH5.jpeg",
                featured: false
            },
            {
                id: 6,
                title: "Digital Wellness: Strategies for Healthier Online Engagement",
                excerpt: "Practical tips for maintaining mental health in an increasingly digital world.",
                date: "2024-01-10",
                author: "Fatima Nkosi",
                category: "Wellness",
                readTime: "4 min read",
                image: "/images/DHMH6.jpeg",
                featured: false
            }
        ]
    },

    careers: {
        intro: "Join Digital Rights and Mental Health Initiative Africa in advancing digital rights and mental wellbeing across the continent. Browse our current openings below.",
        emptyStateImage: "",
        positions: [
            {
                id: 1,
                title: "HR/Admin Officer",
                type: "Volunteer",
                department: "Human Resources & Administration",
                location: "Remote / Flexible",
                postedDate: "2026-08-27",
                summary: "Support Digital Rights and Mental Health Initiative Africa's people operations, from recruitment coordination to maintaining volunteer records, as part of our growing team.",
                applyLink: "https://forms.gle/oGhQXs7UzaT4ZVGo7",
                image: "",
                isOpen: true,
                details: {
                    positionTitle: "Human Resources/Administration Volunteer",
                    meta: {
                        Department: "Human Resources",
                        Location: "To be assigned",
                        "Number of Positions": 2,
                        "Engagement Type": "Volunteer",
                        Duration: "Six (6) Months",
                        Period: "September 2026 – February 2027"
                    },
                    about: [
                        "Digital Rights and Mental Health Initiative Africa is a non-profit organization committed to advancing digital rights, mental health awareness, psychosocial wellbeing, community resilience, inclusion, and related humanitarian and development initiatives.",
                        "Digital Rights and Mental Health Initiative Africa is seeking a committed and organized individual to serve as a Human Resources Volunteer."
                    ],
                    jobDescription: "The Human Resources Volunteer will support Digital Rights and Mental Health Initiative Africa's recruitment, volunteer management, personnel documentation, onboarding, records management, and HR administrative activities.",
                    responsibilities: [
                        "Support recruitment and selection processes.",
                        "Assist with preparation of recruitment documents.",
                        "Maintain personnel and volunteer records.",
                        "Support volunteer onboarding and orientation.",
                        "Assist with attendance and leave records.",
                        "Maintain HR trackers and databases.",
                        "Support training coordination.",
                        "Assist with HR reports.",
                        "Support preparation of HR correspondence.",
                        "Assist with performance documentation.",
                        "Support volunteer engagement activities.",
                        "Assist with exit and handover documentation.",
                        "Maintain strict confidentiality of personnel information.",
                        "Support implementation of Digital Rights and Mental Health Initiative Africa HR policies."
                    ],
                    requirements: [
                        "Possess BSc or HND in Human Resources, Business Administration, Management, Social Sciences or a related discipline.",
                        "Have good communication and interpersonal skills.",
                        "Demonstrate strong organizational skills.",
                        "Be trustworthy and able to maintain confidentiality.",
                        "Have basic knowledge of HR practices.",
                        "Be computer literate.",
                        "Have good knowledge of Microsoft Word and Excel.",
                        "Possess a working personal laptop and reliable internet access.",
                        "Be available for a minimum of ten (10) hours per week.",
                        "Be willing to report physically to the Digital Rights and Mental Health Initiative Africa office once weekly, as agreed with Digital Rights and Mental Health Initiative Africa, if applicable.",
                        "Be willing to prepare and implement bi-monthly work plans.",
                        "Be able to respond to official Digital Rights and Mental Health Initiative Africa communication within one (1) hour during agreed availability periods."
                    ],
                    volunteerTerms: [
                        "This is a strictly voluntary and unpaid position.",
                        "Digital Rights and Mental Health Initiative Africa will not provide salary, stipend, allowance, honorarium, remuneration, financial compensation or any other form of payment for this volunteer position.",
                        "The Volunteer will be required to provide and use a working personal laptop for assigned duties."
                    ],
                    deadlineNote: "Only shortlisted applicants will be contacted."
                }
            },
            {
                id: 2,
                title: "Procurement/Logistics Officer",
                type: "Volunteer",
                department: "Operations",
                location: "Remote / Flexible",
                postedDate: "2026-08-27",
                summary: "Coordinate procurement and logistics for Digital Rights and Mental Health Initiative Africa's programs, ensuring resources and materials reach the communities we serve.",
                applyLink: "https://forms.gle/oGhQXs7UzaT4ZVGo7",
                image: "",
                isOpen: true,
                details: {
                    positionTitle: "Human Resources/Administration Volunteer",
                    meta: {
                        Department: "Human Resources",
                        Location: "To be assigned",
                        "Number of Positions": 2,
                        "Engagement Type": "Volunteer",
                        Duration: "Six (6) Months",
                        Period: "September 2026 – February 2027"
                    },
                    about: [
                        "Digital Rights and Mental Health Initiative Africa is a non-profit organization committed to advancing digital rights, mental health awareness, psychosocial wellbeing, community resilience, inclusion, and related humanitarian and development initiatives.",
                        "Digital Rights and Mental Health Initiative Africa is seeking a committed and organized individual to serve as a Human Resources Volunteer."
                    ],
                    jobDescription: "The Human Resources Volunteer will support Digital Rights and Mental Health Initiative Africa's recruitment, volunteer management, personnel documentation, onboarding, records management, and HR administrative activities.",
                    responsibilities: [
                        "Support recruitment and selection processes.",
                        "Assist with preparation of recruitment documents.",
                        "Maintain personnel and volunteer records.",
                        "Support volunteer onboarding and orientation.",
                        "Assist with attendance and leave records.",
                        "Maintain HR trackers and databases.",
                        "Support training coordination.",
                        "Assist with HR reports.",
                        "Support preparation of HR correspondence.",
                        "Assist with performance documentation.",
                        "Support volunteer engagement activities.",
                        "Assist with exit and handover documentation.",
                        "Maintain strict confidentiality of personnel information.",
                        "Support implementation of Digital Rights and Mental Health Initiative Africa HR policies."
                    ],
                    requirements: [
                        "Possess BSc or HND in Human Resources, Business Administration, Management, Social Sciences or a related discipline.",
                        "Have good communication and interpersonal skills.",
                        "Demonstrate strong organizational skills.",
                        "Be trustworthy and able to maintain confidentiality.",
                        "Have basic knowledge of HR practices.",
                        "Be computer literate.",
                        "Have good knowledge of Microsoft Word and Excel.",
                        "Possess a working personal laptop and reliable internet access.",
                        "Be available for a minimum of ten (10) hours per week.",
                        "Be willing to report physically to the Digital Rights and Mental Health Initiative Africa office once weekly, as agreed with Digital Rights and Mental Health Initiative Africa, if applicable.",
                        "Be willing to prepare and implement bi-monthly work plans.",
                        "Be able to respond to official Digital Rights and Mental Health Initiative Africa communication within one (1) hour during agreed availability periods."
                    ],
                    volunteerTerms: [
                        "This is a strictly voluntary and unpaid position.",
                        "Digital Rights and Mental Health Initiative Africa will not provide salary, stipend, allowance, honorarium, remuneration, financial compensation or any other form of payment for this volunteer position.",
                        "The Volunteer will be required to provide and use a working personal laptop for assigned duties."
                    ],
                    deadlineNote: "Only shortlisted applicants will be contacted."
                }
            },
            {
                id: 3,
                title: "Operations Officer",
                type: "Volunteer",
                department: "Operations",
                location: "Remote / Flexible",
                postedDate: "2026-08-27",
                summary: "Help keep Digital Rights and Mental Health Initiative Africa's day-to-day operations running smoothly, supporting our teams across digital rights and mental health programs.",
                applyLink: "https://forms.gle/oGhQXs7UzaT4ZVGo7",
                image: "",
                isOpen: true,
                details: {
                    positionTitle: "Operations Team Lead Volunteer",
                    meta: {
                        Department: "Operations",
                        Location: "To be assigned",
                        "Number of Positions": 2,
                        "Engagement Type": "Volunteer",
                        Duration: "Six (6) Months",
                        Period: "September 2026 – February 2027"
                    },
                    about: [
                        "Digital Rights and Mental Health Initiative Africa is a non-profit organization committed to advancing digital rights, mental health awareness, psychosocial wellbeing, community resilience, inclusion and related humanitarian and development initiatives.",
                        "Digital Rights and Mental Health Initiative Africa is seeking a committed and organized individual to serve as an Operations Volunteer."
                    ],
                    jobDescription: "The Operations Volunteer will support the day-to-day operational, administrative, and logistical functions of Digital Rights and Mental Health Initiative Africa.",
                    responsibilities: [
                        "Support daily office operations.",
                        "Assist with administrative coordination.",
                        "Support logistics for Digital Rights and Mental Health Initiative Africa activities.",
                        "Assist with meetings, workshops, and events.",
                        "Maintain operational records.",
                        "Support inventory and asset documentation.",
                        "Assist with transportation and logistical arrangements.",
                        "Support field activity preparation.",
                        "Assist departments with operational requests.",
                        "Support filing and documentation.",
                        "Identify operational challenges and report them.",
                        "Perform other assigned operational duties."
                    ],
                    requirements: [
                        "Possess BSc or HND from a recognized institution.",
                        "Have good organizational and administrative skills.",
                        "Have strong communication and interpersonal skills.",
                        "Be detail-oriented and dependable.",
                        "Be computer literate.",
                        "Have knowledge of Microsoft Word and Excel.",
                        "Be able to work independently and in a team.",
                        "Possess a working personal laptop and reliable internet access.",
                        "Have good knowledge of Microsoft Office applications.",
                        "Be available for a minimum of ten (10) hours per week.",
                        "Be willing to report physically to the Digital Rights and Mental Health Initiative Africa office once weekly, as agreed with Digital Rights and Mental Health Initiative Africa, if applicable.",
                        "Be willing to prepare and implement bi-monthly work plans.",
                        "Be able to respond to official Digital Rights and Mental Health Initiative Africa communication within one (1) hour during agreed availability periods."
                    ],
                    volunteerTerms: [
                        "This is a strictly voluntary and unpaid position.",
                        "Digital Rights and Mental Health Initiative Africa will not provide salary, stipend, allowance, honorarium, remuneration, financial compensation or any other form of payment for this volunteer position.",
                        "Possess a working personal laptop and reliable internet access."
                    ],
                    deadlineNote: "Only shortlisted applicants will be contacted."
                }
            },
            ...NEW_VOLUNTEER_VACANCIES
        ]
    },

    gallery: [
        {
            id: 1,
            title: "Community outreach at Royal Rainbow Academy",
            image: "/images/bts.jpeg",
            category: "Community Outreach",
            description: "A school-based outreach day linking learners with digital safety and wellbeing resources.",
            location: "Abuja, Nigeria",
            date: "29/01/2026",
            featured: true
        },
        {
            id: 2,
            title: "School-based wellbeing conversation",
            image: "/images/bts1.jpeg",
            category: "Community Outreach",
            description: "Young people shared experiences around online wellbeing and healthy digital habits.",
            location: "Lugbe, Abuja",
            date: "29/01/2026"
        },
        {
            id: 3,
            title: "Youth webinar on digital safety and mental wellbeing",
            image: "/images/com1.jpeg",
            category: "Webinars",
            description: "An interactive webinar focused on safer online practices and support for young people.",
            location: "Virtual",
            date: "2024-06-12",
            featured: true
        },
        {
            id: 4,
            title: "Train-the-trainer workshop for peer educators",
            image: "/images/com2.jpeg",
            category: "Trainings",
            description: "We equipped peer educators with practical tools to guide others on digital safety and wellbeing.",
            location: "Kaduna, Nigeria",
            date: "2024-05-08",
            featured: true
        },
        {
            id: 5,
            title: "Panel on digital rights and platform labour",
            image: "/images/com3.jpeg",
            category: "Conferences",
            description: "A high-level discussion on the intersection of digital rights, labour, and mental wellbeing.",
            location: "Dakar, Senegal",
            date: "2024-02-15"
        },
        {
            id: 6,
            title: "Advocacy walk for safer online spaces",
            image: "/images/com4.jpeg",
            category: "Advocacy Campaigns",
            description: "Community members joined the campaign to push for safer and more respectful digital spaces.",
            location: "Lagos, Nigeria",
            date: "2024-03-08"
        },
        {
            id: 7,
            title: "Team strategy retreat",
            image: "/images/com5.jpeg",
            category: "Team Activities",
            description: "The team came together to plan youth-centered projects and strengthen our support model.",
            location: "Abuja, Nigeria",
            date: "2024-01-20"
        },
        {
            id: 8,
            title: "Partner roundtable on youth wellbeing",
            image: "/images/com6.jpeg",
            category: "Partner Engagements",
            description: "A collaborative session with partners to align support for young people and communities.",
            location: "Abuja, Nigeria",
            date: "2024-04-17"
        },
        {
            id: 9,
            title: "Media appearance on digital rights",
            image: "/images/DHMH3.jpeg",
            category: "Media Appearances",
            description: "A public conversation highlighting the importance of digital rights and mental health support.",
            location: "Nigerian Television",
            date: "2024-06-01"
        },
        {
            id: 10,
            title: "International Women's Day engagement",
            image: "/images/IWD BORNO 1.jpeg",
            category: "Advocacy Campaigns",
            description: "Our team engaged directly with women and young people on digital rights and wellbeing.",
            location: "Borno State",
            date: "08/03/2026"
        },
        {
            id: 11,
            title: "Peer educator training session",
            image: "/images/com7.jpeg",
            category: "Trainings",
            description: "A practical session helping facilitators lead conversations on safety, wellbeing, and resilience.",
            location: "Maiduguri, Nigeria",
            date: "2024-07-22"
        },
        {
            id: 12,
            title: "Community conversation with partners",
            image: "/images/com8.jpeg",
            category: "Partner Engagements",
            description: "A collaborative discussion with partners focused on community-led support systems.",
            location: "Virtual",
            date: "2024-08-10"
        }
    ],

    donation: {
        onlineOptions: [
            {
                currency: "NGN",
                symbol: "₦",
                name: "Nigerian Naira",
                label: "Donate in Nigerian Naira",
                url: "https://flutterwave.com/donate/3blzenyugoq8"
            },
            {
                currency: "USD",
                symbol: "$",
                name: "US Dollar",
                label: "Donate in US Dollars",
                url: "https://flutterwave.com/donate/tgymuo9afajp"
            },
            {
                currency: "EUR",
                symbol: "€",
                name: "Euro",
                label: "Donate in Euros",
                url: "https://flutterwave.com/donate/j3eudjcoq2c4"
            }
        ],
        tiers: [
            {
                name: "Supporter",
                amount: "25",
                description: "Help fund one digital literacy workshop",
                benefits: ["Thank you certificate", "Newsletter updates", "Social media shoutout"]
            },
            {
                name: "Advocate",
                amount: "100",
                description: "Support mental health counseling sessions",
                benefits: ["All previous benefits", "Digital badge", "Impact report"]
            },
            {
                name: "Champion",
                amount: "500",
                description: "Fund research on digital mental health",
                benefits: ["All previous benefits", "Recognition on website", "Invitation to events"]
            }
        ]
    }
};

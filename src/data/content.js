//src/data/content.js
export const siteContent = {
    projects: [
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
            featured: true
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
            featured: true
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
            featured: true
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
            image: "/images/wdfa-logo.jpg",
            website: "https://wdfahub.wixsite.com/wdf-africa",
            objectives: [
                "AI literacy and digital empowerment",
                "Mentorship and peer support networks",
                "Advocacy for safer digital spaces",
                "Practical, hands-on training"
            ],
            partners: ["Local Women's Organizations", "Tech Companies", "Educational Institutions"],
            featured: true,
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
            image: "/images/data-workers-inquiry.jpg",
            website: "https://data-workers.org/",
            objectives: [
                "Empower data workers as community researchers",
                "Document labor conditions in the AI industry",
                "Build workplace power and transnational solidarity",
                "Create scalable mental health interventions"
            ],
            partners: ["DAIR Institute", "Academic Institutions", "Worker Collectives"],
            featured: true,
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
            image: null,
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
            image: null,
            featured: true,
            externalUrl: "https://time.com/7012799/kauna-malgwi/",
            tags: ["AI", "Innovation", "Leadership", "Mental Health", "Data Workers"]
        }
    ],

    site: {
        name: "DRMHI Africa",
        fullName: "Digital Rights and Mental Health Initiative Africa",
        tagline: "Advancing digital rights and mental health awareness across Africa",
        email: "Info@digitalandmentalhealthinitiative.org",
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
        title: "Digital Rights & Mental Health Initiative Africa",
        subtitle: "Building a future where digital spaces promote mental wellbeing and protect fundamental rights across Africa",
        primaryButton: { text: "Get Involved", link: "/donate" },
        secondaryButton: { text: "Learn More", link: "/about" }
    },

    about: {
        mission: {
            title: "Our Mission",
            content: "The Digital Rights and Mental Health Initiative Africa(DRMHIA) is a Non-Profit Organization focused on the intersection of digital rights and mental health. Its mission is to address the impact of digital technology on mental well-being, advocating for policies that protect individuals' digital rights while promoting mental health. The initiative works on raising awareness about issues like online privacy, cyberbullying, and digital addiction, and provides support through research, advocacy, and educational programs. By highlighting the need for a balanced approach to digital technology and mental health, DRMHI aims to foster a safer and more supportive online environment.."
        },
        vision: {
            title: "Our Vision",
            content: "Our vision is a digitally inclusive Africa where every individual can exercise their digital rights freely while maintaining optimal mental health and wellbeing, with particular focus on empowering women and marginalized communities."
        },
        values: [
            {
                title: "Innovation",
                description: "Pioneering new approaches to digital rights and mental health intersectionality"
            },
            {
                title: "Collaboration",
                description: "Working with communities, governments, and organizations across Africa"
            },
            {
                title: "Empowerment",
                description: "Equipping individuals and communities with knowledge and tools for digital wellbeing"
            },
            {
                title: "Advocacy",
                description: "Championing policies that protect digital rights and promote mental health"
            }
        ]
    },

    team: [
        {
            id: 1,
            name: "Kauna Ibrahim Malgwi",
            role: "Executive Director and Founder, DRMHI",
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
            role: "Board Member",
            bio: "Researcher focusing on digital rights, AI ethics, and women's empowerment in technology.",
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
            title: "Digital Rights Advocacy",
            description: "Protecting online freedoms and privacy rights across African nations",
            icon: "🔒",
            features: ["Policy Research", "Legal Advocacy", "Awareness Campaigns"]
        },
        {
            title: "Mental Health Support",
            description: "Accessible mental health resources for digital communities",
            icon: "🧠",
            features: ["Online Counseling", "Support Groups", "Wellness Resources"]
        },
        {
            title: "Digital Literacy",
            description: "Empowering communities with digital skills and safety knowledge",
            icon: "🎓",
            features: ["Workshops", "Training Materials", "Community Outreach"]
        },
        {
            title: "Research & Innovation",
            description: "Cutting-edge research on digital technology and mental wellbeing",
            icon: "🔬",
            features: ["Academic Studies", "Data Analysis", "Innovation Labs"]
        }
    ],

    blog: {
        featured: [
            {
                id: 1,
                title: "The Intersection of Digital Rights and Mental Health in Africa",
                excerpt: "Exploring how digital technologies impact mental wellbeing and what we can do to protect both.",
                date: "2024-01-15",
                author: "Dr. Amina Bello",
                category: "Research",
                readTime: "5 min read",
                image: "/images/DHMH1.jpeg",
                featured: true
            },
            {
                id: 2,
                title: "Digital Wellness: Strategies for Healthier Online Engagement",
                excerpt: "Practical tips for maintaining mental health in an increasingly digital world.",
                date: "2024-01-10",
                author: "Fatima Nkosi",
                category: "Wellness",
                readTime: "4 min read",
                image: "/images/DHMH2.jpeg",
                featured: true
            },
            {
                id: 3,
                title: "Policy Framework for Digital Safety in West Africa",
                excerpt: "Analyzing current policies and proposing new frameworks for digital safety.",
                date: "2024-01-05",
                author: "David Okafor",
                category: "Policy",
                readTime: "6 min read",
                image: "/images/DHMH3.jpeg",
                featured: false
            },
            {
                id: 4,
                title: "Community Mental Health Support in the Digital Age",
                excerpt: "How local communities are adapting mental health support for digital platforms.",
                date: "2024-01-01",
                author: "Kwame Mensah",
                category: "Community",
                readTime: "4 min read",
                image: "/images/DHMH4.jpeg",
                featured: false
            }
        ]
    },

    gallery: [
        {
            id: 1,
            title: "Community Workshop in Accra",
            image: "/images/DHMH1.jpeg",
            category: "Events",
            description: "Digital literacy training session with local community members"
        },
        {
            id: 2,
            title: "Policy Roundtable Discussion",
            image: "/images/DHMH2.jpeg",
            category: "Events",
            description: "Stakeholder meeting on digital rights policy framework"
        },
        {
            id: 3,
            title: "Mental Health Awareness Campaign",
            image: "/images/DHMH3.jpeg",
            category: "Campaigns",
            description: "Public awareness event in Lagos, Nigeria"
        }
    ],

    donation: {
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
        ],
        accounts: {
            naira: {
                currency: "₦",
                accountName: "Digital and Mental Health Initiative",
                accountNumber: "1028622735",
                bankName: "United Bank of Africa (UBA)",
                type: "Naira Account"
            },
            usd: {
                currency: "$",
                accountName: "Digital and Mental Health Initiative",
                accountNumber: "3004920282",
                bankName: "United Bank of Africa (UBA)",
                type: "USD Account"
            },
            euro: {
                currency: "€",
                accountName: "Digital and Mental Health Initiative",
                accountNumber: "3004921698",
                bankName: "United Bank of Africa (UBA)",
                type: "Euro Account"
            }
        }
    }
};
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
        { name: 'Team', href: '/team', current: false },
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
            content: "To bridge the gap between digital rights advocacy and mental health support, creating sustainable solutions that address the psychological impacts of digital technologies while safeguarding fundamental rights across Africa."
        },
        vision: {
            title: "Our Vision",
            content: "An Africa where digital technologies enhance mental wellbeing, protect user rights, and empower communities through safe, inclusive, and accessible digital spaces."
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
            role: "Executive Director and founder DRMHI",
            bio: "Clinical psychologist & Former Facebook content moderator.",
            image: "/images/Kauna.jpeg",
            social: {
                linkedin: "#",
                twitter: "#"
            }
        },
        {
            id: 2,
            name: "Rhoda A. Zoaka",
            role: "Trustee-Secretary DRMHI",
            bio: "Educationist",
            image: "/images/Rhoda.jpeg",
            social: {
                linkedin: "#",
                twitter: "#"
            }
        },
        {
            id: 3,
            name: "Dr. Ibrahim A. Mshelia",
            role: "Psychiatrist Consultant",
            bio: "Federal Neuropsychiatric Hospital Maiduguri federal neuropsychiatric hospital maiduguri Borno",
            image: "/images/Ibrahim.jpeg",
            social: {
                linkedin: "#",
                twitter: "#"
            }
        },
        {
            id: 4,
            name: "Ms. Ruth Ishaku Balami",
            role: "Trustee-Treasurer DRMHI",
            bio: " Public Health Practitioner",
            image: "/images/Ruth.jpeg",
            social: {
                linkedin: "#",
                twitter: "#"
            }
        }
    ],

    partners: [
        {
            name: "African Digital Rights Network",
            logo: "/images/DHMH1.jpeg",
            description: "Collaborating on digital rights advocacy across the continent"
        },
        {
            name: "Mental Health Foundation Ghana",
            logo: "/images/DHMH2.jpeg",
            description: "Joint programs for mental health awareness and support"
        },
        {
            name: "Tech for Social Good",
            logo: "/images/DHMH3.jpeg",
            description: "Technology solutions for social impact initiatives"
        },
        {
            name: "African Union Digital Initiative",
            logo: "/images/DHMH4.jpeg",
            description: "Policy development and implementation partnerships"
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
        ]
    }
};
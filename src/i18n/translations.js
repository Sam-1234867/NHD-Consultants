import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  /* =========================================================
     ENGLISH
     ========================================================= */
  en: {
    translation: {
      /* =====================================================
         NAVIGATION
         ===================================================== */
      nav: {
        home: "Home",
        about: "About Us",
        services: "Services",
        projects: "Projects",
        experts: "Experts",
        news: "News",
        contact: "Contact",
        start: "Start a Conversation",
      },

      /* =====================================================
         HOME
         ===================================================== */
      home: {
        heroLabel: "NHD Consultants",
        heroTitle1: "Continuing a proven legacy",
        heroTitle2: "of success in Tajikistan.",
        heroDescription:
          "We provide practical, sustainable, and institutionally embedded solutions for community development, infrastructure, and public policy reform.",
        primaryButton: "Explore Our Services",
        secondaryButton: "Contact Us",

        localExpertise: "Local Expertise",
        socialImpact: "Social Impact",
        sustainableSolutions: "Sustainable Solutions",
        companyLabel: "ABOUT THE COMPANY",

heroCardTitle1: "Practical, Sustainable",
heroCardTitle2: "Solutions",

heroCardTitle3: "Institutionally Embedded",
heroCardTitle4: "Development",

heroCardDescription:
  "New Horizons of Dushanbe LLC is a newly established, legally independent consulting firm built on a proven track record of leadership and operational excellence.",
        aboutLabel: "ABOUT THE COMPANY",
        introTitle1: "Continuing a proven legacy",
introTitle2: "of success in Tajikistan.",

introParagraph1:
  "New Horizons of Dushanbe LLC is a newly established, legally independent consulting firm built on a proven track record of leadership and operational excellence. Our management team previously led, managed, and successfully delivered a broad portfolio of high-impact projects during their tenure at BAZIS, GMES and BDO. We bring this extensive execution capability and rigorous project management approach directly to our new firm.",

introParagraph2:
  "Led by former managing directors who successfully drove these complex initiatives alongside a former senior cabinet official with over 25 years of municipal utility experience our leadership combines deep local knowledge with international best practices.",

introParagraph3:
  "We provide practical, sustainable, and institutionally embedded solutions for community development, infrastructure, and public policy reform.",
        aboutTitle1: "Continuing a proven legacy",
        aboutTitle2: "of success in Tajikistan.",
        aboutDescription1:
          "New Horizons of Dushanbe LLC is a newly established, legally independent consulting firm built on a proven track record of leadership and operational excellence. Our management team previously led, managed, and successfully delivered a broad portfolio of high-impact projects during their tenure at BAZIS, GMES and BDO. We bring this extensive execution capability and rigorous project management approach directly to our new firm.",
        aboutDescription2:
          "Led by former managing directors who successfully drove these complex initiatives alongside a former senior cabinet official with over 25 years of municipal utility experience our leadership combines deep local knowledge with international best practices.",
        aboutDescription3:
          "We provide practical, sustainable, and institutionally embedded solutions for community development, infrastructure, and public policy reform.",
        discoverMore: "Discover More",

        sectorsLabel: "CORE SECTORS OF INTERVENTION",
        sectorsTitle1: "Core Sectors",
        sectorsTitle2: "of Intervention",
        allExpertise: "View All Expertise",
        exploreSector: "Explore Sector",

        sector1Title: "Water, Sanitation, and Hygiene (WASH)",
        sector1Description:
          "Developing sustainable tariff structures, comprehensive economic feasibility studies, and effective legal and institutional frameworks to ensure reliable, efficient, resilient, and financially sustainable regional clean water services. Our approach combines sound economic analysis, regulatory alignment, and strategic planning to strengthen service delivery, improve operational efficiency, and support the long-term sustainability of water infrastructure systems.",

        sector2Title: "Wastewater Treatment and Sustainable Management",
        sector2Description:
          "Delivering innovative and sustainable wastewater treatment solutions through advanced technologies, efficient system design, and environmentally responsible management practices. We support the development of reliable wastewater infrastructure that enhances public health, protects natural resources, and promotes long-term operational sustainability for communities and institutions.",

        sector3Title: "Integrated Water Conveyance and Channel Management",
        sector3Description:
          "Providing sustainable water conveyance solutions and effective channel management approaches to support efficient water distribution, system reliability, and long-term resource sustainability. We focus on practical planning, optimized infrastructure performance, and environmentally responsible practices to enhance water management outcomes for communities and regional development.",

        sector4Title: "Advanced Irrigation and Water Resource Management",
        sector4Description:
          "Delivering innovative irrigation solutions and integrated water resource management approaches to improve water efficiency, optimize agricultural productivity, and promote sustainable use of available resources. We support resilient water systems through strategic planning, modern technologies, and environmentally responsible practices that benefit communities and future generations.",

        approachLabel: "OUR STRATEGIC APPROACH",
        approachTitle1: "A practical approach",
        approachTitle2: "to lasting impact.",
        approachDescription:
          "We prioritize actions over theories. Our teams execute practical, evidence-based, and institutionally embedded measures that survive past the end of the project cycle.",

        approach1Title: "Client Orientation",
        approach1Description:
          "We completely reject one-size-fits-all options. Every advisory program is specifically custom-tailored to resolve the unique, highly practical challenges of our respective clients.",

        approach2Title: "Strategic Partnership",
        approach2Description:
          "Our operations are deeply collaborative. We build lasting bridges linking regional governments, international financial donors, and local community leaders together.",

        approach3Title: "Proven Effectiveness",
        approach3Description:
          "We prioritize actions over theories. Our teams execute practical, evidence-based, and institutionally embedded measures that survive past the end of the project cycle.",

        approach4Title: "Continuous Development",
        approach4Description:
          "We consistently build local capacities. We proactively adapt modern management systems to meet newly evolving macroeconomic and environmental challenges.",

        teamLabel: "OUR INTERNATIONAL TEAM",
        teamTitle1: "Experts with",
        teamTitle2: "Global Experience.",
        teamDescription:
          "Our international team brings extensive professional experience across development, infrastructure, institutional reform, and advisory services.",

        impactLabel: "SDG & SOCIAL IMPACT",
        impactTitle1: "Building Resilient Communities",
        impactTitle2: "Through Responsible Development",
        impactDescription:
          "NHD Consultants embed sustainability, social responsibility, and measurable impact into our projects, aligning our advisory services with the United Nations Sustainable Development Goals (SDGs). Through inclusive approaches and responsible practices, we support initiatives that improve communities, strengthen resilience, and create long-term value for society. Our commitment extends beyond project delivery, focusing on positive transformation, equitable opportunities, and sustainable outcomes for future generations. By integrating environmental, social, and governance principles, we help partners achieve meaningful impact and lasting development benefits.",
        exploreImpact: "Explore Our Impact",

        impactSectionLabel: "SDG / SOCIAL IMPACT",
impactSectionTitle1: "Sustainable Solutions for",
impactSectionTitle2: "Lasting Impact.",
impactSectionDescription:
  "NHD Consultants supports sustainable development through practical solutions that strengthen infrastructure, improve services, and create lasting social and economic impact.",
impactSectionButton: "Explore Our Services",

        ctaLabel: "NHD CONSULTANTS",
        ctaTitle1: "Building Resilient Communities",
        ctaTitle2: "Through Responsible Development",
        ctaDescription:
          "We embed sustainability, social responsibility, and measurable impact into our projects, aligning our advisory services with the United Nations Sustainable Development Goals (SDGs).",
        ctaButton: "Contact Us",

        ctaSectionLabel: "NHD CONSULTANTS",
ctaSectionTitle1: "Ready to Create",
ctaSectionTitle2: "Practical Impact?",
ctaSectionDescription:
  "Let’s work together to develop practical, sustainable solutions that create lasting value for your organization and the communities you serve.",
ctaSectionButton: "Contact Us",
      },

      /* =====================================================
         ABOUT
         ===================================================== */
      about: {
        heroLabel: "ABOUT THE COMPANY",
        heroTitle1: "Continuing a proven legacy",
        heroTitle2: "of success in Tajikistan.",
        heroDescription:
          "New Horizons of Dushanbe LLC is a newly established, legally independent consulting firm built on a proven track record of leadership and operational excellence. Our management team previously led, managed, and successfully delivered a broad portfolio of high-impact projects during their tenure at BAZIS, GMES and BDO. We bring this extensive execution capability and rigorous project management approach directly to our new firm.",

        storyLabel: "OUR STORY",
        storyTitle1: "Local Expertise",
        storyTitle2: "International Best Practices",
        storyDescription1:
          "Led by former managing directors who successfully drove these complex initiatives alongside a former senior cabinet official with over 25 years of municipal utility experience our leadership combines deep local knowledge with international best practices.",
        storyDescription2:
          "We provide practical, sustainable, and institutionally embedded solutions for community development, infrastructure, and public policy reform.",

        missionLabel: "OUR MISSION",
        missionTitle: "Empower local communities",
        missionDescription:
          "Empower local communities, ensure equal opportunities, and embed international standards into everyday practices. We align every action with the Sustainable Development Goals (SDGs) and key donor priorities in institutional reform and social inclusion.",

        visionLabel: "OUR VISION",
        visionTitle: "The most reliable and trusted partner",
        visionDescription:
          "To be the most reliable and trusted partner for governments, international donor organizations, and local communities, helping them achieve sustainable growth, strengthen governance institutions, and ensure highly inclusive development in line with the UN SDGs.",

        valuesLabel: "OUR CORE VALUES",
        valuesTitle1: "What guides",
        valuesTitle2: "our work.",

        value1Title: "Professionalism",
        value1Description:
          "We maintain the highest standards of technical quality, precision, and execution excellence in every municipal utility and infrastructure assignment we undertake. Our commitment to innovation, safety, and quality ensures reliable, efficient, and sustainable solutions for every project.",

        value2Title: "Integrity",
        value2Description:
          "Transparency, uncompromising ethics, and absolute accountability are the foundation of everything we do. We foster trusted advisory partnerships with international financial institutions by delivering objective guidance, responsible project management, and the highest standards of professional integrity.",

        value3Title: "Excellence",
        value3Description:
          "We focus on delivering practical, measurable outcomes that enhance community well-being, strengthen local infrastructure, and create lasting social impact across Tajikistan. Through innovative engineering, sustainable solutions, and collaborative partnerships.",

        value4Title: "Innovation",
        value4Description:
          "We champion continuous learning and the adoption of modern solutions to drive innovation and operational excellence. By integrating advanced digital tools and technologies, we streamline local operational processes, enhance efficiency, improve decision-making, and deliver greater value to our clients.",

        approachLabel: "OUR STRATEGIC APPROACH",
        approachHeading1: "A practical approach",
        approachHeading2: "to lasting impact.",
        approachDescription:
          "We prioritize actions over theories. Our teams execute practical, evidence-based, and institutionally embedded measures that survive past the end of the project cycle.",

        approach1Title: "Client Orientation",
        approach1Description:
          "We completely reject one-size-fits-all options. Every advisory program is specifically custom-tailored to resolve the unique, highly practical challenges of our respective clients.",

        approach2Title: "Strategic Partnership",
        approach2Description:
          "Our operations are deeply collaborative. We build lasting bridges linking regional governments, international financial donors, and local community leaders together.",

        approach3Title: "Proven Effectiveness",
        approach3Description:
          "We prioritize actions over theories. Our teams execute practical, evidence-based, and institutionally embedded measures that survive past the end of the project cycle.",

        approach4Title: "Continuous Development",
        approach4Description:
          "We consistently build local capacities. We proactively adapt modern management systems to meet newly evolving macroeconomic and environmental challenges.",

        ctaLabel: "NHD CONSULTANTS",
        ctaTitle1: "Building Resilient Communities",
        ctaTitle2: "Through Responsible Development",
        ctaDescription:
          "We provide practical, sustainable, and institutionally embedded solutions for community development, infrastructure, and public policy reform.",
        ctaButton: "Contact Us",
      },

      /* =====================================================
         SERVICES
         ===================================================== */
      services: {
        heroLabel: "OUR SERVICES",
        heroTitle1: "Practical, Sustainable",
        heroTitle2: "Solutions",
        heroDescription:
          "We provide practical, sustainable, and institutionally embedded solutions for community development, infrastructure, and public policy reform.",

        expertiseLabel: "CORE SECTORS OF INTERVENTION",
        expertiseTitle1: "Our Areas",
        expertiseTitle2: "of Expertise",

        service1Title: "Water, Sanitation, and Hygiene (WASH)",
        service1Description:
          "Developing sustainable tariff structures, comprehensive economic feasibility studies, and effective legal and institutional frameworks to ensure reliable, efficient, resilient, and financially sustainable regional clean water services. Our approach combines sound economic analysis, regulatory alignment, and strategic planning to strengthen service delivery, improve operational efficiency, and support the long-term sustainability of water infrastructure systems.",

        service2Title: "Wastewater Treatment and Sustainable Management",
        service2Description:
          "Delivering innovative and sustainable wastewater treatment solutions through advanced technologies, efficient system design, and environmentally responsible management practices. We support the development of reliable wastewater infrastructure that enhances public health, protects natural resources, and promotes long-term operational sustainability for communities and institutions.",

        service3Title: "Integrated Water Conveyance and Channel Management",
        service3Description:
          "Providing sustainable water conveyance solutions and effective channel management approaches to support efficient water distribution, system reliability, and long-term resource sustainability. We focus on practical planning, optimized infrastructure performance, and environmentally responsible practices to enhance water management outcomes for communities and regional development.",

        service4Title: "Advanced Irrigation and Water Resource Management",
        service4Description:
          "Delivering innovative irrigation solutions and integrated water resource management approaches to improve water efficiency, optimize agricultural productivity, and promote sustainable use of available resources. We support resilient water systems through strategic planning, modern technologies, and environmentally responsible practices that benefit communities and future generations.",

        service5Title: "Solid Waste Management",
        service5Description:
          "Providing integrated solid waste management solutions covering efficient collection systems, waste treatment, recycling initiatives, and environmentally responsible landfill management. We support cleaner and healthier communities through sustainable waste practices, optimized disposal methods, resource recovery, and modern landfill solutions that protect the environment and promote long-term sustainability.",

        service6Title: "Environmental Safeguards",
        service6Description:
          "Ensuring responsible project implementation through comprehensive environmental safeguard practices, regulatory compliance, and sustainable development approaches. We apply environmental assessments, risk management strategies, monitoring programs, and mitigation measures to protect natural resources, minimize impacts, and support environmentally resilient infrastructure development.",

        service7Title: "Waste-to-Resource Economic Feasibility",
        service7Description:
          "Advancing sustainable resource recovery through comprehensive economic feasibility assessments, market analysis, and investment planning for waste-to-resource initiatives. Our approach evaluates technical viability, financial sustainability, and environmental benefits to support informed decision-making and the development of circular economy solutions.",

        service8Title:
          "Community Stakeholder Participation & Public Awareness Programs",
        service8Description:
          "Strengthening community engagement through inclusive stakeholder participation, awareness initiatives, and effective communication strategies. Our approach promotes transparency, builds public understanding, and encourages collaboration among communities, institutions, and project stakeholders to support sustainable development outcomes.",

        service9Title: "Institutional Planning and Development",
        service9Description:
          "Strengthening organizational capacity through strategic planning, institutional development frameworks, and effective governance approaches. We support institutions in improving operational efficiency, enhancing decision-making processes, and building sustainable systems that enable long-term growth, resilience, and effective service delivery.",

        service10Title: "Gender Equity and Inclusion",
        service10Description:
          "Promoting inclusive development through gender-responsive approaches, equitable participation, and social inclusion strategies. We support organizations and communities in creating opportunities for all stakeholders, strengthening accessibility, empowering diverse voices, and fostering sustainable outcomes through fair and inclusive practices.",

        capacityLabel: "CAPACITY BUILDING",
        capacityTitle1: "Knowledge &",
        capacityTitle2: "Skill Integration",
        capacityDescription1:
          "We deliver tailored vocational programs, hands-on digital workshops, and organizational training specifically designed for public utility personnel.",
        capacityDescription2:
          "Sustainable transformation requires more than modern infrastructure—it demands local capability. Through structured knowledge transfer, NHD Consultants bridges the gap between technology deployment and long-term utility management.",
        capacityDescription3:
          "We empower regional administrators and municipal teams to independently operate newly implemented billing databases, cutting-edge metering technologies, and robust Environmental, Health, and Safety (EHS) safeguards.",
        capacityDescription4:
          "By transforming technical execution into lasting institutional expertise, we ensure local teams drive efficiency, compliance, and growth with complete confidence.",

        sdgLabel: "SDG & SOCIAL IMPACT",
        sdgTitle1: "Building Resilient Communities",
        sdgTitle2: "Through Responsible Development",

        sdg6Title: "Clean Water",
        sdg6Description: "Broadening structural utility accessibility.",

        sdg5Title: "Gender Equality",
        sdg5Description: "Formulating equitable recruitment strategies.",

        sdg11Title: "Sustainable Cities",
        sdg11Description: "Driving localized green policy reform.",

        credentialsLabel: "PROJECT CREDENTIALS",
        credentialsTitle1: "Proven Experience",
        credentialsTitle2: "Delivered Results",

        credential1Sector: "Water Supply & Sanitation",
        credential1Client: "ADB / EBRD",
        credential1Scope:
          "Restructuring tariff systems, developing cost-recovery business models, and establishing compliance protocols.",

        credential2Sector: "Solid Waste Management",
        credential2Client: "EBRD",
        credential2Scope:
          "Implementing ESAP requirements, designing community engagement plans, and optimizing local billing processes.",

        credential3Sector: "Public Utility Digitalization",
        credential3Client: "World Bank",
        credential3Scope:
          "Deploying modern MIS billing, custom database architectures, and digital client relationship systems.",

        credential4Sector: "Social & Gender Policies",
        credential4Client: "Donor-Supported Initiatives",
        credential4Scope:
          "Formulating equal opportunity guidelines, leading stakeholder public hearings, and establishing corporate HR structures.",

        complianceLabel: "PROCUREMENT & COMPLIANCE",
        complianceTitle1: "Anti-Corruption",
        complianceTitle2: "& Ethics",

        complianceDescription:
          "We uphold the highest standards of integrity through a strict zero-tolerance policy toward fraud, corruption, and collusive practices. All advisory services and bid support activities are conducted in full compliance with the integrity standards and procurement guidelines of ADB, EBRD, and the World Bank. We are committed to transparency, accountability, and ethical excellence in every engagement with clients, partners, and stakeholders.",

        conflictTitle: "Conflict of Interest",
        conflictDescription:
          "Our corporate advisory framework is built on independence, transparency, and neutrality, ensuring objective support throughout all engagements. We proactively manage conflicts of interest and uphold the highest standards of integrity, accountability, and stakeholder confidence. Our governance approach promotes fair evaluation, ethical decision-making, and reliable outcomes for every project. We remain committed to delivering trusted advisory services aligned with international best practices.",

        biddingTitle: "Fair Bidding Alignment",
        biddingDescription:
          "We guarantee full compliance with international bidding regulations, ensuring transparent accounting practices, fair competition, and robust administrative procedures across all regions. Our approach promotes accountability, efficiency, and adherence to global best practices throughout every stage of the procurement and project delivery process.",

        ctaLabel: "NHD CONSULTANTS",
        ctaTitle1: "Building Resilient Communities",
        ctaTitle2: "Through Responsible Development",
        ctaDescription:
          "We embed sustainability, social responsibility, and measurable impact into our projects, aligning our advisory services with the United Nations Sustainable Development Goals (SDGs). Through inclusive approaches and responsible practices, we support initiatives that improve communities, strengthen resilience, and create long-term value for society. Our commitment extends beyond project delivery, focusing on positive transformation, equitable opportunities, and sustainable outcomes for future generations. By integrating environmental, social, and governance principles, we help partners achieve meaningful impact and lasting development benefits.",
        ctaButton: "Contact Us",
      },

      /* =====================================================
         PROJECTS
         ===================================================== */
      projects: {
        heroLabel: "PROJECT CREDENTIALS",
        heroTitle1: "Proven Experience",
        heroTitle2: "Delivered Results",
        heroDescription:
          "Water Supply & Sanitation, Solid Waste Management, Public Utility Digitalization, and Social & Gender Policies.",

        mainLabel: "PROJECT CREDENTIALS",
        mainTitle1: "Proven Experience",
        mainTitle2: "Delivered Results",
        mainDescription:
          "Our project experience reflects practical engagement across development, infrastructure, institutional, and advisory initiatives.",

        project1Category: "ADB / EBRD",
        project1Title: "Water Supply & Sanitation",
        project1Description:
          "Restructuring tariff systems, developing cost-recovery business models, and establishing compliance protocols.",

        project2Category: "EBRD",
        project2Title: "Solid Waste Management",
        project2Description:
          "Implementing ESAP requirements, designing community engagement plans, and optimizing local billing processes.",

        project3Category: "World Bank",
        project3Title: "Public Utility Digitalization",
        project3Description:
          "Deploying modern MIS billing, custom database architectures, and digital client relationship systems.",

        project4Category: "Donor-Supported Initiatives",
        project4Title: "Social & Gender Policies",
        project4Description:
          "Formulating equal opportunity guidelines, leading stakeholder public hearings, and establishing corporate HR structures.",

        approachLabel: "OUR STRATEGIC APPROACH",
        approachTitle1: "A practical approach",
        approachTitle2: "to lasting impact.",
        approachDescription:
          "We prioritize actions over theories. Our teams execute practical, evidence-based, and institutionally embedded measures that survive past the end of the project cycle.",

        approachButton: "Contact Us",

        ctaLabel: "NHD CONSULTANTS",
        ctaTitle1: "Practical, Sustainable",
        ctaTitle2: "Solutions",
        ctaDescription:
          "We provide practical, sustainable, and institutionally embedded solutions for community development, infrastructure, and public policy reform.",
        ctaButton: "Contact Us",
      },

      /* =====================================================
         TEAM
         ===================================================== */
      team: {
        heroLabel: "OUR INTERNATIONAL TEAM",
        heroTitle1: "Experts with",
        heroTitle2: "Global Experience.",
        heroDescription:
          "Our international team brings extensive professional experience across development, infrastructure, institutional reform, and advisory services.",

        mainLabel: "OUR EXPERTS",
        mainTitle1: "International Experience.",
        mainTitle2: "Practical Expertise.",
        mainDescription:
          "Our experts bring diverse professional backgrounds and international experience to support complex development and advisory challenges.",

        expert1Name: "Mohd Masood Seediqyar",
        expert1Position:
          "Electrical Engineer and Utility Management Specialist",
        expert1Experience:
          "Specialist in utility management, power sector engineering, strategic planning, utility financial modeling, and cost-effective tariff design. Nearly 25 years of experience in utility management, Financial planning corporate management consulting. Proven expertise in developing sustainable and enhancing utility performance.",
        expert1Description: "",

        expert2Name: "Dr. Kelkar Padmakar Waman",
        expert2Position: "Water Resources and Automation Specialist",
        expert2Experience:
          "Specialist in instrumentation, canal engineering, automation systems, and water resources management. Expert in monitoring and control systems for canal networks, irrigation infrastructure, and water distribution. Experienced in applying automation solutions to enhance water sector efficiency and sustainability.",
        expert2Description: "",

        expert3Name: "Thomas Bedour, B.A.",
        expert3Position: "Senior Water and Wastewater Specialist",
        expert3Experience:
          "Thomas is a senior Water and Wastewater Specialist with over 10 years of experience in municipal and industrial utility operations, treatment systems, infrastructure management, regulatory compliance, and operational optimization. He has successfully managed and supported a wide range of water utility projects across Canada.",
        expert3Description: "",

        expert4Name: "Dr. Sanjay Bhattacharya",
        expert4Position: "Senior Strategy & Transformation Advisor",
        expert4Experience:
          "Professor of Practice and an expert in strategic management and project management, with over 30 years of combined academic and industry experience. His expertise is backed by extensive research, publications, and executive leadership across strategy, innovation, and organizational competitiveness.",
        expert4Description: "",

        expert5Name: "Ilkhom Tashtemirov",
        expert5Position:
          "Senior IFI Procurement & Dev. Projects Specialist",
        expert5Experience:
          "Senior IFI Procurement & Project Management Specialist with 20+ years of experience delivering World Bank and ADB-funded projects across Central Asia. Dual Master’s in Engineering and Economics, with expertise in leadership, government advisory, healthcare, digital, and water infrastructure.",
        expert5Description: "",

        expert6Name: "Mher Kelian",
        expert6Position:
          "Senior Water Infrastructure & Systems Engineer",
        expert6Experience:
          "Experienced Water and Mechanical Engineer with 12+ years of expertise delivering over 300 infrastructure, treatment plant, and conveyance projects across the Middle East and Africa. Member of the Order of Engineers and Architects with proven success in process optimization, system design, and large-scale project execution.",
        expert6Description: "",

        networkLabel: "OUR NETWORK",
        networkTitle1: "A broader network.",
        networkTitle2: "A stronger perspective.",
        networkDescription:
          "Our international network allows us to bring together diverse expertise and perspectives when projects require specialized knowledge.",
        networkButton: "Work With Our Team",
      },

      /* =====================================================
         NEWS
         ===================================================== */
      news: {
        heroLabel: "NEWS & UPDATES",
        heroTitle1: "News",
        heroTitle2: "& Updates.",
        heroDescription:
          "Company announcements, project milestones, professional insights, and updates from NHD Consultants.",

        mainLabel: "SDG & SOCIAL IMPACT",
        mainTitle1: "Building Resilient Communities",
        mainTitle2: "Through Responsible Development",
        mainDescription:
          "We embed sustainability, social responsibility, and measurable impact into our projects, aligning our advisory services with the United Nations Sustainable Development Goals (SDGs).",

        updateCategory: "SDG & SOCIAL IMPACT",
        updateTitle:
          "Building Resilient Communities Through Responsible Development",
        updateDescription:
          "Through inclusive approaches and responsible practices, we support initiatives that improve communities, strengthen resilience, and create long-term value for society. Our commitment extends beyond project delivery, focusing on positive transformation, equitable opportunities, and sustainable outcomes for future generations.",

        ctaLabel: "NHD CONSULTANTS",
        ctaTitle1: "Building Resilient Communities",
        ctaTitle2: "Through Responsible Development",
        ctaDescription:
          "We provide practical, sustainable, and institutionally embedded solutions for community development, infrastructure, and public policy reform.",
        ctaButton: "Contact Us",
      },

      /* =====================================================
         CONTACT
         ===================================================== */
      contact: {
        heroLabel: "CONTACT NHD CONSULTANTS",
        heroTitle1: "Practical, Sustainable",
        heroTitle2: "Solutions",
        heroDescription:
          "We provide practical, sustainable, and institutionally embedded solutions for community development, infrastructure, and public policy reform.",

        getInTouchLabel: "GET IN TOUCH",
        getInTouchTitle1: "Start a",
        getInTouchTitle2: "conversation.",
        getInTouchDescription:
          "We welcome inquiries from governments, international organizations, development partners, institutions, and other stakeholders seeking practical and sustainable solutions.",

        organizationLabel: "Organization",
        organizationName: "New Horizons of Dushanbe LLC",
        organizationBrand: "NHD Consultants",

        countryLabel: "Country",
        countryName: "Republic of Tajikistan",

        inquiryLabel: "Inquiry",
        inquiryName: "Development & Advisory Services",

        formLabel: "SEND AN INQUIRY",
        fullName: "Full Name",
        fullNamePlaceholder: "Your full name",
        email: "Email Address",
        emailPlaceholder: "Your email address",
        subject: "Subject",
        subjectPlaceholder: "How can we help?",
        message: "Message",
        messagePlaceholder: "Tell us about your project or inquiry...",
        sendInquiry: "Send Inquiry →",
        formNote:
          "Contact form submission will be connected after the website content and design are approved.",
        
          formSuccess:
  "Form submitted successfully! Thank you for reaching out to us. We'll review your submission and get back to you soon.",
        ctaLabel: "NHD CONSULTANTS",
        ctaTitle1: "Practical, Sustainable",
        ctaTitle2: "Solutions",
        ctaDescription:
          "We provide practical, sustainable, and institutionally embedded solutions for community development, infrastructure, and public policy reform.",
      },

      /* =====================================================
         FOOTER
         ===================================================== */
      footer: {
        description:
          "Professional consulting solutions for sustainable development and lasting impact.",
        localExpertise: "Local Expertise",
        socialImpact: "Social Impact",
        sustainableSolutions: "Sustainable Solutions",
        company: "Company",
        home: "Home",
        about: "About Us",
        services: "Services",
        news: "News",
        contact: "Contact Us",
        expertise: "Expertise",
        waterSanitation: "Water & Sanitation",
        infrastructureUtilities: "Infrastructure & Utilities",
        socialDevelopment: "Social Development",
        digitalTransformation: "Digital Transformation",
        connect: "Connect",
        companyName: "New Horizons of Dushanbe LLC",
        country: "Tajikistan",
        contactNhd: "Contact NHD Consultants",
        follow: "Follow Us",
        copyright: "© 2026 NHD Consultants. All rights reserved.",
      },
    },
  },

  /* =========================================================
     RUSSIAN
     ========================================================= */
  ru: {
    translation: {
      nav: {
        home: "Главная",
        about: "О нас",
        services: "Услуги",
        projects: "Проекты",
        experts: "Эксперты",
        news: "Новости",
        contact: "Контакты",
        start: "Начать разговор",
      },

      home: {
        heroLabel: "NHD Consultants",
        heroTitle1: "Продолжая проверенное наследие",
        heroTitle2: "успеха в Таджикистане.",
        heroDescription:
          "Мы предоставляем практические, устойчивые и институционально интегрированные решения для развития сообществ, инфраструктуры и реформы государственной политики.",
        primaryButton: "Наши услуги",
        secondaryButton: "Связаться с нами",

        localExpertise: "Местная экспертиза",
        socialImpact: "Социальное воздействие",
        sustainableSolutions: "Устойчивые решения",
        companyLabel: "О КОМПАНИИ",

heroCardTitle1: "Практичные, устойчивые",
heroCardTitle2: "решения",

heroCardTitle3: "Институционально интегрированное",
heroCardTitle4: "развитие",

heroCardDescription:
  "New Horizons of Dushanbe LLC — недавно созданная, юридически независимая консалтинговая компания, основанная на проверенном опыте руководства и операционного совершенства.",

        aboutLabel: "О КОМПАНИИ",
        introTitle1: "Продолжая проверенное наследие",
introTitle2: "успеха в Таджикистане.",

introParagraph1:
  "New Horizons of Dushanbe LLC — недавно созданная, юридически независимая консалтинговая компания, основанная на проверенном опыте руководства и операционного совершенства. Наша управленческая команда ранее руководила, управляла и успешно реализовывала широкий портфель значимых проектов во время работы в BAZIS, GMES и BDO. Мы непосредственно переносим этот обширный опыт реализации и строгий подход к управлению проектами в нашу новую компанию.",

introParagraph2:
  "Наше руководство, состоящее из бывших управляющих директоров, успешно реализовавших эти сложные инициативы совместно с бывшим высокопоставленным государственным чиновником, имеющим более 25 лет опыта работы в сфере муниципальных коммунальных услуг, сочетает глубокое местное понимание с международными лучшими практиками.",

introParagraph3:
  "Мы предоставляем практические, устойчивые и институционально интегрированные решения для развития сообществ, инфраструктуры и реформы государственной политики.",
        aboutTitle1: "Продолжая проверенное наследие",
        aboutTitle2: "успеха в Таджикистане.",
        aboutDescription1:
          "New Horizons of Dushanbe LLC — недавно созданная, юридически независимая консалтинговая компания, основанная на проверенном опыте руководства и операционного совершенства. Наша управленческая команда ранее руководила, управляла и успешно реализовывала широкий портфель значимых проектов во время работы в BAZIS, GMES и BDO. Мы непосредственно переносим этот обширный опыт реализации и строгий подход к управлению проектами в нашу новую компанию.",
        aboutDescription2:
          "Наше руководство, состоящее из бывших управляющих директоров, успешно реализовавших эти сложные инициативы совместно с бывшим высокопоставленным государственным чиновником, имеющим более 25 лет опыта работы в сфере муниципальных коммунальных услуг, сочетает глубокое местное понимание с международными лучшими практиками.",
        aboutDescription3:
          "Мы предоставляем практические, устойчивые и институционально интегрированные решения для развития сообществ, инфраструктуры и реформы государственной политики.",
        discoverMore: "Узнать больше",

        sectorsLabel: "ОСНОВНЫЕ НАПРАВЛЕНИЯ",
        sectorsTitle1: "Основные направления",
        sectorsTitle2: "деятельности",
        allExpertise: "Все направления",
        exploreSector: "Подробнее",

        sector1Title: "Водоснабжение, санитария и гигиена (WASH)",
        sector1Description:
          "Разработка устойчивых тарифных структур, комплексных исследований экономической целесообразности и эффективных правовых и институциональных механизмов для обеспечения надежных, эффективных, устойчивых и финансово жизнеспособных региональных услуг чистого водоснабжения. Наш подход объединяет экономический анализ, нормативное соответствие и стратегическое планирование для укрепления качества услуг, повышения операционной эффективности и долгосрочной устойчивости водной инфраструктуры.",

        sector2Title:
          "Очистка сточных вод и устойчивое управление",
        sector2Description:
          "Предоставление инновационных и устойчивых решений по очистке сточных вод с использованием современных технологий, эффективного проектирования систем и экологически ответственных методов управления. Мы поддерживаем развитие надежной инфраструктуры сточных вод, улучшающей общественное здоровье, защищающей природные ресурсы и обеспечивающей долгосрочную эксплуатационную устойчивость.",

        sector3Title:
          "Интегрированная транспортировка воды и управление каналами",
        sector3Description:
          "Предоставление устойчивых решений по транспортировке воды и эффективных подходов к управлению каналами для поддержки эффективного распределения воды, надежности систем и долгосрочной устойчивости ресурсов. Мы уделяем внимание практическому планированию, оптимизации инфраструктуры и экологически ответственным методам управления.",

        sector4Title:
          "Современное орошение и управление водными ресурсами",
        sector4Description:
          "Предоставление инновационных решений в области орошения и интегрированного управления водными ресурсами для повышения эффективности использования воды, оптимизации сельскохозяйственной продуктивности и устойчивого использования доступных ресурсов. Мы поддерживаем устойчивые водные системы посредством стратегического планирования, современных технологий и экологически ответственных практик.",

        approachLabel: "НАШ СТРАТЕГИЧЕСКИЙ ПОДХОД",
        approachTitle1: "Практический подход",
        approachTitle2: "к долгосрочному результату.",
        approachDescription:
          "Мы ставим действия выше теории. Наши команды реализуют практические, основанные на фактах и институционально интегрированные меры, которые сохраняют свою эффективность после завершения проектного цикла.",

        approach1Title: "Ориентация на клиента",
        approach1Description:
          "Мы полностью отвергаем универсальные решения. Каждая консультационная программа специально адаптируется для решения уникальных и практически значимых задач конкретного клиента.",

        approach2Title: "Стратегическое партнерство",
        approach2Description:
          "Наша работа основана на глубоком сотрудничестве. Мы создаем долгосрочные связи между региональными правительствами, международными финансовыми донорами и местными лидерами сообществ.",

        approach3Title: "Доказанная эффективность",
        approach3Description:
          "Мы ставим действия выше теории. Наши команды реализуют практические, основанные на фактах и институционально интегрированные меры, которые сохраняют свою эффективность после завершения проектного цикла.",

        approach4Title: "Непрерывное развитие",
        approach4Description:
          "Мы постоянно развиваем местный потенциал. Мы активно адаптируем современные системы управления к новым макроэкономическим и экологическим вызовам.",

        teamLabel: "НАША МЕЖДУНАРОДНАЯ КОМАНДА",
        teamTitle1: "Эксперты с",
        teamTitle2: "глобальным опытом.",
        teamDescription:
          "Наша международная команда обладает значительным профессиональным опытом в сфере развития, инфраструктуры, институциональных реформ и консультационных услуг.",

        impactLabel: "ЦУР И СОЦИАЛЬНОЕ ВОЗДЕЙСТВИЕ",
        impactTitle1: "Создание устойчивых сообществ",
        impactTitle2: "посредством ответственного развития",
        impactDescription:
          "NHD Consultants интегрирует устойчивость, социальную ответственность и измеримое воздействие в наши проекты, согласовывая консультационные услуги с Целями устойчивого развития ООН (ЦУР). Благодаря инклюзивным и ответственным подходам мы поддерживаем инициативы, улучшающие жизнь сообществ, укрепляющие устойчивость и создающие долгосрочную ценность для общества. Наша приверженность выходит за рамки реализации проектов и направлена на позитивные преобразования, равные возможности и устойчивые результаты для будущих поколений. Интегрируя экологические, социальные и управленческие принципы, мы помогаем партнерам достигать значимого воздействия и долгосрочных результатов развития.",
        exploreImpact: "Наше воздействие",

        impactSectionLabel: "ЦУР И СОЦИАЛЬНОЕ ВОЗДЕЙСТВИЕ",
impactSectionTitle1: "Устойчивые решения для",
impactSectionTitle2: "долгосрочного воздействия.",
impactSectionDescription:
  "NHD Consultants поддерживает устойчивое развитие посредством практических решений, которые укрепляют инфраструктуру, улучшают услуги и создают долгосрочный социальный и экономический эффект.",
impactSectionButton: "Наши услуги",

        ctaLabel: "NHD CONSULTANTS",
        ctaTitle1: "Создание устойчивых сообществ",
        ctaTitle2: "посредством ответственного развития",
        ctaDescription:
          "Мы интегрируем устойчивость, социальную ответственность и измеримое воздействие в наши проекты, согласовывая консультационные услуги с Целями устойчивого развития ООН (ЦУР).",
        ctaButton: "Связаться с нами",

        ctaSectionLabel: "NHD CONSULTANTS",
ctaSectionTitle1: "Готовы создать",
ctaSectionTitle2: "практический результат?",
ctaSectionDescription:
  "Давайте вместе разработаем практичные и устойчивые решения, которые создадут долгосрочную ценность для вашей организации и сообществ, которым вы служите.",
ctaSectionButton: "Связаться с нами",
      },

      about: {
        heroLabel: "О КОМПАНИИ",
        heroTitle1: "Продолжая проверенное наследие",
        heroTitle2: "успеха в Таджикистане.",
        heroDescription:
          "New Horizons of Dushanbe LLC — недавно созданная, юридически независимая консалтинговая компания, основанная на проверенном опыте руководства и операционного совершенства. Наша управленческая команда ранее руководила, управляла и успешно реализовывала широкий портфель значимых проектов во время работы в BAZIS, GMES и BDO. Мы непосредственно переносим этот обширный опыт реализации и строгий подход к управлению проектами в нашу новую компанию.",

        storyLabel: "НАША ИСТОРИЯ",
        storyTitle1: "Местная экспертиза",
        storyTitle2: "Международные лучшие практики",
        storyDescription1:
          "Наше руководство, состоящее из бывших управляющих директоров, успешно реализовавших эти сложные инициативы совместно с бывшим высокопоставленным государственным чиновником, имеющим более 25 лет опыта работы в сфере муниципальных коммунальных услуг, сочетает глубокое местное понимание с международными лучшими практиками.",
        storyDescription2:
          "Мы предоставляем практические, устойчивые и институционально интегрированные решения для развития сообществ, инфраструктуры и реформы государственной политики.",

        missionLabel: "НАША МИССИЯ",
        missionTitle: "Расширять возможности местных сообществ",
        missionDescription:
          "Расширять возможности местных сообществ, обеспечивать равные возможности и внедрять международные стандарты в повседневную практику. Мы согласовываем каждое действие с Целями устойчивого развития (ЦУР) и приоритетами доноров в области институциональных реформ и социальной интеграции.",

        visionLabel: "НАШЕ ВИДЕНИЕ",
        visionTitle: "Самый надежный и заслуживающий доверия партнер",
        visionDescription:
          "Стать самым надежным и заслуживающим доверия партнером для правительств, международных донорских организаций и местных сообществ, помогая им достигать устойчивого роста, укреплять институты управления и обеспечивать максимально инклюзивное развитие в соответствии с ЦУР ООН.",

        valuesLabel: "НАШИ ОСНОВНЫЕ ЦЕННОСТИ",
        valuesTitle1: "Что определяет",
        valuesTitle2: "нашу работу.",

        value1Title: "Профессионализм",
        value1Description:
          "Мы поддерживаем высочайшие стандарты технического качества, точности и профессионального исполнения в каждом задании в сфере коммунальных услуг и инфраструктуры. Наша приверженность инновациям, безопасности и качеству обеспечивает надежные, эффективные и устойчивые решения для каждого проекта.",

        value2Title: "Честность",
        value2Description:
          "Прозрачность, безусловная этика и абсолютная ответственность являются основой всего, что мы делаем. Мы строим доверительные консультационные партнерства с международными финансовыми учреждениями, предоставляя объективные рекомендации, ответственное управление проектами и высочайшие стандарты профессиональной честности.",

        value3Title: "Совершенство",
        value3Description:
          "Мы стремимся к практическим и измеримым результатам, которые улучшают благосостояние сообществ, укрепляют местную инфраструктуру и создают долгосрочное социальное воздействие по всему Таджикистану. Благодаря инновационной инженерии, устойчивым решениям и партнерскому сотрудничеству.",

        value4Title: "Инновации",
        value4Description:
          "Мы поддерживаем непрерывное обучение и внедрение современных решений для развития инноваций и операционного совершенства. Интегрируя современные цифровые инструменты и технологии, мы оптимизируем местные операционные процессы, повышаем эффективность, улучшаем принятие решений и создаем большую ценность для наших клиентов.",

        approachLabel: "НАШ СТРАТЕГИЧЕСКИЙ ПОДХОД",
        approachHeading1: "Практический подход",
        approachHeading2: "к долгосрочному результату.",
        approachDescription:
          "Мы ставим действия выше теории. Наши команды реализуют практические, основанные на фактах и институционально интегрированные меры, которые сохраняют свою эффективность после завершения проектного цикла.",

        approach1Title: "Ориентация на клиента",
        approach1Description:
          "Мы полностью отвергаем универсальные решения. Каждая консультационная программа специально адаптируется для решения уникальных и практически значимых задач конкретного клиента.",

        approach2Title: "Стратегическое партнерство",
        approach2Description:
          "Наша работа основана на глубоком сотрудничестве. Мы создаем долгосрочные связи между региональными правительствами, международными финансовыми донорами и местными лидерами сообществ.",

        approach3Title: "Доказанная эффективность",
        approach3Description:
          "Мы ставим действия выше теории. Наши команды реализуют практические, основанные на фактах и институционально интегрированные меры, которые сохраняют свою эффективность после завершения проектного цикла.",

        approach4Title: "Непрерывное развитие",
        approach4Description:
          "Мы постоянно развиваем местный потенциал. Мы активно адаптируем современные системы управления к новым макроэкономическим и экологическим вызовам.",

        ctaLabel: "NHD CONSULTANTS",
        ctaTitle1: "Создание устойчивых сообществ",
        ctaTitle2: "посредством ответственного развития",
        ctaDescription:
          "Мы предоставляем практические, устойчивые и институционально интегрированные решения для развития сообществ, инфраструктуры и реформы государственной политики.",
        ctaButton: "Связаться с нами",
      },

      services: {
        heroLabel: "НАШИ УСЛУГИ",
        heroTitle1: "Практические, устойчивые",
        heroTitle2: "решения",
        heroDescription:
          "Мы предоставляем практические, устойчивые и институционально интегрированные решения для развития сообществ, инфраструктуры и реформы государственной политики.",

        expertiseLabel: "ОСНОВНЫЕ НАПРАВЛЕНИЯ",
        expertiseTitle1: "Наши направления",
        expertiseTitle2: "экспертизы",

        service1Title: "Водоснабжение, санитария и гигиена (WASH)",
        service1Description:
          "Разработка устойчивых тарифных структур, комплексных исследований экономической целесообразности и эффективных правовых и институциональных механизмов для обеспечения надежных, эффективных, устойчивых и финансово жизнеспособных региональных услуг чистого водоснабжения. Наш подход объединяет экономический анализ, нормативное соответствие и стратегическое планирование для укрепления качества услуг, повышения операционной эффективности и долгосрочной устойчивости водной инфраструктуры.",

        service2Title:
          "Очистка сточных вод и устойчивое управление",
        service2Description:
          "Предоставление инновационных и устойчивых решений по очистке сточных вод с использованием современных технологий, эффективного проектирования систем и экологически ответственных методов управления. Мы поддерживаем развитие надежной инфраструктуры сточных вод, улучшающей общественное здоровье, защищающей природные ресурсы и обеспечивающей долгосрочную эксплуатационную устойчивость.",

        service3Title:
          "Интегрированная транспортировка воды и управление каналами",
        service3Description:
          "Предоставление устойчивых решений по транспортировке воды и эффективных подходов к управлению каналами для поддержки эффективного распределения воды, надежности систем и долгосрочной устойчивости ресурсов. Мы уделяем внимание практическому планированию, оптимизации инфраструктуры и экологически ответственным методам управления.",

        service4Title:
          "Современное орошение и управление водными ресурсами",
        service4Description:
          "Предоставление инновационных решений в области орошения и интегрированного управления водными ресурсами для повышения эффективности использования воды, оптимизации сельскохозяйственной продуктивности и устойчивого использования доступных ресурсов.",

        service5Title: "Управление твердыми отходами",
        service5Description:
          "Предоставление интегрированных решений по управлению твердыми отходами, включая эффективные системы сбора, обработку отходов, переработку и экологически ответственное управление полигонами. Мы поддерживаем более чистые и здоровые сообщества посредством устойчивых методов обращения с отходами, оптимизации утилизации, восстановления ресурсов и современных решений для полигонов.",

        service6Title: "Экологические гарантии",
        service6Description:
          "Обеспечение ответственной реализации проектов посредством комплексных экологических мер, соблюдения нормативных требований и подходов устойчивого развития. Мы применяем экологические оценки, стратегии управления рисками, программы мониторинга и меры по снижению воздействия для защиты природных ресурсов.",

        service7Title:
          "Экономическая целесообразность преобразования отходов в ресурсы",
        service7Description:
          "Развитие устойчивого восстановления ресурсов посредством комплексных оценок экономической целесообразности, анализа рынка и инвестиционного планирования инициатив по преобразованию отходов в ресурсы. Наш подход оценивает техническую жизнеспособность, финансовую устойчивость и экологические преимущества.",

        service8Title:
          "Участие заинтересованных сторон и программы общественной осведомленности",
        service8Description:
          "Укрепление взаимодействия с сообществами посредством инклюзивного участия заинтересованных сторон, информационных инициатив и эффективных коммуникационных стратегий. Наш подход способствует прозрачности, пониманию общественности и сотрудничеству между сообществами, институтами и участниками проектов.",

        service9Title: "Институциональное планирование и развитие",
        service9Description:
          "Укрепление организационного потенциала посредством стратегического планирования, институциональных рамок развития и эффективных подходов к управлению. Мы поддерживаем учреждения в повышении операционной эффективности, улучшении процессов принятия решений и создании устойчивых систем.",

        service10Title: "Гендерное равенство и инклюзия",
        service10Description:
          "Содействие инклюзивному развитию посредством гендерно ориентированных подходов, равноправного участия и стратегий социальной интеграции. Мы поддерживаем организации и сообщества в создании возможностей для всех заинтересованных сторон, укреплении доступности и расширении возможностей различных голосов.",

        capacityLabel: "РАЗВИТИЕ ПОТЕНЦИАЛА",
        capacityTitle1: "Интеграция знаний и",
        capacityTitle2: "навыков",
        capacityDescription1:
          "Мы предоставляем специализированные профессиональные программы, практические цифровые семинары и организационное обучение, разработанные специально для сотрудников коммунальных служб.",
        capacityDescription2:
          "Устойчивые преобразования требуют большего, чем современная инфраструктура — они требуют местного потенциала. Благодаря структурированной передаче знаний NHD Consultants соединяет внедрение технологий с долгосрочным управлением коммунальными услугами.",
        capacityDescription3:
          "Мы предоставляем региональным администраторам и муниципальным командам возможность самостоятельно работать с новыми базами данных биллинга, современными технологиями учета и надежными мерами экологической, медицинской безопасности и охраны труда (EHS).",
        capacityDescription4:
          "Преобразуя техническое исполнение в устойчивую институциональную экспертизу, мы обеспечиваем возможность местных команд самостоятельно повышать эффективность, соблюдать требования и обеспечивать рост.",

        sdgLabel: "ЦУР И СОЦИАЛЬНОЕ ВОЗДЕЙСТВИЕ",
        sdgTitle1: "Создание устойчивых сообществ",
        sdgTitle2: "посредством ответственного развития",
        sdg6Title: "Чистая вода",
        sdg6Description: "Расширение доступности коммунальных услуг.",
        sdg5Title: "Гендерное равенство",
        sdg5Description: "Разработка справедливых стратегий найма.",
        sdg11Title: "Устойчивые города",
        sdg11Description: "Продвижение локальной экологической политики.",

        credentialsLabel: "ПРОЕКТНЫЙ ОПЫТ",
        credentialsTitle1: "Доказанный опыт",
        credentialsTitle2: "Достигнутые результаты",

        credential1Sector: "Водоснабжение и санитария",
        credential1Client: "ADB / EBRD",
        credential1Scope:
          "Реструктуризация тарифных систем, разработка бизнес-моделей возврата затрат и установление протоколов соответствия.",

        credential2Sector: "Управление твердыми отходами",
        credential2Client: "EBRD",
        credential2Scope:
          "Выполнение требований ESAP, разработка планов взаимодействия с сообществами и оптимизация местных процессов биллинга.",

        credential3Sector: "Цифровизация коммунальных услуг",
        credential3Client: "World Bank",
        credential3Scope:
          "Внедрение современных систем MIS-биллинга, индивидуальных архитектур баз данных и цифровых систем взаимоотношений с клиентами.",

        credential4Sector: "Социальная и гендерная политика",
        credential4Client: "Инициативы, поддержанные донорами",
        credential4Scope:
          "Разработка руководящих принципов равных возможностей, проведение общественных слушаний с заинтересованными сторонами и создание корпоративных HR-структур.",

        complianceLabel: "ЗАКУПКИ И СООТВЕТСТВИЕ",
        complianceTitle1: "Борьба с коррупцией",
        complianceTitle2: "и этика",

        complianceDescription:
          "Мы придерживаемся высочайших стандартов честности благодаря строгой политике нулевой терпимости к мошенничеству, коррупции и сговору. Все консультационные услуги и мероприятия по поддержке тендеров осуществляются в полном соответствии со стандартами добросовестности и руководящими принципами закупок ADB, EBRD и Всемирного банка. Мы привержены прозрачности, ответственности и этическому совершенству во всех взаимодействиях с клиентами, партнерами и заинтересованными сторонами.",

        conflictTitle: "Конфликт интересов",
        conflictDescription:
          "Наша корпоративная консультационная структура основана на независимости, прозрачности и нейтральности, обеспечивая объективную поддержку во всех взаимодействиях. Мы активно управляем конфликтами интересов и поддерживаем высочайшие стандарты честности, ответственности и доверия заинтересованных сторон.",

        biddingTitle: "Соответствие требованиям справедливого тендера",
        biddingDescription:
          "Мы гарантируем полное соблюдение международных правил проведения тендеров, обеспечивая прозрачный бухгалтерский учет, честную конкуренцию и надежные административные процедуры во всех регионах. Наш подход способствует ответственности, эффективности и соблюдению международных лучших практик на каждом этапе закупок и реализации проектов.",

        ctaLabel: "NHD CONSULTANTS",
        ctaTitle1: "Создание устойчивых сообществ",
        ctaTitle2: "посредством ответственного развития",
        ctaDescription:
          "Мы интегрируем устойчивость, социальную ответственность и измеримое воздействие в наши проекты, согласовывая консультационные услуги с Целями устойчивого развития ООН (ЦУР).",
        ctaButton: "Связаться с нами",
      },

      projects: {
        heroLabel: "ПРОЕКТНЫЙ ОПЫТ",
        heroTitle1: "Доказанный опыт",
        heroTitle2: "достигнутые результаты",
        heroDescription:
          "Водоснабжение и санитария, управление твердыми отходами, цифровизация коммунальных услуг, а также социальная и гендерная политика.",

        mainLabel: "ПРОЕКТНЫЙ ОПЫТ",
        mainTitle1: "Доказанный опыт",
        mainTitle2: "достигнутые результаты",
        mainDescription:
          "Наш проектный опыт отражает практическую работу в сферах развития, инфраструктуры, институциональной поддержки и консультирования.",

        project1Category: "ADB / EBRD",
        project1Title: "Водоснабжение и санитария",
        project1Description:
          "Реструктуризация тарифных систем, разработка бизнес-моделей возврата затрат и установление протоколов соответствия.",

        project2Category: "EBRD",
        project2Title: "Управление твердыми отходами",
        project2Description:
          "Выполнение требований ESAP, разработка планов взаимодействия с сообществами и оптимизация местных процессов биллинга.",

        project3Category: "World Bank",
        project3Title: "Цифровизация коммунальных услуг",
        project3Description:
          "Внедрение современных систем MIS-биллинга, индивидуальных архитектур баз данных и цифровых систем взаимоотношений с клиентами.",

        project4Category: "Инициативы, поддержанные донорами",
        project4Title: "Социальная и гендерная политика",
        project4Description:
          "Разработка руководящих принципов равных возможностей, проведение общественных слушаний с заинтересованными сторонами и создание корпоративных HR-структур.",

        approachLabel: "НАШ СТРАТЕГИЧЕСКИЙ ПОДХОД",
        approachTitle1: "Практический подход",
        approachTitle2: "к долгосрочному результату.",
        approachDescription:
          "Мы ставим действия выше теории. Наши команды реализуют практические, основанные на фактах и институционально интегрированные меры, которые сохраняют свою эффективность после завершения проектного цикла.",
        approachButton: "Связаться с нами",

        ctaLabel: "NHD CONSULTANTS",
        ctaTitle1: "Практические, устойчивые",
        ctaTitle2: "решения",
        ctaDescription:
          "Мы предоставляем практические, устойчивые и институционально интегрированные решения для развития сообществ, инфраструктуры и реформы государственной политики.",
        ctaButton: "Связаться с нами",
      },

      team: {
        heroLabel: "НАША МЕЖДУНАРОДНАЯ КОМАНДА",
        heroTitle1: "Эксперты с",
        heroTitle2: "глобальным опытом.",
        heroDescription:
          "Наша международная команда обладает значительным профессиональным опытом в сфере развития, инфраструктуры, институциональных реформ и консультационных услуг.",

        mainLabel: "НАШИ ЭКСПЕРТЫ",
        mainTitle1: "Международный опыт.",
        mainTitle2: "Практическая экспертиза.",
        mainDescription:
          "Наши эксперты обладают разнообразным профессиональным и международным опытом для решения сложных задач развития и консультирования.",

        expert1Name: "Mohd Masood Seediqyar",
        expert1Position:
          "Инженер-электрик и специалист по управлению коммунальными услугами",
        expert1Experience:
          "Специалист по управлению коммунальными услугами, энергетике, стратегическому планированию, финансовому моделированию коммунальных предприятий и экономически эффективному проектированию тарифов. Почти 25 лет опыта в управлении коммунальными услугами, финансовом планировании и корпоративном управленческом консультировании. Проверенная экспертиза в разработке устойчивых решений и повышении эффективности коммунальных услуг.",
        expert1Description: "",

        expert2Name: "Dr. Kelkar Padmakar Waman",
        expert2Position:
          "Специалист по водным ресурсам и автоматизации",
        expert2Experience:
          "Специалист по приборостроению, проектированию каналов, системам автоматизации и управлению водными ресурсами. Эксперт по системам мониторинга и управления каналами, ирригационной инфраструктурой и распределением воды. Имеет опыт применения решений автоматизации для повышения эффективности и устойчивости водного сектора.",
        expert2Description: "",

        expert3Name: "Thomas Bedour, B.A.",
        expert3Position:
          "Старший специалист по водоснабжению и сточным водам",
        expert3Experience:
          "Thomas — старший специалист по водоснабжению и сточным водам с более чем 10-летним опытом работы в муниципальных и промышленных коммунальных услугах, системах очистки, управлении инфраструктурой, соблюдении нормативных требований и оптимизации операций. Он успешно руководил и поддерживал широкий спектр проектов водоснабжения по всей Канаде.",
        expert3Description: "",

        expert4Name: "Dr. Sanjay Bhattacharya",
        expert4Position:
          "Старший советник по стратегии и трансформации",
        expert4Experience:
          "Профессор-практик и эксперт по стратегическому и проектному управлению с более чем 30-летним совокупным академическим и отраслевым опытом. Его экспертиза подкреплена обширными исследованиями, публикациями и руководящим опытом в области стратегии, инноваций и организационной конкурентоспособности.",
        expert4Description: "",

        expert5Name: "Ilkhom Tashtemirov",
        expert5Position:
          "Старший специалист по закупкам МФИ и проектам развития",
        expert5Experience:
          "Старший специалист по закупкам МФИ и управлению проектами с более чем 20-летним опытом реализации проектов, финансируемых Всемирным банком и АБР, в Центральной Азии. Имеет две степени магистра в области инженерии и экономики, обладает экспертизой в руководстве, консультировании государственных органов, здравоохранении, цифровых технологиях и водной инфраструктуре.",
        expert5Description: "",

        expert6Name: "Mher Kelian",
        expert6Position:
          "Старший инженер по водной инфраструктуре и системам",
        expert6Experience:
          "Опытный инженер по водоснабжению и механике с более чем 12-летним опытом реализации свыше 300 проектов в области инфраструктуры, очистных сооружений и транспортировки воды на Ближнем Востоке и в Африке. Член Ордена инженеров и архитекторов с доказанным успехом в оптимизации процессов, проектировании систем и реализации крупных проектов.",
        expert6Description: "",

        networkLabel: "НАША СЕТЬ",
        networkTitle1: "Более широкая сеть.",
        networkTitle2: "Более сильная перспектива.",
        networkDescription:
          "Наша международная сеть позволяет объединять различные знания и профессиональные перспективы, когда проектам требуется специализированная экспертиза.",
        networkButton: "Работать с нашей командой",
      },

      news: {
        heroLabel: "НОВОСТИ И ОБНОВЛЕНИЯ",
        heroTitle1: "Новости",
        heroTitle2: "и обновления.",
        heroDescription:
          "Новости компании, этапы проектов, профессиональные материалы и обновления NHD Consultants.",

        mainLabel: "ЦУР И СОЦИАЛЬНОЕ ВОЗДЕЙСТВИЕ",
        mainTitle1: "Создание устойчивых сообществ",
        mainTitle2: "посредством ответственного развития",
        mainDescription:
          "Мы интегрируем устойчивость, социальную ответственность и измеримое воздействие в наши проекты, согласовывая консультационные услуги с Целями устойчивого развития ООН (ЦУР).",

        updateCategory: "ЦУР И СОЦИАЛЬНОЕ ВОЗДЕЙСТВИЕ",
        updateTitle:
          "Создание устойчивых сообществ посредством ответственного развития",
        updateDescription:
          "Благодаря инклюзивным и ответственным подходам мы поддерживаем инициативы, улучшающие жизнь сообществ, укрепляющие устойчивость и создающие долгосрочную ценность для общества. Наша приверженность выходит за рамки реализации проектов и направлена на позитивные преобразования, равные возможности и устойчивые результаты для будущих поколений.",

        ctaLabel: "NHD CONSULTANTS",
        ctaTitle1: "Создание устойчивых сообществ",
        ctaTitle2: "посредством ответственного развития",
        ctaDescription:
          "Мы предоставляем практические, устойчивые и институционально интегрированные решения для развития сообществ, инфраструктуры и реформы государственной политики.",
        ctaButton: "Связаться с нами",
      },

      contact: {
        heroLabel: "СВЯЖИТЕСЬ С NHD CONSULTANTS",
        heroTitle1: "Практические, устойчивые",
        heroTitle2: "решения",
        heroDescription:
          "Мы предоставляем практические, устойчивые и институционально интегрированные решения для развития сообществ, инфраструктуры и реформы государственной политики.",

        getInTouchLabel: "СВЯЗАТЬСЯ С НАМИ",
        getInTouchTitle1: "Начните",
        getInTouchTitle2: "разговор.",
        getInTouchDescription:
          "Мы приветствуем обращения от государственных органов, международных организаций, партнеров по развитию, учреждений и других заинтересованных сторон, ищущих практичные и устойчивые решения.",

        organizationLabel: "Организация",
        organizationName: "New Horizons of Dushanbe LLC",
        organizationBrand: "NHD Consultants",

        countryLabel: "Страна",
        countryName: "Республика Таджикистан",

        inquiryLabel: "Запрос",
        inquiryName: "Услуги в сфере развития и консультирования",

        formLabel: "ОТПРАВИТЬ ЗАПРОС",
        fullName: "Полное имя",
        fullNamePlaceholder: "Ваше полное имя",
        email: "Адрес электронной почты",
        emailPlaceholder: "Ваш адрес электронной почты",
        subject: "Тема",
        subjectPlaceholder: "Чем мы можем помочь?",
        message: "Сообщение",
        messagePlaceholder:
          "Расскажите о вашем проекте или запросе...",
        sendInquiry: "Отправить запрос →",
      formNote:
  "Отправка контактной формы будет подключена после утверждения содержания и дизайна веб-сайта.",

formSuccess:
  "Форма успешно отправлена! Спасибо, что связались с нами. Мы рассмотрим ваше обращение и свяжемся с вами в ближайшее время.",
        ctaLabel: "NHD CONSULTANTS",
        ctaTitle1: "Практические, устойчивые",
        ctaTitle2: "решения",
        ctaDescription:
          "Мы предоставляем практические, устойчивые и институционально интегрированные решения для развития сообществ, инфраструктуры и реформы государственной политики.",
      },

      footer: {
        description:
          "Профессиональные консультационные решения для устойчивого развития и долгосрочного воздействия.",
        localExpertise: "Местная экспертиза",
        socialImpact: "Социальное воздействие",
        sustainableSolutions: "Устойчивые решения",
        company: "Компания",
        home: "Главная",
        about: "О нас",
        services: "Услуги",
        news: "Новости",
        contact: "Контакты",
        expertise: "Экспертиза",
        waterSanitation: "Водоснабжение и санитария",
        infrastructureUtilities:
          "Инфраструктура и коммунальные услуги",
        socialDevelopment: "Социальное развитие",
        digitalTransformation: "Цифровая трансформация",
        connect: "Связаться",
        companyName: "New Horizons of Dushanbe LLC",
        country: "Таджикистан",
        contactNhd: "Связаться с NHD Consultants",
        follow: "Мы в социальных сетях",
        copyright: "© 2026 NHD Consultants. Все права защищены.",
      },
    },
  },

  /* =========================================================
     TAJIK
     ========================================================= */
  tg: {
    translation: {
      nav: {
        home: "Асосӣ",
        about: "Дар бораи мо",
        services: "Хизматрасониҳо",
        projects: "Лоиҳаҳо",
        experts: "Коршиносон",
        news: "Ахбор",
        contact: "Тамос",
        start: "Оғози суҳбат",
      },

      home: {
        heroLabel: "NHD Consultants",
        heroTitle1: "Идомаи мероси собитшудаи",
        heroTitle2: "муваффақият дар Тоҷикистон.",
        heroDescription:
          "Мо роҳҳалҳои амалӣ, устувор ва ба институтҳо муттаҳидшударо барои рушди ҷомеаҳо, инфрасохтор ва ислоҳоти сиёсати давлатӣ пешниҳод менамоем.",
        primaryButton: "Хизматрасониҳои мо",
        secondaryButton: "Тамос бо мо",

        localExpertise: "Таҷрибаи маҳаллӣ",
        socialImpact: "Таъсири иҷтимоӣ",
        sustainableSolutions: "Роҳҳалҳои устувор",
        companyLabel: "ДАР БОРАИ ШИРКАТ",

heroCardTitle1: "Роҳҳалҳои амалӣ, устувор",
heroCardTitle2: "Ҳалҳо",

heroCardTitle3: "Рушди ба институтҳо",
heroCardTitle4: "муттаҳидшуда",

heroCardDescription:
  "New Horizons of Dushanbe LLC як ширкати нави машваратии аз ҷиҳати ҳуқуқӣ мустақил мебошад, ки бар таҷрибаи собитшудаи роҳбарӣ ва фаъолияти олӣ асос ёфтааст.",

        aboutLabel: "ДАР БОРАИ ШИРКАТ",
        introTitle1: "Идомаи мероси собитшудаи",
introTitle2: "муваффақият дар Тоҷикистон.",

introParagraph1:
  "New Horizons of Dushanbe LLC як ширкати нави машваратии аз ҷиҳати ҳуқуқӣ мустақил мебошад, ки бар таҷрибаи собитшудаи роҳбарӣ ва фаъолияти олӣ асос ёфтааст. Дастаи роҳбарии мо қаблан дар BAZIS, GMES ва BDO доираи васеи лоиҳаҳои муҳимро роҳбарӣ, идора ва бомуваффақият амалӣ намудааст. Мо ин таҷрибаи васеи иҷро ва равиши қатъии идоракунии лоиҳаҳоро мустақиман ба ширкати нави худ меорем.",

introParagraph2:
  "Роҳбарияти мо, ки аз директорони собиқи идоракунанда ва як мансабдори собиқи баландпояи давлатӣ бо зиёда аз 25 соли таҷриба дар соҳаи хизматрасониҳои коммуналии шаҳрӣ иборат аст, дониши амиқи маҳаллиро бо таҷрибаҳои беҳтарини байналмилалӣ муттаҳид мекунад.",

introParagraph3:
  "Мо роҳҳалҳои амалӣ, устувор ва ба институтҳо муттаҳидшударо барои рушди ҷомеаҳо, инфрасохтор ва ислоҳоти сиёсати давлатӣ пешниҳод менамоем.",
        aboutTitle1: "Идомаи мероси собитшудаи",
        aboutTitle2: "муваффақият дар Тоҷикистон.",
        aboutDescription1:
          "New Horizons of Dushanbe LLC як ширкати нави машваратии аз ҷиҳати ҳуқуқӣ мустақил мебошад, ки бар таҷрибаи собитшудаи роҳбарӣ ва фаъолияти олӣ асос ёфтааст. Дастаи роҳбарии мо қаблан дар BAZIS, GMES ва BDO доираи васеи лоиҳаҳои муҳимро роҳбарӣ, идора ва бомуваффақият амалӣ намудааст. Мо ин таҷрибаи васеи иҷро ва равиши қатъии идоракунии лоиҳаҳоро мустақиман ба ширкати нави худ меорем.",
        aboutDescription2:
          "Роҳбарияти мо, ки аз директорони собиқи идоракунанда ва як мансабдори собиқи баландпояи давлатӣ бо зиёда аз 25 соли таҷриба дар соҳаи хизматрасониҳои коммуналии шаҳрӣ иборат аст, дониши амиқи маҳаллиро бо таҷрибаҳои беҳтарини байналмилалӣ муттаҳид мекунад.",
        aboutDescription3:
          "Мо роҳҳалҳои амалӣ, устувор ва ба институтҳо муттаҳидшударо барои рушди ҷомеаҳо, инфрасохтор ва ислоҳоти сиёсати давлатӣ пешниҳод менамоем.",
        discoverMore: "Маълумоти бештар",

        sectorsLabel: "СОҲАҲОИ АСОСИИ ФАЪОЛИЯТ",
        sectorsTitle1: "Соҳаҳои асосии",
        sectorsTitle2: "фаъолият",
        allExpertise: "Ҳамаи самтҳо",
        exploreSector: "Муфассалтар",

        sector1Title:
          "Обтаъминкунӣ, санитария ва гигиена (WASH)",
        sector1Description:
          "Таҳияи сохторҳои устувори тарифӣ, таҳқиқоти ҳамаҷонибаи иқтисодӣ ва чаҳорчӯбаҳои самараноки ҳуқуқӣ ва институтсионалӣ барои таъмини хизматрасониҳои боэътимод, самаранок, устувор ва аз ҷиҳати молиявӣ устувори оби тозаи минтақавӣ. Равиши мо таҳлили иқтисодӣ, мутобиқати меъёрӣ ва банақшагирии стратегиро муттаҳид намуда, хизматрасониҳоро беҳтар ва устувории дарозмуддати инфрасохтори обро дастгирӣ мекунад.",

        sector2Title:
          "Тозакунии обҳои партов ва идоракунии устувор",
        sector2Description:
          "Пешниҳоди роҳҳалҳои инноватсионӣ ва устувори тозакунии обҳои партов тавассути технологияҳои пешрафта, тарҳрезии самараноки системаҳо ва таҷрибаҳои масъулонаи экологӣ. Мо рушди инфрасохтори боэътимоди обҳои партовро дастгирӣ менамоем, ки саломатии ҷамъиятиро беҳтар ва захираҳои табииро ҳифз мекунад.",

        sector3Title:
          "Интиқоли ҳамгирошудаи об ва идоракунии каналҳо",
        sector3Description:
          "Пешниҳоди роҳҳалҳои устувори интиқоли об ва усулҳои самараноки идоракунии каналҳо барои дастгирии тақсимоти самараноки об, эътимоднокии система ва устувории дарозмуддати захираҳо. Мо ба банақшагирии амалӣ, беҳсозии инфрасохтор ва таҷрибаҳои масъулонаи экологӣ диққат медиҳем.",

        sector4Title:
          "Обёрии пешрафта ва идоракунии захираҳои об",
        sector4Description:
          "Пешниҳоди роҳҳалҳои инноватсионии обёрӣ ва усулҳои ҳамгирошудаи идоракунии захираҳои об барои баланд бардоштани самаранокии истифодаи об, беҳсозии маҳсулнокии кишоварзӣ ва истифодаи устувори захираҳои дастрас.",

        approachLabel: "РӮЙКАРДИ СТРАТЕГИИ МО",
        approachTitle1: "Равиши амалӣ",
        approachTitle2: "барои таъсири дарозмуддат.",
        approachDescription:
          "Мо амалро аз назария боло мегузорем. Дастаҳои мо чораҳои амалӣ, бар далел асосёфта ва ба институтҳо муттаҳидшударо амалӣ мекунанд, ки баъд аз анҷоми давраи лоиҳа низ самаранок мемонанд.",

        approach1Title: "Таваҷҷӯҳ ба мизоҷ",
        approach1Description:
          "Мо роҳҳалҳои якхеларо пурра рад мекунем. Ҳар як барномаи машваратӣ барои ҳалли мушкилоти беназир ва амалии мизоҷи дахлдор махсус мутобиқ карда мешавад.",

        approach2Title: "Шарикии стратегӣ",
        approach2Description:
          "Фаъолияти мо ба ҳамкорӣ асос ёфтааст. Мо робитаҳои устуворро байни ҳукуматҳои минтақавӣ, донорҳои байналмилалии молиявӣ ва роҳбарони ҷомеаҳои маҳаллӣ эҷод мекунем.",

        approach3Title: "Самаранокии собитшуда",
        approach3Description:
          "Мо амалро аз назария боло мегузорем. Дастаҳои мо чораҳои амалӣ, бар далел асосёфта ва ба институтҳо муттаҳидшударо амалӣ мекунанд, ки баъд аз анҷоми давраи лоиҳа низ самаранок мемонанд.",

        approach4Title: "Рушди пайваста",
        approach4Description:
          "Мо иқтидорҳои маҳаллиро пайваста инкишоф медиҳем. Мо системаҳои муосири идоракуниро барои мутобиқ шудан ба мушкилоти нави макроиқтисодӣ ва экологӣ фаъолона мутобиқ мекунем.",

        teamLabel: "ДАСТАИ БАЙНАЛМИЛАЛИИ МО",
        teamTitle1: "Коршиносон бо",
        teamTitle2: "таҷрибаи ҷаҳонӣ.",
        teamDescription:
          "Дастаи байналмилалии мо таҷрибаи васеи касбӣ дар соҳаҳои рушд, инфрасохтор, ислоҳоти институтсионалӣ ва хизматрасониҳои машваратиро муттаҳид мекунад.",

        impactLabel: "ҲАДАФҲОИ РУШДИ УСТУВОР ВА ТАЪСИРИ ИҶТИМОӢ",
        impactTitle1: "Эҷоди ҷомеаҳои устувор",
        impactTitle2: "тавассути рушди масъулона",
        impactDescription:
          "NHD Consultants устуворӣ, масъулияти иҷтимоӣ ва таъсири ченшавандаро ба лоиҳаҳои худ муттаҳид намуда, хизматрасониҳои машваратии худро бо Ҳадафҳои Рушди Устувори Созмони Милали Муттаҳид ҳамоҳанг мекунад. Тавассути равишҳои фарогир ва масъул мо ташаббусҳоеро дастгирӣ мекунем, ки ҷомеаҳоро беҳтар, устувориро тақвият ва барои ҷомеа арзиши дарозмуддат эҷод мекунанд. Ӯҳдадории мо аз иҷрои лоиҳаҳо фаротар буда, ба тағйироти мусбат, имкониятҳои баробар ва натиҷаҳои устувор барои наслҳои оянда равона шудааст. Бо ҳамгироии принсипҳои экологӣ, иҷтимоӣ ва идоракунӣ мо ба шарикон дар ноил шудан ба таъсири назаррас ва натиҷаҳои дарозмуддати рушд кӯмак мекунем.",
        exploreImpact: "Таъсири мо",

        impactSectionLabel: "ҲАДАФҲОИ РУШДИ УСТУВОР ВА ТАЪСИРИ ИҶТИМОӢ",
impactSectionTitle1: "Роҳҳалҳои устувор барои",
impactSectionTitle2: "таъсири дарозмуддат.",
impactSectionDescription:
  "NHD Consultants рушди устуворро тавассути роҳҳалҳои амалӣ дастгирӣ мекунад, ки инфрасохторро тақвият медиҳанд, хизматрасониҳоро беҳтар месозанд ва таъсири дарозмуддати иҷтимоӣ ва иқтисодӣ эҷод мекунанд.",
impactSectionButton: "Хизматрасониҳои мо",

        ctaLabel: "NHD CONSULTANTS",
        ctaTitle1: "Эҷоди ҷомеаҳои устувор",
        ctaTitle2: "тавассути рушди масъулона",
        ctaDescription:
          "Мо устуворӣ, масъулияти иҷтимоӣ ва таъсири ченшавандаро ба лоиҳаҳои худ муттаҳид намуда, хизматрасониҳои машваратии худро бо Ҳадафҳои Рушди Устувори Созмони Милали Муттаҳид ҳамоҳанг мекунем.",
        ctaButton: "Тамос бо мо",

        ctaSectionLabel: "NHD CONSULTANTS",
ctaSectionTitle1: "Омодаед таъсири",
ctaSectionTitle2: "амалӣ эҷод кунед?",
ctaSectionDescription:
  "Биёед якҷоя роҳҳалҳои амалӣ ва устуворро таҳия кунем, ки барои ташкилоти шумо ва ҷомеаҳое, ки ба онҳо хизмат мерасонед, арзиши дарозмуддат эҷод мекунанд.",
ctaSectionButton: "Тамос бо мо",
      },

      about: {
        heroLabel: "ДАР БОРАИ ШИРКАТ",
        heroTitle1: "Идомаи мероси собитшудаи",
        heroTitle2: "муваффақият дар Тоҷикистон.",
        heroDescription:
          "New Horizons of Dushanbe LLC як ширкати нави машваратии аз ҷиҳати ҳуқуқӣ мустақил мебошад, ки бар таҷрибаи собитшудаи роҳбарӣ ва фаъолияти олӣ асос ёфтааст. Дастаи роҳбарии мо қаблан дар BAZIS, GMES ва BDO доираи васеи лоиҳаҳои муҳимро роҳбарӣ, идора ва бомуваффақият амалӣ намудааст. Мо ин таҷрибаи васеи иҷро ва равиши қатъии идоракунии лоиҳаҳоро мустақиман ба ширкати нави худ меорем.",

        storyLabel: "ТАЪРИХИ МО",
        storyTitle1: "Таҷрибаи маҳаллӣ",
        storyTitle2: "Таҷрибаҳои беҳтарини байналмилалӣ",
        storyDescription1:
          "Роҳбарияти мо, ки аз директорони собиқи идоракунанда ва як мансабдори собиқи баландпояи давлатӣ бо зиёда аз 25 соли таҷриба дар соҳаи хизматрасониҳои коммуналии шаҳрӣ иборат аст, дониши амиқи маҳаллиро бо таҷрибаҳои беҳтарини байналмилалӣ муттаҳид мекунад.",
        storyDescription2:
          "Мо роҳҳалҳои амалӣ, устувор ва ба институтҳо муттаҳидшударо барои рушди ҷомеаҳо, инфрасохтор ва ислоҳоти сиёсати давлатӣ пешниҳод менамоем.",

        missionLabel: "РИСОЛАТИ МО",
        missionTitle: "Тақвияти ҷомеаҳои маҳаллӣ",
        missionDescription:
          "Тақвияти ҷомеаҳои маҳаллӣ, таъмини имкониятҳои баробар ва ворид намудани стандартҳои байналмилалӣ ба амалияи ҳаррӯза. Мо ҳар як амалро бо Ҳадафҳои Рушди Устувор ва афзалиятҳои донорӣ дар ислоҳоти институтсионалӣ ва фарогирии иҷтимоӣ ҳамоҳанг мекунем.",

        visionLabel: "ДИДГОҲИ МО",
        visionTitle: "Шарики боэътимодтарин ва сазовори эътимод",
        visionDescription:
          "Шарики боэътимодтарин ва сазовори эътимод барои ҳукуматҳо, ташкилотҳои байналмилалии донорӣ ва ҷомеаҳои маҳаллӣ будан, то ба онҳо дар ноил шудан ба рушди устувор, таҳкими институтҳои идоракунӣ ва таъмини рушди фарогир мувофиқи Ҳадафҳои Рушди Устувори СММ кӯмак расонем.",

        valuesLabel: "АРЗИШҲОИ АСОСИИ МО",
        valuesTitle1: "Он чизе ки",
        valuesTitle2: "кори моро роҳнамоӣ мекунад.",

        value1Title: "Касбият",
        value1Description:
          "Мо дар ҳар як супориши коммуналӣ ва инфрасохторӣ стандартҳои баландтарини сифати техникӣ, дақиқӣ ва иҷрои касбиро нигоҳ медорем. Ӯҳдадории мо ба навоварӣ, бехатарӣ ва сифат роҳҳалҳои боэътимод, самаранок ва устуворро таъмин мекунад.",

        value2Title: "Ростқавлӣ",
        value2Description:
          "Шаффофият, ахлоқи қатъӣ ва масъулияти комил асоси тамоми фаъолияти мо мебошанд. Мо тавассути пешниҳоди роҳнамоии объективӣ, идоракунии масъулонаи лоиҳаҳо ва стандартҳои баланди ростқавлии касбӣ шарикиҳои боэътимоди машваратиро бо муассисаҳои байналмилалии молиявӣ эҷод мекунем.",

        value3Title: "Муваффақият",
        value3Description:
          "Мо ба натиҷаҳои амалӣ ва ченшаванда таваҷҷӯҳ мекунем, ки некӯаҳволии ҷомеаҳоро беҳтар, инфрасохтори маҳаллиро тақвият ва таъсири дарозмуддати иҷтимоиро дар саросари Тоҷикистон эҷод мекунанд. Ин тавассути муҳандисии инноватсионӣ, роҳҳалҳои устувор ва шарикии ҳамкорӣ амалӣ мегардад.",

        value4Title: "Навоварӣ",
        value4Description:
          "Мо омӯзиши пайваста ва қабули роҳҳалҳои муосирро барои рушди навоварӣ ва фаъолияти олӣ дастгирӣ мекунем. Бо ҳамгироии воситаҳо ва технологияҳои пешрафтаи рақамӣ мо равандҳои маҳаллии кориро содда, самаранокиро баланд ва қабули қарорҳоро беҳтар мекунем.",

        approachLabel: "РӮЙКАРДИ СТРАТЕГИИ МО",
        approachHeading1: "Равиши амалӣ",
        approachHeading2: "барои таъсири дарозмуддат.",
        approachDescription:
          "Мо амалро аз назария боло мегузорем. Дастаҳои мо чораҳои амалӣ, бар далел асосёфта ва ба институтҳо муттаҳидшударо амалӣ мекунанд, ки баъд аз анҷоми давраи лоиҳа низ самаранок мемонанд.",

        approach1Title: "Таваҷҷӯҳ ба мизоҷ",
        approach1Description:
          "Мо роҳҳалҳои якхеларо пурра рад мекунем. Ҳар як барномаи машваратӣ барои ҳалли мушкилоти беназир ва амалии мизоҷи дахлдор махсус мутобиқ карда мешавад.",

        approach2Title: "Шарикии стратегӣ",
        approach2Description:
          "Фаъолияти мо ба ҳамкорӣ асос ёфтааст. Мо робитаҳои устуворро байни ҳукуматҳои минтақавӣ, донорҳои байналмилалии молиявӣ ва роҳбарони ҷомеаҳои маҳаллӣ эҷод мекунем.",

        approach3Title: "Самаранокии собитшуда",
        approach3Description:
          "Мо амалро аз назария боло мегузорем. Дастаҳои мо чораҳои амалӣ, бар далел асосёфта ва ба институтҳо муттаҳидшударо амалӣ мекунанд, ки баъд аз анҷоми давраи лоиҳа низ самаранок мемонанд.",

        approach4Title: "Рушди пайваста",
        approach4Description:
          "Мо иқтидорҳои маҳаллиро пайваста инкишоф медиҳем. Мо системаҳои муосири идоракуниро барои мутобиқ шудан ба мушкилоти нави макроиқтисодӣ ва экологӣ фаъолона мутобиқ мекунем.",

        ctaLabel: "NHD CONSULTANTS",
        ctaTitle1: "Эҷоди ҷомеаҳои устувор",
        ctaTitle2: "тавассути рушди масъулона",
        ctaDescription:
          "Мо роҳҳалҳои амалӣ, устувор ва ба институтҳо муттаҳидшударо барои рушди ҷомеаҳо, инфрасохтор ва ислоҳоти сиёсати давлатӣ пешниҳод менамоем.",
        ctaButton: "Тамос бо мо",
      },

      services: {
        heroLabel: "ХИЗМАТРАСОНИҲОИ МО",
        heroTitle1: "Роҳҳалҳои амалӣ ва устувор",
        heroTitle2: "барои масъалаҳои мураккаб",
        heroDescription:
          "Мо роҳҳалҳои амалӣ, устувор ва ба институтҳо муттаҳидшударо барои рушди ҷомеаҳо, инфрасохтор ва ислоҳоти сиёсати давлатӣ пешниҳод менамоем.",

        expertiseLabel: "СОҲАҲОИ АСОСИИ ФАЪОЛИЯТ",
        expertiseTitle1: "Самтҳои",
        expertiseTitle2: "тахассусии мо",

        service1Title:
          "Обтаъминкунӣ, санитария ва гигиена (WASH)",
        service1Description:
          "Таҳияи сохторҳои устувори тарифӣ, таҳқиқоти ҳамаҷонибаи иқтисодӣ ва чаҳорчӯбаҳои самараноки ҳуқуқӣ ва институтсионалӣ барои таъмини хизматрасониҳои боэътимод, самаранок, устувор ва аз ҷиҳати молиявӣ устувори оби тозаи минтақавӣ. Равиши мо таҳлили иқтисодӣ, мутобиқати меъёрӣ ва банақшагирии стратегиро муттаҳид мекунад.",

        service2Title:
          "Тозакунии обҳои партов ва идоракунии устувор",
        service2Description:
          "Пешниҳоди роҳҳалҳои инноватсионӣ ва устувори тозакунии обҳои партов тавассути технологияҳои пешрафта, тарҳрезии самараноки системаҳо ва таҷрибаҳои масъулонаи экологӣ. Мо рушди инфрасохтори боэътимоди обҳои партовро дастгирӣ мекунем.",

        service3Title:
          "Интиқоли ҳамгирошудаи об ва идоракунии каналҳо",
        service3Description:
          "Пешниҳоди роҳҳалҳои устувори интиқоли об ва усулҳои самараноки идоракунии каналҳо барои дастгирии тақсимоти самараноки об, эътимоднокии система ва устувории дарозмуддати захираҳо.",

        service4Title:
          "Обёрии пешрафта ва идоракунии захираҳои об",
        service4Description:
          "Пешниҳоди роҳҳалҳои инноватсионии обёрӣ ва усулҳои ҳамгирошудаи идоракунии захираҳои об барои баланд бардоштани самаранокии истифодаи об, беҳсозии маҳсулнокии кишоварзӣ ва истифодаи устувори захираҳо.",

        service5Title: "Идоракунии партовҳои сахт",
        service5Description:
          "Пешниҳоди роҳҳалҳои ҳамгирошудаи идоракунии партовҳои сахт, аз ҷумла системаҳои самараноки ҷамъоварӣ, коркарди партовҳо, ташаббусҳои коркарди дубора ва идоракунии масъулонаи экологӣ.",

        service6Title: "Муҳофизати муҳити зист",
        service6Description:
          "Таъмини иҷрои масъулонаи лоиҳаҳо тавассути чораҳои ҳамаҷонибаи экологӣ, мутобиқати меъёрӣ ва равишҳои рушди устувор. Мо арзёбии экологӣ, идоракунии хавфҳо ва барномаҳои мониторингро истифода мебарем.",

        service7Title:
          "Арзёбии иқтисодии табдили партов ба захира",
        service7Description:
          "Рушди барқарорсозии устувори захираҳо тавассути арзёбии ҳамаҷонибаи иқтисодӣ, таҳлили бозор ва банақшагирии сармоягузорӣ барои ташаббусҳои табдили партов ба захира.",

        service8Title:
          "Иштироки ҷонибҳои манфиатдор ва барномаҳои огоҳсозии ҷомеа",
        service8Description:
          "Тақвияти ҷалби ҷомеа тавассути иштироки фарогири ҷонибҳои манфиатдор, ташаббусҳои огоҳсозӣ ва стратегияҳои самараноки муошират.",

        service9Title: "Банақшагирӣ ва рушди институтсионалӣ",
        service9Description:
          "Тақвияти иқтидори ташкилотӣ тавассути банақшагирии стратегӣ, чаҳорчӯбаҳои рушди институтсионалӣ ва равишҳои самараноки идоракунӣ.",

        service10Title: "Баробарии гендерӣ ва фарогирӣ",
        service10Description:
          "Пешбурди рушди фарогир тавассути равишҳои гендерӣ, иштироки баробар ва стратегияҳои фарогирии иҷтимоӣ.",

        capacityLabel: "ТАКМИЛИ ИҚТИДОР",
        capacityTitle1: "Ҳамгироии дониш ва",
        capacityTitle2: "маҳорат",
        capacityDescription1:
          "Мо барномаҳои махсуси касбӣ, семинарҳои амалии рақамӣ ва омӯзиши ташкилотиро барои кормандони хизматрасониҳои коммуналӣ пешниҳод мекунем.",
        capacityDescription2:
          "Тағйироти устувор танҳо инфрасохтори муосирро талаб намекунад — он иқтидори маҳаллиро низ талаб мекунад. Тавассути интиқоли сохтории дониш NHD Consultants байни ҷорӣ намудани технология ва идоракунии дарозмуддати хизматрасониҳои коммуналӣ робита эҷод мекунад.",
        capacityDescription3:
          "Мо ба маъмурони минтақавӣ ва дастаҳои шаҳрӣ имкон медиҳем, ки мустақилона пойгоҳҳои нави маълумоти ҳисобдорӣ, технологияҳои муосири ҳисобкунии ченакҳо ва чораҳои қавии экологӣ, тандурустӣ ва бехатарии меҳнатро истифода баранд.",
        capacityDescription4:
          "Бо табдил додани иҷрои техникӣ ба таҷрибаи устувори институтсионалӣ мо кафолат медиҳем, ки дастаҳои маҳаллӣ самаранокӣ, мутобиқат ва рушдро бо эътимоди комил пеш баранд.",

        sdgLabel: "ҲАДАФҲОИ РУШДИ УСТУВОР ВА ТАЪСИРИ ИҶТИМОӢ",
        sdgTitle1: "Эҷоди ҷомеаҳои устувор",
        sdgTitle2: "тавассути рушди масъулона",
        sdg6Title: "Оби тоза",
        sdg6Description:
          "Васеъ намудани дастрасӣ ба хизматрасониҳои коммуналӣ.",
        sdg5Title: "Баробарии гендерӣ",
        sdg5Description:
          "Таҳияи стратегияҳои одилонаи ҷалби кормандон.",
        sdg11Title: "Шаҳрҳои устувор",
        sdg11Description:
          "Пешбурди ислоҳоти сиёсати сабзи маҳаллӣ.",

        credentialsLabel: "ТААҶРИБАИ ЛОИҲАВӢ",
        credentialsTitle1: "Таҷрибаи собитшуда",
        credentialsTitle2: "Натиҷаҳои бадастомада",

        credential1Sector: "Обтаъминкунӣ ва санитария",
        credential1Client: "ADB / EBRD",
        credential1Scope:
          "Таҷдиди сохторҳои тарифӣ, таҳияи моделҳои тиҷоратии барқарорсозии хароҷот ва таъсиси протоколҳои мутобиқат.",

        credential2Sector: "Идоракунии партовҳои сахт",
        credential2Client: "EBRD",
        credential2Scope:
          "Иҷрои талаботи ESAP, таҳияи нақшаҳои ҷалби ҷомеа ва беҳсозии равандҳои маҳаллии ҳисобдорӣ.",

        credential3Sector: "Рақамикунонии хизматрасониҳои коммуналӣ",
        credential3Client: "World Bank",
        credential3Scope:
          "Ҷорӣ намудани низомҳои муосири ҳисобдорӣ, меъмории махсуси пойгоҳҳои маълумот ва системаҳои рақамии муносибат бо мизоҷон.",

        credential4Sector: "Сиёсати иҷтимоӣ ва гендерӣ",
        credential4Client: "Ташаббусҳои дастгиришудаи донорон",
        credential4Scope:
          "Таҳияи роҳнамоҳои имкониятҳои баробар, гузаронидани шунидани ҷамъиятӣ ва таъсиси сохторҳои корпоративии HR.",

        complianceLabel: "ХАРИД ВА МУТОБИҚАТ",
        complianceTitle1: "Мубориза бо коррупсия",
        complianceTitle2: "ва ахлоқ",

        complianceDescription:
          "Мо тавассути сиёсати қатъии таҳаммулнопазирӣ нисбат ба қаллобӣ, коррупсия ва амалҳои ҳамдастӣ стандартҳои баландтарини ростқавлиро риоя мекунем. Ҳамаи хизматрасониҳои машваратӣ ва фаъолияти дастгирии тендерӣ пурра ба стандартҳои ростқавлӣ ва дастурҳои хариди ADB, EBRD ва Бонки Ҷаҳонӣ мутобиқ мебошанд.",

        conflictTitle: "Бархӯрди манфиатҳо",
        conflictDescription:
          "Чаҳорчӯбаи машваратии мо бар мустақилият, шаффофият ва бетарафӣ асос ёфта, дастгирии объективиро дар тамоми ҳамкориҳо таъмин мекунад. Мо бархӯрди манфиатҳоро фаъолона идора намуда, стандартҳои баландтарини ростқавлӣ, масъулият ва эътимоди ҷонибҳои манфиатдорро нигоҳ медорем.",

        biddingTitle: "Мутобиқати тендери одилона",
        biddingDescription:
          "Мо мутобиқати пурра ба қоидаҳои байналмилалии тендериро кафолат дода, ҳисобдорӣ, рақобати одилона ва расмиёти қавии маъмуриро таъмин мекунем.",

        ctaLabel: "NHD CONSULTANTS",
        ctaTitle1: "Эҷоди ҷомеаҳои устувор",
        ctaTitle2: "тавассути рушди масъулона",
        ctaDescription:
          "Мо устуворӣ, масъулияти иҷтимоӣ ва таъсири ченшавандаро ба лоиҳаҳои худ муттаҳид намуда, хизматрасониҳои машваратии худро бо Ҳадафҳои Рушди Устувори СММ ҳамоҳанг мекунем.",
        ctaButton: "Тамос бо мо",
      },

      projects: {
        heroLabel: "ТААҶРИБАИ ЛОИҲАВӢ",
        heroTitle1: "Таҷрибаи собитшуда",
        heroTitle2: "натиҷаҳои бадастомада",
        heroDescription:
          "Обтаъминкунӣ ва санитария, идоракунии партовҳои сахт, рақамикунонии хизматрасониҳои коммуналӣ ва сиёсати иҷтимоӣ ва гендерӣ.",

        mainLabel: "ТААҶРИБАИ ЛОИҲАВӢ",
        mainTitle1: "Таҷрибаи собитшуда",
        mainTitle2: "натиҷаҳои бадастомада",
        mainDescription:
          "Таҷрибаи лоиҳавии мо фаъолияти амалиро дар соҳаҳои рушд, инфрасохтор, институтҳо ва хизматрасониҳои машваратӣ инъикос мекунад.",

        project1Category: "ADB / EBRD",
        project1Title: "Обтаъминкунӣ ва санитария",
        project1Description:
          "Таҷдиди сохторҳои тарифӣ, таҳияи моделҳои тиҷоратии барқарорсозии хароҷот ва таъсиси протоколҳои мутобиқат.",

        project2Category: "EBRD",
        project2Title: "Идоракунии партовҳои сахт",
        project2Description:
          "Иҷрои талаботи ESAP, таҳияи нақшаҳои ҷалби ҷомеа ва беҳсозии равандҳои маҳаллии ҳисобдорӣ.",

        project3Category: "World Bank",
        project3Title: "Рақамикунонии хизматрасониҳои коммуналӣ",
        project3Description:
          "Ҷорӣ намудани низомҳои муосири ҳисобдорӣ, меъмории махсуси пойгоҳҳои маълумот ва системаҳои рақамии муносибат бо мизоҷон.",

        project4Category: "Ташаббусҳои дастгиришудаи донорон",
        project4Title: "Сиёсати иҷтимоӣ ва гендерӣ",
        project4Description:
          "Таҳияи роҳнамоҳои имкониятҳои баробар, гузаронидани шунидани ҷамъиятӣ ва таъсиси сохторҳои корпоративии HR.",

        approachLabel: "РӮЙКАРДИ СТРАТЕГИИ МО",
        approachTitle1: "Равиши амалӣ",
        approachTitle2: "барои таъсири дарозмуддат.",
        approachDescription:
          "Мо амалро аз назария боло мегузорем. Дастаҳои мо чораҳои амалӣ, бар далел асосёфта ва ба институтҳо муттаҳидшударо амалӣ мекунанд, ки баъд аз анҷоми давраи лоиҳа низ самаранок мемонанд.",
        approachButton: "Тамос бо мо",

        ctaLabel: "NHD CONSULTANTS",
        ctaTitle1: "Роҳҳалҳои амалӣ ва устувор",
        ctaTitle2: "барои рушди масъулона",
        ctaDescription:
          "Мо роҳҳалҳои амалӣ, устувор ва ба институтҳо муттаҳидшударо барои рушди ҷомеаҳо, инфрасохтор ва ислоҳоти сиёсати давлатӣ пешниҳод менамоем.",
        ctaButton: "Тамос бо мо",
      },

      team: {
        heroLabel: "ДАСТАИ БАЙНАЛМИЛАЛИИ МО",
        heroTitle1: "Коршиносон бо",
        heroTitle2: "таҷрибаи ҷаҳонӣ.",
        heroDescription:
          "Дастаи байналмилалии мо таҷрибаи васеи касбӣ дар соҳаҳои рушд, инфрасохтор, ислоҳоти институтсионалӣ ва машварат дорад.",

        mainLabel: "КОРШИНОСОНИ МО",
        mainTitle1: "Таҷрибаи байналмилалӣ.",
        mainTitle2: "Таҷрибаи амалӣ.",
        mainDescription:
          "Коршиносони мо дорои таҷрибаи гуногуни касбӣ ва байналмилалӣ барои дастгирии масъалаҳои мураккаби рушд ва машваратӣ мебошанд.",

        expert1Name: "Mohd Masood Seediqyar",
        expert1Position:
          "Муҳандиси барқ ва мутахассиси идоракунии хизматрасониҳои коммуналӣ",
        expert1Experience:
          "Мутахассиси идоракунии хизматрасониҳои коммуналӣ, муҳандисии бахши энергетика, банақшагирии стратегӣ, моделсозии молиявии хизматрасониҳои коммуналӣ ва тарҳрезии тарифҳои самараноки хароҷот. Қариб 25 соли таҷриба дар идоракунии коммуналӣ, банақшагирии молиявӣ ва машварати идоракунии корпоративӣ. Таҷрибаи собитшуда дар таҳияи роҳҳалҳои устувор ва баланд бардоштани самаранокии хизматрасониҳо.",
        expert1Description: "",

        expert2Name: "Dr. Kelkar Padmakar Waman",
        expert2Position:
          "Мутахассиси захираҳои об ва автоматикунонӣ",
        expert2Experience:
          "Мутахассиси асбобсозӣ, муҳандисии каналҳо, системаҳои автоматикунонӣ ва идоракунии захираҳои об. Коршиноси системаҳои мониторинг ва назорат барои шабакаҳои каналҳо, инфрасохтори обёрӣ ва тақсимоти об. Таҷриба дар истифодаи роҳҳалҳои автоматикунонӣ барои баланд бардоштани самаранокӣ ва устувории бахши об.",
        expert2Description: "",

        expert3Name: "Thomas Bedour, B.A.",
        expert3Position:
          "Мутахассиси калони обтаъминкунӣ ва обҳои партов",
        expert3Experience:
          "Thomas мутахассиси калони обтаъминкунӣ ва обҳои партов бо зиёда аз 10 соли таҷриба дар фаъолияти коммуналӣ ва саноатӣ, системаҳои тозакунӣ, идоракунии инфрасохтор, мутобиқати меъёрӣ ва беҳсозии фаъолият мебошад. Ӯ доираи васеи лоиҳаҳои обтаъминкуниро дар саросари Канада бомуваффақият идора ва дастгирӣ кардааст.",
        expert3Description: "",

        expert4Name: "Dr. Sanjay Bhattacharya",
        expert4Position:
          "Мушовири калони стратегия ва тағйирот",
        expert4Experience:
          "Профессори амалия ва коршиноси идоракунии стратегӣ ва лоиҳавӣ бо зиёда аз 30 соли таҷрибаи якҷояи академӣ ва соҳавӣ. Таҷрибаи ӯ бо таҳқиқоти васеъ, нашрияҳо ва роҳбарии иҷроия дар соҳаҳои стратегия, навоварӣ ва рақобатпазирии ташкилотӣ дастгирӣ мешавад.",
        expert4Description: "",

        expert5Name: "Ilkhom Tashtemirov",
        expert5Position:
          "Мутахассиси калони хариди ММФ ва лоиҳаҳои рушд",
        expert5Experience:
          "Мутахассиси калони хариди ММФ ва идоракунии лоиҳаҳо бо зиёда аз 20 соли таҷриба дар иҷрои лоиҳаҳои маблағгузоришудаи Бонки Ҷаҳонӣ ва БОР дар Осиёи Марказӣ. Дорои ду дараҷаи магистрӣ дар муҳандисӣ ва иқтисод буда, дар роҳбарӣ, машварати давлатӣ, тандурустӣ, рақамӣ ва инфрасохтори об таҷриба дорад.",
        expert5Description: "",

        expert6Name: "Mher Kelian",
        expert6Position:
          "Муҳандиси калони инфрасохтори об ва системаҳо",
        expert6Experience:
          "Муҳандиси ботаҷрибаи об ва механика бо зиёда аз 12 соли таҷриба дар иҷрои зиёда аз 300 лоиҳаи инфрасохторӣ, иншооти тозакунӣ ва интиқоли об дар Шарқи Наздик ва Африқо. Узви Орденҳои муҳандисон ва меъморон буда, дар беҳсозии равандҳо, тарҳрезии системаҳо ва иҷрои лоиҳаҳои калон муваффақияти собитшуда дорад.",
        expert6Description: "",

        networkLabel: "ШАБАКАИ МО",
        networkTitle1: "Шабакаи васеътар.",
        networkTitle2: "Дидгоҳи қавитар.",
        networkDescription:
          "Шабакаи байналмилалии мо ба мо имкон медиҳад, ки ҳангоми талаб шудани дониши махсус таҷриба ва дидгоҳҳои гуногунро муттаҳид намоем.",
        networkButton: "Бо дастаи мо ҳамкорӣ кунед",
      },

      news: {
        heroLabel: "АХБОР ВА НАВСОЗИҲО",
        heroTitle1: "Ахбор",
        heroTitle2: "ва навсозиҳо.",
        heroDescription:
          "Эълонҳои ширкат, марҳилаҳои лоиҳаҳо, маълумоти касбӣ ва навсозиҳои NHD Consultants.",

        mainLabel: "ҲАДАФҲОИ РУШДИ УСТУВОР ВА ТАЪСИРИ ИҶТИМОӢ",
        mainTitle1: "Эҷоди ҷомеаҳои устувор",
        mainTitle2: "тавассути рушди масъулона",
        mainDescription:
          "Мо устуворӣ, масъулияти иҷтимоӣ ва таъсири ченшавандаро ба лоиҳаҳои худ муттаҳид намуда, хизматрасониҳои машваратии худро бо Ҳадафҳои Рушди Устувори СММ ҳамоҳанг мекунем.",

        updateCategory: "ҲАДАФҲОИ РУШДИ УСТУВОР ВА ТАЪСИРИ ИҶТИМОӢ",
        updateTitle:
          "Эҷоди ҷомеаҳои устувор тавассути рушди масъулона",
        updateDescription:
          "Тавассути равишҳои фарогир ва масъул мо ташаббусҳоеро дастгирӣ мекунем, ки ҷомеаҳоро беҳтар, устувориро тақвият ва барои ҷомеа арзиши дарозмуддат эҷод мекунанд. Ӯҳдадории мо аз иҷрои лоиҳаҳо фаротар буда, ба тағйироти мусбат, имкониятҳои баробар ва натиҷаҳои устувор барои наслҳои оянда равона шудааст.",

        ctaLabel: "NHD CONSULTANTS",
        ctaTitle1: "Эҷоди ҷомеаҳои устувор",
        ctaTitle2: "тавассути рушди масъулона",
        ctaDescription:
          "Мо роҳҳалҳои амалӣ, устувор ва ба институтҳо муттаҳидшударо барои рушди ҷомеаҳо, инфрасохтор ва ислоҳоти сиёсати давлатӣ пешниҳод менамоем.",
        ctaButton: "Тамос бо мо",
      },

      contact: {
        heroLabel: "ТАМОС БО NHD CONSULTANTS",
        heroTitle1: "Роҳҳалҳои амалӣ ва устувор",
        heroTitle2: "барои шумо",
        heroDescription:
          "Мо роҳҳалҳои амалӣ, устувор ва ба институтҳо муттаҳидшударо барои рушди ҷомеаҳо, инфрасохтор ва ислоҳоти сиёсати давлатӣ пешниҳод менамоем.",

        getInTouchLabel: "БО МО ТАМОС ГИРЕД",
        getInTouchTitle1: "Суҳбатро",
        getInTouchTitle2: "оғоз кунед.",
        getInTouchDescription:
          "Мо муроҷиатҳои мақомоти давлатӣ, ташкилотҳои байналмилалӣ, шарикони рушд, муассисаҳо ва дигар ҷонибҳои манфиатдорро, ки роҳҳалҳои амалӣ ва устувор меҷӯянд, истиқбол мекунем.",

        organizationLabel: "Ташкилот",
        organizationName: "New Horizons of Dushanbe LLC",
        organizationBrand: "NHD Consultants",

        countryLabel: "Кишвар",
        countryName: "Ҷумҳурии Тоҷикистон",

        inquiryLabel: "Дархост",
        inquiryName: "Хизматрасониҳои рушд ва машваратӣ",

        formLabel: "ИРСОЛИ ДАРХОСТ",
        fullName: "Ному насаб",
        fullNamePlaceholder: "Ному насаби шумо",
        email: "Суроғаи почтаи электронӣ",
        emailPlaceholder: "Суроғаи почтаи электронии шумо",
        subject: "Мавзӯъ",
        subjectPlaceholder: "Чӣ гуна мо метавонем кӯмак кунем?",
        message: "Паём",
        messagePlaceholder:
          "Дар бораи лоиҳа ё дархости худ ба мо маълумот диҳед...",
        sendInquiry: "Ирсоли дархост →",
       formNote:
  "Ирсоли шакли тамос пас аз тасдиқи мундариҷа ва дизайни вебсайт пайваст карда мешавад.",

formSuccess:
  "Шакл бомуваффақият фиристода шуд! Ташаккур барои тамос гирифтан бо мо. Мо дархости шуморо баррасӣ карда, ба зудӣ бо шумо тамос мегирем.",
        ctaLabel: "NHD CONSULTANTS",
        ctaTitle1: "Роҳҳалҳои амалӣ ва устувор",
        ctaTitle2: "барои рушди масъулона",
        ctaDescription:
          "Мо роҳҳалҳои амалӣ, устувор ва ба институтҳо муттаҳидшударо барои рушди ҷомеаҳо, инфрасохтор ва ислоҳоти сиёсати давлатӣ пешниҳод менамоем.",
      },

      footer: {
        description:
          "Роҳҳалҳои касбии машваратӣ барои рушди устувор ва таъсири дарозмуддат.",
        localExpertise: "Таҷрибаи маҳаллӣ",
        socialImpact: "Таъсири иҷтимоӣ",
        sustainableSolutions: "Роҳҳалҳои устувор",
        company: "Ширкат",
        home: "Асосӣ",
        about: "Дар бораи мо",
        services: "Хизматрасониҳо",
        news: "Ахбор",
        contact: "Тамос",
        expertise: "Тахассус",
        waterSanitation: "Обтаъминкунӣ ва санитария",
        infrastructureUtilities:
          "Инфрасохтор ва хизматрасониҳои коммуналӣ",
        socialDevelopment: "Рушди иҷтимоӣ",
        digitalTransformation: "Табдили рақамӣ",
        connect: "Тамос",
        companyName: "New Horizons of Dushanbe LLC",
        country: "Тоҷикистон",
        contactNhd: "Тамос бо NHD Consultants",
        follow: "Моро пайгирӣ кунед",
        copyright:
          "© 2026 NHD Consultants. Ҳамаи ҳуқуқҳо ҳифз шудаанд.",
      },
    },
  },
};

/* =========================================================
   I18NEXT CONFIGURATION
   ========================================================= */

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
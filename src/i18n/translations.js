import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      /* =========================================================
         NAVIGATION
         ========================================================= */
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

      /* =========================================================
         HOME
         ========================================================= */
      home: {
        heroLabel: "NHD CONSULTANTS",
        heroTitle1: "Strategic Thinking.",
        heroTitle2: "Practical Results.",
        heroDescription:
          "Professional consulting solutions supporting sustainable development, stronger institutions, and lasting impact.",

        primaryButton: "Explore Our Services",
        secondaryButton: "Contact Us",

        approachLabel: "OUR APPROACH",
        approachTitle1: "Experience that",
        approachTitle2: "creates impact.",
        approachDescription:
          "NHD Consultants combines international experience, local expertise, and practical advisory support to help organizations achieve meaningful and sustainable results.",

        whyLabel: "WHY NHD",
        whyTitle1: "Professional expertise.",
        whyTitle2: "Local understanding.",
        whyDescription:
          "We bring together multidisciplinary expertise and practical knowledge to support complex development and advisory needs.",

        servicesLabel: "OUR SERVICES",
        servicesTitle1: "Solutions designed",
        servicesTitle2: "for real challenges.",
        servicesDescription:
          "Our consulting services support infrastructure, institutions, communities, and organizations working toward sustainable development.",

        teamLabel: "OUR INTERNATIONAL TEAM",
        teamTitle1: "Experts with",
        teamTitle2: "global experience.",
        teamDescription:
          "Our international team brings diverse professional backgrounds and extensive experience across development, infrastructure, institutional reform, and advisory services.",

        teamButton: "Meet Our Experts",

        ctaLabel: "NHD CONSULTANTS",
        ctaTitle1: "Let's build",
        ctaTitle2: "lasting solutions.",
        ctaDescription:
          "Connect with our team to discuss your development, infrastructure, or advisory needs.",
        ctaButton: "Start a Conversation",
      },

      /* =========================================================
         ABOUT
         ========================================================= */
      about: {
        heroLabel: "ABOUT NHD CONSULTANTS",
        heroTitle1: "Experience.",
        heroTitle2: "Perspective.",
        heroDescription:
          "New Horizons of Dushanbe LLC provides professional consulting and advisory services supporting sustainable development and institutional growth.",

        storyLabel: "OUR STORY",
        storyTitle1: "Building better",
        storyTitle2: "horizons.",
        storyDescription1:
          "NHD Consultants works with organizations and development partners to address complex challenges through practical and responsible advisory services.",
        storyDescription2:
          "Our approach combines international experience with an understanding of local realities, helping clients develop solutions that are practical, sustainable, and responsive to their needs.",

        missionLabel: "OUR MISSION",
        missionTitle1: "Practical solutions.",
        missionTitle2: "Meaningful impact.",
        missionDescription:
          "Our mission is to provide professional advisory support that strengthens institutions, communities, and development initiatives.",

        visionLabel: "OUR VISION",
        visionTitle1: "A stronger",
        visionTitle2: "future.",
        visionDescription:
          "We envision a future where informed decisions, responsible development, and effective institutions contribute to resilient and sustainable communities.",

        valuesLabel: "OUR VALUES",
        valuesTitle1: "What guides",
        valuesTitle2: "our work.",

        value1Title: "Professionalism",
        value1Description:
          "We maintain high professional standards and responsible working practices.",

        value2Title: "Integrity",
        value2Description:
          "We approach every engagement with transparency, accountability, and respect.",

        value3Title: "Local Understanding",
        value3Description:
          "We recognize the importance of local context when developing practical solutions.",

        value4Title: "Sustainability",
        value4Description:
          "We focus on solutions that create lasting value for institutions and communities.",

        ctaLabel: "WORK WITH NHD",
        ctaTitle1: "Experience meets",
        ctaTitle2: "local insight.",
        ctaDescription:
          "Our multidisciplinary perspective allows us to support clients across a range of development and advisory challenges.",
        ctaButton: "Explore Our Services",
      },

      /* =========================================================
         SERVICES
         ========================================================= */
      services: {
        heroLabel: "OUR SERVICES",
        heroTitle1: "Expertise for",
        heroTitle2: "complex challenges.",
        heroDescription:
          "NHD Consultants provides practical advisory and consulting services across key areas of development and institutional support.",

        listLabel: "OUR CORE EXPERTISE",
        listTitle1: "Practical knowledge.",
        listTitle2: "Professional solutions.",
        listDescription:
          "Our services bring together international experience, technical expertise, and local understanding to support sustainable results.",

        service1Title: "Water & Sanitation",
        service1Description:
          "Advisory support for water, sanitation, and related development initiatives.",

        service2Title: "Infrastructure & Utilities",
        service2Description:
          "Consulting support for infrastructure, utilities, and essential public services.",

        service3Title: "Social Development",
        service3Description:
          "Advisory services supporting communities, institutions, and inclusive development.",

        service4Title: "Digital Transformation",
        service4Description:
          "Practical support for digital solutions, institutional modernization, and transformation.",

        capacityLabel: "OUR CAPACITY",
        capacityTitle1: "International experience.",
        capacityTitle2: "Local perspective.",

        capacityDescription1:
          "Our team combines diverse professional backgrounds with experience working across development and advisory environments.",

        capacityDescription2:
          "We understand that successful projects require more than technical knowledge. They require clear communication, local understanding, and practical implementation.",

        capacityDescription3:
          "NHD Consultants brings these perspectives together to help clients move from strategy to meaningful results.",

        ctaLabel: "NHD CONSULTANTS",
        ctaTitle1: "Let's discuss",
        ctaTitle2: "your needs.",
        ctaDescription:
          "Contact us to explore how our expertise can support your next project or initiative.",
        ctaButton: "Contact Us",
      },

      /* =========================================================
         PROJECTS
         ========================================================= */
      projects: {
        heroLabel: "OUR PROJECTS",
        heroTitle1: "Experience in",
        heroTitle2: "action.",
        heroDescription:
          "Our project experience reflects practical engagement across development, infrastructure, institutional, and advisory initiatives.",

        portfolioLabel: "PROJECT PORTFOLIO",
        portfolioTitle1: "Selected areas of",
        portfolioTitle2: "experience.",
        portfolioDescription:
          "Our multidisciplinary experience supports projects that require technical knowledge, strategic thinking, and practical implementation.",

        project1Title: "Water & Sanitation",
        project1Description:
          "Experience supporting water, sanitation, and related infrastructure initiatives.",

        project2Title: "Infrastructure & Utilities",
        project2Description:
          "Professional experience supporting infrastructure and essential utility services.",

        project3Title: "Social Development",
        project3Description:
          "Experience contributing to social development and community-focused initiatives.",

        project4Title: "Institutional Development",
        project4Description:
          "Advisory experience supporting stronger institutions and organizational development.",

        ctaLabel: "NHD CONSULTANTS",
        ctaTitle1: "Practical experience.",
        ctaTitle2: "Sustainable results.",
        ctaDescription:
          "Explore how our professional experience can support your next initiative.",
        ctaButton: "Contact Us",
      },

      /* =========================================================
         TEAM / EXPERTS
         ========================================================= */
      team: {
        heroLabel: "OUR INTERNATIONAL TEAM",
        heroTitle1: "Experts with",
        heroTitle2: "global experience.",
        heroDescription:
          "Our international team brings extensive professional experience across development, infrastructure, institutional reform, and advisory services.",

        expertsLabel: "OUR EXPERTS",
        expertsTitle1: "International experience.",
        expertsTitle2: "Practical expertise.",
        expertsDescription:
          "Our experts bring diverse professional backgrounds and international experience to support complex development and advisory challenges.",

        expert1Position: "Senior Development & Advisory Expert",
        expert1Experience: "International Experience",
        expert1Description:
          "Experienced professional providing strategic and advisory support across development and institutional initiatives.",

        expert2Position: "Infrastructure & Development Expert",
        expert2Experience: "Technical Expertise",
        expert2Description:
          "Professional experience across infrastructure, development, and technical advisory assignments.",

        expert3Position: "Development & Advisory Specialist",
        expert3Experience: "International Experience",
        expert3Description:
          "Experienced advisor supporting development initiatives and organizations through practical professional expertise.",

        expert4Position: "Development & Institutional Expert",
        expert4Experience: "International Experience",
        expert4Description:
          "Professional experience supporting institutional development and complex advisory assignments.",

        expert5Position: "Development & Infrastructure Specialist",
        expert5Experience: "Regional Experience",
        expert5Description:
          "Experienced professional with expertise supporting development and infrastructure-related initiatives.",

        expert6Position: "International Development Expert",
        expert6Experience: "International Experience",
        expert6Description:
          "Professional experience contributing to development, advisory, and institutional initiatives.",

        networkLabel: "OUR NETWORK",
        networkTitle1: "A broader network.",
        networkTitle2: "A stronger perspective.",
        networkDescription:
          "Our international network allows us to bring together diverse expertise and perspectives when projects require specialized knowledge.",
        networkButton: "Work With Our Team",
      },

      /* =========================================================
         NEWS
         ========================================================= */
      news: {
        heroLabel: "NEWS & UPDATES",
        heroTitle1: "News &",
        heroTitle2: "Updates.",
        heroDescription:
          "Company announcements, project milestones, professional insights, and updates from NHD Consultants.",

        latestLabel: "LATEST UPDATES",
        latestTitle1: "What is happening",
        latestTitle2: "at NHD Consultants.",
        latestDescription:
          "This section will feature official company announcements, project updates, professional insights, and other relevant developments.",

        comingSoonLabel: "COMING SOON",
        comingSoonTitle: "News and updates will appear here.",
        comingSoonDescription:
          "NHD Consultants will publish company news, project milestones, professional insights, and development-related updates as they become available.",

        ctaLabel: "NHD CONSULTANTS",
        ctaTitle1: "Practical expertise.",
        ctaTitle2: "Sustainable solutions.",
        ctaButton: "Contact Us",
      },

      /* =========================================================
         CONTACT
         ========================================================= */
      contact: {
        heroLabel: "CONTACT NHD CONSULTANTS",
        heroTitle1: "Let's discuss",
        heroTitle2: "your next project.",
        heroDescription:
          "Connect with NHD Consultants to discuss development, infrastructure, public policy, institutional reform, or advisory needs.",

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
        email: "Email Address",
        subject: "Subject",
        message: "Message",
        sendInquiry: "Send Inquiry",
        formNote:
          "Contact form submission will be connected after the website content and design are approved.",

        ctaLabel: "NHD CONSULTANTS",
        ctaTitle1: "Practical expertise.",
        ctaTitle2: "Sustainable solutions.",
        ctaDescription:
          "Supporting stronger institutions, resilient communities, and sustainable development through responsible advisory services.",
        ctaButton: "Contact Us",
      },

      /* =========================================================
         FOOTER
         ========================================================= */
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

  /* ===========================================================
     RUSSIAN
     =========================================================== */
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
        heroLabel: "NHD CONSULTANTS",
        heroTitle1: "Стратегическое мышление.",
        heroTitle2: "Практические результаты.",
        heroDescription:
          "Профессиональные консультационные решения для устойчивого развития, укрепления институтов и долгосрочного результата.",

        primaryButton: "Наши услуги",
        secondaryButton: "Связаться с нами",

        approachLabel: "НАШ ПОДХОД",
        approachTitle1: "Опыт, который",
        approachTitle2: "создает результат.",
        approachDescription:
          "NHD Consultants объединяет международный опыт, местную экспертизу и практическую консультативную поддержку для достижения значимых и устойчивых результатов.",

        whyLabel: "ПОЧЕМУ NHD",
        whyTitle1: "Профессиональная экспертиза.",
        whyTitle2: "Местное понимание.",
        whyDescription:
          "Мы объединяем многопрофильную экспертизу и практические знания для решения сложных задач развития и консультирования.",

        servicesLabel: "НАШИ УСЛУГИ",
        servicesTitle1: "Решения для",
        servicesTitle2: "реальных задач.",
        servicesDescription:
          "Наши консультационные услуги поддерживают инфраструктуру, институты, сообщества и организации, работающие в сфере устойчивого развития.",

        teamLabel: "НАША МЕЖДУНАРОДНАЯ КОМАНДА",
        teamTitle1: "Эксперты с",
        teamTitle2: "международным опытом.",
        teamDescription:
          "Наша международная команда объединяет различные профессиональные направления и значительный опыт в сфере развития, инфраструктуры, институциональных реформ и консультирования.",

        teamButton: "Наши эксперты",

        ctaLabel: "NHD CONSULTANTS",
        ctaTitle1: "Создаем",
        ctaTitle2: "устойчивые решения.",
        ctaDescription:
          "Свяжитесь с нашей командой, чтобы обсудить ваши задачи в сфере развития, инфраструктуры или консультирования.",
        ctaButton: "Начать разговор",
      },

      about: {
        heroLabel: "О NHD CONSULTANTS",
        heroTitle1: "Опыт.",
        heroTitle2: "Перспектива.",
        heroDescription:
          "New Horizons of Dushanbe LLC предоставляет профессиональные консультационные услуги, поддерживающие устойчивое развитие и институциональный рост.",

        storyLabel: "НАША ИСТОРИЯ",
        storyTitle1: "Создавая лучшие",
        storyTitle2: "горизонты.",
        storyDescription1:
          "NHD Consultants работает с организациями и партнерами по развитию, помогая решать сложные задачи посредством практических и ответственных консультационных услуг.",
        storyDescription2:
          "Наш подход объединяет международный опыт с пониманием местных реалий, помогая клиентам разрабатывать практичные, устойчивые и отвечающие их потребностям решения.",

        missionLabel: "НАША МИССИЯ",
        missionTitle1: "Практические решения.",
        missionTitle2: "Значимый результат.",
        missionDescription:
          "Наша миссия — предоставлять профессиональную консультативную поддержку, укрепляющую институты, сообщества и инициативы в сфере развития.",

        visionLabel: "НАШЕ ВИДЕНИЕ",
        visionTitle1: "Более сильное",
        visionTitle2: "будущее.",
        visionDescription:
          "Мы стремимся к будущему, в котором обоснованные решения, ответственное развитие и эффективные институты способствуют устойчивости сообществ.",

        valuesLabel: "НАШИ ЦЕННОСТИ",
        valuesTitle1: "Что определяет",
        valuesTitle2: "нашу работу.",

        value1Title: "Профессионализм",
        value1Description:
          "Мы придерживаемся высоких профессиональных стандартов и ответственных принципов работы.",

        value2Title: "Честность",
        value2Description:
          "Мы подходим к каждому проекту с прозрачностью, ответственностью и уважением.",

        value3Title: "Местное понимание",
        value3Description:
          "Мы учитываем местный контекст при разработке практических решений.",

        value4Title: "Устойчивость",
        value4Description:
          "Мы ориентируемся на решения, создающие долгосрочную ценность для институтов и сообществ.",

        ctaLabel: "РАБОТА С NHD",
        ctaTitle1: "Опыт и",
        ctaTitle2: "местное понимание.",
        ctaDescription:
          "Наш многопрофильный подход позволяет поддерживать клиентов в широком спектре задач развития и консультирования.",
        ctaButton: "Наши услуги",
      },

      services: {
        heroLabel: "НАШИ УСЛУГИ",
        heroTitle1: "Экспертиза для",
        heroTitle2: "сложных задач.",
        heroDescription:
          "NHD Consultants предоставляет практические консультационные услуги в ключевых областях развития и институциональной поддержки.",

        listLabel: "НАША ОСНОВНАЯ ЭКСПЕРТИЗА",
        listTitle1: "Практические знания.",
        listTitle2: "Профессиональные решения.",
        listDescription:
          "Наши услуги объединяют международный опыт, техническую экспертизу и местное понимание для достижения устойчивых результатов.",

        service1Title: "Водоснабжение и санитария",
        service1Description:
          "Консультационная поддержка проектов в сфере водоснабжения, санитарии и соответствующего развития.",

        service2Title: "Инфраструктура и коммунальные услуги",
        service2Description:
          "Консультационная поддержка инфраструктуры, коммунальных услуг и основных общественных сервисов.",

        service3Title: "Социальное развитие",
        service3Description:
          "Консультационные услуги в поддержку сообществ, институтов и инклюзивного развития.",

        service4Title: "Цифровая трансформация",
        service4Description:
          "Практическая поддержка цифровых решений, модернизации институтов и трансформации.",

        capacityLabel: "НАШИ ВОЗМОЖНОСТИ",
        capacityTitle1: "Международный опыт.",
        capacityTitle2: "Местная перспектива.",

        capacityDescription1:
          "Наша команда объединяет различные профессиональные направления и опыт работы в сфере развития и консультирования.",

        capacityDescription2:
          "Мы понимаем, что успешные проекты требуют не только технических знаний, но и эффективной коммуникации, местного понимания и практической реализации.",

        capacityDescription3:
          "NHD Consultants объединяет эти перспективы, помогая клиентам переходить от стратегии к реальным результатам.",

        ctaLabel: "NHD CONSULTANTS",
        ctaTitle1: "Обсудим",
        ctaTitle2: "ваши задачи.",
        ctaDescription:
          "Свяжитесь с нами, чтобы обсудить, как наша экспертиза может поддержать ваш следующий проект или инициативу.",
        ctaButton: "Связаться с нами",
      },

      projects: {
        heroLabel: "НАШИ ПРОЕКТЫ",
        heroTitle1: "Опыт",
        heroTitle2: "на практике.",
        heroDescription:
          "Наш проектный опыт отражает практическую работу в сферах развития, инфраструктуры, институциональной поддержки и консультирования.",

        portfolioLabel: "ПОРТФОЛИО ПРОЕКТОВ",
        portfolioTitle1: "Выбранные направления",
        portfolioTitle2: "опыта.",
        portfolioDescription:
          "Наш многопрофильный опыт поддерживает проекты, требующие технических знаний, стратегического мышления и практической реализации.",

        project1Title: "Водоснабжение и санитария",
        project1Description:
          "Опыт поддержки проектов в сфере водоснабжения, санитарии и соответствующей инфраструктуры.",

        project2Title: "Инфраструктура и коммунальные услуги",
        project2Description:
          "Профессиональный опыт поддержки инфраструктуры и основных коммунальных услуг.",

        project3Title: "Социальное развитие",
        project3Description:
          "Опыт участия в проектах социального развития и инициативах, ориентированных на сообщества.",

        project4Title: "Институциональное развитие",
        project4Description:
          "Консультационный опыт поддержки развития институтов и организаций.",

        ctaLabel: "NHD CONSULTANTS",
        ctaTitle1: "Практический опыт.",
        ctaTitle2: "Устойчивые результаты.",
        ctaDescription:
          "Узнайте, как наш профессиональный опыт может поддержать вашу следующую инициативу.",
        ctaButton: "Связаться с нами",
      },

      team: {
        heroLabel: "НАША МЕЖДУНАРОДНАЯ КОМАНДА",
        heroTitle1: "Эксперты с",
        heroTitle2: "международным опытом.",
        heroDescription:
          "Наша международная команда обладает значительным профессиональным опытом в сфере развития, инфраструктуры, институциональных реформ и консультирования.",

        expertsLabel: "НАШИ ЭКСПЕРТЫ",
        expertsTitle1: "Международный опыт.",
        expertsTitle2: "Практическая экспертиза.",
        expertsDescription:
          "Наши эксперты обладают разнообразным профессиональным опытом и международной практикой для решения сложных задач развития и консультирования.",

        expert1Position: "Старший эксперт по развитию и консультированию",
        expert1Experience: "Международный опыт",
        expert1Description:
          "Опытный специалист, предоставляющий стратегическую и консультативную поддержку в проектах развития и институциональных инициативах.",

        expert2Position: "Эксперт по инфраструктуре и развитию",
        expert2Experience: "Техническая экспертиза",
        expert2Description:
          "Профессиональный опыт в инфраструктуре, развитии и техническом консультировании.",

        expert3Position: "Специалист по развитию и консультированию",
        expert3Experience: "Международный опыт",
        expert3Description:
          "Опытный консультант, поддерживающий инициативы развития и организации посредством практической профессиональной экспертизы.",

        expert4Position: "Эксперт по развитию и институтам",
        expert4Experience: "Международный опыт",
        expert4Description:
          "Профессиональный опыт поддержки институционального развития и сложных консультационных проектов.",

        expert5Position: "Специалист по развитию и инфраструктуре",
        expert5Experience: "Региональный опыт",
        expert5Description:
          "Опытный специалист с экспертизой в проектах развития и инфраструктуры.",

        expert6Position: "Международный эксперт по развитию",
        expert6Experience: "Международный опыт",
        expert6Description:
          "Профессиональный опыт в сфере развития, консультирования и институциональных инициатив.",

        networkLabel: "НАША СЕТЬ",
        networkTitle1: "Широкая сеть.",
        networkTitle2: "Более сильная перспектива.",
        networkDescription:
          "Наша международная сеть позволяет объединять различные знания и профессиональные перспективы, когда проектам требуется специализированная экспертиза.",
        networkButton: "Работать с нашей командой",
      },

      news: {
        heroLabel: "НОВОСТИ И ОБНОВЛЕНИЯ",
        heroTitle1: "Новости и",
        heroTitle2: "обновления.",
        heroDescription:
          "Новости компании, этапы проектов, профессиональные материалы и обновления NHD Consultants.",

        latestLabel: "ПОСЛЕДНИЕ ОБНОВЛЕНИЯ",
        latestTitle1: "Что происходит",
        latestTitle2: "в NHD Consultants.",
        latestDescription:
          "Здесь будут размещаться официальные новости компании, обновления проектов, профессиональные материалы и другие важные события.",

        comingSoonLabel: "СКОРО",
        comingSoonTitle: "Новости и обновления появятся здесь.",
        comingSoonDescription:
          "NHD Consultants будет публиковать новости компании, этапы проектов, профессиональные материалы и обновления в сфере развития по мере их появления.",

        ctaLabel: "NHD CONSULTANTS",
        ctaTitle1: "Практическая экспертиза.",
        ctaTitle2: "Устойчивые решения.",
        ctaButton: "Связаться с нами",
      },

      /* =========================================================
         CONTACT - RUSSIAN
         ========================================================= */
      contact: {
        heroLabel: "СВЯЖИТЕСЬ С NHD CONSULTANTS",
        heroTitle1: "Обсудим",
        heroTitle2: "ваш следующий проект.",
        heroDescription:
          "Свяжитесь с NHD Consultants, чтобы обсудить вопросы развития, инфраструктуры, государственной политики, институциональных реформ или консультационных услуг.",

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
        email: "Адрес электронной почты",
        subject: "Тема",
        message: "Сообщение",
        sendInquiry: "Отправить запрос",
        formNote:
          "Отправка контактной формы будет подключена после утверждения содержания и дизайна веб-сайта.",

        ctaLabel: "NHD CONSULTANTS",
        ctaTitle1: "Практический опыт.",
        ctaTitle2: "Устойчивые решения.",
        ctaDescription:
          "Поддержка сильных институтов, устойчивых сообществ и устойчивого развития посредством ответственных консультационных услуг.",
        ctaButton: "Связаться с нами",
      },

      footer: {
        description:
          "Профессиональные консультационные решения для устойчивого развития и долгосрочного результата.",

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
        infrastructureUtilities: "Инфраструктура и коммунальные услуги",
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

  /* ===========================================================
     TAJIK
     =========================================================== */
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
        heroLabel: "NHD CONSULTANTS",
        heroTitle1: "Тафаккури стратегӣ.",
        heroTitle2: "Натиҷаҳои амалӣ.",
        heroDescription:
          "Роҳҳалҳои касбии машваратӣ барои рушди устувор, таҳкими институтҳо ва натиҷаҳои дарозмуддат.",

        primaryButton: "Хизматрасониҳои мо",
        secondaryButton: "Тамос бо мо",

        approachLabel: "РӮЙКАРДИ МО",
        approachTitle1: "Таҷрибае, ки",
        approachTitle2: "таъсир эҷод мекунад.",
        approachDescription:
          "NHD Consultants таҷрибаи байналмилалӣ, донишҳои маҳаллӣ ва дастгирии амалии машваратиро барои ба даст овардани натиҷаҳои муҳим ва устувор муттаҳид мекунад.",

        whyLabel: "ЧАРО NHD",
        whyTitle1: "Таҷрибаи касбӣ.",
        whyTitle2: "Фаҳмиши маҳаллӣ.",
        whyDescription:
          "Мо таҷрибаи гуногуни касбӣ ва донишҳои амалӣ барои ҳалли масъалаҳои мураккаби рушд ва машваратиро муттаҳид мекунем.",

        servicesLabel: "ХИЗМАТРАСОНИҲОИ МО",
        servicesTitle1: "Роҳҳалҳо барои",
        servicesTitle2: "мушкилоти воқеӣ.",
        servicesDescription:
          "Хизматрасониҳои машваратии мо инфрасохтор, институтҳо, ҷомеаҳо ва ташкилотҳоеро дастгирӣ мекунанд, ки барои рушди устувор фаъолият мекунанд.",

        teamLabel: "ДАСТАИ БАЙНАЛМИЛАЛИИ МО",
        teamTitle1: "Коршиносон бо",
        teamTitle2: "таҷрибаи ҷаҳонӣ.",
        teamDescription:
          "Дастаи байналмилалии мо таҷрибаи гуногуни касбӣ дар соҳаҳои рушд, инфрасохтор, ислоҳоти институтсионалӣ ва хизматрасониҳои машваратиро муттаҳид мекунад.",

        teamButton: "Коршиносони мо",

        ctaLabel: "NHD CONSULTANTS",
        ctaTitle1: "Биёед роҳҳалҳои",
        ctaTitle2: "устувор эҷод кунем.",
        ctaDescription:
          "Барои муҳокимаи масъалаҳои рушди, инфрасохторӣ ё машваратии худ бо дастаи мо тамос гиред.",
        ctaButton: "Оғози суҳбат",
      },

      about: {
        heroLabel: "ДАР БОРАИ NHD CONSULTANTS",
        heroTitle1: "Таҷриба.",
        heroTitle2: "Дидгоҳ.",
        heroDescription:
          "New Horizons of Dushanbe LLC хизматрасониҳои касбии машваратӣ пешниҳод мекунад, ки рушди устувор ва рушди институтҳоро дастгирӣ менамоянд.",

        storyLabel: "ТАЪРИХИ МО",
        storyTitle1: "Эҷоди",
        storyTitle2: "уфуқҳои нав.",
        storyDescription1:
          "NHD Consultants бо ташкилотҳо ва шарикони рушд ҳамкорӣ намуда, ба ҳалли масъалаҳои мураккаб тавассути хизматрасониҳои амалӣ ва масъулонаи машваратӣ мусоидат мекунад.",
        storyDescription2:
          "Рӯйкарди мо таҷрибаи байналмилалиро бо дарки воқеиятҳои маҳаллӣ муттаҳид намуда, ба мизоҷон дар таҳияи роҳҳалҳои амалӣ, устувор ва мувофиқ ба ниёзҳояшон кӯмак мекунад.",

        missionLabel: "РИСОЛАТИ МО",
        missionTitle1: "Роҳҳалҳои амалӣ.",
        missionTitle2: "Таъсири назаррас.",
        missionDescription:
          "Ҳадафи мо пешниҳоди дастгирии касбии машваратӣ мебошад, ки институтҳо, ҷомеаҳо ва ташаббусҳои рушдро таҳким мебахшад.",

        visionLabel: "ДИДГОҲИ МО",
        visionTitle1: "Ояндаи",
        visionTitle2: "қавитар.",
        visionDescription:
          "Мо ба ояндае бовар дорем, ки қарорҳои асоснок, рушди масъулона ва институтҳои самаранок ба ҷомеаҳои устувор мусоидат мекунанд.",

        valuesLabel: "АРЗИШҲОИ МО",
        valuesTitle1: "Он чизе, ки",
        valuesTitle2: "кори моро роҳнамоӣ мекунад.",

        value1Title: "Касбият",
        value1Description:
          "Мо стандартҳои баланди касбӣ ва усулҳои масъулонаи кориро риоя мекунем.",

        value2Title: "Ростқавлӣ",
        value2Description:
          "Мо ба ҳар як ҳамкорӣ бо шаффофият, масъулият ва эҳтиром муносибат мекунем.",

        value3Title: "Фаҳмиши маҳаллӣ",
        value3Description:
          "Мо ҳангоми таҳияи роҳҳалҳои амалӣ аҳамияти шароити маҳаллиро ба назар мегирем.",

        value4Title: "Устуворӣ",
        value4Description:
          "Мо ба роҳҳалҳое диққат медиҳем, ки барои институтҳо ва ҷомеаҳо арзиши дарозмуддат эҷод мекунанд.",

        ctaLabel: "ҲАМКОРӢ БО NHD",
        ctaTitle1: "Таҷриба ва",
        ctaTitle2: "дониши маҳаллӣ.",
        ctaDescription:
          "Таҷрибаи гуногунсоҳаи мо ба мо имкон медиҳад, ки мизоҷонро дар доираи васеи масъалаҳои рушд ва машваратӣ дастгирӣ намоем.",
        ctaButton: "Хизматрасониҳои мо",
      },

      services: {
        heroLabel: "ХИЗМАТРАСОНИҲОИ МО",
        heroTitle1: "Таҷриба барои",
        heroTitle2: "масъалаҳои мураккаб.",
        heroDescription:
          "NHD Consultants хизматрасониҳои амалӣ ва машваратиро дар соҳаҳои асосии рушд ва дастгирии институтсионалӣ пешниҳод мекунад.",

        listLabel: "ТАХАССУСИ АСОСИИ МО",
        listTitle1: "Донишҳои амалӣ.",
        listTitle2: "Роҳҳалҳои касбӣ.",
        listDescription:
          "Хизматрасониҳои мо таҷрибаи байналмилалӣ, донишҳои техникӣ ва фаҳмиши маҳаллиро барои натиҷаҳои устувор муттаҳид мекунанд.",

        service1Title: "Обтаъминкунӣ ва санитария",
        service1Description:
          "Дастгирии машваратӣ барои лоиҳаҳои обтаъминкунӣ, санитария ва рушди марбут.",

        service2Title: "Инфрасохтор ва хизматрасониҳои коммуналӣ",
        service2Description:
          "Дастгирии машваратӣ барои инфрасохтор, хизматрасониҳои коммуналӣ ва хизматрасониҳои асосии давлатӣ.",

        service3Title: "Рушди иҷтимоӣ",
        service3Description:
          "Хизматрасониҳои машваратӣ барои дастгирии ҷомеаҳо, институтҳо ва рушди фарогир.",

        service4Title: "Табдили рақамӣ",
        service4Description:
          "Дастгирии амалӣ барои роҳҳалҳои рақамӣ, навсозии институтҳо ва табдили рақамӣ.",

        capacityLabel: "ИҚТИДОРИ МО",
        capacityTitle1: "Таҷрибаи байналмилалӣ.",
        capacityTitle2: "Дидгоҳи маҳаллӣ.",

        capacityDescription1:
          "Дастаи мо таҷрибаи гуногуни касбӣ ва таҷрибаи корӣ дар муҳити рушд ва машваратиро муттаҳид мекунад.",

        capacityDescription2:
          "Мо дарк мекунем, ки лоиҳаҳои муваффақ на танҳо донишҳои техникӣ, балки муоширати равшан, фаҳмиши маҳаллӣ ва татбиқи амалӣ талаб мекунанд.",

        capacityDescription3:
          "NHD Consultants ин дидгоҳҳоро муттаҳид намуда, ба мизоҷон барои гузаштан аз стратегия ба натиҷаҳои воқеӣ кӯмак мекунад.",

        ctaLabel: "NHD CONSULTANTS",
        ctaTitle1: "Биёед ниёзҳои",
        ctaTitle2: "шуморо муҳокима кунем.",
        ctaDescription:
          "Барои муҳокимаи он ки чӣ гуна таҷрибаи мо метавонад лоиҳа ё ташаббуси шуморо дастгирӣ кунад, бо мо тамос гиред.",
        ctaButton: "Тамос бо мо",
      },

      projects: {
        heroLabel: "ЛОИҲАҲОИ МО",
        heroTitle1: "Таҷриба",
        heroTitle2: "дар амал.",
        heroDescription:
          "Таҷрибаи лоиҳавии мо фаъолияти амалиро дар соҳаҳои рушд, инфрасохтор, институтҳо ва хизматрасониҳои машваратӣ инъикос мекунад.",

        portfolioLabel: "ПОРТФОЛИОИ ЛОИҲАҲО",
        portfolioTitle1: "Самтҳои интихобшудаи",
        portfolioTitle2: "таҷриба.",
        portfolioDescription:
          "Таҷрибаи гуногунсоҳаи мо лоиҳаҳоеро дастгирӣ мекунад, ки донишҳои техникӣ, тафаккури стратегӣ ва татбиқи амалиро талаб мекунанд.",

        project1Title: "Обтаъминкунӣ ва санитария",
        project1Description:
          "Таҷриба дар дастгирии лоиҳаҳои обтаъминкунӣ, санитария ва инфрасохтори марбут.",

        project2Title: "Инфрасохтор ва хизматрасониҳои коммуналӣ",
        project2Description:
          "Таҷрибаи касбӣ дар дастгирии инфрасохтор ва хизматрасониҳои асосии коммуналӣ.",

        project3Title: "Рушди иҷтимоӣ",
        project3Description:
          "Таҷриба дар лоиҳаҳои рушди иҷтимоӣ ва ташаббусҳои ба ҷомеа нигаронидашуда.",

        project4Title: "Рушди институтсионалӣ",
        project4Description:
          "Таҷрибаи машваратӣ дар дастгирии рушди институтҳо ва ташкилотҳо.",

        ctaLabel: "NHD CONSULTANTS",
        ctaTitle1: "Таҷрибаи амалӣ.",
        ctaTitle2: "Натиҷаҳои устувор.",
        ctaDescription:
          "Бифаҳмед, ки чӣ гуна таҷрибаи касбии мо метавонад ташаббуси навбатии шуморо дастгирӣ кунад.",
        ctaButton: "Тамос бо мо",
      },

      team: {
        heroLabel: "ДАСТАИ БАЙНАЛМИЛАЛИИ МО",
        heroTitle1: "Коршиносон бо",
        heroTitle2: "таҷрибаи ҷаҳонӣ.",
        heroDescription:
          "Дастаи байналмилалии мо таҷрибаи васеи касбӣ дар соҳаҳои рушд, инфрасохтор, ислоҳоти институтсионалӣ ва машварат дорад.",

        expertsLabel: "КОРШИНОСОНИ МО",
        expertsTitle1: "Таҷрибаи байналмилалӣ.",
        expertsTitle2: "Таҷрибаи амалӣ.",
        expertsDescription:
          "Коршиносони мо дорои таҷрибаи гуногуни касбӣ ва байналмилалӣ барои ҳалли масъалаҳои мураккаби рушд ва машваратӣ мебошанд.",

        expert1Position: "Коршиноси калони рушд ва машварат",
        expert1Experience: "Таҷрибаи байналмилалӣ",
        expert1Description:
          "Мутахассиси ботаҷриба, ки дастгирии стратегӣ ва машваратиро дар ташаббусҳои рушд ва институтсионалӣ пешниҳод мекунад.",

        expert2Position: "Коршиноси инфрасохтор ва рушд",
        expert2Experience: "Таҷрибаи техникӣ",
        expert2Description:
          "Таҷрибаи касбӣ дар соҳаҳои инфрасохтор, рушд ва машварати техникӣ.",

        expert3Position: "Мутахассиси рушд ва машварат",
        expert3Experience: "Таҷрибаи байналмилалӣ",
        expert3Description:
          "Мушовири ботаҷриба, ки ташаббусҳои рушд ва ташкилотҳоро тавассути таҷрибаи касбӣ дастгирӣ мекунад.",

        expert4Position: "Коршиноси рушд ва институтсионалӣ",
        expert4Experience: "Таҷрибаи байналмилалӣ",
        expert4Description:
          "Таҷрибаи касбӣ дар дастгирии рушди институтсионалӣ ва лоиҳаҳои мураккаби машваратӣ.",

        expert5Position: "Мутахассиси рушд ва инфрасохтор",
        expert5Experience: "Таҷрибаи минтақавӣ",
        expert5Description:
          "Мутахассиси ботаҷриба бо таҷриба дар ташаббусҳои рушд ва инфрасохтор.",

        expert6Position: "Коршиноси байналмилалии рушд",
        expert6Experience: "Таҷрибаи байналмилалӣ",
        expert6Description:
          "Таҷрибаи касбӣ дар рушди байналмилалӣ, машварат ва ташаббусҳои институтсионалӣ.",

        networkLabel: "ШАБАКАИ МО",
        networkTitle1: "Шабакаи васеъ.",
        networkTitle2: "Дидгоҳи қавитар.",
        networkDescription:
          "Шабакаи байналмилалии мо ба мо имкон медиҳад, ки ҳангоми талаб шудани дониши махсус таҷриба ва дидгоҳҳои гуногунро муттаҳид намоем.",
        networkButton: "Бо дастаи мо ҳамкорӣ кунед",
      },

      news: {
        heroLabel: "АХБОР ВА НАВСОЗИҲО",
        heroTitle1: "Ахбор ва",
        heroTitle2: "навсозиҳо.",
        heroDescription:
          "Эълонҳои ширкат, марҳилаҳои лоиҳаҳо, маълумоти касбӣ ва навсозиҳои NHD Consultants.",

        latestLabel: "НАВСОЗИҲОИ ОХИРИН",
        latestTitle1: "Дар NHD Consultants",
        latestTitle2: "чӣ рӯй медиҳад.",
        latestDescription:
          "Дар ин бахш эълонҳои расмии ширкат, навсозиҳои лоиҳаҳо, маълумоти касбӣ ва дигар таҳаввулоти муҳим нашр карда мешаванд.",

        comingSoonLabel: "БА ЗУДӢ",
        comingSoonTitle: "Ахбор ва навсозиҳо дар ин ҷо пайдо мешаванд.",
        comingSoonDescription:
          "NHD Consultants ахбори ширкат, марҳилаҳои лоиҳаҳо, маълумоти касбӣ ва навсозиҳои соҳаи рушдро ҳангоми дастрас шудан нашр мекунад.",

        ctaLabel: "NHD CONSULTANTS",
        ctaTitle1: "Таҷрибаи амалӣ.",
        ctaTitle2: "Роҳҳалҳои устувор.",
        ctaButton: "Тамос бо мо",
      },

      /* =========================================================
         CONTACT - TAJIK
         ========================================================= */
      contact: {
        heroLabel: "ТАМОС БО NHD CONSULTANTS",
        heroTitle1: "Лоиҳаи навбатии",
        heroTitle2: "худро муҳокима мекунем.",
        heroDescription:
          "Барои муҳокимаи масъалаҳои рушд, инфрасохтор, сиёсати давлатӣ, ислоҳоти институтсионалӣ ё хизматрасониҳои машваратӣ бо NHD Consultants тамос гиред.",

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
        email: "Суроғаи почтаи электронӣ",
        subject: "Мавзӯъ",
        message: "Паём",
        sendInquiry: "Ирсоли дархост",
        formNote:
          "Ирсоли шакли тамос пас аз тасдиқи мундариҷа ва дизайни вебсайт пайваст карда мешавад.",

        ctaLabel: "NHD CONSULTANTS",
        ctaTitle1: "Таҷрибаи амалӣ.",
        ctaTitle2: "Роҳҳалҳои устувор.",
        ctaDescription:
          "Дастгирии институтҳои қавӣ, ҷомеаҳои устувор ва рушди устувор тавассути хизматрасониҳои масъулонаи машваратӣ.",
        ctaButton: "Тамос бо мо",
      },

      footer: {
        description:
          "Роҳҳалҳои касбии машваратӣ барои рушди устувор ва натиҷаҳои дарозмуддат.",

        localExpertise: "Таҷрибаи маҳаллӣ",
        socialImpact: "Таъсири иҷтимоӣ",
        sustainableSolutions: "Роҳҳалҳои устувор",

        company: "Ширкат",
        home: "Асосӣ",
        about: "Дар бораи мо",
        services: "Хизматрасониҳо",
        news: "Ахбор",
        contact: "Тамос",

        expertise: "Таҷриба",
        waterSanitation: "Обтаъминкунӣ ва санитария",
        infrastructureUtilities: "Инфрасохтор ва хизматрасониҳои коммуналӣ",
        socialDevelopment: "Рушди иҷтимоӣ",
        digitalTransformation: "Табдили рақамӣ",

        connect: "Тамос",
        companyName: "New Horizons of Dushanbe LLC",
        country: "Тоҷикистон",
        contactNhd: "Тамос бо NHD Consultants",

        follow: "Моро пайгирӣ кунед",

        copyright: "© 2026 NHD Consultants. Ҳамаи ҳуқуқҳо ҳифз шудаанд.",
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
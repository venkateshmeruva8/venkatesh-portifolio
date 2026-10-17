export const projectsData = [
  {
    id: "ecommerce-analytics",
    title: "E-Commerce Data Analytics & Business Insights",
    subtitle: "End-to-End Retail Intelligence Dashboard across 51,000+ Records",
    category: "Business Intelligence & Analytics",
    period: "2026",
    technologies: ["Microsoft Excel", "MySQL", "Power BI", "DAX", "Data Modeling"],
    shortDescription:
      "Examined 51,271 records covering sales, profit, customers, products, regions, markets, and shipping. Prepared data in Excel, used MySQL queries to calculate business metrics, and developed an interactive Power BI dashboard.",
    longDescription:
      "This comprehensive retail analytics project examined 51,271 transactional records spanning multiple markets, regional territories, product categories, and shipping modes. Raw data was cleansed and normalized in Microsoft Excel before ingestion into MySQL, where structured queries extracted core business metrics, customer frequency distributions, and regional margin trends. An interactive multi-page Power BI dashboard was constructed featuring dynamic KPI cards, drill-through category profitability views, and customer segment analysis to empower data-driven operational decisions.",
    highlights: [
      "Analyzed 51,271 comprehensive transaction rows across global sales channels",
      "Calculated KPI metrics, profit margins, and return trends via MySQL relational queries",
      "Constructed an executive Power BI report with interactive cross-filtering by market and product category",
      "Evaluated shipping mode distribution and logistical delivery efficiency"
    ],
    metrics: [
      { label: "Dataset Size", value: "51,271 Records" },
      { label: "Core Dimensions", value: "Sales, Profit, Shipping, Regions" },
      { label: "Stack", value: "Excel · MySQL · Power BI" }
    ],
    images: [
      {
        url: "/projects/dashboard_page1.png",
        caption: "Power BI Executive Overview Dashboard — Sales, Profit, and Category Performance"
      },
      {
        url: "/projects/dashboard_page2.png",
        caption: "Regional Breakdown & Market-Level KPI Analysis"
      },
      {
        url: "/projects/dashboard_page3.png",
        caption: "Product Profitability & Shipping Mode Dynamics"
      }
    ],
    githubUrl: null, // User can configure real repo URL here: e.g. "https://github.com/venkateshmeruva8/ecommerce-analytics"
    demoUrl: null,
    reportPdf: null,
    featured: true
  },
  {
    id: "shopify-sales-analysis",
    title: "Shopify Sales Analysis",
    subtitle: "E-Commerce Store Transaction Exploration & Revenue Analysis",
    category: "Sales Analytics",
    period: "2026",
    technologies: ["Python", "SQL", "Power BI", "Pandas", "Data Visualization"],
    shortDescription:
      "A sales analytics project focused on exploring Shopify sales data and presenting useful business insights through data analysis and visualization.",
    longDescription:
      "Conducted exploratory data analysis and visual modeling on Shopify transactional order data. Utilized Python (Pandas) for data cleansing and feature generation, structured SQL queries for aggregated store metrics, and designed a Power BI report to track order frequency, gross merchandise trends, and customer purchase distributions across sales intervals.",
    highlights: [
      "Explored Shopify store orders, line items, and payment status distributions",
      "Cleaned messy e-commerce export headers, missing tags, and timestamp formats using Pandas",
      "Identified peak purchasing hours, average order values (AOV), and repeat buyer rates",
      "Modeled visual reporting cards in Power BI to evaluate commercial growth patterns"
    ],
    metrics: [
      { label: "Domain", value: "E-Commerce / Direct-to-Consumer" },
      { label: "Focus", value: "AOV, Order Volume, Revenue Trajectory" },
      { label: "Tools", value: "Python · SQL · Power BI" }
    ],
    images: [],
    githubUrl: null,
    demoUrl: null,
    featured: false
  },
  {
    id: "customer-behaviour-analysis",
    title: "Customer Behaviour Analysis",
    subtitle: "Segmentation & Purchasing Pattern Investigation",
    category: "Consumer Intelligence",
    period: "2026",
    technologies: ["Python", "SQL", "Power BI", "EDA", "Statistical Profiling"],
    shortDescription:
      "Analyzed customer purchasing patterns, preferences, and segments using Python and SQL, and designed Power BI reports to visualize customer trends and business performance.",
    longDescription:
      "Investigated multi-dimensional consumer transaction histories to uncover underlying behavioral trends, purchase frequencies, and product preferences. Executed data wrangling and cohort clustering workflows using Python and SQL, creating intuitive Power BI dashboards that visualize customer cohorts and retention trends.",
    highlights: [
      "Extracted behavioral indicators from customer order histories and preferences",
      "Wrote structured SQL queries to group customer frequencies and spending bands",
      "Employed Python exploratory tools to evaluate customer segment distributions",
      "Designed visual dashboards enabling drill-downs into consumer engagement trends"
    ],
    metrics: [
      { label: "Core Analysis", value: "Purchasing Cohorts & Segments" },
      { label: "Outcome", value: "Actionable Retention & Preference Insights" },
      { label: "Stack", value: "Python · SQL · Power BI" }
    ],
    images: [],
    githubUrl: null,
    demoUrl: null,
    featured: false
  },
  {
    id: "mental-health-tech-survey",
    title: "Mental Health in Tech Industry Survey Analysis",
    subtitle: "Workplace Wellness Patterns & Perception Analysis in Tech",
    category: "Survey Analytics & EDA",
    period: "2026",
    technologies: ["Python", "SQL", "Power BI", "Pandas", "Seaborn / Matplotlib"],
    shortDescription:
      "Explored survey data related to mental health in the technology industry to identify patterns and communicate insights through data analysis and visualization.",
    longDescription:
      "Conducted a thoughtful, privacy-first exploratory analysis of survey responses assessing attitudes toward mental health and workplace wellness across technology organizations. Cleaned categorical responses, examined anonymous demographic trends, and visualized willingness to discuss wellness programs and employer healthcare support without disclosing individual identities or drawing clinical conclusions.",
    highlights: [
      "Performed sensitive, aggregated EDA respecting respondent privacy and confidentiality",
      "Cleaned unstandardized survey fields including work locations, roles, and company sizes",
      "Examined employer wellness resource availability and remote work correlations",
      "Built clean, communicative Power BI and Python visual summaries for awareness and insights"
    ],
    metrics: [
      { label: "Dataset", value: "Aggregated Tech Industry Survey" },
      { label: "Guiding Principle", value: "Ethical, Privacy-Preserving EDA" },
      { label: "Tools", value: "Python · SQL · Power BI" }
    ],
    images: [],
    githubUrl: null,
    demoUrl: null,
    disclaimer: "Analytical survey exploration only. Contains no medical diagnosis, clinical assertions, or identifiable private records.",
    featured: false
  },
  {
    id: "stock-market-analysis",
    title: "Quantitative Stock Market Analysis",
    subtitle: "Historical Price Dynamics, Moving Averages & Crossover Signals via SQL",
    category: "Quantitative SQL & Financial Data",
    period: "2026",
    technologies: ["SQL", "MySQL", "Window Functions", "Time-Series Querying", "CTEs"],
    shortDescription:
      "Analyzed historical stock-price data for Bajaj Auto, TVS Motors, Eicher Motors, Hero MotoCorp, Infosys, and TCS. SQL analysis includes historical price exploration, moving averages, crossovers, signal counts, price changes, and comparisons across stocks.",
    longDescription:
      "Engineered an extensive SQL quantitative analysis script spanning six major Indian equities (Bajaj Auto, TVS Motors, Eicher Motors, Hero MotoCorp, Infosys, and TCS). Developed robust window functions to compute 20-day and 50-day simple moving averages (SMA), detected Golden Cross and Death Cross crossover signals across historical trading days, tracked signal frequencies, and calculated year-by-year price performance while handling data integrity and split traps.",
    highlights: [
      "Multi-equity analysis across 6 key stocks: Bajaj Auto, TVS, Eicher, Hero MotoCorp, Infosys, and TCS",
      "Formulated 20-day and 50-day rolling moving averages using SQL window functions (OVER PARTITION BY)",
      "Automated Golden Cross (bullish) and signal count determinations",
      "Benchmarked stock return trajectories and year-over-year price shifts across trading periods"
    ],
    metrics: [
      { label: "Equities Evaluated", value: "6 Major Stocks (Auto & IT)" },
      { label: "Key SQL Logic", value: "20 & 50-day SMAs, Window Functions, CTEs" },
      { label: "File Available", value: "stock_market_analysis.sql" }
    ],
    images: [],
    sqlFile: "/projects/stock_market_analysis.sql",
    sqlPreview: `-- Task 5 & 7: 20-day and 50-day Moving Averages and Golden Cross Detection
SELECT
    stock,
    date,
    close_price,
    AVG(close_price) OVER (
        PARTITION BY stock
        ORDER BY date
        ROWS BETWEEN 19 PRECEDING AND CURRENT ROW
    ) AS ma_20,
    AVG(close_price) OVER (
        PARTITION BY stock
        ORDER BY date
        ROWS BETWEEN 49 PRECEDING AND CURRENT ROW
    ) AS ma_50
FROM master_stock_table;`,
    disclaimer: "Analytical price trend research. Does not constitute financial advice or investment recommendations.",
    githubUrl: null,
    demoUrl: null,
    featured: true
  },
  {
    id: "nexa-ai-desktop-assistant",
    title: "NEXA — AI-Powered Desktop Assistant",
    subtitle: "Low-Latency Windows Desktop Voice Assistant with ML Intent Classification",
    category: "Applied AI & Desktop Engineering",
    period: "2026 – Present",
    technologies: [
      "Python",
      "scikit-learn",
      "TF-IDF Vectorization",
      "Logistic Regression",
      "NLP",
      "Speech Recognition",
      "Windows API"
    ],
    shortDescription:
      "Developing a Windows desktop assistant that uses machine-learning-based intent classification and voice interaction to support application launching, file management, reminders, information retrieval, and system tasks.",
    longDescription:
      "NEXA is an intelligent desktop voice assistant engineered for Microsoft Windows. Built from the ground up as a native desktop application rather than a chatbot or website, NEXA combines real-time voice interaction with an offline machine learning intent classification engine utilizing scikit-learn TF-IDF vectorization and Logistic Regression. It securely executes desktop operations including system volume adjustments, application management, hardware diagnostics, persistent reminders, and search automation.",
    highlights: [
      "Engineered an offline ML intent classification engine with TF-IDF vectorization and Logistic Regression",
      "Automates core desktop workflows: application launching, process monitoring, and system task execution",
      "Implements low-latency voice capture and natural speech recognition routines",
      "Designed with a modular architecture for hardware diagnostics, reminders, and secure command execution"
    ],
    metrics: [
      { label: "Platform", value: "Windows 10 / 11 Native Desktop" },
      { label: "ML Intent Engine", value: "scikit-learn (TF-IDF + Logistic Reg.)" },
      { label: "Core Modalities", value: "Voice Interaction & System Automation" }
    ],
    images: [],
    githubUrl: null,
    demoUrl: null,
    featured: true
  }
];

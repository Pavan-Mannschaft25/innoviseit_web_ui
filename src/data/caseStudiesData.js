export const caseStudiesData = [
  {
    id: 1,
    client: "Global Financial Institution",
    industry: "Banking & Financial Services",
    logo: "/images/cases/bank-logo.png",
    challenge:
      "Legacy SAP ECC 6.0 system requiring urgent migration to S/4HANA to support digital banking initiatives, with zero tolerance for transaction downtime during the transition.",
    solution:
      "Implemented a phased brownfield approach with system conversion methodology. Created parallel landscape for extensive regression testing, developed custom code remediation framework, and executed weekend cutover with rollback procedures.",
    results: [
      { metric: "Processing Speed", value: "40%", change: "faster" },
      { metric: "System Uptime", value: "99.9%", change: "achieved" },
      { metric: "Annual Savings", value: "$2M", change: "reduced costs" },
      { metric: "User Adoption", value: "95%", change: "in 3 months" },
    ],
    technologies: ["SAP S/4HANA", "SAP Fiori", "SAP BW/4HANA", "Azure Cloud"],
    duration: "18 months",
    teamSize: "45 consultants",
  },
  {
    id: 2,
    client: "Fortune 500 Insurance Carrier",
    industry: "Insurance",
    logo: "/images/cases/insurance-logo.png",
    challenge:
      "Multiple legacy policy administration systems across product lines creating operational inefficiencies, poor customer experience, and inability to launch new products quickly.",
    solution:
      "Led Guidewire PolicyCenter, ClaimCenter, and BillingCenter implementation with 25+ integrations. Developed data migration strategy moving 15M+ policies, built custom configuration for complex products, and enabled omnichannel distribution.",
    results: [
      { metric: "Processing Time", value: "60%", change: "reduction" },
      {
        metric: "Customer Satisfaction",
        value: "+35 NPS",
        change: "improvement",
      },
      { metric: "New Product Launch", value: "75%", change: "faster" },
      { metric: "Operational Costs", value: "30%", change: "reduction" },
    ],
    technologies: ["Guidewire Suite", "Apache Kafka", "AWS", "React"],
    duration: "24 months",
    teamSize: "65 consultants",
  },
  {
    id: 3,
    client: "Regional Healthcare System",
    industry: "Healthcare",
    logo: "/images/cases/healthcare-logo.png",
    challenge:
      "Fragmented patient data across 12 disparate EHR and ancillary systems affecting care coordination, reporting accuracy, and regulatory compliance readiness.",
    solution:
      "Designed and implemented unified healthcare data platform using interoperability standards (FHIR, HL7). Built real-time analytics dashboard, integrated medical devices via IoT, and created patient-facing mobile application.",
    results: [
      {
        metric: "Care Coordination",
        value: "Complete",
        change: "patient view",
      },
      { metric: "Admin Burden", value: "45%", change: "reduction" },
      { metric: "Reporting Accuracy", value: "99.5%", change: "achieved" },
      { metric: "Patient Engagement", value: "3x", change: "increase" },
    ],
    technologies: ["FHIR", "HL7", "Azure Healthcare APIs", "Power BI"],
    duration: "15 months",
    teamSize: "35 consultants",
  },
];

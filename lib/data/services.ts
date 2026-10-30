import { Service } from '@/types';

/**
 * ELSIM Engineering Firm — Service catalogue
 *
 * Content is written for search, answer engines and generative systems:
 * clear problem → solution framing, process steps, safety notes and FAQs.
 * Descriptions stay within capabilities evidenced by projects, partners and
 * public company positioning. No fabricated certifications or capacities.
 */
export const services: Service[] = [
  {
    slug: 'electrical-installations',
    title: 'Electrical Installations',
    shortDescription:
      'Professional electrical system design, supply, installation and commissioning for commercial, industrial and residential facilities across Ghana and West Africa.',
    description:
      'ELSIM Engineering Firm designs and installs complete electrical systems for factories, commercial buildings, institutions and residential developments. Work covers load assessment, cable and containment routes, distribution boards and switchgear, lighting and power circuits, earthing and final testing and commissioning. Teams operate to applicable Ghanaian and international electrical practice so installations are safe, maintainable and ready for handover.',
    icon: 'cable',
    features: [
      'System design and load calculations',
      'Cable installation and containment',
      'Switchgear and distribution boards',
      'Lighting and power systems',
      'Testing and commissioning',
      'As-built documentation and handover',
    ],
    process: [
      'Site assessment and survey',
      'Detailed design and drawings',
      'Material procurement',
      'Installation and quality control',
      'Testing, commissioning and handover',
    ],
    safetyNotes: [
      'Strict adherence to electrical safety standards',
      'Qualified and competent personnel only',
      'Risk assessment and method statements prior to works',
      'Lock-out / tag-out and isolation procedures',
    ],
    relatedProjects: [],
    faq: [
      {
        question: 'What types of electrical installations does ELSIM Engineering deliver?',
        answer:
          'ELSIM delivers commercial, industrial and residential electrical installations — including distribution boards, cable routes, lighting, power circuits, earthing and related containment — from design through testing and commissioning across Ghana and West Africa.',
      },
      {
        question: 'How does ELSIM approach electrical safety on installation projects?',
        answer:
          'Safety is built into every stage: competent persons only, documented risk assessments, isolation and lock-out procedures, and final testing before energisation. Stop-work authority applies when conditions are unsafe.',
      },
      {
        question: 'Can ELSIM handle both new-build and retrofit electrical work?',
        answer:
          'Yes. Teams survey existing conditions, design or adapt circuits and distribution, and coordinate installation around occupied facilities where required, then test and commission before handover.',
      },
      {
        question: 'Which regions does ELSIM serve for electrical installations?',
        answer:
          'Primary base is Accra, Ghana, with delivered project experience in Ghana, Togo, Côte d’Ivoire, Burkina Faso, Senegal and Niger. Project scope and logistics are confirmed per enquiry.',
      },
    ],
  },
  {
    slug: 'solar-power-solutions',
    title: 'Solar Power Solutions',
    shortDescription:
      'Design, supply and installation of solar photovoltaic systems for reliable renewable energy on commercial, industrial and institutional sites.',
    description:
      'ELSIM Engineering Firm designs and installs solar PV systems that reduce dependence on grid and generator power. Scope typically includes site solar assessment, system sizing, panel and inverter selection, mounting, DC/AC cabling, earthing, surge protection and, where required, battery storage and monitoring. Systems are commissioned with clear operating guidance so clients can rely on predictable renewable output.',
    icon: 'sun',
    features: [
      'Site solar assessment and irradiance review',
      'System sizing and engineering design',
      'Panel and inverter installation',
      'Battery storage options where required',
      'Monitoring and maintenance support',
      'Grid connection coordination where applicable',
    ],
    process: [
      'Energy audit and site survey',
      'System design and quotation',
      'Installation and grid connection (where applicable)',
      'Commissioning and operator training',
      'Ongoing support and maintenance options',
    ],
    safetyNotes: [
      'Working-at-height procedures for roof and elevated arrays',
      'Electrical isolation and DC safety protocols',
      'Proper earthing and surge protection',
      'Competent persons for high-voltage and inverter work',
    ],
    relatedProjects: [],
    faq: [
      {
        question: 'What solar power systems does ELSIM Engineering install?',
        answer:
          'ELSIM designs and installs commercial and industrial solar PV systems, including panels, inverters, mounting, cabling, earthing and optional battery storage, with commissioning and basic operator guidance.',
      },
      {
        question: 'Is solar suitable for factories and commercial buildings in Ghana?',
        answer:
          'Yes. Solar PV is widely used to offset daytime grid and generator load. ELSIM sizes systems against actual consumption patterns and site conditions so output matches the facility’s needs.',
      },
      {
        question: 'Does ELSIM provide solar maintenance after installation?',
        answer:
          'Maintenance and inspection options can be arranged after commissioning. Regular checks of panels, inverters, connections and monitoring help sustain performance and catch issues early.',
      },
      {
        question: 'How long does a typical commercial solar installation take?',
        answer:
          'Timelines depend on system size, roof or ground conditions, and grid connection requirements. After survey and design approval, installation and commissioning are scheduled to minimise disruption to operations.',
      },
    ],
  },
  {
    slug: 'electrical-maintenance',
    title: 'Electrical Inspection & Maintenance',
    shortDescription:
      'Preventive maintenance, inspections and fault diagnosis to keep electrical systems reliable and safe for commercial and industrial clients.',
    description:
      'ELSIM Engineering Firm provides planned and reactive electrical inspection and maintenance so distribution boards, switchgear, transformers and field circuits remain safe and available. Services include condition assessment, preventive schedules, fault finding, repairs and clear reporting so asset owners can prioritise work and reduce unplanned downtime.',
    icon: 'tool',
    features: [
      'Preventive maintenance schedules',
      'Condition assessment and reporting',
      'Fault finding and corrective repairs',
      'Infrared thermography where available',
      'Emergency response scope by agreement',
      'Documentation for compliance and planning',
    ],
    process: [
      'Initial condition assessment',
      'Maintenance plan development',
      'Scheduled visits and reporting',
      'Corrective actions as agreed',
      'Recommendations and follow-up',
    ],
    safetyNotes: [
      'Lock-out / tag-out procedures',
      'Personal protective equipment',
      'Competent persons only for live or near-live work',
      'Clear isolation and re-energisation records',
    ],
    relatedProjects: [],
    faq: [
      {
        question: 'Why is regular electrical maintenance important?',
        answer:
          'Preventive inspection and maintenance reduce the risk of failures, fires and unplanned outages. They also help keep systems compliant and extend the life of switchgear, cables and connected equipment.',
      },
      {
        question: 'What does an ELSIM electrical inspection typically cover?',
        answer:
          'Inspections focus on distribution equipment, connections, protective devices, earthing, and signs of overheating or damage. Findings are reported with prioritised recommendations for corrective work.',
      },
      {
        question: 'Can ELSIM support planned outages for industrial sites?',
        answer:
          'Yes. Maintenance can be coordinated around planned shutdown windows so critical circuits are inspected, tested and restored with minimal impact on production.',
      },
      {
        question: 'How often should commercial electrical systems be inspected?',
        answer:
          'Frequency depends on load, environment and risk. Many facilities benefit from annual or semi-annual inspections, with more frequent checks on critical or high-load circuits. ELSIM can propose a schedule after an initial assessment.',
      },
    ],
  },
  {
    slug: 'power-distribution',
    title: 'Power Distribution & Transformer Projects',
    shortDescription:
      'Power distribution networks, transformer installation and related infrastructure for industrial and commercial facilities.',
    description:
      'ELSIM Engineering Firm delivers power distribution and transformer-related projects that move energy safely from supply to point of use. Typical scope includes distribution design, transformer installation and testing, associated switchgear and cabling, load studies and commissioning. Work is planned for industrial and commercial environments where reliability and safety are essential.',
    icon: 'transformer',
    features: [
      'Distribution design and load studies',
      'Transformer installation and testing',
      'Associated switchgear and cabling',
      'Substation-related works as scoped',
      'Commissioning and handover documentation',
    ],
    process: [
      'Engineering study and requirements definition',
      'Detailed design',
      'Procurement and logistics',
      'Installation and testing',
      'Commissioning and client handover',
    ],
    safetyNotes: [
      'High-voltage and medium-voltage safety protocols',
      'Authorised and competent personnel only',
      'Proper isolation, earthing and permit-to-work systems',
      'Clear exclusion zones during energisation tests',
    ],
    relatedProjects: [],
    faq: [
      {
        question: 'What power distribution and transformer work does ELSIM perform?',
        answer:
          'ELSIM handles distribution design, transformer installation and testing, related switchgear and cabling, and commissioning for commercial and industrial facilities, with scope confirmed per project.',
      },
      {
        question: 'Does ELSIM install transformers for industrial plants?',
        answer:
          'Yes. Teams have delivered transformer and related power works for industrial sites. Exact capacity, voltage class and civil interface are defined during engineering and quotation.',
      },
      {
        question: 'How is safety managed on transformer and distribution projects?',
        answer:
          'High- and medium-voltage work uses authorised personnel, isolation and earthing procedures, permits and controlled test sequences. Safety takes priority over schedule.',
      },
      {
        question: 'Can ELSIM support projects outside Ghana?',
        answer:
          'ELSIM has delivered projects in several West African countries. Cross-border logistics, standards and local coordination are planned case by case.',
      },
    ],
  },
  {
    slug: 'electrical-consulting',
    title: 'Electrical Consulting & Audits',
    shortDescription:
      'Independent electrical consulting, system audits and technical advisory for safer, more efficient installations.',
    description:
      'ELSIM Engineering Firm provides electrical consulting and audits that help clients understand system condition, compliance gaps and improvement options. Engagements range from focused inspections and energy-efficiency reviews to broader technical advisory on design, specifications and maintenance strategy. Recommendations are practical and prioritised for the operating context.',
    icon: 'clipboard',
    features: [
      'Electrical system audits',
      'Compliance and condition reviews',
      'Energy efficiency assessments',
      'Technical specifications support',
      'Maintenance strategy advice',
    ],
    process: [
      'Briefing and scope definition',
      'Site investigation and data review',
      'Analysis and reporting',
      'Recommendations and prioritisation',
      'Optional follow-up support',
    ],
    safetyNotes: [
      'Site access and escort rules followed',
      'No energised work beyond agreed inspection methods',
      'Findings communicated clearly to responsible persons',
    ],
    relatedProjects: [],
    faq: [
      {
        question: 'When should a facility request an electrical audit?',
        answer:
          'Audits are useful after incidents, before major expansions, when downtime increases, or on a planned cycle for critical sites. They clarify condition, risk and improvement priorities.',
      },
      {
        question: 'What deliverables does an ELSIM electrical consulting engagement produce?',
        answer:
          'Typical outputs include a written report of findings, prioritised recommendations, and where relevant, outline scopes for remedial or upgrade work. Format is agreed at the start of the engagement.',
      },
      {
        question: 'Does consulting include design or only assessment?',
        answer:
          'ELSIM can support both assessment and subsequent design or specification work. Scope is defined up front so clients know whether the engagement is diagnostic, advisory or design-oriented.',
      },
      {
        question: 'Is consulting available for sites outside Accra?',
        answer:
          'Yes. Consulting and audits can be arranged for sites across Ghana and in other countries where ELSIM operates, subject to access and logistics.',
      },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}

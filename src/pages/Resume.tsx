const Resume = () => {
  return (
    <div className="bg-gray-900 py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">Phil Wilt</h1>
          <h2 className="text-2xl text-gray-400 mb-6">
            Technical Lead AI Software Engineer · Agentic Systems · AI Architecture
          </h2>

        </div>

        {/* About */}
        <section className="bg-gray-800 border border-gray-700 rounded-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-white mb-4">About</h3>
          <div className="text-gray-300 leading-relaxed space-y-4">
            <p>
              I'm a full-stack software engineer with 10+ years of experience designing scalable
              SaaS systems, including 4+ years building production AI systems. My work focuses on
              AI-enabled platforms, execution architectures, and agent-like workflows—where
              retrieval, computation, and feedback loops work together to deliver reliable,
              real-world intelligence.
            </p>
            <p>
              My background is grounded in mathematics (B.A. in Mathematics), with deep study in
              applied linear algebra, abstract algebra, numerical analysis, geometric modeling, and
              artificial intelligence. That foundation shapes how I design modern AI systems,
              particularly embeddings, vector representations, dependency graphs, and execution
              models that emphasize determinism, explainability, and operational safety.
            </p>
            <p>
              I spent six years at Aha! shipping large, customer-facing features across Rails,
              Node.js, and React. I helped launch a real-time collaborative editor and later
              extended it with OpenSearch-based semantic retrieval across product records. That work
              evolved into Aha!'s AI Assistant, where LLMs were used in production to generate
              structured content for release notes, marketing copy, and product
              documentation—grounded in structured product data rather than free-form prompts. In
              parallel, I designed a dependency-driven execution engine that safely recomputed
              derived state at scale, providing a deterministic runtime for complex, agent-like
              workflows and influencing later event-driven integrations.
            </p>
            <p>
              Before Aha!, I served as Technical Lead at Onehub for Marshal.io, a serverless
              data-loss-prevention platform built on AWS Lambda and Step Functions. There, I
              designed autonomous inference pipelines for large-scale sensitive-data detection
              across cloud storage providers—work that led to co-invention of U.S. Patent 10,726,154
              for distributed identification of personally identifiable information. Earlier in my
              career, I built HIPAA-compliant healthcare collaboration software on Google Cloud
              Platform at Samepage.
            </p>
            <p>
              I'm currently continuing postgraduate study in AI, machine learning, and generative
              AI, with a focus on building systems that earn trust in production—combining strong
              engineering fundamentals with intelligent capabilities that scale, fail safely, and
              remain inspectable over time.
            </p>
          </div>
        </section>

        {/* Experience */}
        <section className="bg-gray-800 border border-gray-700 rounded-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-white mb-6">Experience</h3>

          <div className="space-y-8">
            {/* IDEXX */}
            <div className="border-l-4 border-primary-500 pl-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h4 className="text-xl font-bold text-white">Technical Lead AI Software Engineer</h4>
                <span className="text-gray-400">Feb 2026 - Present</span>
              </div>
              <p className="text-primary-400 mb-3">IDEXX · Full-time</p>
              <div className="text-gray-300 space-y-3 leading-relaxed">
                <p>
                  Leading the design and delivery of AI-powered platform capabilities within a
                  regulated, mission-critical veterinary software ecosystem. Responsible for shaping
                  AI architecture across product lines, ensuring coherence between model-driven
                  workflows, core platform services, and customer-facing applications.
                </p>
                <p>
                  Driving end-to-end AI initiatives — from problem framing and data strategy to
                  model integration, evaluation frameworks, and production rollout. Partnering
                  cross-functionally with product, platform, data, and domain experts to embed AI
                  safely and responsibly into high-impact clinical and operational workflows.
                </p>
                <p>
                  Architecting scalable infrastructure for agentic systems, retrieval-augmented
                  workflows, and structured model orchestration, with an emphasis on correctness,
                  observability, and deterministic execution in regulated environments. Establishing
                  engineering patterns and guardrails for model evaluation, safety validation, and
                  progressive rollout across distributed teams.
                </p>
                <p>
                  Focused on building durable AI capabilities that compound over time — not just
                  features, but platform primitives that elevate the entire product surface.
                </p>
              </div>
              <p className="text-gray-500 text-sm mt-3">
                Agentic AI Development · Generative AI
              </p>
            </div>

            {/* Aha! */}
            <div className="border-l-4 border-primary-500 pl-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h4 className="text-xl font-bold text-white">Senior Software Engineer</h4>
                <span className="text-gray-400">Jul 2018 - Dec 2024 · 6 yrs 6 mos</span>
              </div>
              <p className="text-primary-400 mb-3">Aha! · Seattle, Washington</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  Launched a real-time collaborative editor and later added OpenSearch-based
                  semantic retrieval and clustering across product records; this foundation evolved
                  into Aha!'s AI Assistant, using ChatGPT to generate summaries and drafts for
                  release notes, marketing content, and descriptions of records.
                </li>
                <li>
                  Defined and delivered a dependency-driven execution engine for user-defined logic,
                  enabling safe, ordered recomputation of derived state—functioning as a
                  deterministic runtime for agent-like workflows with cycle detection, bounded
                  depth, and actionable errors.
                </li>
                <li>
                  Prototyped event-driven dependency models to observe record changes and trigger
                  targeted recomputation, influencing Aha!'s later Kafka-based integration
                  architecture for reactive, cross-system updates.
                </li>
              </ul>
              <p className="text-gray-500 text-sm mt-3">
                Ruby · Ruby on Rails · JavaScript · React.js · TypeScript · RAG · Semantic Search ·
                Reactive Programming
              </p>
            </div>

            {/* Onehub */}
            <div className="border-l-4 border-primary-500 pl-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h4 className="text-xl font-bold text-white">Software Development Engineer</h4>
                <span className="text-gray-400">Jan 2016 - Jul 2018 · 2 yrs 7 mos</span>
              </div>
              <p className="text-primary-400 mb-3">Onehub · Seattle, WA</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  Led architecture and served as Technical Lead for Marshal.io, a serverless
                  data-loss-prevention platform performing large-scale automated content analysis
                  and sensitive-data classification across cloud storage providers (iCloud, Google
                  Drive, Dropbox, S3).
                </li>
                <li>
                  Designed and built a scalable, serverless AWS execution pipeline (Lambda, Step
                  Functions, Rails API) to run parallel, inference-style workloads for PII
                  detection, emphasizing deterministic execution, safe retries, and cost-efficient
                  throughput at production scale.
                </li>
                <li>
                  Co-inventor of U.S. Patent 10,726,154, covering distributed, automated
                  identification of sensitive information across cloud environments.
                </li>
              </ul>
            </div>

            {/* Samepage Health */}
            <div className="border-l-4 border-primary-500 pl-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h4 className="text-xl font-bold text-white">Lead Software Engineer</h4>
              </div>
              <p className="text-primary-400 mb-3">Samepage Health · Seattle, WA</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  Lead full-stack developer for a SaaS healthcare platform driving patient behavior
                  change and clinic engagement.
                </li>
                <li>
                  Implemented HIPAA-compliant infrastructure on Google Cloud Platform (GCP),
                  ensuring data security and privacy in production.
                </li>
                <li>
                  Collaborated with clinical trial partners to translate medical research
                  requirements into functional product features.
                </li>
              </ul>
            </div>

            {/* Software Consultant */}
            <div className="border-l-4 border-primary-500 pl-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h4 className="text-xl font-bold text-white">Software Consultant</h4>
              </div>
              <p className="text-primary-400 mb-3">Self Employed · Greater Seattle Area · Remote</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  Delivered the core platform for Hapide, an entrepreneurship accelerator partnered
                  with the United Nations Development Programme (UNDP), supporting youth and women
                  founders across the Balkans.
                </li>
                <li>
                  Built and launched a high-traffic promotional website for a major media release by
                  a globally recognized recording artist, supporting a time-sensitive international
                  launch.
                </li>
                <li>
                  Advised a non-profit legal justice platform on technology strategy, contributing
                  to its incorporation into American Public Media.
                </li>
              </ul>
            </div>

            {/* Undisclosed */}
            <div className="border-l-4 border-primary-500 pl-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h4 className="text-xl font-bold text-white">Software Developer</h4>
              </div>
              <p className="text-primary-400 mb-3">Undisclosed · Greater Seattle Area</p>
              <p className="text-gray-300">
                Selected as the sole in-country engineer in Taipei, leading a months-long
                international partnership between U.S. and Taiwanese teams to integrate a
                geolocation advertising API; translated business and technical requirements across
                cultures, unblocked both sides, and shipped the integration into a live consumer
                app.
              </p>
            </div>

            {/* Juked */}
            <div className="border-l-4 border-primary-500 pl-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h4 className="text-xl font-bold text-white">Software Engineer</h4>
              </div>
              <p className="text-primary-400 mb-3">Juked, Inc · Contract · Seattle, Washington</p>
              <p className="text-gray-300">
                Built an MVP for an ambient audio recognition startup, validating compact
                audio-fingerprinting pipelines using Hamming-distance matching on global radio
                broadcasts, designed to pair with custom pre-GPU hardware acceleration and support
                investor evaluation.
              </p>
            </div>

            {/* Microsoft Kinect Accelerator */}
            <div className="border-l-4 border-primary-500 pl-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h4 className="text-xl font-bold text-white">Lead Software Developer</h4>
              </div>
              <p className="text-primary-400 mb-3">
                Microsoft Kinect Accelerator · Contract · Greater Seattle Area
              </p>
              <p className="text-gray-300">
                Led development of spatial computing pipelines, translating 3D spatial capture into
                voxelized representations and integrating with a custom volumetric display using
                proprietary projection hardware and 3M light-absorbing materials. And just for fun
                we used the data to 3D print figures of people.
              </p>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="bg-gray-800 border border-gray-700 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-white mb-6">Education</h3>

          <div className="space-y-6">
            <div className="border-l-4 border-primary-500 pl-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h4 className="text-xl font-bold text-white">
                  Bachelor of Arts (B.A.) in Mathematics
                </h4>
              </div>
              <p className="text-primary-400 mb-3">University of Washington</p>
              <p className="text-gray-300">
                Coursework in Applied Linear Algebra, Abstract Algebra, Artificial Intelligence, and
                Computer Graphics & Image Processing. Built strong foundations in matrix methods,
                numerical computation, probabilistic reasoning, and geometric modeling—skills that
                directly support modern machine-learning systems, vector representations, and
                AI-driven data workflows.
              </p>
            </div>

            <div className="border-l-4 border-primary-500 pl-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h4 className="text-xl font-bold text-white">
                  Certificate in AI, Machine Learning and Generative AI
                </h4>
                <span className="text-gray-400">Aug 2025 - Present</span>
              </div>
              <p className="text-primary-400 mb-3">Texas McCombs School of Business</p>
              <p className="text-gray-300">
                Coursework includes Agentic AI, Neural Networks, Machine Learning, Model Deployment,
                Generative AI Business Applications.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Resume

let casestudy_js = {
    // Encapsulated data records for case studies
    data: {
        'egift-engine': {
            title: "Enterprise POS-Linked Virtual E-Gift Card Engine",
            client: "Ongraph Technologies • NDA Compliant",
            type: "Company System Integration",
            tech: ["Laravel", "PHP", "MySQL", "AWS S3", "AWS EC2", "Docker", "Ubuntu OS", "Novatti Gateway", "REST APIs"],
            scope: "Supervised the creation of an offline POS balance tracking engine supporting independent transactional ledgers without relying on standard checkout page operations.",
            metrics: [
                {value: "< 120ms", label: "Ledger Transaction Approval Latency"},
                {value: "0.00%", label: "Balance Verification Discrepancy Margin"},
                {value: "4 Roles", label: "Hierarchical Access Authentication Matrix"}
            ],
            annotations: [
                {
                    title: "Pessimistic Shared Row Locking",
                    desc: "Prevents duplicate spend attempts or concurrent race conditions inside MySQL by locking target virtual card balances immediately during live scans on retail registers."
                },
                {
                    title: "Atomic Transaction Gateways",
                    desc: "Wraps database ledger operations in unified rollback statements. If network latency fails or checkout tasks drop out, the system resets balances instantly."
                },
                {
                    title: "Offline Validation Audits",
                    desc: "Constructs encrypted local transaction logs with hardware device fingerprints for verification when POS nodes temporarily lose cellular connections."
                }
            ],
            challenge: "The system needed to process ledger credit updates and in-store redemptions with absolute transaction security while entirely detached from public global payment processors during final validation checkouts. We had to implement zero-latency local checks on POS vendor registers.",
            architecture: `
[Mobile App] --(Buy/Redeem Requests)--> [Secure REST API Gateway]
                                                    |
                                          [Novatti Card Services]
                                                    |
[Offline POS Web Portal] <--(Pessimistic DB Locks)-- [MySQL Ledger Log]
        `
        },

        'print-demand-backend': {
            title: "High-Capacity Print-on-Demand E-Commerce Backend",
            client: "Fargtryckarn (Sweden)",
            type: "Enterprise Scale Production System",
            tech: ["Laravel", "PHP", "React", "Redux", "TypeScript", "MySQL", "AWS S3 / EC2", "REST API"],
            scope: "Architected dynamic pricing matrix equations mapping customizable material densities, margins, layout orientations, and bulk distribution algorithms.",
            metrics: [
                {value: "1999", label: "Active Business Brand Year Established"},
                {value: "4.8s -> 0.7s", label: "Dynamic Quote Lookup Time Improvements"},
                {value: "100MB+", label: "High-Res SVG / PDF Payload Upload Capacity"}
            ],
            annotations: [
                {
                    title: "Dynamic Pricing Matrix Parsing",
                    desc: "Efficiently calculates product price offsets using relational lookup matrices based on paper density, thickness, cuts, and quantity increments."
                },
                {
                    title: "Automated File Dimensions Validation",
                    desc: "Instantly reviews high-resolution poster coordinates and print boundaries on the server to prevent raw printing distortions before output."
                },
                {
                    title: "Tiered Scale Discount Matrices",
                    desc: "Evaluates complex dynamic discounts instantly for high-volume purchases, completely automating manual billing quote operations."
                }
            ],
            challenge: "Fargtryckarn required an automated backend calculator capable of instantly quoting pricing for infinite combinations of materials, paper weights, dimensions, double-sided designs, and bulk scaling, while handling high-resolution vector uploads cleanly.",
            architecture: `
[React Client Customizer] --(Layout Specs)--> [REST API Matrix Engine]
                                                     |
                                        [Sizing & Pricing Matrix Logic]
                                                     |
[Compressed S3 Asset Storage] <---(Queue Tasks)--- [MySQL Dynamic Schema]
        `
        },

        'morp-ticketing': {
            title: "Multi-Tenant Event & Ticketing Backend",
            client: "Morp (The Prom App)",
            type: "Active Commercial Portal",
            tech: ["Laravel", "PHP", "MySQL", "Stripe Gateway", "Docker Dev Engine", "Webhooks", "Ubuntu OS"],
            scope: "Designed multi-tenant structures mapping academic institutes to specific payment processor escrow environments with synchronized webhook listener queues.",
            metrics: [
                {value: "100%", label: "Ticket Delivery Guarantee Resolution"},
                {value: "0 Overbooking", label: "Concurrent Database Locks Safety"},
                {value: "Stripe Connect", label: "Multi-Tenant Payment Federation"}
            ],
            annotations: [
                {
                    title: "Stripe Cryptographic Signature Checks",
                    desc: "Enforces strong webhook authorization parameters, blocking fraudulent ticket creation or unauthorized secondary database additions."
                },
                {
                    title: "Database Queue Locking",
                    desc: "Uses strict InnoDB locks during parallel checkout spikes, stopping multiple students from securing the exact same seat concurrently."
                },
                {
                    title: "Asynchronous PDF Generation Pipelines",
                    desc: "Delegates resource-heavy rendering and ticket distribution routines to Redis worker queues, ensuring the checkout API remains incredibly fast."
                }
            ],
            challenge: "Ticketing demands spikes instantly during school batch ticket releases, causing race conditions in multi-seat purchases. We needed database safeguards to block double-sales and guarantee reliable processing of Stripe callbacks under massive parallel operations.",
            architecture: `
[User Terminal Checkout] --(Concurrent Reservation)--> [DB Row Sockets (Reserved)]
                                                              |
                                                    [Stripe Webhook Event]
                                                              |
[Receipt Delivery Queue] <-----(Confirm Transaction)---- [MySQL Transacting Table]
        `
        },

        'sync-zone': {
            title: "Multi-Timezone Meeting Coordinator Engine",
            client: "Sync Zone (Independent Open Platform)",
            type: "Personal Product",
            tech: ["HTML5", "Vanilla JS", "IndexedDB Storage", "Timezone Calculation Engines", "GitHub Pages"],
            scope: "Engineered a client-first standalone time tracking planner offering complete database capabilities with local execution profiles.",
            metrics: [
                {value: "100% Offline", label: "Operational Capability Status"},
                {value: "Zero Server", label: "Maintenance Database Overhead"},
                {value: "JSON Export", label: "Manual Database Backups Support"}
            ],
            annotations: [
                {
                    title: "IndexedDB Storage Mapping",
                    desc: "Runs database actions inside localized client spaces, avoiding structural API calls to slow third-party hosting backends."
                },
                {
                    title: "Non-Blocking IndexedDB Transactions",
                    desc: "Optimizes parallel asynchronous database writes to keep calendar shifts running perfectly at 60fps on mobile viewports."
                },
                {
                    title: "Local Schema Upgrade Paths",
                    desc: "Configures dynamic versioning loops inside browser storage arrays to update client configurations safely without losing historical inputs."
                }
            ],
            challenge: "Contractors managing distributed international clients face high tracking complexity. I created a tool running completely without central servers, securely parsing schedules, to-do tracking matrices, and database exports locally.",
            architecture: `
[User Interface] <--(Time Shift Controls)--> [Local JS Engine (Luxon/Date)]
                                                    |
                                         [IndexedDB Schema Store]
                                                    |
                                        [JSON Database Backups]
        `
        },

        'dj-all-auth': {
            title: "Plug-and-Play Django OAuth2 Federation Engine",
            client: "dj-all-auth (PyPI Open Package)",
            type: "Developer Library",
            tech: ["Python", "Django", "PyPI Package", "OAuth2 Core", "OpenID Gateways"],
            scope: "Authored and published a unified plug-and-play authentication package simplifying multiple social connection setups in clean configuration formats.",
            metrics: [
                {value: "PyPI Package", label: "Open Distribution Layout"},
                {value: "1 Settings File", label: "Unified System Setup Step"},
                {value: "9+ Providers", label: "Federated Identity Options"}
            ],
            annotations: [
                {
                    title: "Unified OpenID Integration",
                    desc: "Integrates various protocols (OAuth2 & OpenID) into a standardized Django middleware structure, protecting accounts against credential hijacking."
                },
                {
                    title: "Dynamic User Provisioning",
                    desc: "Simplifies registration flows by automatically generating secure platform profiles from validated provider payloads instantly."
                },
                {
                    title: "Custom Middleware Interceptors",
                    desc: "Cleans up native cookie and session management frameworks, aligning third-party identity claims with native security systems."
                }
            ],
            challenge: "Setting up authentication backends manually across Django projects wastes development hours. I built a reusable python package wrapping default accounts, standard OAuth2 protocols, and Steam's OpenID architecture into a single installation block.",
            architecture: `
[Django Middleware] --(Lookup Setup)--> [dj-all-auth core wrapper]
                                                 |
                                     [Provider Credentials Mapping]
                                                 |
[Authenticated App Sessions] <---(Callback)--- [Identity Servers (Google/Discord)]
        `
        },

        'freasy-pipeline': {
            title: "Hierarchical Multi-Tenant Fundraising Pipeline",
            client: "Fr-easy (NGO Network Platform)",
            type: "Corporate Restructured Operations Engine",
            tech: ["Laravel", "PHP", "MySQL", "AWS S3 / EC2", "PubNub Realtime", "Twilio API", "REST API"],
            scope: "Architected a deep-nested Role-Based Access Control (RBAC) mechanism checking visual scopes and operations authorizations across 11 system tiers.",
            metrics: [
                {value: "11 Roles", label: "Access Level Authorization Checks"},
                {value: "Real-time", label: "PubNub Dispatch Sockets Sync"},
                {value: "Multi-City", label: "Database Isolation Profiles"}
            ],
            annotations: [
                {
                    title: "Multi-Role Hierarchy Mapping",
                    desc: "Directly validates dynamic RBAC permissions on every route call, entirely shielding client records from unauthorized roles."
                },
                {
                    title: "Regional Data Isolation Locks",
                    desc: "Limits queries to regional city partitions on the server level, ensuring volunteers cannot view out-of-bounds donor records."
                },
                {
                    title: "Asynchronous WebSocket Dispatchers",
                    desc: "Pipes state modifications directly to regional supervisor screens using real-time PubNub links to avoid high database query overhead."
                }
            ],
            challenge: "This fundraising system needed to manage thousands of donor records across multiple Indian cities, ensuring managers, team leaders, super admins, city heads, and operations staff had strictly restricted, non-overlapping dataset access.",
            architecture: `
[User Request Handlers] --(RBAC Guard Middleware)--> [Hierarchy Verification Core]
                                                               |
                                                    [Authorized Query Scope]
                                                               |
[Client Notification Pushes] <---(WebSocket Broadcast)--- [MySQL Multi-Tenant isolation]
        `
        },

        'kalaty-migration': {
            title: "Legacy Enterprise Rug E-Commerce Migration",
            client: "Kalaty (Yii2 Core Re-Architecture)",
            type: "Relational Database Redesign",
            tech: ["Yii2", "PHP", "MySQL", "Legacy PHP5 Parsing", "Ubuntu Linux OS"],
            scope: "Supervised schema refactoring to resolve critical bottlenecked tables holding thousands of sizing, colors, weaves, and catalog configurations.",
            metrics: [
                {value: "80%", label: "Home Page Server Performance Improvements"},
                {value: "100%", label: "Data Integrity Retention Rating"},
                {value: "PHP 5 -> 8", label: "Safe Server Stack Modernization"}
            ],
            annotations: [
                {
                    title: "Relational Normalization Process",
                    desc: "Transforms flat, comma-separated fields from legacy databases into optimized, indexed schemas for incredibly fast category filter queries."
                },
                {
                    title: "Background Extraction Pipelines",
                    desc: "Runs data imports on background schedules, letting the main e-commerce platform stay active during migration runs."
                },
                {
                    title: "Transaction Safeguard Blocks",
                    desc: "Applies complete rollback capabilities to the migration pipeline, protecting records from data loss in the event of hardware interruptions."
                }
            ],
            challenge: "Kalaty's legacy PHP5 custom catalog had become too slow and difficult to scale due to unindexed database structures. We migrated the massive database to modern, structured Yii2 tables without taking the business offline.",
            architecture: `
[Legacy Unindexed PHP5 Site] --(Data Mapping Pipelines)--> [Normalized MySQL Structures]
                                                                     |
                                                           [Yii2 ActiveRecord Models]
                                                                     |
[Cached Render Output] <---(Fast DB Queries)------------------ [Yii2 Performance Layers]
        `
        },

        'justify-validator': {
            title: "Unified Backend Validation Form Mapper Engine",
            client: "Justiy (Active Open Repository)",
            type: "Independent Utility Library",
            tech: ["JavaScript", "npm Package Library", "Framework Agnostic Core", "jQuery Hooks"],
            scope: "Built a framework-agnostic client utility linking browser DOM submit actions directly with Django, Laravel, or Rails core validator arrays.",
            metrics: [
                {value: "Zero Dupe", label: "Double-written Validation Code Eliminated"},
                {value: "100%", label: "Asynchronous File Formats Support"},
                {value: "Lightweight", label: "Browser Build Engine footprint"}
            ],
            annotations: [
                {
                    title: "AJAX Submission Interceptors",
                    desc: "Captures submit events automatically to route form data asynchronously through backend validation systems, avoiding unnecessary page refreshes."
                },
                {
                    title: "JSON Error Schema Mapping",
                    desc: "Parses structured server-side errors on the fly, matching input fields and injecting descriptive warning labels directly beneath them."
                },
                {
                    title: "Form-Array Serialization Support",
                    desc: "Processes deeply nested fields and file inputs, formatting data accurately to align with strict backend model expectations."
                }
            ],
            challenge: "Writing separate validation rules in both frontend scripts and backend models is redundant and error-prone. I built a lightweight JS library that automatically routes form submissions through backend validators and maps returned server errors back to the correct form fields dynamically.",
            architecture: `
[Form UI Submit Capture] --(Interrupt standard submit)--> [Unified JS Payload Mapper]
                                                                   |
                                                        [Target Server Endpoints]
                                                                   |
[UI Form Validation Maps] <---(Inject Error Objects)------- [Raw Validation Response]
        `
        },

        'maritime-backend': {
            title: "Maritime Registration System Optimization Engine",
            client: "Hmikolkata • Government Approved Institute",
            type: "Course Registry Restructuring",
            tech: ["CodeIgniter", "PHP", "MySQL", "Docker", "Ubuntu OS", "CCAvenue Gateway", "REST APIs"],
            scope: "Rebuilt and secured complex registration queues to prevent race conditions during high-demand course releases.",
            metrics: [
                {value: "Zero Crash", label: "System Uptime in Peak Sales Seasons"},
                {value: "CCAvenue", label: "Checksum Validation Secure Gateways"},
                {value: "Optimized", label: "Query Execution Speed Improvements"}
            ],
            annotations: [
                {
                    title: "CCAvenue Checksum Decryption",
                    desc: "Authenticates incoming payment payloads via cryptographic keys before executing SQL database inserts, fully blocking fake transaction entries."
                },
                {
                    title: "Pessimistic DB Registration Locks",
                    desc: "Applies raw 'FOR UPDATE' database locks during enrollment spikes, completely eliminating duplicate student bookings on remaining course seats."
                },
                {
                    title: "Database Atomic Transactions",
                    desc: "Groups registration states, payment updates, and enrollment logs into unified transactions to prevent partial database failures."
                }
            ],
            challenge: "High course registration volume during course releases regularly locked up the institute's legacy database. I restructured the core database schema and added secure payment gateways with checksum verification to ensure reliable high-volume processing.",
            architecture: `
[User Course Selection] --(Queued Reservation Locks)--> [MySQL DB (Seat Allocated)]
                                                                  |
                                                       [CCAvenue Redirect Checksum]
                                                                  |
[Booking Confirmed & Email] <---(Callback Authenticated)--- [CI Callback Handler]
        `
        },

        'notify-js': {
            title: "Lightweight Client-Side Notification Engine",
            client: "@deviser/notify (npm Open Library)",
            type: "Independent Utility Library",
            tech: ["JavaScript", "npm Package Module", "Vanilla JS Architecture"],
            scope: "Engineered and published a zero-dependency JS alert engine optimized for lightning-fast page loading and cross-browser responsiveness.",
            metrics: [
                {value: "Zero Dep", label: "Internal Node Dependencies footprint"},
                {value: "< 2.5KB", label: "Minified & Gzipped Bundle Size"},
                {value: "Customizable", label: "Theme Matching Flexibility Status"}
            ],
            annotations: [
                {
                    title: "Dynamic Viewport Builders",
                    desc: "Hooks a single master rendering layout inside browser frames, saving system processing resources and preventing structural glitches."
                },
                {
                    title: "Tailwind Classes Injection Engine",
                    desc: "Translates standard alerts (success, warn, error) instantly using optimized Tailwind parameters, avoiding slow custom CSS compilations."
                },
                {
                    title: "Automated Garbage Collection Logs",
                    desc: "Sets timers to fade out and purge notification nodes, keeping browser RAM usage extremely low over extended usage."
                }
            ],
            challenge: "Heavy UI framework alert modules hurt site load performance. I designed and published a dependency-free notifications library that handles responsive warning banners, success states, and alerts at under 2.5KB.",
            architecture: `
[App Execution Event] --(Call deviser.notify)--> [Dynamic DOM Node Creator]
                                                          |
                                               [Responsive Layout Wrapper]
                                                          |
[Toast Alert Destroyed] <---(Transition Fade)----------- [Automatic Timer Dismiss]
        `
        },

        'synkn-hub': {
            title: "High-Speed Static JAMstack Agency Portal",
            client: "synkn.app (Eleventy static Portal)",
            type: "Web Optimization Case",
            tech: ["11ty", "Eleventy", "Node.js", "Tailwind CSS"],
            scope: "Engineered high-speed static generation templates with pre-rendered layouts and optimized critical rendering paths.",
            metrics: [
                {value: "100/100", label: "Lighthouse Performance Audit Rating"},
                {value: "0ms", label: "Server-side Load Times Index"},
                {value: "SEO Optimized", label: "Automated Metadata Config Status"}
            ],
            annotations: [
                {
                    title: "Eleventy Static Build Setup",
                    desc: "Compiles rich Markdown articles into ultra-fast, pre-rendered static HTML files on deploy, entirely removing runtime database latency."
                },
                {
                    title: "Dynamic Eleventy Compress Filters",
                    desc: "Applies text trimming and image asset structural modifications directly during compile phases, keeping HTML page size minimal."
                },
                {
                    title: "Tailwind Dead-Code Purging",
                    desc: "Strips away unused styling configurations during static builds to maintain an exceptionally light design footprint for lightning-fast mobile loading."
                }
            ],
            challenge: "To maximize lead conversions, I needed an ultra-fast web presence. I designed a customized JAMstack architecture using Eleventy (11ty) and Tailwind, achieving perfect 100/100 Lighthouse performance scores by compiling assets statically.",
            architecture: `
[Markdown Source Content] --(Eleventy Build Loop)--> [Optimized HTML File Output]
                                                               |
                                                     [Tailwind Purge Compilation]
                                                               |
[Lightning-Fast Load Times] <--(Global Cloudflare CDNs)-- [Static Pages Assets]
        `
        }
    },

    activeCategory: 'all',

    ready: function () {
        // Initialize dynamic router settings on load and hash change
        window.addEventListener('hashchange', casestudy_js.handleRouting);
        window.addEventListener('load', casestudy_js.handleRouting);

        // Bind interactive tech stack search trigger elements
        const searchInput = document.getElementById('techSearch');
        if (searchInput) {
            searchInput.addEventListener('keyup', casestudy_js.searchTech);
        }

        // Attach submit event listener using native addEventListener (Requested Pattern)
        document.addEventListener('submit', function (event) {
            if (event.target && event.target.id === 'contactForm') {
                casestudy_js.dofunction(event);
            }
        });

        // Trigger dynamic router check immediately on load
        casestudy_js.handleRouting();
    },

    dofunction: function (event) {
        // Handle form routing actions safely
        event.preventDefault();
        console.log("Contact form execution processed securely via casestudy_js namespace.");
    },

    handleRouting: function () {
        const hash = window.location.hash;
        const portfolioView = document.getElementById('portfolio-view');
        const caseStudyView = document.getElementById('case-study-view');
        const contentContainer = document.getElementById('case-study-content');

        if (!portfolioView || !caseStudyView) return;

        // Smooth viewport scrolling up on transitions
        window.scrollTo({top: 0, behavior: 'smooth'});

        if (hash.startsWith('#/case-studies/')) {
            const slug = hash.replace('#/case-studies/', '');
            const data = casestudy_js.data[slug];

            if (data) {
                // Swap visibility parameters
                portfolioView.classList.add('hidden');
                caseStudyView.classList.remove('hidden');

                // Map metadata tags
                const badgesHTML = data.tech.map(t =>
                    `<span class="px-2.5 py-1 bg-slate-100 dark:bg-slate-900 rounded-md text-xs font-mono text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800">${t}</span>`
                ).join('');

                // Map indicators
                const metricsHTML = data.metrics.map(m => `
                    <div class="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl text-center shadow-sm flex flex-col justify-center min-h-[90px]">
                      <span class="block text-xl sm:text-2xl font-extrabold text-indigo-600 dark:text-indigo-400 break-words">${m.value}</span>
                      <span class="block text-[10px] uppercase tracking-wider font-semibold text-slate-400 mt-1 leading-normal">${m.label}</span>
                    </div>
                `).join('');

                // Map informational safeguard logs
                const annotationsHTML = data.annotations.map((ann, idx) => `
                    <div class="p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-indigo-500/40 shadow-sm transition-all group flex gap-4">
                      <div class="flex-shrink-0 h-10 w-10 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
                        ${idx + 1}
                      </div>
                      <div>
                        <h4 class="text-base font-bold text-slate-900 dark:text-white mb-1.5 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                          ${ann.title}
                        </h4>
                        <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                          ${ann.desc}
                        </p>
                      </div>
                    </div>
                `).join('');

                // Inject final client-friendly templates into the view space (No code snippets)
                contentContainer.innerHTML = `
                    <div class="border-b border-slate-200 dark:border-slate-900 pb-8 mb-8">
                      <div class="flex flex-wrap items-center gap-2 mb-3">
                        <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                          ${data.type}
                        </span>
                        <span class="text-xs text-slate-500 dark:text-slate-400 font-medium">• ${data.client}</span>
                      </div>
                      <h1 class="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
                        ${data.title}
                      </h1>
                      <p class="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-4xl">
                        ${data.scope}
                      </p>
                      <div class="flex flex-wrap gap-2 mt-6">
                        ${badgesHTML}
                      </div>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-12">
                      ${metricsHTML}
                    </div>

                    <div class="grid gap-8 lg:grid-cols-3 mb-12">
                      <div class="lg:col-span-2 space-y-8">
                        <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm">
                          <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                            <svg class="h-5 w-5 text-indigo-600 dark:text-indigo-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                            The Architectural Challenge
                          </h3>
                          <p class="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                            ${data.challenge}
                          </p>
                        </div>

                        <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm overflow-hidden">
                          <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                            <svg class="h-5 w-5 text-indigo-600 dark:text-indigo-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                            Core Structural Pipeline Diagram
                          </h3>
                          <div class="relative group mt-2">
                            <div class="absolute right-3 top-3 text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400 pointer-events-none opacity-60 sm:hidden">Swipe to scroll ↔</div>
                            <pre class="bg-slate-950 text-emerald-400 p-4 rounded-xl text-[10px] sm:text-xs md:text-sm font-mono overflow-x-auto leading-relaxed border border-slate-900 shadow-inner select-none sm:select-text whitespace-pre">${data.architecture.trim()}</pre>
                          </div>
                        </div>
                      </div>

                      <div class="space-y-6">
                        <div class="bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-2xl p-6 shadow-md border border-slate-800">
                          <h3 class="text-lg font-bold mb-4 flex items-center gap-2">
                            <svg class="h-5 w-5 text-indigo-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Core Project Details
                          </h3>
                          <ul class="space-y-3.5 text-xs sm:text-sm text-indigo-100">
                            <li class="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-indigo-900/40 pb-2">
                              <span class="text-indigo-300 font-medium">Environment</span>
                              <span class="font-semibold text-white sm:text-right">${data.type}</span>
                            </li>
                            <li class="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-indigo-900/40 pb-2">
                              <span class="text-indigo-300 font-medium">Source</span>
                              <span class="font-semibold text-white sm:text-right break-words">${data.client}</span>
                            </li>
                            <li class="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-indigo-900/40 pb-2">
                              <span class="text-indigo-300 font-medium">Framework Engine</span>
                              <span class="font-mono text-[11px] text-white sm:text-right">${data.tech[0]}</span>
                            </li>
                          </ul>
                          <div class="mt-6 pt-4">
                            <a href="#/" class="block text-center text-xs font-bold uppercase bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl transition-colors shadow-lg shadow-indigo-900/40">
                              Consult On Similar Infrastructure
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="mb-12">
                      <h3 class="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                        <svg class="h-6 w-6 text-indigo-600 dark:text-indigo-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        System Safeguards & Security Logic
                      </h3>
                      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        ${annotationsHTML}
                      </div>
                    </div>
                `;
            } else {
                window.location.hash = '#/';
            }
        } else {
            portfolioView.classList.remove('hidden');
            caseStudyView.classList.add('hidden');
        }
    },

    filterProjects: function (category) {
        casestudy_js.activeCategory = category;

        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(btn => {
            btn.className = "filter-btn px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold shadow-sm border transition-all duration-200 bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 dark:bg-slate-950 dark:text-slate-300 dark:border-slate-800 dark:hover:bg-slate-900 dark:hover:text-white";
        });

        const activeBtn = document.getElementById(`filter-${category}`);
        if (activeBtn) {
            activeBtn.className = "filter-btn px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold shadow-md border transition-all duration-200 bg-indigo-600 text-white border-indigo-600";
        }

        casestudy_js.runCombinedFilters();
    },

    searchTech: function () {
        casestudy_js.runCombinedFilters();
    },

    runCombinedFilters: function () {
        const searchVal = document.getElementById('techSearch').value.toLowerCase().trim();
        const cards = document.querySelectorAll('.project-card');

        cards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            const cardTech = card.getAttribute('data-tech').toLowerCase();

            const matchesCategory = (casestudy_js.activeCategory === 'all' || cardCategory === casestudy_js.activeCategory);
            const matchesSearch = (searchVal === '' || cardTech.includes(searchVal));

            if (matchesCategory && matchesSearch) {
                card.classList.remove('hidden');
                card.style.opacity = '0';
                setTimeout(() => {
                    card.style.opacity = '1';
                }, 20);
            } else {
                card.classList.add('hidden');
            }
        });
    }
};

// Initialize when DOM is fully loaded (Requested Initialization Pattern)
document.addEventListener('DOMContentLoaded', casestudy_js.ready);
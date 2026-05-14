// data/portfolio.js

export const personal = {
  name: "Sumit kumar",
  title: "Cybersecurity Analyst",
  subtitle: "& Penetration Tester",
  location: "Remote / Available Globally",
  email: "sumitkrdocs@gmail.com",
  github: "https://github.com/LeftSinister-Sumit",
  linkedin: "https://www.linkedin.com/in/sumitkumar-cyber",
  tryhackme: "https://tryhackme.com/p/LeftSinister",
  resume: "/Sumit_VAPT_Resume.pdf",
  heroBio: `Hack the planet. Exploit first, ask never. just joking:)`,
  bio: `Aspiring cybersecurity professional focused on web application security, network vulnerability assessment, and hands-on penetration testing. I document every lab and assessment with clear methodology, findings, and remediation steps because structured, reproducible work is the foundation of professional security practice.`,
  bio2: `Cybersecurity learner focused on web application testing, network vulnerability assessment, and hands-on lab practice. I work methodically by understanding systems, enumerating thoroughly, testing responsibly, and documenting findings with clear remediation steps.`,
  status: "Open to opportunities",
  experience: "1+ years",
  certs: 2,
  labs: 60,
};

export const skills = [
  {
    category: "Penetration Testing",
    icon: "Target",
    items: [
      { name: "Web Application Pentesting", level: 85 },
      { name: "Network Penetration Testing", level: 78 },
      { name: "Active Directory Attacks", level: 72 },
      { name: "Privilege Escalation", level: 80 },
      { name: "Post-Exploitation", level: 74 },
    ],
  },
  {
    category: "Tools & Frameworks",
    icon: "Terminal",
    items: [
      { name: "Burp Suite Pro", level: 88 },
      { name: "Metasploit Framework", level: 76 },
      { name: "Nmap / Masscan", level: 90 },
      { name: "Gobuster / ffuf", level: 85 },
      { name: "BloodHound / SharpHound", level: 70 },
    ],
  },
  {
    category: "Vulnerability Assessment",
    icon: "Shield",
    items: [
      { name: "OWASP Top 10", level: 92 },
      { name: "CVE Analysis & Research", level: 80 },
      { name: "Nessus / OpenVAS", level: 75 },
      { name: "Manual Code Review", level: 68 },
      { name: "Threat Modeling", level: 72 },
    ],
  },
  {
    category: "Scripting & Development",
    icon: "Code",
    items: [
      { name: "Python (exploit dev / automation)", level: 78 },
      { name: "Bash Scripting", level: 82 },
      { name: "PowerShell", level: 70 },
      { name: "SQL Injection Payloads", level: 85 },
      { name: "JavaScript (XSS / DOM)", level: 74 },
    ],
  },
];

export const certifications = [
  {
    name: "Certified in Cybersecurity",
    issuer: "ISC",
    code: "Not-Defined",
    date: "May 2026",
    status: "Active",
    credential: "Not-Defined",
    description: "Foundational security certification covering CIA Triad, compliance, risk management, and incident response.",
    color: "#2dd4bf",
  },
  {
    name: "IBM Cyber Security Analyst Professional Certificate",
    issuer: "IBM",
    code: "Not-Defined",
    date: "Feb 2026",
    status: "Active",
    credential: "Not-Defined",
    description: "Core studies focus on threat detection, incident response, SIEM tools, network fundamentals, forensics, compliance, and penetration testing basics.",
    color: "#14b8a6",
  },

];

export const labProgress = [
  {
    platform: "TryHackMe",
    handle: "LeftSinister",
    rank: "Wizard",
    percentile: "Top 4%",
    rooms: 115,
    points: "12000+",
    streak: "60+",
    paths: ["Pre-Security", "CyberSecurity 101", "Jr Penetration Tester"],
    badge_url: "https://tryhackme-badges.s3.amazonaws.com/LeftSinister.png",
  },
  {
    platform: "PortSwigger",
    handle: "LeftSinister",
    rank: "Apprentice",
    points: "1000+",
    machines: "10+",
    challenges: "10",
    active: "Not-Defined",
    notable: ["Not-Defined"],
  },
];

export const caseStudies = [
  {
    id: "webshop-sqli",
    title: "SQL Injection in E-Commerce Authentication Bypass",
    type: "Web Application Pentest",
    platform: "HackTheBox",
    difficulty: "Medium",
    tags: ["SQLi", "Authentication Bypass", "Data Exfiltration", "Burp Suite"],
    summary: "Identified a critical SQL injection vulnerability in a login endpoint that allowed full authentication bypass and exfiltration of the users table including hashed passwords.",
    objective: "Assess the authentication mechanism of a simulated e-commerce platform for injection vulnerabilities and enumerate accessible data.",
    scope: ["Login endpoint (/api/auth/login)", "User registration flow", "Search functionality"],
    methodology: [
      "Reconnaissance: Fingerprinted tech stack via response headers, error messages (PHP 7.4 / MySQL 5.7)",
      "Input enumeration: Mapped all user-controlled parameters using Burp Suite's passive crawler",
      "Payload injection: Tested single-quote escape on username field; received MySQL syntax error confirming unsanitized input",
      "Authentication bypass: Used `' OR '1'='1' -- -` to bypass login check and authenticate as first DB user",
      "Data exfiltration: Leveraged UNION-based injection to enumerate 3 tables; extracted users table with 847 records",
      "Hash cracking: Identified MD5 hashing (no salt); cracked 312/847 hashes with rockyou.txt in 4 minutes",
    ],
    tools: ["Burp Suite Pro", "sqlmap (verification only)", "hashcat", "Kali Linux"],
    findings: [
      { severity: "Critical", title: "SQL Injection – Authentication Bypass (CVSS 9.8)", detail: "Login parameter unsanitized; allows full DB read access and admin takeover." },
      { severity: "Critical", title: "Unsalted MD5 Password Hashing", detail: "All 847 user passwords stored as unsalted MD5; majority crackable in minutes." },
      { severity: "Medium", title: "Verbose Error Messages", detail: "Database errors exposed in HTTP responses aiding attacker enumeration." },
    ],
    remediation: [
      "Replace string concatenation with parameterized queries / prepared statements",
      "Migrate to bcrypt (cost factor ≥12) or Argon2id for password hashing",
      "Implement generic error responses; log detailed errors server-side only",
      "Add WAF rule to detect and block common SQLi patterns",
    ],
    outcome: "Findings submitted as structured pentest report. Root cause verified fixed on retest. Machine marked as Pwned.",
  },
  {
    id: "ad-lateral",
    title: "Active Directory Lateral Movement via Kerberoasting",
    type: "Internal Network Pentest",
    platform: "PNPT Exam Network",
    difficulty: "Hard",
    tags: ["Kerberoasting", "Active Directory", "Lateral Movement", "Pass-the-Hash"],
    summary: "Starting from a single unprivileged domain user, achieved Domain Admin in a 5-machine internal network lab through Kerberoasting, credential reuse, and a misconfgured service account.",
    objective: "Simulate an insider threat scenario: assess lateral movement potential from a low-privilege domain account in a small corporate AD environment.",
    scope: ["Active Directory domain: CORP.LOCAL", "5 Windows hosts (2008R2, 2016, 2019)", "File share, SQL server, DC"],
    methodology: [
      "Enumeration: BloodHound ingestor run as low-priv user; identified shortest path to DA",
      "Kerberoasting: Requested TGS tickets for 3 SPNs; extracted tickets with Rubeus",
      "Offline cracking: Cracked svc_backup account hash with hashcat + rockyou in 22 minutes",
      "Privilege mapping: svc_backup had SeBackupPrivilege — used to dump NTDS.dit",
      "Hash extraction: Parsed NTDS.dit offline with secretsdump; obtained all domain hashes",
      "Pass-the-Hash: Used Administrator NTLM hash to authenticate to all 5 hosts via PtH",
    ],
    tools: ["BloodHound", "Rubeus", "hashcat", "Impacket (secretsdump, psexec)", "CrackMapExec"],
    findings: [
      { severity: "Critical", title: "Weak SPN Account Password", detail: "svc_backup used dictionary-crackable password; enabled escalation chain." },
      { severity: "Critical", title: "Excessive Service Account Privileges", detail: "svc_backup granted SeBackupPrivilege allowing NTDS.dit extraction." },
      { severity: "High", title: "Password Reuse – Shared Admin Hash", detail: "Local Administrator hash identical across all 5 hosts enabling full lateral movement." },
      { severity: "Medium", title: "No Kerberoasting Alerting", detail: "No SIEM alert configured for unusual TGS request patterns." },
    ],
    remediation: [
      "Enforce 25+ character random passwords for all service accounts; use MSA/gMSA where possible",
      "Audit SeBackupPrivilege assignment; remove from non-backup accounts",
      "Deploy LAPS to randomize local Administrator passwords per host",
      "Create SIEM alerting for abnormal Kerberos TGS requests (EventID 4769)",
      "Run BloodHound quarterly to identify new DA attack paths",
    ],
    outcome: "Full pentest report with executive summary and technical findings delivered. All 5 findings remediated; retest confirmed. PNPT certification awarded.",
  },
  {
    id: "xss-bugbounty",
    title: "Stored XSS in Profile Bio — Bug Bounty Report",
    type: "Bug Bounty (Private Program)",
    platform: "HackerOne (Private)",
    difficulty: "Medium",
    tags: ["XSS", "Stored", "CSRF", "Session Hijacking"],
    summary: "Discovered a stored XSS vulnerability in a SaaS platform's user profile bio field. The payload persisted and executed in the context of administrators viewing user profiles.",
    objective: "Identify input validation weaknesses in a private SaaS bug bounty program focused on web application security.",
    scope: ["In-scope: *.saasplatform.com (sanitized)", "All authenticated endpoints", "Excluded: logout CSRF"],
    methodology: [
      "Mapping: Logged all output reflection points across the app using Burp Suite's passive scan",
      "Payload testing: Submitted `<script>alert(1)</script>` in bio field — stripped by frontend but stored raw",
      "Filter bypass: Identified that the server stripped <script> tags but not event handlers; used `<img src=x onerror=alert(document.cookie)>`",
      "Escalation: Crafted payload to beacon session cookie to Burp Collaborator when admin views the profile",
      "PoC: Created second account; triggered payload from admin test account; confirmed cookie exfiltration",
      "Impact chain: Admin session → account takeover → access to all user PII and payment metadata",
    ],
    tools: ["Burp Suite Pro", "Burp Collaborator", "Firefox DevTools", "Python (beacon server)"],
    findings: [
      { severity: "High", title: "Stored XSS – Profile Bio (CVSS 8.1)", detail: "Payload persists and executes in admin context, enabling session hijacking." },
      { severity: "Medium", title: "Insufficient Output Encoding", detail: "Bio field HTML-encoded on display but raw data stored and served in admin panel without encoding." },
      { severity: "Low", title: "Missing Content-Security-Policy Header", detail: "No CSP in place; would significantly limit XSS exploitability if implemented." },
    ],
    remediation: [
      "Implement server-side HTML sanitization using a vetted library (DOMPurify on output, not just input)",
      "Apply context-aware output encoding for all user-controlled data in HTML contexts",
      "Deploy Content-Security-Policy header with strict-dynamic and nonce-based scripts",
      "Add X-Content-Type-Options: nosniff and review all admin-facing data displays",
    ],
    outcome: "Report accepted as High severity. Bounty awarded: $750. Fix deployed within 14 days. Retest confirmed remediation.",
  },
];

export const timeline = [
  {
    year: "2025",
    title: "Started Security Journey",
    detail: "Completed IBM Cybersecurity Analyst Professional Certificate; began TryHackMe Pre-Security path. Transitioned from IT helpdesk.",
  },
  {
    year: "2026",
    title: "Starting VAPT and Web Penetration Testing",
    detail: "Completed junior pentesting core fundamentals, and basic web pentesting concepts.",
  },
  {
    year: "Current",
    title: "Taking hands on experience in VAPT and Web Penetration Testing",
    detail: "Working on various pentest projects to gain practical exposure to different environments.",
  },

];

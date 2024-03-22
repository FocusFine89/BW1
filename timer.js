let questions = [];
const questionEasy = [
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question: "How many kilobytes in one gigabyte (in decimal)?",
    correct_answer: "1000000",
    incorrect_answers: ["1024", "1000", "1048576"],
  },
  {
    type: "boolean",
    difficulty: "easy",
    category: "Science: Computers",
    question:
      "The programming language 'Python' is based off a modified version of 'JavaScript'",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question: "What amount of bits commonly equals one byte?",
    correct_answer: "8",
    incorrect_answers: ["1", "2", "64"],
  },
  {
    type: "boolean",
    difficulty: "easy",
    category: "Science: Computers",
    question: "Linus Torvalds created Linux and Git.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    type: "boolean",
    difficulty: "easy",
    category: "Science: Computers",
    question: "Ada Lovelace is often considered the first computer programmer.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question:
      "In any programming language, what is the most common way to iterate through an array?",
    correct_answer: "loops",
    incorrect_answers: ["Statements", "Do-while loops", "loops"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question: "What is the domain name for the country Tuvalu?",
    correct_answer: ".tv",
    incorrect_answers: [".tu", ".tt", ".tl"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question:
      "If you were to code software in this language you only be able to type and 1.",
    correct_answer: "Binary",
    incorrect_answers: ["JavaScript", "C++", "Python"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question:
      "Which computer language would you associate Django framework with?",
    correct_answer: "Python",
    incorrect_answers: ["C#", "C++", "Java"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question: "What does the Prt Sc button do?",
    correct_answer:
      "Captures what's on the screen and copies it to your clipboard",
    incorrect_answers: [
      "Nothing",
      "Saves a .png file of what&#039;s on the screen in your screenshots folder in photos",
      "Closes all windows",
    ],
  },
  {
    type: "boolean",
    difficulty: "easy",
    category: "Science: Computers",
    question: "The Windows 7 operating system has six main editions.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question:
      "When Gmail first launched, how much storage did it provide for your email?",
    correct_answer: "1GB",
    incorrect_answers: ["512MB", "5GB", "Unlimited"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question: "What does GHz stand for?",
    correct_answer: "Gigahertz",
    incorrect_answers: ["Gigahotz", "Gigahetz", "Gigahatz"],
  },
  {
    type: "boolean",
    difficulty: "easy",
    category: "Science: Computers",
    question: "RAM stands for Random Access Memory.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question: "What language does Node.js use?",
    correct_answer: "JavaScript",
    incorrect_answers: ["Java", "Java Source", "Joomla Source Code"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question:
      "According to the International System of Units, how many bytes are in a kilobyte of RAM?",
    correct_answer: "1000",
    incorrect_answers: ["512", "1024", "500"],
  },
  {
    type: "boolean",
    difficulty: "easy",
    category: "Science: Computers",
    question:
      "The NVidia GTX 1080 gets its name because it can only render at a 1920x1080 screen resolution.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question: "This mobile OS held the largest market share in 2012.",
    correct_answer: "iOS",
    incorrect_answers: ["Android", "BlackBerry", "Symbian"],
  },
  {
    type: "boolean",
    difficulty: "easy",
    category: "Science: Computers",
    question:
      "In most programming languages, the operator ++ is equivalent to the statement '+='.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    type: "boolean",
    difficulty: "easy",
    category: "Science: Computers",
    question: "The Windows ME operating system was released in the year 2000.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question: "In computing, what does LAN stand for?",
    correct_answer: "Local Area Network",
    incorrect_answers: [
      "Long Antenna Node",
      "Light Access Node",
      "Land Address Navigation",
    ],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question: "What does the 'MP' stand for in MP3?",
    correct_answer: "Moving Picture",
    incorrect_answers: ["Music Player", "Multi Pass", "Micro Point"],
  },
  {
    type: "boolean",
    difficulty: "easy",
    category: "Science: Computers",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question:
      "The numbering system with a radix of 16 is more commonly referred to as ",
    correct_answer: "Hexidecimal",
    incorrect_answers: ["Binary", "Duodecimal", "Octal"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question: "What does LTS stand for in the software market?",
    correct_answer: "Long Term Support",
    incorrect_answers: [
      "Long Taco Service",
      "Ludicrous Transfer Speed",
      "Ludicrous Turbo Speed",
    ],
  },
  {
    type: "boolean",
    difficulty: "easy",
    category: "Science: Computers",
    question:
      "The Python programming language gets its name from the British comedy group 'Monty Python'.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question:
      "The programming language 'Swift' was created to replace what other programming language?",
    correct_answer: "Objective-C",
    incorrect_answers: ["C#", "Ruby", "C++"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question: "In computing, what does MIDI stand for?",
    correct_answer: "Musical Instrument Digital Interface",
    incorrect_answers: [
      "Musical Interface of Digital Instruments",
      "Modular Interface of Digital Instruments",
      "Musical Instrument Data Interface",
    ],
  },
];

const questionMedium = [
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "In computing terms, typically what does CLI stand for?",
    correct_answer: "Command Line Interface",
    incorrect_answers: [
      "Common Language Input",
      "Control Line Interface",
      "Common Language Interface",
    ],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question:
      "The teapot often seen in many 3D modeling applications is called what?",
    correct_answer: "Utah Teapot",
    incorrect_answers: ["Pixar Teapot", "3D Teapot", "Tennessee Teapot"],
  },
  {
    type: "boolean",
    difficulty: "medium",
    category: "Science: Computers",
    question:
      "All program codes have to be compiled into an executable file in order to be run. This file can then be executed on any machine.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "How fast is USB 3.1 Gen 2 theoretically?",
    correct_answer: "10 Gb/s",
    incorrect_answers: ["5 Gb/s", "8 Gb/s", "1 Gb/s"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "On which computer hardware device is the BIOS chip located?",
    correct_answer: "Motherboard",
    incorrect_answers: [
      "Hard Disk Drive",
      "Central Processing Unit",
      "Graphics Processing Unit",
    ],
  },
  {
    type: "boolean",
    difficulty: "medium",
    category: "Science: Computers",
    question: "The HTML5 standard was published in 2014.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question:
      "In programming, what do you call functions with the same name but different implementations?",
    correct_answer: "Overloading",
    incorrect_answers: ["Overriding", "Abstracting", "Inheriting"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: ".at is the top-level domain for what country?",
    correct_answer: "Austria",
    incorrect_answers: ["Argentina", "Australia", "Angola"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "Which of these programming languages is a low-level language?",
    correct_answer: "Assembly",
    incorrect_answers: ["Python", "C#", "Pascal"],
  },
  {
    type: "boolean",
    difficulty: "medium",
    category: "Science: Computers",
    question: "AMD created the first consumer 64-bit processor.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "Whistler was the codename of this Microsoft Operating System.",
    correct_answer: "Windows XP",
    incorrect_answers: ["Windows 2000", "Windows 7", "Windows 95"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "Generally, which component of a computer draws the most power?",
    correct_answer: "Video Card",
    incorrect_answers: ["Hard Drive", "Processor", "Power Supply"],
  },
  {
    type: "boolean",
    difficulty: "medium",
    category: "Science: Computers",
    question: "FLAC stands for &quot;Free Lossless Audio Condenser&quot;&#039;",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "What does 'LCD' stand for?",
    correct_answer: "Liquid Crystal Display",
    incorrect_answers: [
      "Language Control Design",
      "Last Common Difference",
      "Long Continuous Design",
    ],
  },
  {
    type: "boolean",
    difficulty: "medium",
    category: "Science: Computers",
    question: "MacOS is based on Linux.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question:
      "Moore&#039;s law originally stated that the number of transistors on a microprocessor chip would double every...",
    correct_answer: "Year",
    incorrect_answers: ["Four Years", "Two Years", "Eight Years"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question:
      "Which of the following languages is used as a scripting language in the Unity 3D game engine?",
    correct_answer: "C#",
    incorrect_answers: ["Java", "C++", "Objective-C"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "How many cores does the Intel i7-6950X have?",
    correct_answer: "10",
    incorrect_answers: ["12", "8", "4"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "In the server hosting industry IaaS stands for...",
    correct_answer: "Infrastructure as a Service",
    incorrect_answers: [
      "Internet as a Service",
      "Internet and a Server",
      "Infrastructure as a Server",
    ],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "Which operating system was released first?",
    correct_answer: "Mac OS",
    incorrect_answers: ["Windows", "Linux", "OS/2"],
  },
  {
    type: "boolean",
    difficulty: "medium",
    category: "Science: Computers",
    question: "The first computer bug was formed by faulty wires.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    type: "boolean",
    difficulty: "medium",
    category: "Science: Computers",
    question:
      "The common software-programming acronym 'I18N' comes from the term 'Interlocalization'.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    type: "boolean",
    difficulty: "medium",
    category: "Science: Computers",
    question:
      "The very first recorded computer &quot;bug&quot; was a moth found inside a Harvard Mark II computer.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    type: "boolean",
    difficulty: "medium",
    category: "Science: Computers",
    question:
      "It&#039;s not possible to format a write-protected DVD-R Hard Disk.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "What does the acronym CDN stand for in terms of networking?",
    correct_answer: "Content Delivery Network",
    incorrect_answers: [
      "Content Distribution Network",
      "Computational Data Network",
      "Compressed Data Network",
    ],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question:
      "Which of these is the name for the failed key escrow device introduced by the National Security Agency in 1993?",
    correct_answer: "Clipper Chip",
    incorrect_answers: ["Enigma Machine", "Skipjack", "Nautilus"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "How many bytes are in a single Kibibyte?",
    correct_answer: "1024",
    incorrect_answers: ["2400", "1000", "1240"],
  },
  {
    type: "boolean",
    difficulty: "medium",
    category: "Science: Computers",
    question: "'Windows NT' is a monolithic kernel.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question:
      "What is the name of the default theme that is installed with Windows XP?",
    correct_answer: "Luna",
    incorrect_answers: ["Neptune", "Whistler", "Bliss"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "Nvidia's headquarters are based in which Silicon Valley city?",
    correct_answer: "Santa Clara",
    incorrect_answers: ["Palo Alto", "Cupertino", "Mountain View"],
  },
];
const questionHard = [
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "What is the name given to layer 4 of the Open Systems Interconnection (ISO) model?",
    correct_answer: "Transport",
    incorrect_answers: ["Session", "Data link", "Network"],
  },
  {
    type: "boolean",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "The IBM PC used an Intel 8008 microprocessor clocked at 4.77 MHz and 8 kilobytes of memory.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "Who is the original author of the realtime physics engine called PhysX?",
    correct_answer: "NovodeX",
    incorrect_answers: ["Ageia", "Nvidia", "AMD"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "America Online (AOL) started out as which of these online service providers?",
    correct_answer: "Quantum Link",
    incorrect_answers: ["CompuServe", "Prodigy", "GEnie"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "What port does HTTP run on?",
    correct_answer: "80",
    incorrect_answers: ["53", "443", "23"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "Which RAID array type is associated with data mirroring?",
    correct_answer: "RAID 1",
    incorrect_answers: ["RAID 0", "RAID 10", "RAID 5"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "What was the name of the security vulnerability found in Bash in 2014?",
    correct_answer: "Shellshock",
    incorrect_answers: ["Heartbleed", "Bashbug", "Stagefright"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "What does the International System of Quantities refer 1024 bytes as?",
    correct_answer: "Kibibyte",
    incorrect_answers: ["Kylobyte", "Kilobyte", "Kelobyte"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "What was the first company to use the term 'Golden Master'?",
    correct_answer: "Apple",
    incorrect_answers: ["IBM", "Microsoft", "Google"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "What was the name of the first Bulgarian personal computer?",
    correct_answer: "IMKO-1",
    incorrect_answers: ["Pravetz 82", "Pravetz 8D", "IZOT 1030"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "Which of the following computer components can be built using only NAND gates?",
    correct_answer: "ALU",
    incorrect_answers: ["CPU", "RAM", "Register"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "What vulnerability ranked #1 on the OWASP Top 10 in 2013?",
    correct_answer: "Injection ",
    incorrect_answers: [
      "Broken Authentication",
      "Cross-Site Scripting",
      "Insecure Direct Object References",
    ],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "Which of these Cherry MX mechanical keyboard switches is both tactile and clicky?",
    correct_answer: "Cherry MX Blue",
    incorrect_answers: ["Cherry MX Black", "Cherry MX Red", "Cherry MX Brown"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "Which data structure does FILO apply to?",
    correct_answer: "Stack",
    incorrect_answers: ["Queue", "Heap", "Tree"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "What internet protocol was documented in RFC 1459?",
    correct_answer: "IRC",
    incorrect_answers: ["HTTP", "HTTPS", "FTP"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "What major programming language does Unreal Engine 4 use?",
    correct_answer: "C++",
    incorrect_answers: ["Assembly", "C#", "ECMAScript"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "Released in 2001, the first edition of Apple&#039;s Mac OS X operating system (version 10.0) was given what animal code name?",
    correct_answer: "Cheetah",
    incorrect_answers: ["Puma", "Tiger", "Leopard"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "According to DeMorgan's Theorem, the Boolean expression (AB)' is equivalent to:",
    correct_answer: "A' + B' ",
    incorrect_answers: ["A'B + B'A", "A'B;", "AB' + AB"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "Who is the founder of Palantir?",
    correct_answer: "Peter Thiel",
    incorrect_answers: ["Mark Zuckerberg", "Marc Benioff", "Jack Dorsey"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "Which kind of algorithm is Ron Rivest not famous for creating?",
    correct_answer: "Secret sharing scheme",
    incorrect_answers: [
      "Hashing algorithm",
      "Asymmetric encryption",
      "Stream cipher",
    ],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "Which of these names was an actual codename for a cancelled Microsoft project?",
    correct_answer: "Neptune",
    incorrect_answers: ["Enceladus", "Pollux", "Saturn"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "The internet domain .fm is the country-code top-level domain for which Pacific Ocean island nation?",
    correct_answer: "Micronesia",
    incorrect_answers: ["Fiji", "Tuvalu", "Marshall Islands"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "Which of these was the name of a bug found in April 2014 in the publicly available OpenSSL cryptography library?",
    correct_answer: "Heartbleed",
    incorrect_answers: ["Shellshock", "Corrupted Blood", "Shellscript"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "What is the name of the process that sends one qubit of information using two bits of classical information?",
    correct_answer: "Quantum Teleportation",
    incorrect_answers: [
      "Super Dense Coding",
      "Quantum Entanglement",
      "Quantum Programming",
    ],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "Who invented the &quot;Spanning Tree Protocol&quot;?",
    correct_answer: "Radia Perlman",
    incorrect_answers: ["Paul Vixie", "Vint Cerf", "Michael Roberts"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "Which of these is not a layer in the OSI model for data communications?",
    correct_answer: "Connection Layer",
    incorrect_answers: [
      "Application Layer",
      "Transport Layer",
      "Physical Layer",
    ],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "What type of sound chip does the Super Nintendo Entertainment System (SNES) have?",
    correct_answer: "ADPCM Sampler",
    incorrect_answers: [
      "FM Synthesizer",
      "Programmable Sound Generator (PSG)",
      "PCM Sampler",
    ],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "Which of the following is the oldest of these computers by release date?",
    correct_answer: "TRS-80",
    incorrect_answers: ["Commodore 64", "ZX Spectrum", "Apple 3"],
  },
  {
    type: "boolean",
    difficulty: "hard",
    category: "Science: Computers",
    question: "DHCP stands for Dynamic Host Configuration Port.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "How many Hz does the video standard PAL support?",
    correct_answer: "50",
    incorrect_answers: ["59", "60", "25"],
  },
];
if (sessionStorage.getItem("difficult") === "Easy") {
  if (sessionStorage.getItem("quantity") === "10") {
    questions = questionEasy.slice(0, -20);
  }
  if (sessionStorage.getItem("quantity") === "20") {
    questions = questionEasy.slice(0, -10);
  }
  if (sessionStorage.getItem("quantity") === "30") {
    questions = questionEasy.slice();
  }
}
if (sessionStorage.getItem("difficult") === "Medium") {
  if (sessionStorage.getItem("quantity") === "10") {
    questions = questionMedium.slice(0, -20);
  }
  if (sessionStorage.getItem("quantity") === "20") {
    questions = questionMedium.slice(0, -10);
  }
  if (sessionStorage.getItem("quantity") === "30") {
    questions = questionMedium.slice();
  }
}
if (sessionStorage.getItem("difficult") === "Hard") {
  if (sessionStorage.getItem("quantity") === "10") {
    questions = questionHard.slice(0, -20);
  }
  if (sessionStorage.getItem("quantity") === "20") {
    questions = questionHard.slice(0, -10);
  }
  if (sessionStorage.getItem("quantity") === "30") {
    questions = questionHard.slice();
  }
}

const FULL_DASH_ARRAY = 283;

const COLOR_CODES = {
  info: {
    color: "blue",
  },
};

const TIME_LIMIT = 60;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;
let remainingPathColor = COLOR_CODES.info.color;

document.getElementById("app").innerHTML = `
<div class="base-timer">
  <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-timer__circle">
      <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
      <path
        id="base-timer-path-remaining"
        stroke-dasharray="283"
        class="base-timer__path-remaining ${remainingPathColor}"
        d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
      ></path>
    </g>
    <span class = 'reman'>REMAINING</span>
    <span class="text">SECONDS</span>
  </svg>
  <span id="base-timer-label" class="base-timer__label"> ${formatTime(
    timeLeft
  )}</span>
</div>
`;

startTimer();

function onTimesUp() {
  clearInterval(timerInterval);
}

function startTimer() {
  timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    document.getElementById("base-timer-label").innerHTML =
      formatTime(timeLeft);
    setCircleDasharray();
    setRemainingPathColor(timeLeft);
    if (timeLeft === 0) {
      onTimesUp(); //FERMA IL TIMER QUANDO ARRIVA A 0
      currentQuestionIndex++;
      indiceQuestion();
      incorrectAnswers++;
      showQuestion(questions[currentQuestionIndex]); //VA AVANTI ALLA PROSSIMA DOMANDA SE IL TIMER SCADE DA RIGA 153 A RIGA 156
      resetTimer();
    }
  }, 1000);
}

//RESET TIMER
function resetTimer() {
  timeLeft = TIME_LIMIT;
  timePassed = 0;
  onTimesUp();
  startTimer();
}

function formatTime(time) {
  let seconds = time % 60;

  if (seconds < 10) {
    seconds = `${seconds}`;
  }

  return ` ${seconds}`;
}

function setRemainingPathColor(timeLeft) {
  const { info } = COLOR_CODES;
  document
    .getElementById("base-timer-path-remaining")
    .classList.add(info.color);
}

function calculateTimeFraction() {
  const rawTimeFraction = timeLeft / TIME_LIMIT;
  return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}

function setCircleDasharray() {
  const circleDasharray = `${(
    calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;
  document
    .getElementById("base-timer-path-remaining")
    .setAttribute("stroke-dasharray", circleDasharray);
}

// FUNZIONE PER LE DOMANDE

const questionContainer = document.getElementById("containerTitles");
const answerButtons = document.getElementById("colum");
const questionNum = document.getElementById("question-num");

let currentQuestionIndex = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;

const startQuiz = function () {
  showQuestion(questions[currentQuestionIndex]);
};

const showQuestion = function (currentQuestion) {
  questionContainer.innerText = currentQuestion.question;
  answerButtons.innerHTML = "";
  if (currentQuestion.type === "multiple") {
    currentQuestion.incorrect_answers.push(currentQuestion.correct_answer);
    currentQuestion.incorrect_answers.sort(() => Math.random() - 0.5);
    currentQuestion.incorrect_answers.forEach((answer) => {
      const button = document.createElement("button");
      button.innerText = answer;
      button.classList.add("button");
      button.addEventListener("click", () =>
        selectAnswer(currentQuestion.correct_answer === answer, button)
      );
      answerButtons.appendChild(button);
    });
  } else if (currentQuestion.type === "boolean") {
    const trueButton = document.createElement("button");
    trueButton.innerText = "True";
    trueButton.classList.add("button");
    trueButton.addEventListener("click", () =>
      selectAnswer(currentQuestion.correct_answer === "True", trueButton)
    );
    answerButtons.appendChild(trueButton);

    const falseButton = document.createElement("button");
    falseButton.innerText = "False";
    falseButton.classList.add("button");
    falseButton.addEventListener("click", () =>
      selectAnswer(currentQuestion.correct_answer === "False", falseButton)
    );
    answerButtons.appendChild(falseButton);
  }
};

const selectAnswer = function (correct, button) {
  if (correct) {
    button.classList.add("correct2");
    correctAnswers++;
  } else {
    button.classList.add("incorrect");
    incorrectAnswers++;
  }

  disableButtons();

  resetTimer(); //RICHIAMO FUNZIONE RESET TIMER

  setTimeout(() => {
    currentQuestionIndex++;
    indiceQuestion();
    if (currentQuestionIndex < questions.length) {
      showQuestion(questions[currentQuestionIndex]);
    } else {
    }
  }, 1000);

  //PASSA ALLA PAGINA DEI RISULTATI
  if (currentQuestionIndex === questions.length - 1) {
    onTimesUp(); //prova
    // window.location.href = "Result.html";
    let header = document.querySelector("header");
    let main = document.querySelector("main");
    let footer = document.querySelector("footer");
    header.style.display = "none";
    main.style.display = "none";
    footer.style.display = "none";

    let prova = document.querySelectorAll(".showBench");
    prova.forEach((e) => (e.style.display = "block"));
    generateResults();
  }
};

const disableButtons = function () {
  const buttons = document.querySelectorAll(".button");
  buttons.forEach((button) => {
    button.disabled = true;
  });
};

startQuiz();

//FUNZIONE INDICE QUESTION
const indiceQuestion = function () {
  const question = document.querySelector(".indexDomanda");
  question.innerText = currentQuestionIndex + 1 + "/" + questions.length;
};
indiceQuestion();

//RESULTS ZONE

//GENERALE
const generateResults = function () {
  const pathRemaining = document.getElementById("base-chart-path-remaining");
  //REINDIRIZZO ALLA PROSSIMA PAGINA AL CLICK DEL BOTTONE
  const rateButton = document.getElementById("rate-us-button");
  rateButton.onclick = () => {
    window.location.href = "Feedback.html";
  };
  //FINE CODICE DELLA PAGINA BENCHMARK

  //CODICE QUANTE DOMANDE SONO STATE RISPOSTE GIUSTE E QUANTE SBAGLIATE (es.4/6 giuste)
  const risposteCorrette = document.getElementById("questions-corrette");
  const risposteSbagliate = document.getElementById("questions-sbagliate");
  risposteCorrette.innerHTML = `${correctAnswers} / ${questions.length} questions`;
  risposteSbagliate.innerHTML = `${incorrectAnswers} / ${questions.length} questions`;

  //COLORE DELLE RISPOSTE CORRETTE DEL GRAFICO, HO FATTO UN OGGETTO PERCHè ALL'INIZIO PENSAVO SERVISSERO PIù COLORI
  const colorCodes = {
    info: {
      correctColor: "#00FFFF",
    },
  };
  const percentGrafico = (correctAnswers / questions.length) * 100;
  const d = (percentGrafico * 283) / 100;
  console.log(d);

  //IMPORTANTE! MOSTRA PROGRESSO DEL GRAFICO
  pathRemaining.style.strokeDasharray = `${d} 283`;
  pathRemaining.style.stroke = colorCodes.info.correctColor;

  // console.log(2.83 * correctAnswers * 10);

  //2.83 EQUIVALE ALL'1% DI 283

  //CODICE PER CALCOLARE LA PERCENTUALE DI RISPOSTE GIUSTE E DI RISPOSTE GIUSTE E SBAGLIATE
  //calcolare la percentuale in base a quante domande ci sono nell'array
  const percentuale = questions.length / 100; //da l'1% dell'array questions 0,1
  const percentualeGraficoGiusta = Math.floor(
    correctAnswers * percentuale * 100
  );
  const percentualeGraficoSbagliata = incorrectAnswers * percentuale * 100;
  const percentualeCorretta = document.getElementById("percentuale-corretta");
  const percentualeSbagliata = document.getElementById("percentuale-sbagliata");
  percentualeCorretta.innerText = `${Math.floor(
    (correctAnswers / questions.length) * 100
  )} %`;
  percentualeSbagliata.innerText = `${Math.floor(
    (incorrectAnswers / questions.length) * 100
  )} %`;
  console.log(percentualeGraficoGiusta);
  console.log(percentualeGraficoSbagliata);

  //INSERISCO TESTO ALL'INTERNO DEL GRAFICO
  const chartText = document.querySelector(".results-questions");
  const testoColorato = document.querySelector(".colorato");
  const testoCertificato = document.querySelector(".testo-certificato p");
  if (correctAnswers > 5) {
    chartText.innerText = `Congratulations!`;
    testoColorato.innerText = `You passed the exam`;
    testoCertificato.innerText = `We'll send you the certificate in few minutes.
  Check your email (including promotions / spam folder)`;
  } else {
    chartText.innerText = `Failed!`;
    testoColorato.innerText = `Not passed the exam`;
  }

  // divido la questions.length diviso 100 per ottenere l'1% della lunghezza dell'array
  //prendo le risposte corrette, le moltiplico per il valore uscito da questions.length /100 tutto questo *10
};

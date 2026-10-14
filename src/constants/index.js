import {
    javascript,
    reactjs,
    tailwind,
    GW,
    PAS_Logo,
    Tuophone,
    Connected_DMV,
    Matlab_Logo,
    Multisim,
    C_programming,
    python,
    java,
    RPI,
    state_machine,
    AB_amplifier,
    Networks,
    OpenAI,
    Zombie_Cat,
    Portfolio,
    Elevator,
    FIFO,
    multiplier,
    tail_lights
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "resume",
      title: "Resume",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  
  const technologies = [
    {
      name: "C Programming",
      icon: C_programming,
    },
    {
      name: "python",
      icon: python,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Multisim",
      icon: Multisim,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Raspbian",
      icon: RPI,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Matlab",
      icon: Matlab_Logo,
    },
    {
      name: "java",
      icon: java,
    },
  ];
  
  const experiences = [
    {
      title: "Project Lead",
      company_name: "Connected DMV",
      icon: Connected_DMV,
      iconBg: "#FFFF",
      date: "December 2023 − September 2024 ",
      points: [
        "Led the development of a website and networked community tailored for high school students in the Greater Washington area, providing educational resources and interactive discussions on quantum science and technology.",
        "Managed the project timeline over a 4-month period, coordinating tasks, setting milestones, and aligning team efforts for content development, user interface design, and technical infrastructure, while staying within budget.",
        "Accomplishment: Launched a test version of the platform in July for student validation, with a full release (Version 1.0) version presented at the Quantum World Congress, September 2024."
      ],
    },
    {
      title: "Technical Support Assistant II ",
      company_name: "The George Washington University",
      icon: GW,
      iconBg: "#E6DEDD",
      date: "August 2022 − Present ",
      points: [
        "Resolved over 100 technical issues across campus, achieving prompt and seamless operations, and maintaining high user satisfaction levels through the university ticketing system.",
        "Spearheaded the implementation of testing protocols, reducing software and hardware troubleshooting resolution time by 30% and saving the team 20+ hours per week.",
      ],
    },
    // {
    //   title: "Technician",
    //   company_name: "Tuophone (Santo Domingo, Dominican Republic)",
    //   icon: Tuophone,
    //   iconBg: "#383E56",
    //   date: "May 2022 - July 2022",
    //   points: [
    //     "Exhibited expertise in efficiently repairing over 50 mobile devices, including screen replacements, battery swaps, and speaker repairs, ensuring optimal functionality and user satisfaction.",
    //     "Accomplishment: Delivered seamless user experiences to meet customer expectations by being able to deliver results within week for 90% of our services",
    //   ],
    // },
  ];
  
  const educations = [
    {
      title: "The George Washington University",
      company_name: "B.S. in Computer Engineering",
      icon: GW,
      iconBg: "#E6DEDD",
      date: "August 2021 − Present ",
      points: [
          "Institute of Electrical and Electronics Engineers (IEEE)",
          "The Society of Hispanic Professional Engineers (SHPE)",
          "National Society of Black Engineers (NSBE)",
          "Director of Technology - Engineers' Philanthropic Society",
          "Technical & Mechanical Lead - GW Robotics",
      ],
    },
    {
      title: "Portsmouth Abbey School",
      company_name: "High School Diploma",
      icon: PAS_Logo,
      iconBg: "#fff",
      date: "August 2017 − May 2021 ",
      points: [
      ],
    },
  ];
  
  const projects = [
    {
      name: "Backpack Assistant",
      description:
        "This backpack allows the user to make commands, ask questions, and charge mobile devices. Using text to speech services, the backpack will respond back to the user with a clear synthetic voice after processing the information from the user. The backpack is powered by a microprocessor that stores the OpenAI assistant program and powers the audio amplifier.",
      tags: [
        {
          name: "Python",
          color: "#f5af19",
        },
        {
          name: "Electrical",
          color: "#2f80ed",
        },
        {
          name: "AI",
          color: "#f12711",
        },
        {
          name: "Linux",
          color: "#d50e",
        },
      ],
      image: OpenAI,
      source_code_link: "https://github.com/victornin13/AI-Voice-Assistant",
      label: "Demo Coming Soon!"
    },
    {
      name: "Elevator Finite State Machine",
      description:
        "Designed and implemented a Verilog-based finite state machine (FSM) to control a three-story elevator system, integrating accurate button functionality. Ensured that all seven elevator button inputs remained active until their requests were completed, such as keeping a floor call button lit until the elevator arrived and opened its doors.",
      tags: [
        {
          name: "Verilog",
          color: "#fc6767",
        },
        {
          name: "FPGA",
          color: "rgb(2, 148, 58)",
        },
        {
          name: "Cadence",
          color: "#2f80ed",
        },
        {
          name: "Linux",
          color: "#d50e",
        },
        {
          name: "Synopsys",
          color: "#804dee",
        },
      ],
      image: Elevator,
      source_code_link: "https://github.com/victornin13/elevator_fsm",
      demo: "https://github.com/victornin13/elevator_fsm/blob/main/Elevator%20FSM%20Test%20Cases%20and%20Simulation.pdf",
      label: "See Test Cases!"
    },
    {
    name: "Tail Light Controller",
      description: "Engineered a Mustang Tail Light Controller in Verilog, featuring precise sequential lighting patterns for turn signals and seamless brake integration. The design ensures real-time mode transitions, instantly resetting sequences on input changes. Hardware validation, including testbench simulations, waveform analysis, synthesis reports, and timing verification, guarantees functional accuracy and efficiency. Explore the full implementation process on GitHub! 🚘",
      tags: [
        {
          name: "Verilog",
          color: "#fc6767",
        },
        {
          name: "FPGA",
          color: "rgb(2, 148, 58)",
        },
        {
          name: "Cadence",
          color: "#2f80ed",
        },
        {
          name: "Linux",
          color: "#d50e",
        },
        {
          name: "Synopsys",
          color: "#804dee",
        },
      ],
      image: tail_lights,
      source_code_link: "https://github.com/victornin13/mustang_tail_light_controller",
      demo: "https://github.com/victornin13/mustang_tail_light_controller/blob/main/Tail%20Light%20Test%20Cases%20and%20Simulation.pdf",
      label: "See Test Cases!"
    },
    {
      name: "8 Bit Multiplier",
      description:
        "Developed an 8-bit multiplier producing a 16-bit result using AND gates, XOR gates, and full adders. Resolved timing glitches in the initial design by replacing a cascaded 4-bit adder structure with a refined configuration of seven full adders and one half adder, ensuring stable operation. Verified subcomponents through simulations, such as Design Rule Checks (DRC), and Layout Versus Schematic (LVS).",
      tags: [
        {
          name: "VLSI",
          color: "#2f80ed",
        },
        {
          name: "Layout Verification",
          color: "#f12711",
        },
        {
          name: "CMOS Design",
          color: "#00cea8",
        },
        {
          name: "LVS",
          color: "#804dee",
        },
        {
          name: "DRC",
          color: "#000000",
        },
        {
          name: "Cadence Virtuoso",
          color: "#fc6767",
        },
      ],
      image: multiplier,
      demo: "ECE 4140 Final Project Report.pdf",
      label: "Read About it!"
    },
    {
      name: "Audio Amplifier (AB)",
      description:
        "Constructed a class AB (push-pull) amplifier using Darlington Configuration. Created bridge rectifier to convert AC to DC signal to use for the power supply.",
      tags: [
        {
          name: "Electrical",
          color: "#2f80ed",
        },
        {
          name: "Filters",
          color: "#00cea8",
        },
        {
          name: "Circuit Design",
          color: "#804dee",
        },
      ],
      image: AB_amplifier,
      demo: "ECE 2115 Final Project Report.pdf",
      label: "Read About it!"
    },
    {
      name: "Cat and Mouse Simulator",
      description:
        "The blue dots are mice, the yellow/cyan dots are cats, and the red/black zombie-cats. Cats chase mice, and when they catch a mouse, they eat it. If a cat doesn’t eat enough, they turn into a zombie-cat. Zombie-cats chase mice and other cats. They can eat a mouse, but if they eat a cat, that cat turns into a zombie-cat!",
      tags: [
        {
          name: "Java",
          color: "#e36d06",
        },
        {
          name: "Github",
          color: "#000000",
        },
      ],
      image: Zombie_Cat,
      source_code_link: "https://github.com/victornin13/victor_nin13-project1",
      demo: "/Zombie_Simulator.gif",
      label: "Live Demo",
    },
    {
      name: "State Machine",
      description:
        "There are 4 States, A-D, that displays the numbers 1,2,3,4 for each anode respectively. However, when user holds the enable button to go the next state all the numbers flash at the same time, and when the user lets go the next state will show. This was designed using the Diligent Basys 3 Board and Verilog Software.",
      tags: [
        {
          name: "Verilog",
          color: "#fc6767",
        },
        {
          name: "Logic Gates",
          color: "rgb(2, 148, 58)",
        },
        {
          name: "Xilinx Vivado",
          color: "#2f80ed",
        },
      ],
      image: state_machine,
      source_code_link: "/Victor's State Machine Report.pdf",
      demo: "ECE 2140 Final Project Video.mov",
      label: "Live Demo",
    },
    {
      name: "CDC FIFO",
      description:
        "Developed an 8-bit, 8-address FIFO in Verilog for clock domain crossing, integrating Gray-coded pointer synchronization and dual flip-flop synchronizers. Verified functionality through comprehensive testbenches simulating various clock scenarios, full/empty conditions, and data integrity. Leveraged tools like Synopsys and Cadence for synthesis, timing analysis, and back-annotated simulations to ensure accuracy and efficiency.",
      tags: [
        {
          name: "Linux",
          color: "#d50e",
        },
        {
          name: "Cadence",
          color: "#2f80ed",
        },
        {
          name: "Synopsys",
          color: "#804dee",
        },
        {
          name: "Verilog",
          color: "#f12711",
        },
      ],
      image: FIFO,
      source_code_link: "https://github.com/victornin13/cdc_fifo",
      demo: "https://github.com/victornin13/cdc_fifo",
      label: "See Test Cases!"
    },
    {
      name: "Portfolio Website",
      description:
        "My portfolio website, which you are most likely viewing right now.",
      tags: [
        {
          name: "Javascript",
          color: "#f9e800",
        },
        {
          name: "ReactJS",
          color: "#2f80ed",
        },
        {
          name: "Three.js",
          color: "#0000",
        },
        {
          name: "CSS",
          color: "#56ccf2",
        },
      ],
      image: Portfolio,
      demo: "https://victornin.com/",
      label: "Visit Portfolio",
    },
    {
      name: "Custom Subnets",
      description:
        "Created the network diagram provided of four separate subnets which involved three PCs, two routers, and six switches.",
      tags: [
        {
          name: "Linux",
          color: "#d50e",
        },
        {
          name: "Wireshark",
          color: "#2f80ed",
        },
        {
          name: "Networks",
          color: "#804dee",
        },
        {
          name: "VMWare",
          color: "#f12711",
        },
      ],
      image: Networks,
      demo: "ECE 4425 Data Communications Lab.pdf",
      label: "Read about it!"
    },
  ];
  
  export { technologies, experiences, educations, projects };
const TOKEN = 'db655f992190f09f420ab5a7799a45fa2be8152ff8c0151677da3925b60145c317a235eec2aed3c81b3991c6989b9204c6050b6ec6ea741f9d29383586115bad9e614eb9892e05c9f3c034ecf356d0e9e741840a5f43e942b519b8c2cefaacab9025331d7096acd9652b61378f603a20b99fb131c341d9d1fa820fdbf84dd18c';
const API_URL = 'http://localhost:1337';

// Team members data
const teamMembers = [
  {
    name: 'Noah Myung',
    role: 'Director, Technology Policy Lab',
    category: 'Director',
    bio: 'Director of the Technology Policy Lab at the University of Virginia. Research focuses on technology governance, digital policy, and the social implications of emerging technologies.',
    order: 1
  },
  {
    name: 'Dr. Sarah Chen',
    role: 'Associate Professor, Computer Science',
    category: 'Faculty',
    bio: 'Specializes in artificial intelligence, machine learning fairness, and algorithmic accountability. Currently leading research on AI governance frameworks.',
    order: 2
  },
  {
    name: 'Dr. Michael Roberts',
    role: 'Professor, School of Law',
    category: 'Faculty',
    bio: 'Expert in technology law, intellectual property, and platform regulation. Former counsel at the Federal Trade Commission.',
    order: 3
  },
  {
    name: 'Dr. Jennifer Lee',
    role: 'Associate Professor, Data Science',
    category: 'Faculty',
    bio: 'Research focuses on privacy-preserving technologies, data ethics, and health informatics. NSF CAREER Award recipient.',
    order: 4
  },
  {
    name: 'Dr. David Park',
    role: 'Assistant Professor, Public Policy',
    category: 'Faculty',
    bio: 'Studies regulatory approaches to emerging technologies and the intersection of technology policy with public health and safety.',
    order: 5
  },
  {
    name: 'Dr. Maria Garcia',
    role: 'Associate Professor, Urban Planning',
    category: 'Faculty',
    bio: 'Examines digital infrastructure policy, broadband access, and technology\'s role in urban and rural development.',
    order: 6
  },
  {
    name: 'Dr. James Thompson',
    role: 'Professor, Economics',
    category: 'Faculty',
    bio: 'Analyzes economic impacts of technology policy, digital markets, and platform competition. Former chief economist at tech policy think tank.',
    order: 7
  },
  {
    name: 'Dr. Rachel Williams',
    role: 'Associate Professor, Media Studies',
    category: 'Faculty',
    bio: 'Research on content moderation, platform governance, misinformation, and the impact of social media on democratic discourse.',
    order: 8
  },
  {
    name: 'Dr. Kevin Anderson',
    role: 'Assistant Professor, Philosophy',
    category: 'Faculty',
    bio: 'Specializes in ethics of technology, AI ethics, and philosophical foundations of technology policy and governance.',
    order: 9
  },
  {
    name: 'Dr. Omar Hassan',
    role: 'Senior Research Scientist',
    category: 'Research Staff',
    bio: 'Leads empirical research on algorithmic fairness in criminal justice and develops technical tools for bias detection in AI systems.',
    order: 10
  },
  {
    name: 'Dr. Lisa Martinez',
    role: 'Research Scientist',
    category: 'Research Staff',
    bio: 'Conducts policy analysis and stakeholder engagement for technology governance projects. PhD in Public Policy from Stanford.',
    order: 11
  },
  {
    name: 'Alex Bennett',
    role: 'Lab Manager',
    category: 'Research Staff',
    bio: 'Coordinates research projects, manages partnerships, and facilitates collaboration between lab members and external stakeholders.',
    order: 12
  },
  {
    name: 'Emily Patel',
    role: 'PhD Candidate, Computer Science',
    category: 'Graduate Fellows',
    bio: 'Researching transparency and explainability in machine learning systems for policy applications.',
    order: 13
  },
  {
    name: 'Chris Johnson',
    role: 'JD Candidate, School of Law',
    category: 'Graduate Fellows',
    bio: 'Examining legal frameworks for data protection and privacy regulation across jurisdictions.',
    order: 14
  },
  {
    name: 'Nina Kim',
    role: 'PhD Candidate, Public Policy',
    category: 'Graduate Fellows',
    bio: 'Studying the policy design and implementation of broadband expansion programs in rural communities.',
    order: 15
  },
  {
    name: 'Tyler Washington',
    role: 'PhD Candidate, Data Science',
    category: 'Graduate Fellows',
    bio: 'Developing methods for privacy-preserving data analysis in healthcare and government applications.',
    order: 16
  }
];

// Research projects data
const projects = [
  {
    title: 'AI Governance and Accountability Framework',
    investigators: 'Dr. Sarah Chen, Dr. Michael Roberts',
    description: 'This multi-year project examines how governments and organizations can develop effective governance frameworks for artificial intelligence systems. We are working with federal agencies to design accountability mechanisms that balance innovation with public safety and civil rights protection.',
    funding: 'National Science Foundation',
    icon: 'brain',
    order: 1
  },
  {
    title: 'Privacy-Preserving Data Sharing in Healthcare',
    investigators: 'Dr. Jennifer Lee, Dr. David Park',
    description: 'Investigating technical and policy approaches to enable secure health data sharing for research purposes while protecting patient privacy. This work includes developing frameworks for differential privacy implementation and analyzing HIPAA compliance in modern data ecosystems.',
    funding: 'Department of Health and Human Services',
    icon: 'shield',
    order: 2
  },
  {
    title: 'Digital Infrastructure and Rural Broadband Access',
    investigators: 'Dr. Maria Garcia, Dr. James Thompson',
    description: 'Examining barriers to broadband adoption in rural Virginia communities and evaluating the effectiveness of state and federal broadband expansion programs. Our research informs policy recommendations for closing the digital divide.',
    funding: 'Virginia Department of Housing and Community Development',
    icon: 'wifi',
    order: 3
  },
  {
    title: 'Content Moderation and Platform Governance',
    investigators: 'Dr. Rachel Williams, Dr. Kevin Anderson',
    description: 'Analyzing how social media platforms make content moderation decisions and the implications for free speech, misinformation, and democratic discourse. This project includes comparative analysis of platform policies and regulatory approaches across different jurisdictions.',
    funding: 'Knight Foundation',
    icon: 'message-square',
    order: 4
  },
  {
    title: 'Algorithmic Fairness in Criminal Justice',
    investigators: 'Dr. Omar Hassan, Dr. Lisa Martinez',
    description: 'Evaluating the use of algorithmic risk assessment tools in criminal justice settings, with particular attention to issues of bias, transparency, and due process. We are developing policy recommendations for jurisdictions considering adoption of these technologies.',
    funding: 'Arnold Ventures',
    icon: 'scale',
    order: 5
  }
];

async function importData() {
  console.log('🚀 Starting data import...\n');

  // Import team members
  console.log('📝 Importing team members...');
  for (const member of teamMembers) {
    try {
      const response = await fetch(`${API_URL}/api/team-members`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: member }),
      });

      if (response.ok) {
        console.log(`✅ Imported: ${member.name}`);
      } else {
        const error = await response.text();
        console.error(`❌ Failed to import ${member.name}:`, error);
      }
    } catch (error) {
      console.error(`❌ Error importing ${member.name}:`, error.message);
    }
  }

  console.log('\n📚 Importing research projects...');
  for (const project of projects) {
    try {
      const response = await fetch(`${API_URL}/api/projects`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: project }),
      });

      if (response.ok) {
        console.log(`✅ Imported: ${project.title}`);
      } else {
        const error = await response.text();
        console.error(`❌ Failed to import ${project.title}:`, error);
      }
    } catch (error) {
      console.error(`❌ Error importing ${project.title}:`, error.message);
    }
  }

  console.log('\n✨ Import complete!');
  console.log('\nNext steps:');
  console.log('1. Go to http://localhost:1337/admin');
  console.log('2. Navigate to Content Manager');
  console.log('3. Click on each item and click "Publish" to make them visible');
}

importData();

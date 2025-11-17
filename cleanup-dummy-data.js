const TOKEN = 'db655f992190f09f420ab5a7799a45fa2be8152ff8c0151677da3925b60145c317a235eec2aed3c81b3991c6989b9204c6050b6ec6ea741f9d29383586115bad9e614eb9892e05c9f3c034ecf356d0e9e741840a5f43e942b519b8c2cefaacab9025331d7096acd9652b61378f603a20b99fb131c341d9d1fa820fdbf84dd18c';
const API_URL = 'http://localhost:1337';

async function cleanup() {
  console.log('🧹 Removing dummy data...\n');

  // Get all team members
  const teamResponse = await fetch(`${API_URL}/api/team-members?pagination[pageSize]=100`);
  const teamData = await teamResponse.json();

  // Delete everyone except Noah Myung
  for (const member of teamData.data) {
    if (member.name !== 'Noah Myung') {
      try {
        const response = await fetch(`${API_URL}/api/team-members/${member.documentId}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${TOKEN}`,
          },
        });

        if (response.ok) {
          console.log(`✅ Deleted: ${member.name}`);
        } else {
          console.error(`❌ Failed to delete ${member.name}`);
        }
      } catch (error) {
        console.error(`❌ Error deleting ${member.name}:`, error.message);
      }
    }
  }

  // Get all projects
  const projectsResponse = await fetch(`${API_URL}/api/projects?pagination[pageSize]=100`);
  const projectsData = await projectsResponse.json();

  // Delete all projects (they're all dummy)
  for (const project of projectsData.data) {
    try {
      const response = await fetch(`${API_URL}/api/projects/${project.documentId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${TOKEN}`,
        },
      });

      if (response.ok) {
        console.log(`✅ Deleted project: ${project.title}`);
      } else {
        console.error(`❌ Failed to delete project: ${project.title}`);
      }
    } catch (error) {
      console.error(`❌ Error deleting ${project.title}:`, error.message);
    }
  }

  console.log('\n✨ Cleanup complete! Only Noah Myung remains.');
}

cleanup();

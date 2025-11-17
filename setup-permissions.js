const TOKEN = 'db655f992190f09f420ab5a7799a45fa2be8152ff8c0151677da3925b60145c317a235eec2aed3c81b3991c6989b9204c6050b6ec6ea741f9d29383586115bad9e614eb9892e05c9f3c034ecf356d0e9e741840a5f43e942b519b8c2cefaacab9025331d7096acd9652b61378f603a20b99fb131c341d9d1fa820fdbf84dd18c';
const API_URL = 'http://localhost:1337';

async function setupPermissions() {
  try {
    // First, get the public role
    console.log('Fetching public role...');
    const rolesResponse = await fetch(`${API_URL}/api/users-permissions/roles`, {
      headers: {
        'Authorization': `Bearer ${TOKEN}`,
      },
    });

    const rolesData = await rolesResponse.json();
    console.log('Roles:', JSON.stringify(rolesData, null, 2));

    const publicRole = rolesData.roles?.find(role => role.type === 'public');

    if (!publicRole) {
      console.error('Public role not found!');
      return;
    }

    console.log('Found public role:', publicRole.id);

    // Update permissions for the public role
    const permissions = {
      'team-member': ['find', 'findOne'],
      'project': ['find', 'findOne'],
      'publication': ['find', 'findOne'],
      'article': ['find', 'findOne'],
      'site-config': ['find', 'findOne'],
    };

    // Build the permissions object
    const updatedPermissions = { ...publicRole.permissions };

    for (const [contentType, actions] of Object.entries(permissions)) {
      if (!updatedPermissions[contentType]) {
        updatedPermissions[contentType] = {};
      }

      for (const action of actions) {
        updatedPermissions[contentType][action] = { enabled: true };
      }
    }

    // Update the role
    console.log('Updating public role permissions...');
    const updateResponse = await fetch(`${API_URL}/api/users-permissions/roles/${publicRole.id}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: publicRole.name,
        description: publicRole.description,
        permissions: updatedPermissions,
      }),
    });

    if (updateResponse.ok) {
      console.log('✅ Permissions updated successfully!');
      console.log('\nAPI endpoints are now accessible:');
      console.log('- http://localhost:1337/api/team-members');
      console.log('- http://localhost:1337/api/projects');
      console.log('- http://localhost:1337/api/publications');
      console.log('- http://localhost:1337/api/articles');
      console.log('- http://localhost:1337/api/site-config');
    } else {
      const error = await updateResponse.text();
      console.error('Failed to update permissions:', error);
    }

  } catch (error) {
    console.error('Error:', error);
  }
}

setupPermissions();

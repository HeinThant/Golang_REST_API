const apiUrl = '/api/users'; // adjust this to match your Go routes

// Load users on page load
window.onload = fetchUsers;

function fetchUsers() {
    fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
            const tbody = document.querySelector('#user-list tbody');
            tbody.innerHTML = '';
            data.forEach(user => {
                const row = `
                    <tr>
                        <td>${user.id}</td>
                        <td>${user.name}</td>
                        <td>${user.email}</td>
                        <td>
                            <button onclick="editUser('${user.id}', '${user.name}', '${user.email}')">Edit</button>
                            <button onclick="deleteUser('${user.id}')">Delete</button>
                        </td>
                    </tr>`;
                tbody.innerHTML += row;
            });
        });
}

document.getElementById('user-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const id = document.getElementById('user-id').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    const method = id ? 'PUT' : 'POST';
    const endpoint = id ? `${apiUrl}/${id}` : apiUrl;

    fetch(endpoint, {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id, name, email })
    })
    .then(res => res.json())
    .then(() => {
        fetchUsers();
        document.getElementById('user-form').reset();
        document.getElementById('form-title').textContent = 'Create New User';
        document.getElementById('submit-btn').textContent = 'Create User';
    });
});

function editUser(id, name, email) {
    document.getElementById('user-id').value = id;
    document.getElementById('name').value = name;
    document.getElementById('email').value = email;
    document.getElementById('form-title').textContent = 'Edit User';
    document.getElementById('submit-btn').textContent = 'Update User';
}

function deleteUser(id) {
    fetch(`${apiUrl}/${id}`, {
        method: 'DELETE'
    })
    .then(() => fetchUsers());
}

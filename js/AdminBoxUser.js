class AdminBoxUser {
    constructor() {

    }

    static createTableHead() {
        return `<tr>
                    <th></th>
                    <th>User ID</th>
                    <th>Username</th>
                    <th>Role</th>
                    <th>Fullname</th>
                    <th>Phone number</th>
                    <th>Email</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>`;
    }

    static setScreenType() {
        screenType = "user";
        dataFromAPI = getFakeDataFromAPI(screenType);
        createTable(dataFromAPI, screenType);
        let menuUser = document.getElementById("menu-user");
        clearMenuActive();
        menuUser.classList.add("active");

        // Add button
        makeCreateButton(screenType);
    }

    static createRow(data) {
        return `<tr>
                    <td><i class="fa-solid fa-image-portrait"></i></td>
                    <td>${data.userId}</td>
                    <td>${data.username}</td>
                    <td>${data.role}</td>
                    <td>${data.fullname}</td>
                    <td>${data.phoneNumber}</td>
                    <td>${data.email}</td>
                    <td class="edit" data-toggle="modal" data-target="#createUserButton" onclick="editUserRow(this)"><i class="fa-regular fa-note-sticky"></i></td>
                    <td class="delete" onclick="deleteUserRow(this)"><i class="fa-solid fa-trash"></i></td>
                </tr>`;
    }

    static editRow(element) {
        let userId = element.parentNode.cells[1].innerHTML;
        let username = element.parentNode.cells[2].innerHTML;
        let role = element.parentNode.cells[3].innerHTML;
        let fullname = element.parentNode.cells[4].innerHTML;
        let phoneNumber = element.parentNode.cells[5].innerHTML;
        let email = element.parentNode.cells[6].innerHTML;

        document.getElementById('userId').value = userId;
        document.getElementById('usernameField').value = username;
        document.getElementById('role').value = role;
        document.getElementById('fullname').value = fullname;
        document.getElementById('phoneNumber').value = phoneNumber;
        document.getElementById('email').value = email;
    }

    static deleteRow(element) {
        let userId = element.parentNode.cells[1].innerHTML;
        let username = element.parentNode.cells[2].innerHTML;
        let role = element.parentNode.cells[3].innerHTML;
        let fullname = element.parentNode.cells[4].innerHTML;
        let phoneNumber = element.parentNode.cells[5].innerHTML;
        let email = element.parentNode.cells[6].innerHTML;

        alert(`User with userId ${userId} will be deleted!`);
    }

    static submitForm() {
        document.getElementById('createUserForm').addEventListener('submit', function (event) {
            event.preventDefault();

            let formData = {
                userId: document.getElementById('userId').value,
                username: document.getElementById('usernameField').value,
                role: document.getElementById('role').value,
                fullname: document.getElementById('fullname').value,
                phoneNumber: document.getElementById('phoneNumber').value,
                email: document.getElementById('email').value
            };

            createUser(formData);

            document.getElementById('createUserForm').reset();

            // Close the modal
            $('#createUserButton').modal('hide');
        });
    }

    static create(formData) {
        alert(
            `${formData.userId} - ${formData.username} - ${formData.role} - ${formData.fullname} - ${formData.phoneNumber} - ${formData.email}`
        );
    }
}
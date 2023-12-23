class AdminBoxPost {
    constructor() {

    }

    static createTableHead() {
        return `<tr>
                    <th>Post ID</th>
                    <th>Post Name</th>
                    <th>User Name</th>
                    <th>Unit Price</th>
                    <th>Category</th>
                    <th>Calculation Unit</th>
                    <th>Date of Post</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>`;
    }

    static setScreenType() {
        screenType = "post";
        dataFromAPI = getFakeDataFromAPI(screenType);
        createTable(dataFromAPI, screenType);
        let menuPost = document.getElementById("menu-post");
        clearMenuActive();
        menuPost.classList.add("active");

        // Add button
        makeCreateButton(screenType);
    }

    static createRow(data) {
        return `<tr>
                    <td>${data.postId}</td>
                    <td>${data.postName}</td>
                    <td>${data.userName}</td>
                    <td>${data.unitPrice}</td>
                    <td>${data.category}</td>
                    <td>${data.calculationUnit}</td>
                    <td>${data.dateOfPost}</td>
                    <td class="edit" data-toggle="modal" data-target="#createPostButton" onclick="editPostRow(this)"><i class="fa-solid fa-pen-to-square"></i></td>
                    <td class="delete" onclick="deletePostRow(this)"><i class="fa-solid fa-circle-xmark"></i></td>
                </tr>`;
    }

    static editRow(element) {
        let postId = element.parentNode.cells[0].innerHTML;
        let postName = element.parentNode.cells[1].innerHTML;
        let userName = element.parentNode.cells[2].innerHTML;
        let unitPrice = element.parentNode.cells[3].innerHTML;
        let category = element.parentNode.cells[4].innerHTML;
        let calculationUnit = element.parentNode.cells[5].innerHTML;
        let dateOfPost = element.parentNode.cells[6].innerHTML;

        document.getElementById('postId').value = postId;
        document.getElementById('postname').value = postName;
        document.getElementById('usernameField2').value = userName;
        document.getElementById('unitPrice').value = unitPrice;
        document.getElementById('category').value = category;
        document.getElementById('calculationUnit').value = calculationUnit;
        document.getElementById('dateOfPost').value = dateOfPost;
    }

    static deleteRow(element) {
        let postId = element.parentNode.cells[0].innerHTML;
        let postName = element.parentNode.cells[1].innerHTML;
        let userName = element.parentNode.cells[2].innerHTML;
        let unitPrice = element.parentNode.cells[3].innerHTML;
        let category = element.parentNode.cells[4].innerHTML;
        let calculationUnit = element.parentNode.cells[5].innerHTML;
        let dateOfPost = element.parentNode.cells[6].innerHTML;

        alert(`Post with postId ${postId} will be deleted!`);
    }

    static submitForm() {
        document.getElementById('createPostForm').addEventListener('submit', function (event) {
            event.preventDefault();

            let formData = {
                postId: document.getElementById('postId').value,
                postname: document.getElementById('postname').value,
                username: document.getElementById('usernameField2').value,
                unitPrice: document.getElementById('unitPrice').value,
                category: document.getElementById('category').value,
                calculationUnit: document.getElementById('calculationUnit').value,
                dateOfPost: document.getElementById('dateOfPost').value
            };

            createPost(formData);

            document.getElementById('createPostForm').reset();

            // Close the modal
            $('#createPostButton').modal('hide');
        });
    }

    static create(formData) {
        alert(
            `${formData.postId} - ${formData.postname} - ${formData.username} - ${formData.unitPrice} - ${formData.category} - ${formData.calculationUnit} - ${formData.dateOfPost}`
        );
    }
}
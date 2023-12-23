class AdminBoxComment {
    constructor() {

    }

    static createTableHead() {
        return `<tr>
                    <th>Comment</th>
                    <th>Post ID</th>
                    <th>Buyer Name</th>
                    <th>Content</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>`;
    }

    static setScreenType() {
        screenType = "comments";
        dataFromAPI = getFakeDataFromAPI(screenType);
        createTable(dataFromAPI, screenType);
        let menuComments = document.getElementById("menu-comments");
        clearMenuActive();
        menuComments.classList.add("active");

        // Add button
        makeCreateButton(screenType);
    }

    static createRow(data) {
        return `<tr>
            <td>${data.comment}</td>
            <td>${data.postId}</td>
            <td>${data.buyerName}</td>
            <td>${data.content}</td>
            <td class="edit" data-toggle="modal" data-target="#createCommentsButton" onclick="editCommentsRow(this)"><i class="fa-solid fa-pen-to-square"></i></td>
            <td class="delete" onclick="deleteCommentsRow(this)"><i class="fa-solid fa-circle-xmark"></i></td>
        </tr>`;
    }

    static editRow(element) {
        let comment = element.parentNode.cells[0].innerHTML;
        let postId = element.parentNode.cells[1].innerHTML;
        let buyerName = element.parentNode.cells[2].innerHTML;
        let content = element.parentNode.cells[3].innerHTML;

        document.getElementById('commentId').value = comment;
        document.getElementById('postId4').value = postId;
        document.getElementById('buyerName4').value = buyerName;
        document.getElementById('content').value = content;
    }

    static deleteRow(element) {
        let comment = element.parentNode.cells[0].innerHTML;
        let postId = element.parentNode.cells[1].innerHTML;
        let buyerName = element.parentNode.cells[2].innerHTML;
        let content = element.parentNode.cells[3].innerHTML;

        alert(`Post with comment ID ${comment} will be deleted!`);
    }

    static submitForm() {
        document.getElementById('createCommentsForm').addEventListener('submit', function (event) {
            event.preventDefault();

            let formData = {
                commentId: document.getElementById('commentId').value,
                postId4: document.getElementById('postId4').value,
                buyerName4: document.getElementById('buyerName4').value,
                content: document.getElementById('content').value
            };

            createComments(formData);

            document.getElementById('createCommentsForm').reset();

            // Close the modal
            $('#createCommentsButton').modal('hide');
        });
    }

    static create(formData) {
        alert(
            `Comment edited!`
        );
    }
}
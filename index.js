//////// Data
// Fake data returned from API
function getFakeDataFromAPI(screenType) {
    if (screenType == "user") {
        return User.getSampleData();
    } else if (screenType == "post") {
        return Post.getSampleData();
    } else if (screenType == "purchase") {
        return Purchase.getSampleData();
    } else if (screenType == "comments") {
        return Comment.getSampleData();
    } else {
        return "";
    }
}

//////// Form listener
// Listen user submit form
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

    AdminBoxUser.create(formData);

    document.getElementById('createUserForm').reset();

    // Close the modal
    $('#createUserButton').modal('hide');
});

// Listen post submit form
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

    AdminBoxPost.create(formData);

    document.getElementById('createPostForm').reset();

    // Close the modal
    $('#createPostButton').modal('hide');
});

// Listen post purchase form
document.getElementById('createPurchaseForm').addEventListener('submit', function (event) {
    event.preventDefault();

    let formData = {
        purchaseId: document.getElementById('purchaseId').value,
        postId3: document.getElementById('postId3').value,
        sellerName: document.getElementById('sellerName').value,
        buyerName: document.getElementById('buyerName').value,
        unitPrice3: document.getElementById('unitPrice3').value,
        purchaseNumber3: document.getElementById('purchaseNumber3').value,
        dateOfOrder: document.getElementById('dateOfOrder').value,
        statusPurchase: document.getElementById('statusPurchase').value
    };

    AdminBoxPurchase.create(formData);

    document.getElementById('createPurchaseForm').reset();

    // Close the modal
    $('#createPurchaseButton').modal('hide');
});

// Listen post comment form
document.getElementById('createCommentsForm').addEventListener('submit', function (event) {
    event.preventDefault();

    let formData = {
        commentId: document.getElementById('commentId').value,
        postId4: document.getElementById('postId4').value,
        buyerName4: document.getElementById('buyerName4').value,
        content: document.getElementById('content').value
    };

    AdminBoxComment.create(formData);

    document.getElementById('createCommentsForm').reset();

    // Close the modal
    $('#createCommentsButton').modal('hide');
});


//////// Set screen type
function clearMenuActive() {
    let menuUser = document.getElementById("menu-user");
    let menuPost = document.getElementById("menu-post");
    let menuPurchase = document.getElementById("menu-purchase");
    let menuComments = document.getElementById("menu-comments");

    menuUser.classList.remove("active");
    menuPost.classList.remove("active");
    menuPurchase.classList.remove("active");
    menuComments.classList.remove("active");
}

function setScreenTypeUser() {
    AdminBoxUser.setScreenType();
}

function setScreenTypePost() {
    AdminBoxPost.setScreenType();
}

function setScreenTypePurchase() {
    AdminBoxPurchase.setScreenType();
}

function setScreenTypeCommnents() {
    AdminBoxComment.setScreenType();
}


//////// Create Button
function makeCreateButton(screenType) {
    let createButton = document.getElementById("add-button");
    switch (screenType) {
        case "user":
            createButton.innerHTML =
                `<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#createUserButton">Create User</button>`;
            break;
        case "post":
            createButton.innerHTML =
                `<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#createPostButton">Add Post</button>`;
            break;
        case "purchase":
            createButton.innerHTML = ``;
            break;
        case "comments":
            createButton.innerHTML = `<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#createCommentsButton">Add Comment</button>`;
            break;
    }
}

//////// Table
function createTableHead(screenType) {
    if (screenType == "user") {
        return AdminBoxUser.createTableHead();
    } else if (screenType == "post") {
        return AdminBoxPost.createTableHead();
    } else if (screenType == "purchase") {
        return AdminBoxPurchase.createTableHead();
    } else if (screenType == "comments") {
        return AdminBoxComment.createTableHead();
    } else {
        return ``;
    }
}

function createRow(data, screenType) {
    if (screenType == "user") {
        return AdminBoxUser.createRow(data);
    } else if (screenType == "post") {
        return AdminBoxPost.createRow(data);
    } else if (screenType == "purchase") {
        return AdminBoxPurchase.createRow(data);
    } else if (screenType == "comments") {
        return AdminBoxComment.createRow(data);
    } else {
        return "";
    }
}

function createTable(dataFromAPI, screenType) {
    let tableHead = document.getElementById("table-head");
    let tableBody = document.getElementById("table-body");

    let rows = "";

    for (let i = 0; i < dataFromAPI.length; i++) {
        rows += createRow(dataFromAPI[i], screenType);
    }

    tableHead.innerHTML = createTableHead(screenType);
    tableBody.innerHTML = rows;
}


//////// Row buttons
function editUserRow(element) {
    AdminBoxUser.editRow(element);
}

function deleteUserRow(element) {
    AdminBoxUser.deleteRow(element);
}

function editPostRow(element) {
    AdminBoxPost.editRow(element);
}

function deletePostRow(element) {
    AdminBoxPost.deleteRow(element);
}

function editPurchaseRow(element) {
    AdminBoxPurchase.editRow(element);
}

function deletePurchaseRow(element) {
    AdminBoxPurchase.deleteRow(element);
}

function editCommentsRow(element) {
    AdminBoxComment.editRow(element);
}

function deleteCommentsRow(element) {
    AdminBoxComment.deleteRow(element);
}





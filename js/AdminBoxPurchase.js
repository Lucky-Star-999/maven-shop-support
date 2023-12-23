class AdminBoxPurchase {
    constructor() {

    }

    static createTableHead() {
        return `<tr>
                    <th>Purchase ID</th>
                    <th>Post ID</th>
                    <th>Seller Name</th>
                    <th>Buyer Name</th>
                    <th>Unit Price</th>
                    <th>Purchase Number</th>
                    <th>Date of order</th>
                    <th>Status Purchase</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>`;
    }

    static setScreenType() {
        screenType = "purchase";
        dataFromAPI = getFakeDataFromAPI(screenType);
        createTable(dataFromAPI, screenType);
        let menuPurchase = document.getElementById("menu-purchase");
        clearMenuActive();
        menuPurchase.classList.add("active");

        // Add button
        makeCreateButton(screenType);
    }

    static createRow(data) {
        let statusPurchaseRow = "";

        switch (data.statusPurchase) {
            case "Đã hủy":
                statusPurchaseRow = `<td class="text-danger">${data.statusPurchase}</td>`;
                break;
            case "Đã giao":
                statusPurchaseRow = `<td class="text-success">${data.statusPurchase}</td>`;
                break;
            case "Đang xử lí":
                statusPurchaseRow = `<td class="text-warning">${data.statusPurchase}</td>`;
                break;
            case "Chờ xác nhận":
                statusPurchaseRow = `<td style="color: purple;">${data.statusPurchase}</td>`;
                break;
        }

        return `<tr>
                    <td>${data.purchaseId}</td>
                    <td>${data.postId}</td>
                    <td>${data.sellerName}</td>
                    <td>${data.buyerName}</td>
                    <td>${data.unitPrice}</td>
                    <td>${data.purchaseNumber}</td>
                    <td>${data.dateOfOrder}</td>
                    ${statusPurchaseRow}
                    <td class="edit" data-toggle="modal" data-target="#createPurchaseButton" onclick="editPurchaseRow(this)"><i class="fa-solid fa-pen-to-square"></i></td>
                    <td class="delete" onclick="deletePurchaseRow(this)"><i class="fa-solid fa-circle-xmark"></i></td>
                </tr>`;
    }

    static editRow(element) {
        let purchaseId = element.parentNode.cells[0].innerHTML;
        let postId = element.parentNode.cells[1].innerHTML;
        let sellerName = element.parentNode.cells[2].innerHTML;
        let buyerName = element.parentNode.cells[3].innerHTML;
        let unitPrice = element.parentNode.cells[4].innerHTML;
        let purchaseNumber = element.parentNode.cells[5].innerHTML;
        let dateOfOrder = element.parentNode.cells[6].innerHTML;
        let statusPurchaseRow = element.parentNode.cells[7].innerHTML;

        document.getElementById('purchaseId').value = purchaseId;
        document.getElementById('postId3').value = postId;
        document.getElementById('sellerName').value = sellerName;
        document.getElementById('buyerName').value = buyerName;
        document.getElementById('unitPrice3').value = unitPrice;
        document.getElementById('purchaseNumber3').value = purchaseNumber;
        document.getElementById('dateOfOrder').value = dateOfOrder;
        document.getElementById('statusPurchase').value = statusPurchaseRow;
    }

    static deleteRow(element) {
        let purchaseId = element.parentNode.cells[0].innerHTML;
        let postId = element.parentNode.cells[1].innerHTML;
        let sellerName = element.parentNode.cells[2].innerHTML;
        let buyerName = element.parentNode.cells[3].innerHTML;
        let unitPrice = element.parentNode.cells[4].innerHTML;
        let purchaseNumber = element.parentNode.cells[5].innerHTML;
        let dateOfOrder = element.parentNode.cells[6].innerHTML;
        let statusPurchaseRow = element.parentNode.cells[7].innerHTML;

        alert(`Purchase with purchaseId ${purchaseId} will be deleted!`);
    }

    static submitForm() {
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

            createPurchase(formData);

            document.getElementById('createPurchaseForm').reset();

            // Close the modal
            $('#createPurchaseButton').modal('hide');
        });
    }

    static create(formData) {
        alert(
            `Purcharse edited!`
        );
    }
}
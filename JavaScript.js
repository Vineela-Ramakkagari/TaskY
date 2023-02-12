const taskContainer = document.querySelector(".task__container");
const globalStore =[];
console.log(taskContainer);
const generateNewCard = (taskData) => `
    <div class="col-sm-12 col-md-6 col-lg-4" id=${taskData.id}>
                    <div class="card">
                        <div class="card-header d-flex justify-content-end gap-2">
                            <button type="button" class="btn btn-outline-success"><i class="fas fa-pencil-alt"></i></button>
                            <button type="button" class="btn btn-outline-danger"><i class="fas fa-trash-alt"></i></button>
                        </div>
                        <div class="card-body">
                            <img src=${taskData.imageUrl} class="card-img-top" alt="...">
                          <h5 class="card-title text-primary mt-3">${taskData.taskTitle}</h5>
                          <p class="card-text">${taskData.taskDescription}</p>
                          <a href="#" class="btn btn-primary">${taskData.taskType}</a>
                        </div>
                    </div>
    </div>
                    `;
const loadInitialCardData = () => {
    //localstorage to get taskyV card data
    const getCardData = localStorage.getItem("taskyV");

    //convert to normal object
    const {cards} = JSON.parse(getCardData);

    //loop over those array task object to create html card, inject it to DOM
    cards.map((cardObject) => {
        taskContainer.insertAdjacentHTML("beforeend",generateNewCard(cardObject));

        //update our globalStore
        globalStore.push(cardObject);
    }
    
    )
}
const saveChanges = () => {
    const taskData = {
        id: `${Date.now()}`,
        imageUrl: document.getElementById("imageurl").value,
        taskTitle: document.getElementById("tasktitle").value,
        taskType: document.getElementById("tasktype").value,
        taskDescription: document.getElementById("taskdescription").value
    };

                    taskContainer.insertAdjacentHTML("beforeend", generateNewCard(taskData));
                    globalStore.push(taskData);
                    localStorage.setItem("taskyV",JSON.stringify({cards:globalStore}));
};
(async function(){

    const data = await fetch("../json/data.json");
    const res = await data.json();


    let employees = res;

    let selectedEmployeeId = employees[0].id;
    let selectedEmployee = employees[0];

    const employeeList = document.querySelector(".employees__names--list");
    const employeeInfo = document.querySelector(".employees__single--info");

    const createEmployee = document.querySelector(".createEmployee");
    const addEmployeeModal = document.querySelector(".addEmployee");
    const addEmployeeForm = document.querySelector(".addEmployee_create");
    
    createEmployee.addEventListener('click', function(){
       addEmployeeModal.style.display = "flex";
    });

    addEmployeeModal.addEventListener("click", (e)=>{
        if(e.target.className === "addEmployee"){
            addEmployeeModal.style.display = "none";
        }
    });

    const dobInput = document.querySelector(".addEmployee_create--dob");

    dobInput.max = `${new Date().getFullYear()-18}-${new Date().toISOString().slice(5, 10)}`;


    addEmployeeForm.addEventListener("submit", (e)=>{
        e.preventDefault();
        const formData = new FormData(addEmployeeForm);
        const values = [...formData.entries()];
        let empData = {};
        values.forEach((val)=>{
            empData[val[0]] = val[1];
        });
        empData.id = employees[employees.length-1].id+1;
        empData.age = new Date().getFullYear()-parseInt(empData.dob.slice(0, 4),10);
        empData.imageUrl = empData.imageUrl || "https://cdn-icons-png.flaticon.com/512/0/93.png";
        employees.push(empData);
        renderEmployees();
        addEmployeeForm.reset();
        addEmployeeModal.style.display = "none";
    });

}());
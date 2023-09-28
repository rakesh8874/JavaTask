class RegisterationForm{

    constructor(){
        console.log("Constructor Called");
    }

    submit(){
        alert(this.name+" Form Subbmitted "+this.trainNo);
    }

    cancle(){
        alert(this.name+" Booking Cancelled "+this.trainNo);
    }

    fill(name, trainNo){
          this.name = name;
          this.trainNo = trainNo
    }
}

let rakesh = new RegisterationForm();
rakesh.fill('rakesh', 123450);
let vivek = new RegisterationForm();
vivek.fill('vivek', 123452);
rakesh.submit();
vivek.submit();
vivek.cancle();
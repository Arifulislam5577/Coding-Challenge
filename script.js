let heading = document.querySelector(".heading");


let person = {
    firstName: 'Ariful',
    lastName: 'Islam',
    
    fullName: function () {
        return this.firstName +' '+this.lastName;
    }
}

heading.innerHTML = person.lastName;
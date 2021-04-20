class Employee {
    // class here is a key word
    ID: number; // properties, when undefined sit empty
    name: string; // you can type them just as you'd expect
    phoneNumber: string; // you can assign a default value as well
    email: string;

    private static IDCounter =1;

    constructor(name, phoneNumber, email) {
      // constructor is a special method to initialize an instance of the class
      // the parameters you define here are passed in when a "new" instance is made
      this.ID = Employee.IDCounter++;
      // `this` is a keyword saying "this context" here, it refers to "this" instance of the class, 
      // so setting the properties with the values passed in
      this.name = name;
      this.phoneNumber = phoneNumber;
      this.email = email;
    }
    
    // a method is added simply by adding the name of the method, then standard function formatting.
    toString(): string {
        // here toString takes no parameters, and returns a string
        let output =
          `Employee ID:${this.ID}\n` +
          `\tName: ${this.name}\n` +
          `\tPhone number: ${this.phoneNumber}\n` +
          `\tEmail: ${this.email}`;
        return output;
    }

    toShortString(): string {
        // here toString takes no parameters, and returns a string
        let output = `Employee ID:${this.ID} '${this.name}' ${this.phoneNumber} ${this.email}`;
        return output;
    }
}
  
  // a new instance of this class would look something like this...
  //console.log(new Employee("Anna Bishop",351684,"dsgdf@dd.gg"));

  // access a method from the instance of the object!
  //console.log(new Employee("Anna Bishop",351684,"dsgdf@dd.gg").toString());
  
var employees: Array<Employee> = [
    //new Employee("Emily Cotterman", 9180551299, "e.cotterman@ddd.com"),
    //new Employee("Anna Bishop",351684,"anna@bb.com"),
    //new Employee("Fan Hongwei", 9853007711, "fhongwei@hts.com"),
]


function listAll(employees: Array<Employee>) {
    employees.forEach (person =>{
        console.log(`Employee ID:${person.ID} '${person.name}' ${person.phoneNumber} ${person.email}`);
    })
    console.log("------------------------------------------------------------")
}


//console.log(employees);

const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function addEmployee(name: string, phoneNumber: number, email: string){
    if (name.length!==0) {
        if (re.test(String(email).toLowerCase())) {
            if (phoneNumber.toString().length==10) {
                employees.push(new Employee(name, phoneNumber,email));
                console.log(`***** New employee '${name}' was added successfully *****`);
                listAll(employees);
            }
            else console.log(`Error: Employee phone number should be 10 digits not ${phoneNumber.toString().length}`); return Error;
        } 
        else console.log("Error: Employee email is not valid"); return Error;
    } 
    else console.log("Error: Employee name should be defined"); return Error;
}

addEmployee("Emily Cotterman", 9180551299, "e.cotterman@ddd.com");
addEmployee("Robert Julius Trumpler",3512226484,"bob@tr.com");
addEmployee("Fan Hongwei", 9853007711, "fhongwei@hts.com");



//addEmployee("", 9180551299, "e.cotterman@ddd.com");
//addEmployee("Emily Cotterman", 9180559, "e.cotterman@ddd.com");
//addEmployee("Emily Cotterman", 9180552309, "sss");
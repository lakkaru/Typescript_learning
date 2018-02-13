class User{
    name:string;
    email:string;
    age:number;

    constructor(name:string, email:string, age:number){
        this.name=name;
        this.email=email;
        this.age=age;
        console.log('User created '+ this.name);
        
    }

    register(){
        console.log(this.name+" is now registered.");
        
    }

    payInvoice(){
        console.log(this.name +' paied invoice');
        
    }
}
// let Jhone = new User('Jhone Alex', 'example@dotcom', 43);
// console.log(Jhone.age);
// Jhone.register();

class Member extends User{
    id:number;

    constructor(id:number, name:string, email:string, age:number){
        super(name, email, age);
        this.id=id;
    }
    payInvoice(){
        super.payInvoice();
    }
}

let mike:User=new Member(1, 'Mike', 'email', 43);
mike.payInvoice();
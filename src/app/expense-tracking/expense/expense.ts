export class Expense {   

    
	constructor(public id: any, public name: any, public amount: any) {}

    public toString(){
        return `Expense(id: ${this.id}, name: ${this.name}, amount: ${this.amount})`;
    }
    
    public static fromJsonObject(jsonObject: Expense){
        return new Expense(jsonObject.id, jsonObject.name, jsonObject.amount);
    }

   
}

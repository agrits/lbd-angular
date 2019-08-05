export class Expense {
    private id: number;
    private name: string;
    private amount: number;
    

	constructor($id: number, $name: string, $amount: number) {
		this.id = $id;
		this.name = $name;
		this.amount = $amount;
	}
    
    public toString(){
        return `Expense(id: ${this.id}, name: ${this.name}, amount: ${this.amount})`;
    }
}

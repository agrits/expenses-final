export class Expense {

    constructor(public id: number, 
                public description: string, 
                public amountSpent: number,
                public category: string){}
    
    public static fromJson(json: Expense): Expense{
        return new Expense(json.id, json.description, json.amountSpent, json.category)
    }

    public toString(): string{
        return `Id: ${this.id}, 
                Description: ${this.description}, 
                Amount Spent: ${this.amountSpent},
                Category: ${this.category}`
    }
}

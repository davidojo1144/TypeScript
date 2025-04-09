type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}

let employee1: Employee = {
    id: 1,
    name: "Dapo",
    retire: (date: Date)=> {
        console.log(date)
    }
}

let employee2: Employee = {
    id: 2,
    name: "Segun",
    retire: (date: Date) {
        console.log(date);
        
    }
}
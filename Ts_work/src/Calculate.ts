function calculateTax(income: number, taxYear: number): number {
    if (taxYear < 2022) {
        return income * 2
    }
    return income * 3
}

calculateTax(10000,2013)
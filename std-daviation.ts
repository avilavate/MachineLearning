export class StdDaviation {
    constructor(private input: number[]) { }

    private getAverage(inp: number[]): number {
        if (inp.length == 0) return 0;
        return inp.reduce((a, b) => { return a + b }) / inp.length;
    }
    public getStdDaviation(): number {
        let average = this.getAverage(this.input);
        //test todo: remove
        console.log("Avg: " + average);
        let variences = this.input.map((i) => { return (average - i) * (average - i); });
        //test todo: remove
        console.log("Variences: " + variences);
        let res = Math.sqrt(this.getAverage(variences));
        //test todo: remove
        console.log("Std-Daviation: " + res);
        return res;
    }
}
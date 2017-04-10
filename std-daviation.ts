export class StdDaviation {
    constructor(private input: number[]) { }
    average: number;
    stdDaviation: number;

    private getAverage(inp: number[]): number {
        if (inp.length == 0) return 0;
        return inp.reduce((a, b) => { return a + b }) / inp.length;
    }
    public getStdDaviation(): void {
        this.average = this.getAverage(this.input);
        // //test todo: remove
        // console.log("Avg: " + average);
        let variences = this.input.map((i) => { return (this.average - i) * (this.average - i); });
        // //test todo: remove
        // console.log("Variences: " + variences);
        let res = Math.sqrt(this.getAverage(variences));
        //test todo: remove
        console.log("Std-Daviation: " + res);
        this.stdDaviation = res;
    }

    isOutlier(input: number): boolean {
        return (input - this.average) / this.stdDaviation > 2;
    }
}
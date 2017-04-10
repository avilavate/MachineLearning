import { input } from './inputs';
import { StdDaviation } from './std-daviation';

(() => {
    let stdDavitionObj: StdDaviation = new StdDaviation(input);
    stdDavitionObj.getStdDaviation();

    input.forEach((ele) => {
        console.log(ele + " " + stdDavitionObj.isOutlier(ele));
    });
})();
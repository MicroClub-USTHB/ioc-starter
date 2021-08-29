import Challenge from "impact-of-code";

class SideChallenge1 extends Challenge {
    InputGenerator(InputsNum) {
        if (!this._InputGenerated) {
            this._InputGenerated = true;
        }
        return this._Inputs;
    }
    OutputGenerator() {
        if (!this._OutputGenerated) {
            this._OutputGenerated = true;
        }
        return this._Output;
    }
}
export default SideChallenge1;

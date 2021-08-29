import Challenge from "@microclub-usthb/ioc-challenge";

class MainChallenge1 extends Challenge {
    InputGenerator(InputsNum) {
        if (!this._InputGenerated) {
            this._InputGenerated = true;
        }
    }
    OutputGenerator() {
        if (!this._OutputGenerated) {
            this._OutputGenerated = true;
        }
    }
}
export default MainChallenge1;

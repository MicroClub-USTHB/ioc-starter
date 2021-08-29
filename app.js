import { plugChallenges, NoChallenge } from "impact-of-code";
const MainName = "Main Challenge",
    SideName = "Side Challenge",
    DaysNumber = 1;
export default function () {
    let main = [],
        side = [];
    for (let i = 1; i <= DaysNumber; i++) {
        main.push(
            import(`./challenges/Day${i}/${MainName}.js`)
                .then((IoClass) => IoClass.default)
                .catch(() => {
                    throw new NoChallenge(`Main Challenge${i}`);
                })
        );
        side.push(
            import(`./challenges/Day${i}/${SideName}.js`)
                .then((IoClass) => IoClass.default)
                .catch(() => {
                    throw new NoChallenge(`Side Challenge${i}`);
                })
        );
    }
    return Promise.all([Promise.all(main), Promise.all(side)])
        .then(([main, side]) => {
            plugChallenges({ main, side });
            return true;
        })
        .catch((e) => {
            console.error(e);
            return false;
        });
}

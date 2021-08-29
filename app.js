import Challenge, { GetChallenge, loadChallenges } from "@microclub-usthb/ioc-challenge";
loadChallenges({ DayNumber: 1 }).then(() => {
    const challenge = GetChallenge();
    console.log(new challenge());
});

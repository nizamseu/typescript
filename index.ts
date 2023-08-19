type NoobDeveloper = {
  name: string;
};

type JuniorDeveloper = NoobDeveloper & {
  experience: number;
  experties: string;
};
type NextLevelDeveloper = JuniorDeveloper & {
  leaderShipExperience: number;
  level: "mid" | "junior" | "senior";
};

const newDeveloper: NextLevelDeveloper = {
  name: "nizam uddin",
  experience: 10,
  experties: "JS",
  leaderShipExperience: 10,
  level: "mid",
};
console.log(newDeveloper);

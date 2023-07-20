import Select from "react-select";

const TeamOptions = [
  { value: "team1", label: "Team 1" },
  { value: "team2", label: "Team 2" },
  { value: "team3", label: "Team 3" },
  { value: "team4", label: "Team 4" },
  { value: "team5", label: "Team 5" },
];

const styles = {
  multiValue: (styles) => {
    return {
      ...styles,
      backgroundColor: "rgb(224 231 255)",
    };
  },
};

export default function SelectTeam() {
  return (
    <Select
      options={TeamOptions}
      isMulti
      closeMenuOnSelect={false}
      styles={styles}
    />
  );
}

type TeamMember = {
  firstName: string;
  lastName: string;
  role: string;
  profileImage?: string;
};

const staff: TeamMember[] = [
  {
    firstName: "Douglas",
    lastName: "Hardy",
    role: "Veterinarian",
  },
  {
    firstName: "Maria",
    lastName: "Ortez",
    role: "Asssitant Veterinarian",
  },
  {
    firstName: "Dawn",
    lastName: "Martinez",
    role: "Office Manager",
  },
];
export default staff;

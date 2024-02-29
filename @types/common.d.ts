interface SampleEmployee {
  name: string;
  jobDesc: string;
  bookedToday: string[];
  workingHours: string;
  rating: number;
  profilePicture: string;
  status: "Available" | "Booked" | "Working";
}

const users = [
  {
    id: 1,
    username: "student",
    password: "Student@123",
    name: "Aarav Sharma",
    role: "student",
    roleName: "Student",
    accessLevel: 1,
    icon: "🎓",
    description: "Access courses, attendance and academic records."
  },

  {
    id: 2,
    username: "parent",
    password: "Parent@123",
    name: "Neha Sharma",
    role: "parent",
    roleName: "Parent",
    accessLevel: 2,
    icon: "👨‍👩‍👧",
    description: "Monitor student progress, attendance and communication."
  },

  {
    id: 3,
    username: "teacher",
    password: "Teacher@123",
    name: "Rahul Mehta",
    role: "staff",
    roleName: "Staff",
    accessLevel: 3,
    icon: "🧑‍🏫",
    description: "Manage students, classes and academic activities."
  },

  {
    id: 4,
    username: "admin",
    password: "Admin@123",
    name: "Priya Kapoor",
    role: "management",
    roleName: "Management",
    accessLevel: 4,
    icon: "🏢",
    description: "Manage university operations and system settings."
  }
];

export default users;
const employees = [
  {
    id: 1,
    name: "Rahul Sharma",
    email: "rahul@company.com",
    password: "123",
    tasksCounts: {
      active: 2,
      newTask: 1,
      completed: 0,
      failed: 1,
    },
    tasks: [
      {
        taskTitle: "Design Landing Page",
        taskDescription: "Create UI for landing page",
        taskDate: "2026-01-05",
        category: "Design",
        active: true,
        newTask: true,
        completed: true,
        failed: true,
      },
      {
        taskTitle: "Database Cleanup",
        taskDescription: "Remove unused tables",
        taskDate: "2026-01-06",
        category: "Database",
        active: false,
        newTask: true,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Software Cleanup",
        taskDescription: "Remove unused tables",
        taskDate: "2027-01-08",
        category: "Oracle",
        active: false,
        newTask: true,
        completed: true,
        failed: false,
      },
    ],
  },

  {
    id: 2,
    name: "Amit Verma",
    email: "amit@company.com",
    password: "123",
    tasksCounts: {
      active: 1,
      newTask: 2,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        taskTitle: "API Integration",
        taskDescription: "Integrate payment gateway",
        taskDate: "2026-01-05",
        category: "Database",
        active: true,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Create Wireframes",
        taskDescription: "UI wireframes for dashboard",
        taskDate: "2026-01-07",
        category: "Design",
        active: false,
        newTask: true,
        completed: true,
        failed: false,
      },
    ],
  },

  {
    id: 3,
    name: "Neha Singh",
    email: "neha@company.com",
    password: "123",
    tasksCounts: {
      active: 0,
      newTask: 2,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        taskTitle: "Bug Fix",
        taskDescription: "Fix login issue",
        taskDate: "2026-01-06",
        category: "Database",
        active: false,
        newTask: true,
        completed: false,
        failed: true,
      },
      {
        taskTitle: "Design Icons",
        taskDescription: "Create icons for mobile",
        taskDate: "2026-01-08",
        category: "Design",
        active: false,
        newTask: true,
        completed: true,
        failed: false,
      },
    ],
  },

  {
    id: 4,
    name: "Priya Mehta",
    email: "priya@company.com",
    password: "123",
    tasksCounts: {
      active: 2,
      newTask: 0,
      completed: 2,
      failed: 0,
    },
    tasks: [
      {
        taskTitle: "Content Writing",
        taskDescription: "Write blog content",
        taskDate: "2026-01-05",
        category: "Design",
        active: true,
        newTask: false,
        completed: true,
        failed: true,
      },
      {
        taskTitle: "Database Backup",
        taskDescription: "Weekly DB backup",
        taskDate: "2026-01-09",
        category: "Database",
        active: false,
        newTask: true,
        completed: true,
        failed: false,
      },
    ],
  },

  {
    id: 5,
    name: "Vikas Patel",
    email: "vikas@company.com",
    password: "123",
    tasksCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 2,
    },
    tasks: [
      {
        taskTitle: "Test Module",
        taskDescription: "Test user module",
        taskDate: "2026-01-07",
        category: "Database",
        active: true,
        newTask: false,
        completed: true,
        failed: true,
      },
      {
        taskTitle: "UI Improvements",
        taskDescription: "Improve dashboard UI",
        taskDate: "2026-01-10",
        category: "Design",
        active: false,
        newTask: true,
        completed: true,
        failed: true,
      },
    ],
  },
];



const admin = [
  {
    id: 101,
    name: 'Admin@Dharmendra',
    email: "admin@company.com",
    password: "123",
  },
];

export const setlocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem('admin'))
  return {employees,admin}
};

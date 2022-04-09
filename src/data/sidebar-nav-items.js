export default function() {
  return [
    {
      title: "Add Employee",
      to: "/employers",
      htmlBefore: '<i class="material-icons">person_add</i>',
      htmlAfter: ""
    },
    {
      title: "Manage Employee",
      to: "/listemployers",
      htmlBefore: '<i class="material-icons">list</i>',
      htmlAfter: ""
    },

    {
      title: "Add Customer",
      to: "/addcustomer",
      htmlBefore: '<i class="material-icons">person_add</i>',
      htmlAfter: ""
    },

    {
      title: "Manage Customers",
      to: "/manageCustomers",
      htmlBefore: '<i class="material-icons">list</i>',
      htmlAfter: ""
    },

    {
      title: "New Leave Category",
      to: "/leave/addCategory",
      htmlBefore: '<i class="material-icons">add_circle_outline</i>',
      htmlAfter: ""
    },

    {
      title: "Manage Categories",
      to: "/leave/manageCategory",
      htmlBefore: '<i class="material-icons">edit</i>',
      htmlAfter: ""
    },

    {
      title: "New Leave Application",
      to: "/leave/addApplication",
      htmlBefore: '<i class="material-icons">add_circle_outline</i>',
      htmlAfter: ""
    },

    {
      title: "Manage Application",
      to: "/leave/manageApplication",
      htmlBefore: '<i class="material-icons">edit</i>',
      htmlAfter: ""
    },

    {
      title: "Leave report",
      to: "/leave-reports",
      htmlBefore: '<i class="material-icons">summarize</i>',
      htmlAfter: ""
    },
    


    {
      title: "Blog Dashboard",
      to: "/blog-overview",
      htmlBefore: '<i class="material-icons">edit</i>',
      htmlAfter: ""
    },
    {
      title: "Blog Posts",
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: "/blog-posts",
    },
    {
      title: "Add New Post",
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: "/add-new-post",
    },
    {
      title: "Forms & Components",
      htmlBefore: '<i class="material-icons">view_module</i>',
      to: "/components-overview",
    },
    {
      title: "Tables",
      htmlBefore: '<i class="material-icons">table_chart</i>',
      to: "/tables",
    },
    {
      title: "User Profile",
      htmlBefore: '<i class="material-icons">person</i>',
      to: "/user-profile-lite",
    },
    {
      title: "Errors",
      htmlBefore: '<i class="material-icons">error</i>',
      to: "/errors",
    }
  ];
}

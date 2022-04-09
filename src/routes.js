import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import BlogOverview from "./views/BlogOverview";
import UserProfileLite from "./views/UserProfileLite";
import AddNewPost from "./views/AddNewPost";
import Errors from "./views/Errors";
import ComponentsOverview from "./views/ComponentsOverview";
import Tables from "./views/Tables";
import BlogPosts from "./views/BlogPosts";

import Employers from "./views/Employers/Employers";
import listEmployers from "./views/Employers/listEmployers";

import addCustomer from "./views/Customers/addCustomer";
import manageCustomers from "./views/Customers/manageCustomers";

import addCategoryPage from "./views/Leave/Category/addCategory";
import manageCategries from "./views/Leave/Category/manageCategries";


import addApplicationPage from "./views/Leave/Application/addApplication";
import manageApplication from "./views/Leave/Application/manageApplication";

import leaveReport from "./views/Leave/leaveReport";


export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/blog-overview" />
  },

  {
    path: "/employers",
    layout: DefaultLayout,
    component: Employers
  },

  {
    path: "/listemployers",
    layout: DefaultLayout,
    component: listEmployers
  },

  {
    path: "/addCustomer",
    layout: DefaultLayout,
    component: addCustomer
  },

  {
    path: "/manageCustomers",
    layout: DefaultLayout,
    component: manageCustomers
  },

  {
    path: "/leave/addCategory",
    layout: DefaultLayout,
    component: addCategoryPage
  },
  {
    path: "/leave/manageCategory",
    layout: DefaultLayout,
    component: manageCategries
  },



  {
    path: "/leave/addApplication",
    layout: DefaultLayout,
    component: addApplicationPage
  },
  {
    path: "/leave/manageApplication",
    layout: DefaultLayout,
    component: manageApplication
  },

  {
    path: "/leave-reports",
    layout: DefaultLayout,
    component: leaveReport
  },
  



  {
    path: "/blog-overview",
    layout: DefaultLayout,
    component: BlogOverview
  },
  {
    path: "/user-profile-lite",
    layout: DefaultLayout,
    component: UserProfileLite
  },
  {
    path: "/add-new-post",
    layout: DefaultLayout,
    component: AddNewPost
  },
  {
    path: "/errors",
    layout: DefaultLayout,
    component: Errors
  },
  {
    path: "/components-overview",
    layout: DefaultLayout,
    component: ComponentsOverview
  },
  {
    path: "/tables",
    layout: DefaultLayout,
    component: Tables
  },
  {
    path: "/blog-posts",
    layout: DefaultLayout,
    component: BlogPosts
  }
];

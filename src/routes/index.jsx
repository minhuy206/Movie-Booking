import { Route } from "react-router-dom";
import { lazy } from "react";

const routes = [
  {
    path: "admin",
    element: lazy(() => {
      return import("../pages/AdminTemplate");
    }),
    nested: [
      {
        path: "users",
        element: lazy(() => {
          return import("../pages/AdminTemplate/user-management");
        }),
      },
      {
        path: "users/addnew",
        element: lazy(() => {
          return import("../pages/AdminTemplate/user-management/add-user");
        }),
      },
      {
        path: "movies",
        element: lazy(() => {
          return import("../pages/AdminTemplate/movies-management");
        }),
      },
      {
        path: "movies/addnew",
        element: lazy(() => {
          return import("../pages/AdminTemplate/movies-management/add-movie");
        }),
      },
    ],
  },
  {
    path: "login",
    element: lazy(() => {
      return import("../pages/AdminTemplate/login");
    }),
  },
];

const renderRoutes = () => {
  return routes.map((template) => {
    if (template.nested) {
      return (
        <Route
          key={template.path}
          path={template.path}
          element={<template.element />}
        >
          {template.nested.map((page) => {
            return (
              <Route
                key={page.path}
                path={page.path}
                element={<page.element />}
              />
            );
          })}
        </Route>
      );
    }
    return (
      <Route
        key={template.path}
        path={template.path}
        element={<template.element />}
      />
    );
  });
};

export default renderRoutes;

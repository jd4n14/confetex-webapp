import React from "react";
import { useQuery } from "react-query";
import { Route, Navigate, To } from "react-router-dom";

interface PrivateRouteProps {
  path: string;
  element: JSX.Element;
  authError?: "login";
}
export const PrivateRoute = (props: PrivateRouteProps) => {
  const { data, isLoading, isError } = useQuery("/auth/me");

  if (isError) return <Navigate to={props.authError || "/login"} />;

  return <Route path={props.path} element={props.element} />;
};

export const fetchEvents = () => {
  return $.ajax({
    method: "GET",
    url: `api/dashboard`
  });
};

// export const fetchDashboardEvents = () => {
//   return $.ajax({
//     method: "GET",
//     url: `api/dashboard`
//   });
// };

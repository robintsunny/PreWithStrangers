export const fetchEvents = () => {
  return $.ajax({
    method: "GET",
    url: `api/dashboard`
  });
};

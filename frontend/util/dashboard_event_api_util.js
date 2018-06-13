export const fetchJoinedEvents = () => {
  return $.ajax({
    method: "GET",
    url: `api/dashboard`
  });
};

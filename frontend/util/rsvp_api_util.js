export const createRsvp = rsvp => {
  return $.ajax({
    method: "POST",
    url: `api/rsvps`,
    data: { rsvp }
  });
};

export const deleteRsvp = id => {
  return $.ajax({
    method: "DELETE",
    url: `api/rsvps/${id}`
  });
};

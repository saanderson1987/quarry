
export const fetchAnswers = () => (
  $.ajax({
    method: 'GET',
    url: '/api/answers'
  })
);

export const fetchAnswer = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/answers/${id}`
  })
);

export const createAnswer = answer => (
  $.ajax({
    method: 'POST',
    url: 'api/answers',
    data: { answer }
  })
);

export const updateAnswer = answer => (
  $.ajax({
    method: 'PATCH',
    url: `api/answers/${answer.id}`,
    data: { answer }
  })
);

export const deleteAnswer = id => (
  $.ajax({
    url: `api/answers/${id}`,
    method: 'DELETE',
  })
);

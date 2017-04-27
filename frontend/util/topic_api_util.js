
export const fetchTopics = () => (
  $.ajax({
    method: 'GET',
    url: 'api/topics',
  })
);

export const fetchTopic = id => (
  $.ajax({
    method: 'GET',
    url: `api/topics/${id}`
  })
);

export const createTopic = topic => (
  $.ajax({
    url: 'api/topics',
    method: 'POST',
    data: { topic }
  })
);

export const updateTopic = topic => (
  $.ajax({
    url: `api/topics/${topic.id}`,
    method: 'PATCH',
    data: { topic }
  })
);

export const deleteTopic = id => (
  $.ajax({
    url: `api/topics/${id}`,
    method: 'DELETE'
  })
);

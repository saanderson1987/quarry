
export const fetchQuestionTopicLinks = () => (
  $.ajax({
    method: 'GET',
    url: '/api/question_topic_links'
  })
);

export const fetchQuestionTopicLink = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/question_topic_links/${id}`
  })
);

export const createQuestionTopicLink = question_topic_link => (
  $.ajax({
    method: 'POST',
    url: 'api/question_topic_links',
    data: { question_topic_link }
  })
);

export const updateQuestionTopicLink = question_topic_link => (
  $.ajax({
    method: 'PATCH',
    url: `api/question_topic_links/${questionTopicLink.id}`,
    data: { question_topic_link }
  })
);

export const deleteQuestionTopicLink = id => (
  $.ajax({
    url: `api/question_topic_links/${id}`,
    method: 'DELETE',
  })
);

Object.keys(question.topics).map(id => question.topics[id])


feeds() {
  const topics = this.props.topics.map ( topic => {
    return (
      <li key={topic.id}><a>{topic}</a></li>
    )
  })
}


<div className="QuestionIndexFeeds">
  <h3>Feeds</h3>
  <ul>
    <li><a>Top Stories</a></li>
    <li><a>New Questions</a></li>
  </ul>
</div>

const questions = this.props.questions.map( question => {
  const questionTopics = Object.keys(question.topics).map(id => question.topics[id]);
  const topicNames = questionTopics.map (topic => topic.name);

  return <QuestionIndexItem key={question.id} question={question} />;
});


if (this.state.feed !== "all") {
  if (topicNames.includes(this.state.feed)){
    return ...
  }
} else
  return ...

## Component Hierarchy

**AuthFormContainer**
  - AuthForm

**TopicsContainer**
  -Header
  -TopicIndex
  -QuestionIndex

**QuestionsContainer**
  -Header
  -QuestionIndex

**QuestionIndex**
  -QuestionIndexItem
  -QuestionDetail
    + AnswerIndex
    + Question

**AnswerIndexContainer**
  -AnswerIndexItem
  -AnswerDetail
    +CommentIndex
    +Answer

**CommentIndex**
  -CommentIndexItem

**QuestionSearch**
  -AutoSearch
  -AutoSearchResults

**NewQuestion**
  -NewQuestion

**NewAnswer**
  -NewAnswer

**NewComment**
  -NewComment



  ## Routes

  |Path   | Component   |
  |-------|-------------|
  | "/sign-up" | "AuthFormContainer" |
  | "/sign-in" | "AuthFormContainer" |
  | "/topic/:topicId/ | "TopicsContainer" |
  | "/question/:questionId" | "QuestionsContainer" |
  | "/new-Queston" | "NewQuestionContainer" |
  | "/new-Answer" | "NewAnswerContainer" |
  | "/new-Comment" | "NewCommentsContainer"
  | "/new-Tag" | "NewTagsContainer"
  | "/question-search" | "Question-Search" |

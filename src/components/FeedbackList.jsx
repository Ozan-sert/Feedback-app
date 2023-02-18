
function FeedbackList({feedback}) {
    if(!feedback || feedback.lenght == 0){
        return <p>No feedback yet</p>
    }
  return (
    <div>FeedbackList</div>
  )
}

export default FeedbackList
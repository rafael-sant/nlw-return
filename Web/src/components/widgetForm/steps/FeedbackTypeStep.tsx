import { CloseButton } from "../../CloseButton"
import { FeedbackType, feedbackTypes } from "../Index"

interface FeedbackTypeStepProps {
  onFeedbackTypeChanged: (type: FeedbackType) => void
}

export function FeedbackTypeStep({onFeedbackTypeChanged}: FeedbackTypeStepProps) {
  return (
    <>
    <header>
      <span className="text-xl leading-6">Deixe seu feedback  </span>
      <CloseButton></CloseButton>
    </header>

    <div className="flex py-8 bottom-8 gap-2 w-full">
    { Object.entries(feedbackTypes).map(([key, value]) => {
      return (
        <button 
          onClick={()=>onFeedbackTypeChanged(key as FeedbackType)}
          key={key}
          className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 transition-all focus:border-brand-500 focus:outline-none">
          <img  src={value.image.source} alt={value.image.alt} />
          <span>{value.title}</span>
        </button>
      )
    })}  
    </div>
    </>
  )
}
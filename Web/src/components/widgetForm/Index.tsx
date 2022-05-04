import { CloseButton } from "../CloseButton";

import bugImageUrl from '../../assets/bug.svg';
import ideiaImageUrl from '../../assets/idea.svg';
import thoughtImageUrl from '../../assets/thought.svg';
import { useState } from "react";
import { FeedbackTypeStep } from "./steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./steps/FeedbackSuccessStep";

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImageUrl,
      alt: 'Imagem de um inseto'
    }
  },
  IDEA: {
    title: 'Ideia',
      image: {
      source: ideiaImageUrl,
      alt: 'Imagem de uma lâmpada'
    }
  },
  OTHER: {
    title: 'Outro', 
      image: {
      source: thoughtImageUrl,
      alt: 'Imagem de uma lâmpada'
    }
  }
}

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {

  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSend] = useState(false)

  function handleRestarFeedback() {
    setFeedbackSend(false);
    setFeedbackType(null);
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
     
     {feedbackSent ? (
       <FeedbackSuccessStep onFeedbackRestartRequested={handleRestarFeedback}></FeedbackSuccessStep>
     ) : (
       <>
        {!feedbackType ? (
          <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType}></FeedbackTypeStep>
        ) : (
        <FeedbackContentStep onFeedbackSent={()=> setFeedbackSend(true) } onFeedbackRestartRequested={handleRestarFeedback} feedbackType={feedbackType}></FeedbackContentStep>
        )}
       </>
     )}

      <footer className="text-xs text-neutral-400"> 
        Feito com ♥ pela <a href="https://rocketseat.com.br" className="underline underline-offset-2" >Rocketseat</a>

      </footer>
    </div>
  )
}
'use client';

import { useState } from 'react';
import { Translations } from '@/types/Translations';

interface TweetFormProps {
  translations: Translations;
  addTweet: (content: string) => void;
}

const TweetForm: React.FC<TweetFormProps> = ({ translations, addTweet }) => {
  const [newTweet, setNewTweet] = useState<string>("");

  const handleSubmit = () => {
    if (newTweet.trim()) {
      addTweet(newTweet);
      setNewTweet("");
    }
  };

  return (
    <div className='mb-5'>
      <textarea
        placeholder={translations.tweet_placeholder}
        value={newTweet}
        onChange={(e) => setNewTweet(e.target.value)}
        className='w-full h-[100px] p-3 text-black border border-gray-200 rounded-md resize-none'
      />
      <button
        onClick={handleSubmit}
        className='mt-3 py-3 px-5 text-white bg-[#1DA1F2] border-none rounded-md cursor-pointer'
      >
        {translations.post_button}
      </button>
    </div>
  );
};

export default TweetForm;

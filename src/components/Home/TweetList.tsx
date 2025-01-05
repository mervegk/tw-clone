'use client';
import { Translations } from "@/types/translations/Translations";
import { Tweet } from "@/types/Tweet";

interface TweetListProps {
  tweets: Tweet[];
  translations: Translations;
}

const TweetList: React.FC<TweetListProps> = ({ tweets, translations }) => {
  return (
    <div>
      {tweets.length === 0 ? (
        <p>{translations.no_tweets}</p>
      ) : (
        tweets.map((tweet, index) => (
          <div
            key={index}
            className='p-3 border border-[#ddd] rounded-md mb-3'
          >
            <p>{tweet.content}</p>
            <div className="flex justify-between mt-3">
              <span>{tweet.likes} {translations.likes}</span>
              <span>{tweet.retweets} {translations.retweets}</span>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default TweetList;

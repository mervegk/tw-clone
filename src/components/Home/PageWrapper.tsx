'use client'
import React, { useState, useEffect } from 'react'
import { useLanguage } from '@/context/Language'
import { Translations } from '@/types/Translations';
import { fetchTranslations } from '@/app/api/translations';
import TweetForm from './TweetForm';
import TweetList from './TweetList';
import Sidebar from '../Sidebar';
import News from '../News';

type Props = {}

export default function PageWrapper({ }: Props) {
  const { language } = useLanguage()
  const [translations, setTranslations] = useState<Translations | null>(null);
  const [tweets, setTweets] = useState<{ content: string; likes: number; retweets: number }[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadTranslations = async () => {
      setLoading(true);
      try {
        const data = await fetchTranslations(language);
        setTranslations(data);
      } catch (error) {
        console.error('Error fetching translations:', error);
      } finally {
        setLoading(false);
      }
    };

    loadTranslations();
  }, [language]);

  const addTweet = (content: string) => {
    setTweets((prev) => [...prev, { content, likes: 0, retweets: 0 }]);
  };

  return (
    <>
      {loading || !translations ? (
        <p>Loading...</p>
      ) : (<main className='container mx-auto flex items-start justify-between'>
        <Sidebar />
        <div className='border-x'>
          <TweetForm translations={translations} addTweet={addTweet} />
          <TweetList tweets={tweets} translations={translations} />
        </div>
        <News />
      </main>)}
    </>
  )
}
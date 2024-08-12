import { GetStaticPaths, GetStaticProps } from 'next';
import { pagesSlugs, pagesContent, threadId } from '../../data';
import React from 'react';

const REVALIDATE_TIME_SECONDS = 180; // 3 minutes

type ContentPageProps = {
  text: string;
};

const ContentPage: React.FC<ContentPageProps> = ({ text }) => {
  return <div>{text}</div>;
};

export default ContentPage;

export const getStaticProps: GetStaticProps = async (context) => {
  console.log('[getStaticProps 2] threadId:', threadId);
  const slug = context.params?.slug || '';

  const text = pagesContent.find((page) => page.slug === slug)?.text;
  return {
    props: { text: text || 'Slug not found' },
    revalidate: REVALIDATE_TIME_SECONDS,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  console.log('[getStaticPaths 2] threadId:', threadId);
  const paths = pagesSlugs.map((slug) => {
    return { params: { slug } };
  });
  return { paths, fallback: false };
};

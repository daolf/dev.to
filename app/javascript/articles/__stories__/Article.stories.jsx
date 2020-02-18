import { h } from 'preact';
import { storiesOf } from '@storybook/react';
import { withKnobs, object, text, boolean } from '@storybook/addon-knobs/react';
import { Article } from '..';
import { articleDecorator } from './articleDecorator';

import '../../../assets/stylesheets/articles.scss';

const article = {
  id: 62407,
  title: 'Unbranded Home Loan Account',
  path: '/some-post/path',
  type_of: '',
  class_name: 'Article',
  flare_tag: {
    id: 35682,
    name: 'javascript',
    hotness_score: 99,
    points: 23,
    bg_color_hex: '#000000',
    text_color_hex: '#ffffff',
  },
  tag_list: ['javascript', 'ruby', 'go'],
  cached_tag_list_array: [],
  user_id: 23289,
  user: {
    username: 'Emil99',
    name: 'Stella Macejkovic',
    profile_image_90: '/images/10.png',
  },
  published_at_int: 1582037964819,
  published_timestamp: 'Tue, 18 Feb 2020 14:59:24 GMT',
  readable_publish_date: 'February 18',
};

const articleWithOrganization = {
  id: 62407,
  title: 'Unbranded Home Loan Account',
  path: '/some-post/path',
  type_of: '',
  class_name: 'Article',
  flare_tag: {
    id: 35682,
    name: 'javascript',
    hotness_score: 99,
    points: 23,
    bg_color_hex: '#000000',
    text_color_hex: '#ffffff',
  },
  tag_list: ['javascript', 'ruby', 'go'],
  cached_tag_list_array: [],
  user_id: 23289,
  user: {
    username: 'Emil99',
    name: 'Stella Macejkovic',
    profile_image_90: '/images/10.png',
  },
  published_at_int: 1582037964819,
  published_timestamp: 'Tue, 18 Feb 2020 14:59:24 GMT',
  readable_publish_date: 'February 18',
  organization: {
    id: 87120,
    name: 'Web info-mediaries',
    slug: 'bluetooth-Gorgeous-Wooden-Pants',
    profile_image_90: '/images/30.png',
  },
};

const articleWithSnippetResult = {
  id: 62407,
  title: 'Unbranded Home Loan Account',
  path: '/some-post/path',
  type_of: '',
  class_name: 'Article',
  flare_tag: {
    id: 35682,
    name: 'javascript',
    hotness_score: 99,
    points: 23,
    bg_color_hex: '#000000',
    text_color_hex: '#ffffff',
  },
  tag_list: ['javascript', 'ruby', 'go'],
  cached_tag_list_array: [],
  user_id: 23289,
  user: {
    username: 'Emil99',
    name: 'Stella Macejkovic',
    profile_image_90: '/images/10.png',
  },
  published_at_int: 1582037964819,
  published_timestamp: 'Tue, 18 Feb 2020 14:59:24 GMT',
  readable_publish_date: 'February 18',
  _snippetResult: {
    body_text: {
      matchLevel: 'full',
      value:
        'copying Rest withdrawal Handcrafted multi-state Pre-emptive e-markets feed overriding RSS Fantastic Plastic Gloves invoice productize systemic Monaco',
    },
    comments_blob: {
      matchLevel: 'none',
      value:
        'virtual index Global mindshare Malagasy Ariary back up Handmade green Interactions violet bandwidth Chief e-commerce front-end neural',
    },
  },
};

const articleWithReactions = {
  id: 62407,
  title: 'Unbranded Home Loan Account',
  path: '/some-post/path',
  type_of: '',
  class_name: 'Article',
  flare_tag: {
    id: 35682,
    name: 'javascript',
    hotness_score: 99,
    points: 23,
    bg_color_hex: '#000000',
    text_color_hex: '#ffffff',
  },
  tag_list: ['javascript', 'ruby', 'go'],
  cached_tag_list_array: [],
  user_id: 23289,
  user: {
    username: 'Emil99',
    name: 'Stella Macejkovic',
    profile_image_90: '/images/10.png',
  },
  published_at_int: 1582037964819,
  published_timestamp: 'Tue, 18 Feb 2020 14:59:24 GMT',
  readable_publish_date: 'February 18',
  positive_reactions_count: 232,
};

const articleWithComments = {
  id: 62407,
  title: 'Unbranded Home Loan Account',
  path: '/some-post/path',
  type_of: '',
  class_name: 'Article',
  flare_tag: {
    id: 35682,
    name: 'javascript',
    hotness_score: 99,
    points: 23,
    bg_color_hex: '#000000',
    text_color_hex: '#ffffff',
  },
  tag_list: ['javascript', 'ruby', 'go'],
  cached_tag_list_array: [],
  user_id: 23289,
  user: {
    username: 'Emil99',
    name: 'Stella Macejkovic',
    profile_image_90: '/images/10.png',
  },
  published_at_int: 1582037964819,
  published_timestamp: 'Tue, 18 Feb 2020 14:59:24 GMT',
  readable_publish_date: 'February 18',
  positive_reactions_count: 428,
  comments_count: 213,
};

const articleWithReadingTimeGreaterThan1 = {
  id: 62407,
  title: 'Unbranded Home Loan Account',
  path: '/some-post/path',
  type_of: '',
  class_name: 'Article',
  flare_tag: {
    id: 35682,
    name: 'javascript',
    hotness_score: 99,
    points: 23,
    bg_color_hex: '#000000',
    text_color_hex: '#ffffff',
  },
  tag_list: ['javascript', 'ruby', 'go'],
  cached_tag_list_array: [],
  user_id: 23289,
  user: {
    username: 'Emil99',
    name: 'Stella Macejkovic',
    profile_image_90: '/images/10.png',
  },
  published_at_int: 1582037964819,
  published_timestamp: 'Tue, 18 Feb 2020 14:59:24 GMT',
  readable_publish_date: 'February 18',
  reading_time: 8,
};

const videoArticle = {
  id: 49020,
  title: 'monitor recontextualize',
  path: '/some-post/path',
  type_of: '',
  class_name: 'Article',
  flare_tag: {
    id: 58676,
    name: 'javascript',
    hotness_score: 99,
    points: 23,
    bg_color_hex: '#000000',
    text_color_hex: '#ffffff',
  },
  tag_list: ['javascript', 'ruby', 'go'],
  cached_tag_list_array: [],
  user_id: 27683,
  user: {
    username: 'Nova_Luettgen',
    name: 'Henri Gibson',
    profile_image_90: '/images/10.png',
  },
  published_at_int: 1582038662478,
  published_timestamp: 'Tue, 18 Feb 2020 15:11:02 GMT',
  readable_publish_date: 'February 18',
  cloudinary_video_url: '/images/onboarding-background.png',
  video_duration_in_minutes: 10,
};

const podcastArticle = {
  id: 49020,
  title: 'monitor recontextualize',
  path: '/some-post/path',
  type_of: 'podcast_episodes',
  class_name: 'Article',
  flare_tag: {
    id: 58676,
    name: 'javascript',
    hotness_score: 99,
    points: 23,
    bg_color_hex: '#000000',
    text_color_hex: '#ffffff',
  },
  tag_list: ['javascript', 'ruby', 'go'],
  cached_tag_list_array: [],
  user_id: 27683,
  user: {
    username: 'Nova_Luettgen',
    name: 'Henri Gibson',
    profile_image_90: '/images/10.png',
  },
  published_at_int: 1582038662478,
  published_timestamp: 'Tue, 18 Feb 2020 15:11:02 GMT',
  readable_publish_date: 'February 18',
  podcast: {
    slug: 'monitor-recontextualize',
    title: 'Rubber local',
    image_url: '/images/16.png',
  },
};

const podcastEpisodeArticle = {
  id: 49020,
  title: 'monitor recontextualize',
  path: '/some-post/path',
  type_of: '',
  class_name: 'PodcastEpisode',
  flare_tag: {
    id: 58676,
    name: 'javascript',
    hotness_score: 99,
    points: 23,
    bg_color_hex: '#000000',
    text_color_hex: '#ffffff',
  },
  tag_list: ['javascript', 'ruby', 'go'],
  cached_tag_list_array: [],
  user_id: 27683,
  user: {
    username: 'Nova_Luettgen',
    name: 'Henri Gibson',
    profile_image_90: '/images/10.png',
  },
  published_at_int: 1582038662478,
  published_timestamp: 'Tue, 18 Feb 2020 15:11:02 GMT',
  readable_publish_date: 'February 18',
};

const userArticle = {
  id: 24692,
  title: 'Phyllis Armstrong',
  user_id: 7955,
  class_name: 'User',
  user: {
    username: 'phyllis.armstrong',
    name: 'Phyllis Armstrong',
    profile_image_90: '/images/3.png',
  },
};

storiesOf('Components/Articles/Standard', module)
  .addDecorator(withKnobs)
  .addDecorator(articleDecorator)
  .add('Default', () => (
    <Article
      isBookmarked={boolean('isBookmarked', false)}
      article={object('article', article)}
      currentTag={text('currentTag', 'javascript')}
    />
  ))
  .add('With Organization', () => (
    <Article
      isBookmarked={boolean('isBookmarked', false)}
      article={object('article', articleWithOrganization)}
      currentTag={text('currentTag', 'javascript')}
    />
  ))
  .add('Wth Flare Tag', () => (
    <Article
      isBookmarked={boolean('isBookmarked', false)}
      article={object('article', article)}
      currentTag={text('currentTag')}
    />
  ))
  .add('Wth Snippet Result', () => (
    <Article
      isBookmarked={boolean('isBookmarked', false)}
      article={object('article', articleWithSnippetResult)}
      currentTag={text('currentTag')}
    />
  ))
  .add('Wth Reading Time', () => (
    <Article
      isBookmarked={boolean('isBookmarked', false)}
      article={object('article', articleWithReadingTimeGreaterThan1)}
      currentTag={text('currentTag')}
    />
  ))
  .add('Wth Reactions', () => (
    <Article
      isBookmarked={boolean('isBookmarked', false)}
      article={object('article', articleWithReactions)}
      currentTag={text('currentTag')}
    />
  ))
  .add('With Comments', () => (
    <Article
      isBookmarked={boolean('isBookmarked', false)}
      article={object('article', articleWithComments)}
      currentTag={text('currentTag')}
    />
  ))
  .add('Is on Reading List', () => (
    <Article
      isBookmarked={boolean('isBookmarked', true)}
      article={object('article', articleWithComments)}
      currentTag={text('currentTag')}
    />
  ));

storiesOf('Components/Articles/Video', module)
  .addDecorator(withKnobs)
  .addDecorator(articleDecorator)
  .add('Default', () => (
    <Article
      isBookmarked={boolean('isBookmarked', false)}
      article={object('article', videoArticle)}
      currentTag={text('currentTag', 'javascript')}
    />
  ))
  .add('Video Article and Flare Tag', () => (
    <Article
      isBookmarked={boolean('isBookmarked', false)}
      article={object('article', videoArticle)}
      currentTag={text('currentTag')}
    />
  ));

storiesOf('Components/Articles/Podcast', module)
  .addDecorator(withKnobs)
  .addDecorator(articleDecorator)
  .add('Default', () => (
    <Article
      isBookmarked={boolean('isBookmarked', false)}
      article={object('article', podcastArticle)}
      currentTag={text('currentTag')}
    />
  ))
  .add('Podcast Episode', () => (
    <Article
      isBookmarked={boolean('isBookmarked', false)}
      article={object('article', podcastEpisodeArticle)}
      currentTag={text('currentTag')}
    />
  ));

storiesOf('Components/Articles/User', module)
  .addDecorator(withKnobs)
  .addDecorator(articleDecorator)
  .add('Default', () => <Article article={object('article', userArticle)} />);

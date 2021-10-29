import EventItem from '@/components/EventItem';
import Layout from '@/components/layout';
import { API_URL } from '../../config/index';

type JSONValue = {
  id: string;
  name: string;
  slug: string;
  venue: string;
  address: string;
  performers: string;
  date: string;
  time: string;
  description: string;
  image: string;
};

type pageProps = {
  events: JSONValue[];
};

export default function EventsPage({ events }: pageProps) {
  return (
    <Layout>
      <h1>Events</h1>
      {events.length === 0 && <h3>No events at the moment</h3>}

      {events?.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  return {
    props: {
      events,
      revalidate: 1,
    },
  };
}

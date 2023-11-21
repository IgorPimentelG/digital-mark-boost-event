import { EventsTemplate } from '@/core/templates';
import { cookies as Cookies } from 'next/headers';

export const revalidate = 0;

const Events = async () => {
  const cookies = Cookies();
  const accessToken = cookies.get('accessToken');

  const response = await fetch(`${process.env.API_BASE_URL}/event/v1/list`, {
    headers: {
      Authorization: `Bearer ${accessToken?.value}`
    },

  });
  const data = await response.json();

  return (
    <>
      <EventsTemplate
        eventsInProgress={data.inProgress || []}
        eventsExpired={data.expired || []}
      />
    </>
  );
}

export default Events;
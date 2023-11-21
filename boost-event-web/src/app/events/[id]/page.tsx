import { EventDetailsTemplate } from '@/core/templates';
import { cookies as Cookies } from 'next/headers';

type Props = {
  params: {
    id: string;
  }
}

export const revalidate = 0;

const EventDetails = async ({ params }: Props) => {
  const cookies = Cookies();
  const accessToken = cookies.get('accessToken');

  const headers = {
    'Authorization': `Bearer ${accessToken?.value}`
  };

  const eventResponse = await fetch(
    `${process.env.API_BASE_URL}/event/v1/find/${params.id}`,
    { headers }
  );
  const event = await eventResponse.json();

  const emailsResponse = await fetch(
    `${process.env.API_BASE_URL}/email/v1/list?eventId=${params.id}`,
    { headers }
  );
  const emails = await emailsResponse.json();

  return (
    <>
      <EventDetailsTemplate emails={emails || []} event={event} />
    </>
  );
}

export default EventDetails;

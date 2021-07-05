import {
  PublisherAbstract,
  SubjectsEnum,
  TicketUpdatedEventInterface,
} from '@lahcene-dergham-tickets/common';

export class TicketUpdatedPublisher extends PublisherAbstract<
  TicketUpdatedEventInterface
> {
  subject: SubjectsEnum.TicketUpdated = SubjectsEnum.TicketUpdated;
}

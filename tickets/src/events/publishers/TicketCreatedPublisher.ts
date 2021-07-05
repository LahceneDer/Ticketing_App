import {
  PublisherAbstract,
  SubjectsEnum,
  TicketCreatedEventInterface,
} from '@lahcene-dergham-tickets/common';

export class TicketCreatedPublisher extends PublisherAbstract<
  TicketCreatedEventInterface
> {
  subject: SubjectsEnum.TicketCreated = SubjectsEnum.TicketCreated;
}

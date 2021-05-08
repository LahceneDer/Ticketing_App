import {
  PublisherAbstract,
  SubjectsEnum,
  TicketUpdatedEventInterface,
} from '@ldtickets/common';

export class TicketUpdatedPublisher extends PublisherAbstract<
  TicketUpdatedEventInterface
> {
  subject: SubjectsEnum.TicketUpdated = SubjectsEnum.TicketUpdated;
}

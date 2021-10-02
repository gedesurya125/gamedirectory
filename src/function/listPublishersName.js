export const listPublishersName = (publishers) => {
  return publishers.map(publisher => publisher.name).join(', ');
}
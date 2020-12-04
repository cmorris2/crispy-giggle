/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getNote = /* GraphQL */ `
  query GetNote($id: ID!) {
    getNote(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listNotes = /* GraphQL */ `
  query ListNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSpotlightVideo = /* GraphQL */ `
  query GetSpotlightVideo($id: ID!) {
    getSpotlightVideo(id: $id) {
      id
      link
      name
      videoId
      beginAt
      isFinishedPlaying
      createdAt
      updatedAt
    }
  }
`;
export const listSpotlightVideos = /* GraphQL */ `
  query ListSpotlightVideos(
    $filter: ModelspotlightVideoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSpotlightVideos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        link
        name
        videoId
        beginAt
        isFinishedPlaying
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createNote = /* GraphQL */ `
  mutation CreateNote(
    $input: CreateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    createNote(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateNote = /* GraphQL */ `
  mutation UpdateNote(
    $input: UpdateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    updateNote(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteNote = /* GraphQL */ `
  mutation DeleteNote(
    $input: DeleteNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    deleteNote(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const createSpotlightVideo = /* GraphQL */ `
  mutation CreateSpotlightVideo(
    $input: CreateSpotlightVideoInput!
    $condition: ModelspotlightVideoConditionInput
  ) {
    createSpotlightVideo(input: $input, condition: $condition) {
      id
      link
      name
      videoId
      beginAt
      isFinishedPlaying
      duration
      createdAt
      updatedAt
    }
  }
`;
export const updateSpotlightVideo = /* GraphQL */ `
  mutation UpdateSpotlightVideo(
    $input: UpdateSpotlightVideoInput!
    $condition: ModelspotlightVideoConditionInput
  ) {
    updateSpotlightVideo(input: $input, condition: $condition) {
      id
      link
      name
      videoId
      beginAt
      isFinishedPlaying
      duration
      createdAt
      updatedAt
    }
  }
`;
export const deleteSpotlightVideo = /* GraphQL */ `
  mutation DeleteSpotlightVideo(
    $input: DeleteSpotlightVideoInput!
    $condition: ModelspotlightVideoConditionInput
  ) {
    deleteSpotlightVideo(input: $input, condition: $condition) {
      id
      link
      name
      videoId
      beginAt
      isFinishedPlaying
      duration
      createdAt
      updatedAt
    }
  }
`;

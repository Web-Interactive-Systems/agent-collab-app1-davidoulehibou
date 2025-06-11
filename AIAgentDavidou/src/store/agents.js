import { atom } from 'nanostores';

export const $agents = atom([
    
{
    id: 1,
    emoji: '😀',
    title: 'Scifi writer',
    role: 'your are a wonderful writer',
    response_format: 'text',
    temperature: 0.1,
    desired_response: 'a draft of scifi writing',
  }
]);
